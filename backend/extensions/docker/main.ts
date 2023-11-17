import { WebSocket } from "ws"
import { v4 } from "uuid";
import { green, red } from "chalk";
import Dockerode from "dockerode";

enum ExtensionEvents {
    GET_CONTAINER_LIST = "GET_CONTAINER_LIST",
    CONTAINER_LIST = "CONTAINER_LIST",
    NEW_CONTAINER = "NEW_CONTAINER",
    CONTAINER_UPDATE = "CONTAINER_UPDATE",
    REMOVE_CONTAINER = "REMOVE_CONTAINER",
    NETWORK_LIST = "NETWORK_LIST",
}

type ExtensionMessage = {
    data: any,
    event: ExtensionEvents
}

enum ExtensionContainerState {
    RUNNING = "Running",
    CREATED = "Created",
    RESTARTING = "Restarting",
    EXITED = "Exited",
    PAUSED = "Paused",
    DEAD = "Dead"
}

type ExtensionPort = {
    publicPort: number;
    privatePort: number;
}

type ExtensionMount = {
    source: string;
    destination: string;
}

type ExtensionContainer = {
    id: string;
    name: string;
    image: string;
    state: ExtensionContainerState;
    status: string;
    ports: ExtensionPort[];
    mounts: ExtensionMount[];
}

type ExtensionNetwork = {
    id: string;
    name: string;
    containers: string[];
}

const docker = new Dockerode({ socketPath: "/var/run/docker.sock" })

let currentContainers: { [key: string]: ExtensionContainer } = {};

const parsedArgs = require("minimist")(
    process.argv.slice(2)
)

const nl_port = parsedArgs['nl-port'];
const nl_extension_id = parsedArgs['nl-extension-id'];
const nl_token = parsedArgs['nl-token'];

const client = new WebSocket(
    `ws://localhost:${nl_port}?extensionId=${nl_extension_id}`
)

client.onerror = () => log("Connection error!", "ERROR");
client.onopen = async () => {
    log("Connected")
    startContainerListener();
    startNetworkListener();
};
client.onclose = () => process.exit();

client.onmessage = async (e) => {
    const { data, event } = JSON.parse(e.data.toString()) as ExtensionMessage;
    switch (event) {
        case ExtensionEvents.GET_CONTAINER_LIST:
            sendMessageToApp(ExtensionEvents.CONTAINER_LIST, Object.values(currentContainers))
            break;
        default:
            break;
    }
};

function log(message: string, type = "INFO") {
    const logLine = `[${nl_extension_id}]: ${type === "INFO" ? green(type) : red(type)} ${message}`;
    console[type === "INFO" ? "log" : "error"](logLine);
}

function isContainerTracked(id: string): boolean {
    return currentContainers[id] !== undefined
}

function trackContainer(container: Dockerode.ContainerInfo): ExtensionContainer | undefined {
    if (isContainerTracked(container.Id))
        return undefined;
    return currentContainers[container.Id] = {
        id: container.Id,
        image: container.Image,
        state: container.State as ExtensionContainerState,
        name: container.Names[0].replace("/", ""),
        status: container.Status.substring(container.Status.indexOf(")") + 1).trim(),
        ports: container.Ports.map(p => ({ publicPort: p.PublicPort, privatePort: p.PrivatePort })),
        mounts: container.Mounts.map(m => ({ destination: m.Destination, source: m.Source }))
    };
}

function startContainerListener() {
    setInterval(async () => {
        const containers = await docker.listContainers({ all: true });
        containers.forEach(container => {
            const newContainer = trackContainer(container);
            if (newContainer) {
                sendMessageToApp(ExtensionEvents.NEW_CONTAINER, newContainer)
                return;
            }
            let existingContainer = currentContainers[container.Id]
            if (!containerHasChanges(container, existingContainer))
                return;

            sendMessageToApp(ExtensionEvents.CONTAINER_UPDATE, updateContainer(container, existingContainer))
        })
        Object.keys(currentContainers).forEach((key) => {
            const index = containers.findIndex(c => c.Id === key);
            if (index === -1) {
                delete currentContainers[key];
                sendMessageToApp(ExtensionEvents.REMOVE_CONTAINER, key);
            }
        })
    }, 1000)
}

function startNetworkListener() {
    setInterval(async () => {
        const networks = await docker.listNetworks();
        let result: ExtensionNetwork[] = [];
        const networkInspection = await Promise.all(networks.map(async (n) => {
            return await docker.getNetwork(n.Id).inspect();
        }))
        result = networkInspection.filter(ni => Object.keys(ni.Containers).length > 0).map(ni => ({
            id: ni.Id,
            name: ni.Name,
            containers: Object.keys(ni.Containers)
        }))
        sendMessageToApp(ExtensionEvents.NETWORK_LIST, result);
    }, 1000)
}

function containerHasChanges(source: Dockerode.ContainerInfo, existing: ExtensionContainer) {
    if (source.State !== existing.state)
        return true;
    if (source.Status.substring(source.Status.indexOf(")") + 1).trim() !== existing.status)
        return true;
    return false;
}

function updateContainer(source: Dockerode.ContainerInfo, existing: ExtensionContainer) {
    existing.state = source.State as ExtensionContainerState;
    existing.status = source.Status.substring(source.Status.indexOf(")") + 1).trim();
    return existing;
}

function sendMessageToApp(event: ExtensionEvents, data: any) {
    client.send(
        JSON.stringify({
            id: v4(),
            method: "app.broadcast",
            accessToken: nl_token,
            data: {
                event: event, data: data
            },
        })
    );
}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const uuid_1 = require("uuid");
const chalk_1 = require("chalk");
const dockerode_1 = __importDefault(require("dockerode"));
var ExtensionEvents;
(function (ExtensionEvents) {
    ExtensionEvents["GET_CONTAINER_LIST"] = "GET_CONTAINER_LIST";
    ExtensionEvents["CONTAINER_LIST"] = "CONTAINER_LIST";
    ExtensionEvents["NEW_CONTAINER"] = "NEW_CONTAINER";
    ExtensionEvents["CONTAINER_UPDATE"] = "CONTAINER_UPDATE";
    ExtensionEvents["REMOVE_CONTAINER"] = "REMOVE_CONTAINER";
    ExtensionEvents["NETWORK_LIST"] = "NETWORK_LIST";
})(ExtensionEvents || (ExtensionEvents = {}));
var ExtensionContainerState;
(function (ExtensionContainerState) {
    ExtensionContainerState["RUNNING"] = "Running";
    ExtensionContainerState["CREATED"] = "Created";
    ExtensionContainerState["RESTARTING"] = "Restarting";
    ExtensionContainerState["EXITED"] = "Exited";
    ExtensionContainerState["PAUSED"] = "Paused";
    ExtensionContainerState["DEAD"] = "Dead";
})(ExtensionContainerState || (ExtensionContainerState = {}));
const docker = new dockerode_1.default({ socketPath: "/var/run/docker.sock" });
let currentContainers = {};
const parsedArgs = require("minimist")(process.argv.slice(2));
const nl_port = parsedArgs['nl-port'];
const nl_extension_id = parsedArgs['nl-extension-id'];
const nl_token = parsedArgs['nl-token'];
const client = new ws_1.WebSocket(`ws://localhost:${nl_port}?extensionId=${nl_extension_id}`);
client.onerror = () => log("Connection error!", "ERROR");
client.onopen = () => __awaiter(void 0, void 0, void 0, function* () {
    log("Connected");
    startContainerListener();
    startNetworkListener();
});
client.onclose = () => process.exit();
client.onmessage = (e) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, event } = JSON.parse(e.data.toString());
    switch (event) {
        case ExtensionEvents.GET_CONTAINER_LIST:
            sendMessageToApp(ExtensionEvents.CONTAINER_LIST, Object.values(currentContainers));
            break;
        default:
            break;
    }
});
function log(message, type = "INFO") {
    const logLine = `[${nl_extension_id}]: ${type === "INFO" ? (0, chalk_1.green)(type) : (0, chalk_1.red)(type)} ${message}`;
    console[type === "INFO" ? "log" : "error"](logLine);
}
function isContainerTracked(id) {
    return currentContainers[id] !== undefined;
}
function trackContainer(container) {
    if (isContainerTracked(container.Id))
        return undefined;
    return currentContainers[container.Id] = {
        id: container.Id,
        image: container.Image,
        state: container.State,
        name: container.Names[0].replace("/", ""),
        status: container.Status.substring(container.Status.indexOf(")") + 1).trim(),
        ports: container.Ports.map(p => ({ publicPort: p.PublicPort, privatePort: p.PrivatePort })),
        mounts: container.Mounts.map(m => ({ destination: m.Destination, source: m.Source }))
    };
}
function startContainerListener() {
    setInterval(() => __awaiter(this, void 0, void 0, function* () {
        const containers = yield docker.listContainers({ all: true });
        containers.forEach(container => {
            const newContainer = trackContainer(container);
            if (newContainer) {
                sendMessageToApp(ExtensionEvents.NEW_CONTAINER, newContainer);
                return;
            }
            let existingContainer = currentContainers[container.Id];
            if (!containerHasChanges(container, existingContainer))
                return;
            sendMessageToApp(ExtensionEvents.CONTAINER_UPDATE, updateContainer(container, existingContainer));
        });
        Object.keys(currentContainers).forEach((key) => {
            const index = containers.findIndex(c => c.Id === key);
            if (index === -1) {
                delete currentContainers[key];
                sendMessageToApp(ExtensionEvents.REMOVE_CONTAINER, key);
            }
        });
    }), 1000);
}
function startNetworkListener() {
    setInterval(() => __awaiter(this, void 0, void 0, function* () {
        const networks = yield docker.listNetworks();
        let result = [];
        const networkInspection = yield Promise.all(networks.map((n) => __awaiter(this, void 0, void 0, function* () {
            return yield docker.getNetwork(n.Id).inspect();
        })));
        result = networkInspection.filter(ni => Object.keys(ni.Containers).length > 0).map(ni => ({
            id: ni.Id,
            name: ni.Name,
            containers: Object.keys(ni.Containers)
        }));
        sendMessageToApp(ExtensionEvents.NETWORK_LIST, result);
    }), 1000);
}
function containerHasChanges(source, existing) {
    if (source.State !== existing.state)
        return true;
    if (source.Status.substring(source.Status.indexOf(")") + 1).trim() !== existing.status)
        return true;
    return false;
}
function updateContainer(source, existing) {
    existing.state = source.State;
    existing.status = source.Status.substring(source.Status.indexOf(")") + 1).trim();
    return existing;
}
function sendMessageToApp(event, data) {
    client.send(JSON.stringify({
        id: (0, uuid_1.v4)(),
        method: "app.broadcast",
        accessToken: nl_token,
        data: {
            event: event, data: data
        },
    }));
}

import { Tile } from "./Tile";

export interface Container extends Tile {
    id: string;
    name: string;
    state: ContainerState;
    status:string;
    image: string;
    ports: Port[];
    mounts: Mount[];
}

export type Port = {
    privatePort : number;
    publicPort: number;
}

export type Mount = {
    source: string;
    destination:string;
}

export enum ContainerState {
    RUNNING = "running",
    CREATED = "created",
    RESTARTING = "restarting",
    EXITED = "exited",
    PAUSED = "paused",
    DEAD = "dead"
}
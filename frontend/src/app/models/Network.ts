export type Network = {
  name: string;
  containers: { [key: string]: { ROW: number; COL: number } };
}

export type NetworkConnection = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  name: string;
  isHovered: boolean;
}
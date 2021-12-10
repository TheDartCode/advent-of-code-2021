export type LineDescriptor = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type GridPoint = '.' | number;

export type GridRow = GridPoint[];

export type Grid = GridRow[];

export enum LineMode {
  Horizontal,
  Vertical,
  Diagonal,
}

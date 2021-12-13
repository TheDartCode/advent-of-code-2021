export type Dot = {
  x: number;
  y: number;
};

export enum FoldDirection {
  x = 'x',
  y = 'y',
}

export type Fold = {
  direction: FoldDirection;
  position: number;
};

export type Point = '.' | '#';

export type Row = Point[];

export type Paper = Row[];

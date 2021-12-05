export type Cell = {
  value: number;
  marked: boolean;
};

export type Row = Cell[];

export type Board = Row[];

export type BingoGame = {
  numbers: number[];
  boards: Board[];
};

export type GameStat = {
  board: Board;
  lastDrawnNumber: number;
};

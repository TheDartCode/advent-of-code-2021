import { BingoGame, Board, GameStat, Row } from "./types";

const BOARD_SIZE = 5;

const parseBoardRow = (row: string): Row =>
  row
    .split(/\s+/)
    .filter((l) => l.length > 0)
    .map((i) => ({ value: parseInt(i), marked: false }));

export const parseInput = (input: string): BingoGame => {
  const lines = input.split("\n").filter((l) => l.length > 0);
  const numbers = lines[0].split(",").map((i) => parseInt(i));
  let boards: Board[] = [];
  for (let i = 1; i < lines.length; i += 5) {
    boards.push([
      parseBoardRow(lines[i]),
      parseBoardRow(lines[i + 1]),
      parseBoardRow(lines[i + 2]),
      parseBoardRow(lines[i + 3]),
      parseBoardRow(lines[i + 4]),
    ]);
  }

  return {
    numbers,
    boards,
  };
};

export const playGame = (
  game: BingoGame,
  stopOnFirstWinningBoard: boolean
): GameStat => {
  const winningBoardStats: GameStat[] = [];

  while (game.numbers.length > 0) {
    const lastDrawnNumber = game.numbers.shift();

    game.boards.forEach((board) => {
      board.forEach((row) => {
        row.forEach((cell) => {
          cell.marked = cell.marked || cell.value === lastDrawnNumber;
        });
      });
    });

    for (let board of game.boards) {
      for (let i = 0; i < BOARD_SIZE; i++) {
        if (board.map((row) => row[i]).every((cell) => cell.marked)) {
          if (!winningBoardStats.some((stat) => stat.board === board)) {
            winningBoardStats.push({ board, lastDrawnNumber });

            if (stopOnFirstWinningBoard) {
              return { board, lastDrawnNumber };
            }
          }
        }
      }

      for (let row of board) {
        if (row.every((cell) => cell.marked)) {
          if (!winningBoardStats.some((stat) => stat.board === board)) {
            winningBoardStats.push({ board, lastDrawnNumber });

            if (stopOnFirstWinningBoard) {
              return { board, lastDrawnNumber };
            }
          }
        }
      }
    }

    // If all boards have won once, don't draw any more numbers
    if (winningBoardStats.length === game.boards.length) {
      break;
    }
  }
  return winningBoardStats[winningBoardStats.length - 1];
};

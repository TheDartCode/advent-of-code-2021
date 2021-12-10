import { parseInput, playGame } from './helpers';

const moduleB = (input: string) => {
  const game = parseInput(input);
  const { board, lastDrawnNumber } = playGame(game, false);
  return (
    board
      .map((row) =>
        row.reduce(
          (rowTotal, cell) => (cell.marked ? rowTotal : rowTotal + cell.value),
          0
        )
      )
      .reduce((boardTotal, rowTotal) => boardTotal + rowTotal, 0) *
    lastDrawnNumber
  );
};

export default moduleB;

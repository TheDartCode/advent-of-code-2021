import { drawDiagram, parseInput } from './helpers';

const moduleB = (input: string) => {
  const lines = parseInput(input);
  const grid = drawDiagram(lines, true);
  return grid.reduce(
    (total, row) =>
      total + row.filter((p) => typeof p === 'number' && p >= 2).length,
    0
  );
};

export default moduleB;

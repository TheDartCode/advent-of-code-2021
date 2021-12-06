import { drawDiagram, parseInput } from "./helpers";

const moduleA = (input: string) => {
  const lines = parseInput(input);
  const grid = drawDiagram(lines, false);
  return grid.reduce(
    (total, row) =>
      total + row.filter((p) => typeof p === "number" && p >= 2).length,
    0
  );
};

export default moduleA;

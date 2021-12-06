import { Grid, GridRow, LineDescriptor, LineMode } from "./types";

export const parseLine = (line: string): LineDescriptor => {
  const [start, end] = line.split(" -> ");
  const [x1, y1] = start.split(",").map((p) => parseInt(p));
  const [x2, y2] = end.split(",").map((p) => parseInt(p));
  return {
    x1,
    x2,
    y1,
    y2,
  };
};

export const parseInput = (input: string): LineDescriptor[] => {
  const lines = input
    .split("\n")
    .filter((l) => l.length > 0)
    .map((l) => parseLine(l));
  return lines;
};

const getGridSize = (lines: LineDescriptor[]): number => {
  const xValues = lines
    .map((l) => l.x1)
    .concat(lines.map((l) => l.x2))
    .sort((a, b) => a - b);

  return xValues.pop() + 1;
};

export const drawDiagram = (
  lines: LineDescriptor[],
  considerDiagonals: boolean
): Grid => {
  const gridSize = getGridSize(lines);

  const grid: GridRow[] = new Array(gridSize)
    .fill(null)
    .map((_) => new Array(gridSize).fill("."));

  lines.forEach(({ x1, y1, x2, y2 }) => {
    const isXIncrementing = x1 < x2;
    const isYIncrementing = y1 < y2;

    let mode: LineMode = LineMode.Diagonal;

    if (x1 === x2) {
      mode = LineMode.Vertical;
    } else if (y1 === y2) {
      mode = LineMode.Horizontal;
    }

    if (!considerDiagonals && x1 !== x2 && y1 !== y2) {
      return;
    }

    if (mode === LineMode.Horizontal) {
      for (
        let x = x1;
        isXIncrementing ? x <= x2 : x >= x2;
        isXIncrementing ? x++ : x--
      ) {
        grid[y1][x] = grid[y1][x] === "." ? 1 : (grid[y1][x] as number) + 1;
      }
    } else if (mode === LineMode.Vertical) {
      for (
        let y = y1;
        isYIncrementing ? y <= y2 : y >= y2;
        isYIncrementing ? y++ : y--
      ) {
        grid[y][x1] = grid[y][x1] === "." ? 1 : (grid[y][x1] as number) + 1;
      }
    } else {
      for (let x = x1; isXIncrementing ? x <= x2 : x >= x2; ) {
        for (let y = y1; isYIncrementing ? y <= y2 : y >= y2; ) {
          grid[y][x] = grid[y][x] === "." ? 1 : (grid[y][x] as number) + 1;
          isXIncrementing ? x++ : x--;
          isYIncrementing ? y++ : y--;
        }
      }
    }
  });

  return grid;
};

import { findLowPoints, parseInput } from './helpers';
import { Point } from './types';

const walkBasin = (data: number[][], startPoint: Point): Point[] => {
  const frontier = [startPoint];
  const result: Point[] = [];
  const visited = [];

  while (frontier.length > 0) {
    const { x, y } = frontier.shift();
    if (visited.find((q) => q.x === x && q.y === y)) {
      continue;
    }

    visited.push({ x, y });

    if (data[y][x] === 9) {
      continue;
    }

    result.push({ x, y, depth: data[y][x] });

    if (x > 0) {
      frontier.push({ x: x - 1, y });
    }
    if (x < data[0].length - 1) {
      frontier.push({ x: x + 1, y });
    }
    if (y > 0) {
      frontier.push({ x, y: y - 1 });
    }
    if (y < data.length - 1) {
      frontier.push({ x, y: y + 1 });
    }
  }

  return result;
};

const moduleB = (input: string) => {
  const data = parseInput(input);

  const lowPoints = findLowPoints(data);
  const basins = [];

  lowPoints.forEach((p) => {
    basins.push(walkBasin(data, p));
  });

  return basins
    .sort((b1, b2) => b2.length - b1.length)
    .slice(0, 3)
    .reduce((product, basin) => product * basin.length, 1);
};

export default moduleB;

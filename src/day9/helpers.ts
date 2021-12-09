import { Point } from "./types";

export const parseInput = (input: string): number[][] => {
  return input
    .split("\n")
    .filter((l) => l.length > 0)
    .map((l) => l.split("").map((c) => parseInt(c)));
};

export const findLowPoints = (data: number[][]): Point[] => {
  const lowPoints: Point[] = [];

  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
      const neighbors = [
        x > 0 && data[y][x - 1],
        x < data[y].length - 1 && data[y][x + 1],
        y > 0 && data[y - 1][x],
        y < data.length - 1 && data[y + 1][x],
      ].filter((p) => typeof p === "number");

      if (neighbors.every((n) => n > data[y][x])) {
        lowPoints.push({ x, y, depth: data[y][x] });
      }
    }
  }

  return lowPoints;
};

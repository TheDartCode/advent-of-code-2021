import { Graph, Node } from './types';

export const parseInput = (input: string, expand = false): number[][] => {
  const lines = input
    .split('\n')
    .filter((l) => l.length > 0)
    .map((l) => l.split(''));

  const result: number[][] = [];

  const maxY = expand ? lines.length * 5 : lines.length;
  const maxX = expand ? lines[0].length * 5 : lines[0].length;

  for (let y = 0; y < maxY; y++) {
    result.push([]);
    for (let x = 0; x < maxX; x++) {
      const referenceY = y % lines.length;
      const referenceX = x % lines[0].length;

      const weightAddition =
        Math.floor(y / lines.length) + Math.floor(x / lines[0].length);

      let weight = parseInt(lines[referenceY][referenceX]) + weightAddition;
      if (weight > 9) {
        weight -= 9;
      }

      result[y].push(weight);
    }
  }
  return result;
};

export const createGraph = (lines: number[][]): Graph => {
  const nodes: Node[] = [];

  const maxY = lines.length;
  const maxX = lines[0].length;

  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      const weight = lines[y][x];
      nodes.push({
        weight,
        distance: Infinity,
        neighbors: [],
      });
    }
  }

  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      nodes[y * maxX + x].neighbors = [
        x > 0 ? nodes[y * maxX + x - 1] : null,
        x < maxX - 1 ? nodes[y * maxX + x + 1] : null,
        y > 0 ? nodes[(y - 1) * maxX + x] : null,
        y < maxY - 1 ? nodes[(y + 1) * maxX + x] : null,
      ].filter((n) => n !== null);
    }
  }

  return nodes;
};

export const getShortestDistanceToDestination = (graph: Graph): number => {
  const start = graph[0];
  const destination = graph[graph.length - 1];

  start.distance = 0;

  const openSet = [start];

  while (openSet.length > 0) {
    const node = openSet.shift();

    if (node === destination) {
      break;
    }

    node.neighbors.forEach((neighbor) => {
      const newDistance = node.distance + neighbor.weight;
      if (newDistance < neighbor.distance) {
        neighbor.distance = newDistance;
        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    });
    openSet.sort((v1, v2) => v1.distance - v2.distance);
  }

  return destination.distance;
};

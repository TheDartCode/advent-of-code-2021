import { sumArray } from '../shared/helpers';
import { findLowPoints, parseInput } from './helpers';

const moduleA = (input: string) => {
  const data = parseInput(input);

  const lowPoints = findLowPoints(data);

  return sumArray(lowPoints.map((p) => p.depth + 1));
};

export default moduleA;

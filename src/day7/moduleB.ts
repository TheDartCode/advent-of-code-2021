import { findFuelForOptimalPosition } from './helpers';

export const getFuelForPositionChange = (
  startingPosition: number,
  endPosition: number
): number => {
  const steps = Math.abs(endPosition - startingPosition);
  return ((1 + steps) * steps) / 2;
};

const moduleB = (input: string) => {
  const positions = input.split(',').map((n) => parseInt(n));
  return findFuelForOptimalPosition(positions, getFuelForPositionChange);
};

export default moduleB;

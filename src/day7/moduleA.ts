import { findFuelForOptimalPosition } from "./helpers";

export const getFuelForPositionChange = (
  startingPosition: number,
  endPosition: number
): number => {
  return Math.abs(endPosition - startingPosition);
};

const moduleA = (input: string) => {
  const positions = input.split(",").map((n) => parseInt(n));
  return findFuelForOptimalPosition(positions, getFuelForPositionChange);
};

export default moduleA;

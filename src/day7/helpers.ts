import { maxValue, minValue, sortAsc, sumArray } from '../shared/helpers';

export const findFuelForOptimalPosition = (
  positions: number[],
  getFuelForPositionChange: (p1: number, p2: number) => number
): number => {
  const calculateFuel = (
    positions: number[],
    targetPosition: number
  ): number => {
    return sumArray(
      positions.map((position) =>
        getFuelForPositionChange(position, targetPosition)
      )
    );
  };

  const median = sumArray(positions) / positions.length;
  const maxPosition = maxValue(positions);
  const minPosition = minValue(positions);
  const targetCandidates = new Array(maxPosition - minPosition + 1)
    .fill(0)
    .map((_, index) => index + minPosition)
    .sort(
      (a, b) =>
        getFuelForPositionChange(a, median) -
        getFuelForPositionChange(b, median)
    );
  const fuels = targetCandidates.map((targetPosition) =>
    calculateFuel(positions, targetPosition)
  );
  sortAsc(fuels);
  return fuels[0];
};

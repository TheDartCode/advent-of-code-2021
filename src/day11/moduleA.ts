import { day, parseInput } from './helpers';

const TOTAL_DAYS = 100;

const moduleA = (input: string) => {
  const octopuses = parseInput(input);
  let flashes = 0;
  for (let i = 0; i < TOTAL_DAYS; i++) {
    flashes += day(octopuses);
  }
  return flashes;
};

export default moduleA;

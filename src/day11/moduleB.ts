import { day, parseInput } from './helpers';

const moduleA = (input: string) => {
  const octopuses = parseInput(input);

  const octopusCount = octopuses.length * octopuses[0].length;

  let step = 1;

  while (true) {
    const flashes = day(octopuses);
    if (flashes === octopusCount) {
      break;
    }

    step++;
  }

  return step;
};

export default moduleA;

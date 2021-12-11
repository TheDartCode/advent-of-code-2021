export const parseInput = (input: string): number[][] => {
  return input
    .split('\n')
    .filter((l) => l.length > 0)
    .map((l) => l.split('').map((i) => parseInt(i)));
};

export const flash = (octopuses: number[][], x: number, y: number): void => {
  if (octopuses[y][x] !== 10) {
    return;
  }

  if (x > 0) {
    octopuses[y][x - 1]++;
    flash(octopuses, x - 1, y);
  }
  if (x < octopuses[0].length - 1) {
    octopuses[y][x + 1]++;
    flash(octopuses, x + 1, y);
  }
  if (y > 0) {
    octopuses[y - 1][x]++;
    flash(octopuses, x, y - 1);
  }
  if (y < octopuses.length - 1) {
    octopuses[y + 1][x]++;
    flash(octopuses, x, y + 1);
  }
  if (x > 0 && y > 0) {
    octopuses[y - 1][x - 1]++;
    flash(octopuses, x - 1, y - 1);
  }
  if (x < octopuses[0].length - 1 && y < octopuses.length - 1) {
    octopuses[y + 1][x + 1]++;
    flash(octopuses, x + 1, y + 1);
  }
  if (x > 0 && y < octopuses.length - 1) {
    octopuses[y + 1][x - 1]++;
    flash(octopuses, x - 1, y + 1);
  }
  if (x < octopuses[0].length - 1 && y > 0) {
    octopuses[y - 1][x + 1]++;
    flash(octopuses, x + 1, y - 1);
  }
};

export const day = (octopuses: number[][]): number => {
  let flashes = 0;
  for (let y = 0; y < octopuses.length; y++) {
    for (let x = 0; x < octopuses[y].length; x++) {
      octopuses[y][x]++;
      if (octopuses[y][x] > 9) {
        flash(octopuses, x, y);
      }
    }
  }

  for (let y = 0; y < octopuses.length; y++) {
    for (let x = 0; x < octopuses[y].length; x++) {
      if (octopuses[y][x] > 9) {
        flashes++;
        octopuses[y][x] = 0;
      }
    }
  }

  return flashes;
};

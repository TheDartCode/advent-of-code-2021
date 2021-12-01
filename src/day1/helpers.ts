export const findIncrements = (input: number[]): number => {
  let previous = input[0];
  let incs = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] > previous) {
      incs++;
    }
    previous = input[i];
  }

  return incs;
};

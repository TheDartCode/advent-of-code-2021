export const parseInput = (input: string) => {
  return input
    .split("\n")
    .filter((l) => l.length > 0)
    .map((s) => s.split(""));
};

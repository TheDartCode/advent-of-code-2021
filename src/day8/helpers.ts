import { DisplayData } from './types';

export const parseInput = (input: string): DisplayData[] => {
  const lines = input.split('\n').filter((line) => line.length > 0);
  return lines.map((line) => {
    const [input, output] = line.split(' | ');
    return { input: input.split(' '), output: output.split(' ') };
  });
};

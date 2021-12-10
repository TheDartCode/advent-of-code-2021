import { sortAsc } from '../shared/helpers';
import { parseInput } from './helpers';

const characterScoring = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
};

const completionChars = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
};

const openingChars = ['(', '[', '{', '<'];

const closingChars = [')', ']', '}', '>'];

const findCompletionStrings = (lines: string[][]): string[][] => {
  return lines
    .map((line) => {
      const completionString: string[] = [];
      for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (openingChars.includes(char)) {
          completionString.push(completionChars[char]);
        } else if (closingChars.includes(char)) {
          if (completionString.pop() !== char) {
            return null;
          }
        } else {
          throw new Error(`Unknown character \`${char}\``);
        }
      }
      return completionString.reverse();
    })
    .filter((s) => s !== null);
};

const scoreCompletionString = (completionString: string[]): number => {
  return completionString.reduce((total, char) => {
    total *= 5;
    total += characterScoring[char];
    return total;
  }, 0);
};

const moduleB = (input: string) => {
  const lines = parseInput(input);
  const completionStrings = findCompletionStrings(lines);
  const scores = sortAsc(
    completionStrings.map((cs) => scoreCompletionString(cs))
  );
  return scores[Math.floor(scores.length / 2)];
};

export default moduleB;

import { sumArray } from "../shared/helpers";
import { parseInput } from "./helpers";

const illegalCharacterScoring = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

const completionChars = {
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">",
};

const openingChars = ["(", "[", "{", "<"];

const closingChars = [")", "]", "}", ">"];

const moduleA = (input: string) => {
  const lines = parseInput(input);
  const illegalCharacters = lines.map((line) => {
    const openChunks = [];
    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (openingChars.includes(char)) {
        openChunks.push(char);
      } else if (closingChars.includes(char)) {
        const lastOpenChunk = openChunks.pop();

        if (completionChars[lastOpenChunk] !== char) {
          return char;
        }
      } else {
        throw new Error(`Unknown character \`${char}\``);
      }
    }
    return null;
  });
  return sumArray(
    illegalCharacters
      .filter((c) => c !== null)
      .map((char) => illegalCharacterScoring[char])
  );
};

export default moduleA;

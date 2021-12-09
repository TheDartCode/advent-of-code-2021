import { sumArray } from "../shared/helpers";
import { parseInput } from "./helpers";
import { Segment } from "./types";

const moduleA = (input: string) => {
  const data = parseInput(input);
  const output: Segment[][] = data.map((data) => data.output);
  return sumArray(
    output.map(
      (line) =>
        line.filter((signal) => [2, 3, 4, 7].includes(signal.length)).length
    )
  );
};

export default moduleA;

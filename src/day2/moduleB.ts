import { Instruction, Operation } from "./types";

const moduleB = (list: String) => {
  const lines = list.split("\n").filter((line) => line.length > 0);

  const instructions = lines.map((line) => {
    const parts = line.split(" ");
    return [parts[0], parseInt(parts[1])];
  }) as Instruction[];

  let horiz = 0;
  let depth = 0;
  let aim = 0;

  instructions.forEach(([operation, operand]) => {
    switch (operation) {
      case Operation.Forward:
        horiz += operand;
        depth += aim * operand;
        break;
      case Operation.Down:
        aim += operand;
        break;
      case Operation.Up:
        aim -= operand;
        break;
      default:
        throw new Error(`Unknown operation \`${operation}\``);
    }
  });

  return horiz * depth;
};

export default moduleB;

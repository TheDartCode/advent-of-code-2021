import { findIncrements } from "./helpers";

const moduleA = (list: string) => {
  const lines = list.split("\n").map((l) => parseInt(l));
  return findIncrements(lines);
};

export default moduleA;

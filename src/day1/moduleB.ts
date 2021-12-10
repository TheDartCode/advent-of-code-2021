import { findIncrements } from './helpers';

const moduleB = (list: string) => {
  const lines = list.split('\n').map((l) => parseInt(l));

  const sums = [];
  for (let i = 2; i < lines.length; i++) {
    sums.push(lines[i - 2] + lines[i - 1] + lines[i]);
  }

  return findIncrements(sums);
};

export default moduleB;

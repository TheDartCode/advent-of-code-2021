import { parseInput, simulatePolymerChaining } from './helpers';

const MAX_STEPS = 10;

const moduleA = (input: string) => {
  const { template, rules } = parseInput(input);
  return simulatePolymerChaining(MAX_STEPS, template, rules);
};

export default moduleA;

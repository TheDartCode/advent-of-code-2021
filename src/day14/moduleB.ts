import { parseInput, simulatePolymerChaining } from './helpers';

const MAX_STEPS = 40;

const moduleB = (input: string) => {
  const { template, rules } = parseInput(input);
  return simulatePolymerChaining(MAX_STEPS, template, rules);
};

export default moduleB;

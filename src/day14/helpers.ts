import { sortAsc } from '../shared/helpers';

export const parseInput = (input: string) => {
  const [template, rulesConfig] = input.split('\n\n');
  const rules: Record<string, string> = rulesConfig
    .split('\n')
    .filter((l) => l.length > 0)
    .reduce((reduction, rule) => {
      const [pair, insertion] = rule.split(' -> ');
      reduction[pair] = insertion;
      return reduction;
    }, {});

  return {
    template: template.split(''),
    rules,
  };
};

export const step = (
  template: string[],
  rules: Record<string, string>
): string[] => {
  const polymer: string[] = [];
  for (let i = 0; i < template.length; i++) {
    polymer.push(template[i]);

    if (i === template.length - 1) {
      break;
    }

    const pair = template[i] + template[i + 1];
    const insertion = rules[pair];
    if (!insertion) {
      throw new Error(`No insertion found for pair \`${pair}\``);
    }
    polymer.push(insertion);
  }
  return polymer;
};

export const incrementCountInHash = (
  hash: Record<string, number>,
  key,
  incrementBy = 1
): void => {
  if (!hash[key]) {
    hash[key] = 0;
  }
  hash[key] += incrementBy;
};

export const simulatePolymerChaining = (
  steps: number,
  template: string[],
  rules: Record<string, string>
): number => {
  const counts: Record<string, number> = {};
  let pairCounts: Record<string, number> = {};
  for (let i = 0; i < template.length; i++) {
    if (i === template.length - 1) {
      incrementCountInHash(counts, template[i]);
      break;
    }
    const pair = template[i] + template[i + 1];
    incrementCountInHash(counts, template[i]);
    incrementCountInHash(pairCounts, pair);
  }

  for (let i = 1; i <= steps; i++) {
    const newPairCounts: Record<string, number> = {};
    for (const pair in pairCounts) {
      const insertion = rules[pair];
      const newPairs = [pair[0] + insertion, insertion + pair[1]];
      incrementCountInHash(counts, insertion, pairCounts[pair]);
      incrementCountInHash(newPairCounts, newPairs[0], pairCounts[pair]);
      incrementCountInHash(newPairCounts, newPairs[1], pairCounts[pair]);
    }
    pairCounts = newPairCounts;
  }

  const quantities = sortAsc(Object.values(counts));

  return quantities[quantities.length - 1] - quantities[0];
};

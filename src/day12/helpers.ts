import { Cave } from './types';

const CHAR_CODE_A = 'A'.charCodeAt(0);
const CHAR_CODE_Z = 'Z'.charCodeAt(0);

export const parseInput = (input: string): Cave[] => {
  const connections = input
    .split('\n')
    .filter((l) => l.length > 0)
    .map((l) => l.split('-'));
  const caves: { [key: string]: Cave } = connections.reduce(
    (reduction, [start, end]) => {
      if (!reduction[start]) {
        reduction[start] = {
          name: start,
          connections: [],
          big:
            start.charCodeAt(0) >= CHAR_CODE_A &&
            start.charCodeAt(0) <= CHAR_CODE_Z,
        };
      }
      if (!reduction[end]) {
        reduction[end] = {
          name: end,
          connections: [],
          big:
            end.charCodeAt(0) >= CHAR_CODE_A &&
            end.charCodeAt(0) <= CHAR_CODE_Z,
        };
      }
      return reduction;
    },
    {}
  );
  connections.forEach(([start, end]) => {
    caves[start].connections.push(caves[end]);
    caves[end].connections.push(caves[start]);
  });
  return Object.values(caves);
};

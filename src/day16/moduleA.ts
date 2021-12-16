import { hexToBinary, parseInput } from './helpers';
import { StreamProcessor } from './types';

const moduleA = (input: string) => {
  const stream = hexToBinary(parseInput(input));
  return new StreamProcessor(stream).process().versionSum;
};

export default moduleA;

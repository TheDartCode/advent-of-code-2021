import { hexToBinary, parseInput } from './helpers';
import { StreamProcessor } from './types';

const moduleB = (input: string) => {
  const stream = hexToBinary(parseInput(input));
  return new StreamProcessor(stream).process().result;
};

export default moduleB;

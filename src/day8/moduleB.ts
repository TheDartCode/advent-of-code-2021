import { sumArray } from '../shared/helpers';
import { parseInput } from './helpers';
import { Segment, SegmentConfiguration } from './types';

const DIGIT_LENGTHS = {
  zero: 6,
  one: 2,
  two: 5,
  three: 5,
  four: 4,
  five: 5,
  six: 6,
  seven: 3,
  eight: 7,
  nine: 6,
};

const arrayDiff = (a: Segment[], b: Segment[]): Segment[] => {
  return a.filter((d) => !b.includes(d));
};

const sortWireConfiguration = (wires: Segment[]): string => {
  return wires.sort().join('');
};

export const deduceConnections = (
  input: Segment[],
  output: Segment[]
): SegmentConfiguration => {
  let digits = input.concat(output).map((s) => s.split(''));

  const segments: Partial<SegmentConfiguration> = {};

  // start with the easy ones which are unique
  const one = digits.find((s) => s.length === DIGIT_LENGTHS.one);
  const four = digits.find((s) => s.length === DIGIT_LENGTHS.four);
  const seven = digits.find((s) => s.length === DIGIT_LENGTHS.seven);
  const eight = digits.find((s) => s.length === DIGIT_LENGTHS.eight);

  // 9 is the only digit containing 4
  const nine = digits.find(
    (s) => s.length === DIGIT_LENGTHS.nine && four.every((d) => s.includes(d))
  );

  // remove 9 from the list
  digits = digits.filter(
    (s) => s.length !== DIGIT_LENGTHS.nine || s.some((d) => !nine.includes(d))
  );

  // zero is the only digit from those with length === 6 that contains 1
  const zero = digits.find(
    (s) => s.length === DIGIT_LENGTHS.zero && one.every((d) => s.includes(d))
  );

  // remove 0
  digits = digits.filter(
    (s) => s.length !== DIGIT_LENGTHS.zero || s.some((d) => !zero.includes(d))
  );

  // the only left digits with 6 wires is 6
  const six = digits.find((s) => s.length === DIGIT_LENGTHS.six);

  // likewise, 3 is the only 5-wire digit that contains 1
  const three = digits.find(
    (s) => s.length === DIGIT_LENGTHS.three && one.every((d) => s.includes(d))
  );

  // 5 is the only 5-wire digit that has only a single wire difference from 6
  const five = digits.find(
    (s) => s.length === DIGIT_LENGTHS.five && arrayDiff(six, s).length === 1
  );

  // remove 5 and 3
  digits = digits.filter(
    (s) =>
      s.length !== DIGIT_LENGTHS.two ||
      !s.every((d) => three.includes(d) || five.includes(d))
  );

  // what remains is 2
  const two = digits.find((s) => s.length === DIGIT_LENGTHS.two);

  segments[sortWireConfiguration(zero)] = 0;
  segments[sortWireConfiguration(one)] = 1;
  segments[sortWireConfiguration(two)] = 2;
  segments[sortWireConfiguration(three)] = 3;
  segments[sortWireConfiguration(four)] = 4;
  segments[sortWireConfiguration(five)] = 5;
  segments[sortWireConfiguration(six)] = 6;
  segments[sortWireConfiguration(seven)] = 7;
  segments[sortWireConfiguration(eight)] = 8;
  segments[sortWireConfiguration(nine)] = 9;

  return segments;
};

const moduleB = (inputText: string) => {
  const data = parseInput(inputText);

  const outputNumbers = data.map(({ input, output }) => {
    const segmentConfig = deduceConnections(input, output);

    const numberString = output.map(
      (digit) => segmentConfig[sortWireConfiguration(digit.split(''))]
    );

    return parseInt(numberString.join(''));
  });

  return sumArray(outputNumbers);
};

export default moduleB;

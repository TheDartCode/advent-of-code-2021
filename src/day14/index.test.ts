import day14 from './index';

const TEST_DATA = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C
`;

describe('day14', () => {
  describe('first part', () => {
    it.skip('satisfies test data', () => {
      expect(day14('a', TEST_DATA)).toBe('2');
    });
  });
  describe('second part', () => {
    it.skip('satisfies test data', () => {
      expect(day14('b', TEST_DATA)).toBe('1');
    });
  });
});

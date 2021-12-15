import day14 from './index';
import { parseInput, step } from './helpers';

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
  describe('helpers', () => {
    describe('#parseInput', () => {
      it('parses the template and rules', () => {
        expect(parseInput(TEST_DATA)).toEqual({
          template: ['N', 'N', 'C', 'B'],
          rules: {
            CH: 'B',
            HH: 'N',
            CB: 'H',
            NH: 'C',
            HB: 'C',
            HC: 'B',
            HN: 'C',
            NN: 'C',
            BH: 'H',
            NC: 'B',
            NB: 'B',
            BN: 'B',
            BB: 'N',
            BC: 'B',
            CC: 'N',
            CN: 'C',
          },
        });
      });
    });
    describe('#step', () => {
      it('inserts the correct polymers between pairs', () => {
        const { template, rules } = parseInput(TEST_DATA);
        expect(step(template, rules)).toEqual([
          'N',
          'C',
          'N',
          'B',
          'C',
          'H',
          'B',
        ]);
      });
    });
  });
  describe('first part', () => {
    it('satisfies test data', () => {
      expect(day14('a', TEST_DATA)).toBe('1588');
    });
  });
  describe('second part', () => {
    it('satisfies test data', () => {
      expect(day14('b', TEST_DATA)).toBe('2188189693529');
    });
  });
});

import { parseLine } from './helpers';
import day5 from './index';

const TEST_DATA = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
`;

describe('day5', () => {
  describe('helpers', () => {
    describe('#parseLine()', () => {
      it('parses the line correctly', () => {
        expect(parseLine('0,9 -> 5,9')).toEqual({
          x1: 0,
          y1: 9,
          x2: 5,
          y2: 9,
        });
      });
    });
  });
  describe('first part', () => {
    it('satisfies test data', () => {
      expect(day5('a', TEST_DATA)).toBe('5');
    });
  });
  describe('second part', () => {
    it('satisfies test data', () => {
      expect(day5('b', TEST_DATA)).toBe('12');
    });
  });
});

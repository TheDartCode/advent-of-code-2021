import day15 from './index';
import { parseInput } from './helpers';

const TEST_DATA = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581
`;

describe('day15', () => {
  describe('helpers', () => {
    describe('#parseInput', () => {
      it('parses the Graph correctly', () => {
        expect(parseInput('12\n56\n89')).toEqual([
          [1, 2],
          [5, 6],
          [8, 9],
        ]);
      });
      it('parses and expands the Graph correctly', () => {
        expect(parseInput('1\n5', true)).toEqual([
          [1, 2, 3, 4, 5],
          [5, 6, 7, 8, 9],
          [2, 3, 4, 5, 6],
          [6, 7, 8, 9, 1],
          [3, 4, 5, 6, 7],
          [7, 8, 9, 1, 2],
          [4, 5, 6, 7, 8],
          [8, 9, 1, 2, 3],
          [5, 6, 7, 8, 9],
          [9, 1, 2, 3, 4],
        ]);
      });
    });
  });
  describe('first part', () => {
    it('satisfies test data', () => {
      expect(day15('a', TEST_DATA)).toBe('40');
    });
  });
  describe('second part', () => {
    it('satisfies test data', () => {
      expect(day15('b', TEST_DATA)).toBe('315');
    });
  });
});

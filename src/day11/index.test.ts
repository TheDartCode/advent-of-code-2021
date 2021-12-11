import day11 from './index';

const TEST_DATA = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526
`;

describe('day11', () => {
  describe('first part', () => {
    it.skip('satisfies test data', () => {
      expect(day11('a', TEST_DATA)).toBe('2');
    });
  });
  describe('second part', () => {
    it.skip('satisfies test data', () => {
      expect(day11('b', TEST_DATA)).toBe('1');
    });
  });
});

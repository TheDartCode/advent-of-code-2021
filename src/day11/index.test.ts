import day11 from './index';
import { day, flash, parseInput } from './helpers';

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
    describe('#flash', () => {
      it('transfers energy to neighboring octopus', () => {
        const octopuses = parseInput('000\n090\n000');
        octopuses[1][1] = 10;
        flash(octopuses, 1, 1);
        expect(octopuses).toEqual([
          [1, 1, 1],
          [1, 10, 1],
          [1, 1, 1],
        ]);
      });
    });
    describe('#day', () => {
      it('flashes the correct amount of octopus, transferring energy to siblings', () => {
        const octopuses = parseInput(`6594254334
3856965822
6375667284
7252447257
7468496589
5278635756
3287952832
7993992245
5957959665
6394862637`);
        const flashes = day(octopuses);
        expect(flashes).toEqual(35);
      });
    });
    it('satisfies test data', () => {
      expect(day11('a', TEST_DATA)).toBe('1656');
    });
  });
  describe('second part', () => {
    it('satisfies test data', () => {
      expect(day11('b', TEST_DATA)).toBe('195');
    });
  });
});

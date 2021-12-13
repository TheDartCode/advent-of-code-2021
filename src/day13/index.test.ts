import day13 from './index';
import { foldPaper, generatePaper, parseInput } from './helpers';
import { FoldDirection } from './types';

const TEST_DATA = `6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5
`;

describe('day13', () => {
  describe('helpers', () => {
    describe('#parseInput', () => {
      it('parses dots and folds correctly', () => {
        expect(parseInput(TEST_DATA)).toEqual({
          dots: [
            { x: 6, y: 10 },
            { x: 0, y: 14 },
            { x: 9, y: 10 },
            { x: 0, y: 3 },
            { x: 10, y: 4 },
            { x: 4, y: 11 },
            { x: 6, y: 0 },
            { x: 6, y: 12 },
            { x: 4, y: 1 },
            { x: 0, y: 13 },
            { x: 10, y: 12 },
            { x: 3, y: 4 },
            { x: 3, y: 0 },
            { x: 8, y: 4 },
            { x: 1, y: 10 },
            { x: 2, y: 14 },
            { x: 8, y: 10 },
            { x: 9, y: 0 },
          ],
          folds: [
            { direction: FoldDirection.y, position: 7 },
            { direction: FoldDirection.x, position: 5 },
          ],
        });
      });
    });
    describe('#generatePaper', () => {
      it('generates the paper correctly', () => {
        const { dots } = parseInput(TEST_DATA);
        expect(
          generatePaper(dots)
            .map((r) => r.join(''))
            .join('\n')
        ).toEqual(`...#..#..#.
....#......
...........
#..........
...#....#.#
...........
...........
...........
...........
...........
.#....#.##.
....#......
......#...#
#..........
#.#........`);
      });
    });
    describe('#foldPaper', () => {
      it('generates the paper correctly', () => {
        const { dots, folds } = parseInput(TEST_DATA);
        const paper = generatePaper(dots);
        foldPaper(paper, folds[0]);
        expect(paper.map((r) => r.join('')).join('\n')).toEqual(`#.##..#..#.
#...#......
......#...#
#...#......
.#.#..#.###
...........
...........`);
        foldPaper(paper, folds[1]);
        expect(paper.map((r) => r.join('')).join('\n')).toEqual(`#####
#...#
#...#
#...#
#####
.....
.....`);
      });
    });
  });
  describe('first part', () => {
    it('satisfies test data', () => {
      expect(day13('a', TEST_DATA)).toBe('17');
    });
  });
});

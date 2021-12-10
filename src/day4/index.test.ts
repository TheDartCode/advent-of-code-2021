import { parseInput } from './helpers';
import day4 from './index';

const TEST_DATA = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
`;

describe('day4', () => {
  describe('helpers', () => {
    describe('parseInput', () => {
      it('parses game input correctly', () => {
        expect(parseInput(TEST_DATA)).toEqual({
          numbers: [
            7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12,
            22, 18, 20, 8, 19, 3, 26, 1,
          ],
          boards: [
            [
              [
                { value: 22, marked: false },
                { value: 13, marked: false },
                { value: 17, marked: false },
                { value: 11, marked: false },
                { value: 0, marked: false },
              ],
              [
                { value: 8, marked: false },
                { value: 2, marked: false },
                { value: 23, marked: false },
                { value: 4, marked: false },
                { value: 24, marked: false },
              ],
              [
                { value: 21, marked: false },
                { value: 9, marked: false },
                { value: 14, marked: false },
                { value: 16, marked: false },
                { value: 7, marked: false },
              ],
              [
                { value: 6, marked: false },
                { value: 10, marked: false },
                { value: 3, marked: false },
                { value: 18, marked: false },
                { value: 5, marked: false },
              ],
              [
                { value: 1, marked: false },
                { value: 12, marked: false },
                { value: 20, marked: false },
                { value: 15, marked: false },
                { value: 19, marked: false },
              ],
            ],
            [
              [
                { value: 3, marked: false },
                { value: 15, marked: false },
                { value: 0, marked: false },
                { value: 2, marked: false },
                { value: 22, marked: false },
              ],
              [
                { value: 9, marked: false },
                { value: 18, marked: false },
                { value: 13, marked: false },
                { value: 17, marked: false },
                { value: 5, marked: false },
              ],
              [
                { value: 19, marked: false },
                { value: 8, marked: false },
                { value: 7, marked: false },
                { value: 25, marked: false },
                { value: 23, marked: false },
              ],
              [
                { value: 20, marked: false },
                { value: 11, marked: false },
                { value: 10, marked: false },
                { value: 24, marked: false },
                { value: 4, marked: false },
              ],
              [
                { value: 14, marked: false },
                { value: 21, marked: false },
                { value: 16, marked: false },
                { value: 12, marked: false },
                { value: 6, marked: false },
              ],
            ],
            [
              [
                { value: 14, marked: false },
                { value: 21, marked: false },
                { value: 17, marked: false },
                { value: 24, marked: false },
                { value: 4, marked: false },
              ],
              [
                { value: 10, marked: false },
                { value: 16, marked: false },
                { value: 15, marked: false },
                { value: 9, marked: false },
                { value: 19, marked: false },
              ],
              [
                { value: 18, marked: false },
                { value: 8, marked: false },
                { value: 23, marked: false },
                { value: 26, marked: false },
                { value: 20, marked: false },
              ],
              [
                { value: 22, marked: false },
                { value: 11, marked: false },
                { value: 13, marked: false },
                { value: 6, marked: false },
                { value: 5, marked: false },
              ],
              [
                { value: 2, marked: false },
                { value: 0, marked: false },
                { value: 12, marked: false },
                { value: 3, marked: false },
                { value: 7, marked: false },
              ],
            ],
          ],
        });
      });
    });
  });
  describe('first part', () => {
    it('satisfies test data', () => {
      expect(day4('a', TEST_DATA)).toBe('4512');
    });
  });
  describe('second part', () => {
    it('satisfies test data', () => {
      expect(day4('b', TEST_DATA)).toBe('1924');
    });
  });
});

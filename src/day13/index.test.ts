import day13 from './index';

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
  describe('first part', () => {
    it.skip('satisfies test data', () => {
      expect(day13('a', TEST_DATA)).toBe('2');
    });
  });
  describe('second part', () => {
    it.skip('satisfies test data', () => {
      expect(day13('b', TEST_DATA)).toBe('1');
    });
  });
});

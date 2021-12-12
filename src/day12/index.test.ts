import day12 from './index';

const TEST_DATA = `start-A
start-b
A-c
A-b
b-d
A-end
b-end
`;

describe('day12', () => {
  describe('first part', () => {
    it.skip('satisfies test data', () => {
      expect(day12('a', TEST_DATA)).toBe('2');
    });
  });
  describe('second part', () => {
    it.skip('satisfies test data', () => {
      expect(day12('b', TEST_DATA)).toBe('1');
    });
  });
});

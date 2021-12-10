import day2 from './index';

const TEST_DATA = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

describe('day2', () => {
  describe('first part', () => {
    it('satisfies test data', () => {
      expect(day2('a', TEST_DATA)).toBe('150');
    });
  });
  describe('second part', () => {
    it('satisfies test data', () => {
      expect(day2('b', TEST_DATA)).toBe('900');
    });
  });
});

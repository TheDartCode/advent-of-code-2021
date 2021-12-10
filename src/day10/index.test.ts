import day10 from './index';

const TEST_DATA = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]
`;

describe('day10', () => {
  describe('first part', () => {
    it('satisfies test data', () => {
      expect(day10('a', TEST_DATA)).toBe('26397');
    });
  });
  describe('second part', () => {
    it('satisfies test data', () => {
      expect(day10('b', TEST_DATA)).toBe('288957');
    });
  });
});

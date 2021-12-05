import day5 from "./index";

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

describe("day5", () => {
  describe("first part", () => {
    it.skip("satisfies test data", () => {
      expect(day5("a", TEST_DATA)).toBe("2");
    });
  });
  describe("second part", () => {
    it.skip("satisfies test data", () => {
      expect(day5("b", TEST_DATA)).toBe("1");
    });
  });
});

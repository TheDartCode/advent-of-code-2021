import day9 from "./index";

const TEST_DATA = `2199943210
3987894921
9856789892
8767896789
9899965678
`;

describe("day9", () => {
  describe("first part", () => {
    it.skip("satisfies test data", () => {
      expect(day9("a", TEST_DATA)).toBe("2");
    });
  });
  describe("second part", () => {
    it.skip("satisfies test data", () => {
      expect(day9("b", TEST_DATA)).toBe("1");
    });
  });
});

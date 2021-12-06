import day6 from "./index";

const TEST_DATA = `3,4,3,1,2`;

describe("day6", () => {
  describe("first part", () => {
    it.skip("satisfies test data", () => {
      expect(day6("a", TEST_DATA)).toBe("2");
    });
  });
  describe("second part", () => {
    it.skip("satisfies test data", () => {
      expect(day6("b", TEST_DATA)).toBe("1");
    });
  });
});

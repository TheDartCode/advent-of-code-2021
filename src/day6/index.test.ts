import day6 from "./index";

const TEST_DATA = `3,4,3,1,2`;

describe("day6", () => {
  describe("first part", () => {
    it("satisfies test data", () => {
      expect(day6("a", TEST_DATA)).toBe("5934");
    });
  });
  describe("second part", () => {
    it("satisfies test data", () => {
      expect(day6("b", TEST_DATA)).toBe("26984457539");
    });
  });
});

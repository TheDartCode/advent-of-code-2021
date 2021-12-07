import day7 from "./index";

const TEST_DATA = `16,1,2,0,4,2,7,1,2,14`;

describe("day7", () => {
  describe("first part", () => {
    it.skip("satisfies test data", () => {
      expect(day7("a", TEST_DATA)).toBe("2");
    });
  });
  describe("second part", () => {
    it.skip("satisfies test data", () => {
      expect(day7("b", TEST_DATA)).toBe("1");
    });
  });
});

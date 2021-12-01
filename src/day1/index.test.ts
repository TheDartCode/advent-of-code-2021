import dayX from "./index";

const TEST_DATA = `199
200
208
210
200
207
240
269
260
263`;

describe("dayX", () => {
  describe("first part", () => {
    it("satisfies test data", () => {
      expect(dayX("a", TEST_DATA)).toBe("7");
    });
  });
  describe("second part", () => {
    it("satisfies test data", () => {
      expect(dayX("b", TEST_DATA)).toBe("5");
    });
  });
});

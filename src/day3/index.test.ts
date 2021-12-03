import day3 from "./index";
import { extractLifeSupportRating } from "./moduleB";

const TEST_DATA = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

describe("day3", () => {
  describe("first part", () => {
    it("satisfies test data", () => {
      expect(day3("a", TEST_DATA)).toBe("198");
    });
  });
  describe("second part", () => {
    describe("extractLifeSupportRating", () => {
      it("calculates the life support rating correctly", () => {
        const items = TEST_DATA.split("\n").filter((l) => l.length > 0);
        const [oxygen, co2] = extractLifeSupportRating(items);
        expect(oxygen).toEqual(23);
        expect(co2).toEqual(10);
      });
    });
    it("satisfies test data", () => {
      expect(day3("b", TEST_DATA)).toBe("230");
    });
  });
});

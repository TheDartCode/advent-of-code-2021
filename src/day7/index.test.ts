import day7 from "./index";
import { getFuelForPositionChange } from "./moduleB";

const TEST_DATA = `16,1,2,0,4,2,7,1,2,14`;

describe("day7", () => {
  describe("first part", () => {
    it("satisfies test data", () => {
      expect(day7("a", TEST_DATA)).toBe("37");
    });
  });
  describe("second part", () => {
    describe("#getFuelForPositionChange", () => {
      it("calculates fuel correctly", () => {
        expect(getFuelForPositionChange(1, 2)).toEqual(1);
        expect(getFuelForPositionChange(1, 3)).toEqual(3);
        expect(getFuelForPositionChange(1, 4)).toEqual(6);
        expect(getFuelForPositionChange(16, 5)).toEqual(66);
      });
    });
    it("satisfies test data", () => {
      expect(day7("b", TEST_DATA)).toBe("168");
    });
  });
});

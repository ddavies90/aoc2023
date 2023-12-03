import { getCalibrationValue } from "../getCalibrationValue";
import { replaceStringNums } from "../replaceStringNums";

describe("day1", () => {
  describe("part1", () => {
    it("should create a number from the first and last digit in the line", () => {
      const actual = getCalibrationValue("2xjzgsjzfhzhm1");
      expect(actual).toEqual(21);
    });
  });

  describe("part2", () => {
    it("should parse the string representations of numbers in to the correct number", () => {
      const newLines = replaceStringNums(["a1onesdnkthree"]);
      expect(newLines).toEqual(["a1one1onesdnkthree3three"]);
    });
  });
});

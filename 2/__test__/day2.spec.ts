import { sumPossibleGames } from "../sumPossibleGames";
import { findCubeSetPowerSum } from "../findCubeSetPowers";

describe("day2", () => {
  describe("part1", () => {
    it("should sum the ids of the possible games only", () => {
      const input = [
        "Game 1: 15 red, 9 blue, 4 green; 5 red, 2 blue, 15 green; 4 blue, 3 green, 20 red; 12 green, 1 red, 10 blue; 10 green, 5 blue, 13 red; 9 red, 10 green, 11 blue",
        "Game 2: 3 blue, 12 green, 1 red; 6 green; 1 red, 8 green; 1 blue, 1 green, 1 red",
        "Game 3: 10 green, 7 red, 12 blue; 9 blue, 6 green, 2 red; 8 green, 5 blue, 5 red; 7 blue, 16 green, 11 red; 6 red, 8 blue, 13 green",
        "Game 4: 10 green, 6 blue, 3 red; 6 green, 2 red, 8 blue; 9 blue, 11 green, 2 red; 10 green, 1 blue, 3 red",
      ];
      const actual = sumPossibleGames(input);

      expect(actual).toEqual(6);
    });
  });
  describe("part2", () => {
    it("should sum the multiplied values for the minimum amount of cubes needed for each game played", () => {
      const input = [
        "Game 1: 15 red, 9 blue, 4 green; 5 red, 2 blue, 15 green; 4 blue, 3 green, 20 red; 12 green, 1 red, 10 blue; 10 green, 5 blue, 13 red; 9 red, 10 green, 11 blue",
        "Game 2: 3 blue, 12 green, 1 red; 6 green; 1 red, 8 green; 1 blue, 1 green, 1 red",
        "Game 3: 10 green, 7 red, 12 blue; 9 blue, 6 green, 2 red; 8 green, 5 blue, 5 red; 7 blue, 16 green, 11 red; 6 red, 8 blue, 13 green",
        "Game 4: 10 green, 6 blue, 3 red; 6 green, 2 red, 8 blue; 9 blue, 11 green, 2 red; 10 green, 1 blue, 3 red",
      ];
      const actual = findCubeSetPowerSum(input);

      expect(actual).toEqual(3300 + 36 + 2112 + 297);
    });
  });
});

import "../env";
import { fetchPuzzleInput } from "../utils/fetchPuzzleInput";
import { findCubeSetPowerSum } from "./findCubeSetPowers";
import { sumPossibleGames } from "./sumPossibleGames";

const main = async () => {
  const input = (await fetchPuzzleInput(2)).trim().split("\n");

  const possibleGameTotal = sumPossibleGames(input);

  console.log("Possible game sum:", possibleGameTotal);

  const cubeSetPowerSum = findCubeSetPowerSum(input);

  console.log("Cube set power sum:", cubeSetPowerSum);
};

main();

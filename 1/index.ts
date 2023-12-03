import "../env";
import { fetchPuzzleInput } from "../utils/fetchPuzzleInput";
import { getCalibrationValue } from "./getCalibrationValue";
import { replaceStringNums } from "./replaceStringNums";

const calibrationTotal = async () => {
  const fileContent = await fetchPuzzleInput(1);
  const lines = fileContent.trim().split("\n");
  const parsedLines = replaceStringNums(lines);
  const numberArr = parsedLines.map((line) => {
    return getCalibrationValue(line);
  });
  const calibrationTotal = numberArr.reduce((prev, currNum) => {
    return (prev += currNum);
  }, 0);
  console.log("Calibration total =", calibrationTotal);
};

(async () => {
  await calibrationTotal();
})();

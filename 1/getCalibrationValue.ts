export const getCalibrationValue = (line: string): number => {
  let numArr: string[] = [];
  for (let char of line) {
    const num = parseInt(char);
    if (Number.isNaN(num)) {
      continue;
    } else {
      numArr.push(char);
    }
  }
  return Number(numArr[0] + numArr[numArr.length - 1]);
};

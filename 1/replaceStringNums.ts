export const replaceStringNums = (lines: string[]): string[] => {
  const numberMap: Record<string, string> = {
    one: "one1one",
    two: "two2two",
    three: "three3three",
    four: "four4four",
    five: "five5five",
    six: "six6six",
    seven: "seven7seven",
    eight: "eight8eight",
    nine: "nine9nine",
  };
  return lines.map((line) => {
    for (let key in numberMap) {
      line = line.replaceAll(key, numberMap[key]);
    }
    return line;
  });
};

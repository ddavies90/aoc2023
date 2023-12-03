export const sumPossibleGames = (input: string[]) => {
  const startTime = performance.now();
  const possibleGames = input.map((game) => {
    // Remove gameID label from game data
    const arr = game.split(": ");
    const gameId = arr[0].slice(4).trim();
    /* Try getting data in to format where every even item is a number followed in the next index by it's colour
     */
    const gamesData = arr[1]
      .split("; ")
      .join(" ")
      .split(",")
      .join("")
      .split(" ");
    // Hold state about whether game is possible (set in for loop)
    let possibleGame = true;
    for (let i = 0; i < gamesData.length; i++) {
      if (i % 2 != 0) {
        continue;
      }
      const cubeValue = Number(gamesData[i]);
      // If value > 12 then could fall foul of at least being higher than max allowed red (see below func)
      if (cubeValue > 12) {
        if (!checkIfValid(cubeValue, gamesData[i + 1])) {
          possibleGame = false;
          break;
        }
      }
    }
    return possibleGame ? gameId : "impossible";
  });

  const sum = possibleGames.reduce((prev, curr) => {
    return curr === "impossible" ? Number(prev) : Number(prev) + Number(curr);
  }, 0);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  console.log("Function performance for sumPossibleGames:", elapsedTime);

  return sum;
};

const checkIfValid = (cubeValue: number, colour: string): boolean => {
  const topValues: Record<string, number> = {
    red: 12,
    green: 13,
    blue: 14,
  };

  return topValues[colour] >= cubeValue;
};

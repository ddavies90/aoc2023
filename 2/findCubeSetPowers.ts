export const findCubeSetPowerSum = (input: string[]) => {
  const startTime = performance.now();
  const cubeSetPowers: number[] = [];
  const gameData = input.map((game) => {
    return game.split(": ")[1].split("; ");
  });

  gameData.forEach((game) => {
    const currentMax: { [key: string]: number } = {
      red: 0,
      green: 0,
      blue: 0,
    };
    game.forEach((set) => {
      set.split(", ").forEach((cubeResult) => {
        const resultTuple = cubeResult.split(" ");
        const cubeValue = Number(resultTuple[0]);
        const colour = resultTuple[1];
        currentMax[colour] < cubeValue
          ? (currentMax[colour] = cubeValue)
          : null;
      });
    });
    cubeSetPowers.push(
      Object.values(currentMax).reduce((prev, curr) => prev * curr)
    );
  });
  const sum = cubeSetPowers.reduce((prev, curr) => prev + curr);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  console.log("Function performance for findCubeSetPowers:", elapsedTime);
  
  return sum;
};

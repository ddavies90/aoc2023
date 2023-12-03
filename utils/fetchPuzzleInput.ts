import fs from "fs";

export const fetchPuzzleInput = async (day: number) => {
  const fileContents = safeReadFileSync(`../__input__/${day}.txt`);

  if (fileContents != "error") {
    return fileContents;
  }

  const response = await fetch(
    `https://adventofcode.com/2023/day/${day}/input`,
    {
      headers: {
        Cookie: `session=${process.env.SESSION_ID}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("There was an error making the API call");
  }
  const data = await response.text();
  fs.writeFileSync(`../__input__/${day}.txt`, data);
  return data;
};

const safeReadFileSync = (path: string) => {
  try {
    const content = fs.readFileSync(path, "utf8");
    console.log("file found - loading from local dir");
    return content;
  } catch (error) {
    console.log("error reading file");
    return "error";
  }
};

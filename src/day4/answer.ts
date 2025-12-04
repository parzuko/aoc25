import { processInput } from "../../utils/input.ts";

interface Position {
  x: number;
  y: number;
}

function getAdjacentRollCount(
  i: number,
  j: number,
  grid: string[][],
  ROWS: number,
  COLS: number
) {
  const positions: Position[] = [
    { x: i, y: j + 1 }, // right
    { x: i, y: j - 1 }, // left
    { x: i - 1, y: j }, // above
    { x: i + 1, y: j }, // below

    { x: i - 1, y: j + 1 }, // top right
    { x: i - 1, y: j - 1 }, // top left
    { x: i + 1, y: j + 1 }, // bottom right
    { x: i + 1, y: j - 1 }, // bottom left
  ];

  let count = 0;
  for (const position of positions) {
    if (
      position.x >= ROWS ||
      position.y >= COLS ||
      position.x < 0 ||
      position.y < 0
    )
      continue;

    count += grid[position.x][position.y] === "@" ? 1 : 0;
  }
  return count;
}

function removePaperRolls(grid: string[][]) {
  const ROWS = grid.length,
    COLS = grid[0].length;

  let validPositions = 0;

  for (let i = 0; i < ROWS; i += 1) {
    for (let j = 0; j < COLS; j += 1) {
      if (
        getAdjacentRollCount(i, j, grid, ROWS, COLS) < 4 &&
        grid[i][j] === "@"
      ) {
        validPositions += 1;
        grid[i][j] = "x"; // Remove this for part 1 answer
      }
    }
  }

  return validPositions;
}

function main() {
  const input = processInput(4); // pass the day number to the function
  const grid = input.split("\n").map((line) => line.split(""));

  let removedRolls = removePaperRolls(grid);
  let totalRollsRemoved = removedRolls;

  while (removedRolls !== 0) {
    removedRolls = removePaperRolls(grid);
    totalRollsRemoved += removedRolls;
  }

  // Comment out line #55 and call removePaperRolls(grid); only once to get the answer for PART- 1

  console.log(
    `[PART-2]: Valid positions on the board are ${totalRollsRemoved}`
  );
}

main();

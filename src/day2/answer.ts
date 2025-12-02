import { processInput } from "../../utils/input.ts";

function processRange(range: string) {
  return range.split("-").map((n) => Number(n));
}

function isInvalid(num: number) {
  const s = String(num);
  if (s.length % 2 !== 0) return false;

  const firstHalf = s.slice(0, s.length / 2);
  const secondHalf = s.slice(s.length / 2);

  return firstHalf === secondHalf;
}

function isInvalidPart2(num: number) {
  const s = String(num);

  for (
    let patternSize = 1;
    patternSize <= Math.floor(s.length / 2) + 1;
    patternSize += 1
  ) {
    const patternToCheck = s.slice(0, patternSize);
    const repetitions = Math.floor(s.length / patternSize);

    if (s.length % patternSize !== 0) continue; // if not possible to make this size of string a repeatable pattern
    if (repetitions >= 2 && patternToCheck.repeat(repetitions) === s)
      return true;
  }
  return false;
}

function main() {
  const input = processInput(2); // pass the day number to the function
  const productIds = input.split(",").map(processRange);

  let [totalInvalidPart1, totalInvalidPart2] = [0, 0];

  for (const [start, end] of productIds) {
    for (let i = start; i <= end; i += 1) {
      totalInvalidPart1 += isInvalid(i) ? i : 0;
      totalInvalidPart2 += isInvalidPart2(i) ? i : 0;
    }
  }

  console.log(`[PART-1]: Total of invalid numbers: ${totalInvalidPart1}`);
  console.log(`[PART-2]: Total of invalid numbers: ${totalInvalidPart2}`);
}

main();

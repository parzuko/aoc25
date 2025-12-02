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

function main() {
  const input = processInput(2); // pass the day number to the function
  const productIds = input.split(",").map(processRange);

  let totalInvalid = 0;

  for (const [start, end] of productIds) {
    for (let i = start; i <= end; i += 1) {
      totalInvalid += isInvalid(i) ? i : 0;
    }
  }

  console.log(`[PART-1]: Total of invalid numbers: ${totalInvalid}`);
}

main();

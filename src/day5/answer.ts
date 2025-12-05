import { processInput } from "../../utils/input.ts";

interface Range {
  start: number;
  end: number;
}

function processRange(input: string): [Range[], number[]] {
  const [rangesSection, numbersSection] = input.split("\n\n");

  const ranges: Range[] = rangesSection
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const [start, end] = line.split("-").map(Number);
      return { start, end };
    });

  // Parse numbers: "1" -> 1
  const numbers: number[] = numbersSection
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map(Number);

  return [ranges, numbers];
}

function isInRange(num: number, ranges: Range[]): boolean {
  return ranges.some((range) => num >= range.start && num <= range.end);
}

function mergeRanges(ranges: Range[]): Range[] {
  if (ranges.length === 0) return [];

  const sorted = [...ranges].sort((a, b) => a.start - b.start);
  const merged: Range[] = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const lastMerged = merged[merged.length - 1];

    // If current range overlaps or is adjacent to the last merged range
    if (current.start <= lastMerged.end + 1) {
      // Merge: extend the end if current range extends further
      lastMerged.end = Math.max(lastMerged.end, current.end);
    } else {
      merged.push(current); // no overlap
    }
  }

  return merged;
}

function countTotalValidIds(ranges: Range[]): number {
  const merged = mergeRanges(ranges);

  return merged.reduce((total, range) => {
    return total + (range.end - range.start + 1);
  }, 0);
}

function main() {
  const input = processInput(5);
  const [ranges, numbers] = processRange(input);

  let totalPart1 = 0;

  for (const num of numbers) {
    if (isInRange(num, ranges)) {
      totalPart1 += 1;
    }
  }

  const totalPart2 = countTotalValidIds(ranges);

  console.log(`[PART-1] There are a total of ${totalPart1} valid ids`);
  console.log(
    `[PART-2] Total distinct valid IDs across all ranges: ${totalPart2}`
  );
}

main();

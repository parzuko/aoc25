import { processInput } from "../../utils/input.ts";

function processInstruction(instruction: string) {
  const direction = instruction[0];
  const distance = parseInt(instruction.slice(1));
  return { direction, distance };
}

function main() {
  const input = processInput(1); // pass the day number to the function
  const instructions = input.split("\n").map(processInstruction).flat();

  let [start, count] = [50, 0];

  for (const instruction of instructions) {
    const { direction, distance } = instruction;

    for (let i = 0; i < distance; i += 1) {
      start = (direction === "L" ? start - 1 : start + 1) % 100;
      count = start === 0 ? count + 1 : count; // PART 2
    }
    // count = start === 0 ? count + 1 : count; // PART 1
  }

  console.log(`[ANSWER]: Ticker goes to zero, ${count} times`);
}

main();

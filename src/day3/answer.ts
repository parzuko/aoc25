import { processInput } from "../../utils/input.ts";

function maxJoltage(num: number[], K: number) {
  const stack: number[] = [];
  let toRemove = num.length - K,
    answer = "";

  for (const digit of num) {
    while (stack.length !== 0 && toRemove > 0 && stack.slice(-1)[0] < digit) {
      stack.pop();
      toRemove -= 1;
    }
    stack.push(digit);
  }

  while (toRemove > 0) {
    stack.pop();
    toRemove -= 1;
  }

  for (let i = 0; i < K; i += 1) {
    answer += stack[i];
  }
  return Number(answer);
}

function batteryToJolts(battery: string) {
  return battery.split("").map((n) => Number(n));
}

function main() {
  const input = processInput(3); // pass the day number to the function
  const jolts = input.split("\n").map(batteryToJolts);

  let part1Joltage = 0,
    part2Joltage = 0;

  for (const jolt of jolts) {
    part1Joltage += maxJoltage(jolt, 2);
    part2Joltage += maxJoltage(jolt, 12);
  }

  console.log(`[PART-1]: Total output joltage: ${part1Joltage}`);
  console.log(`[PART-1]: Total output joltage: ${part2Joltage}`);
}

main();

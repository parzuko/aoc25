import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ESM-safe equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function processInput(day: number) {
  const inputPath = path.join(__dirname, `../src/day${day}/input.txt`);
  const input = fs.readFileSync(inputPath, "utf8");
  return input;
}

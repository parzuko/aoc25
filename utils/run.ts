async function loadDay(modulePath: string) {
  return import(modulePath);
}

async function main() {
  const day = process.argv[2];

  if (!day) {
    console.error("Usage: pnpm run day <number>");
    process.exit(1);
  }

  const modulePath = `../src/day${day}/answer.ts`;

  try {
    await loadDay(modulePath);
  } catch (error) {
    console.error(`Failed to load ${modulePath}:`, error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Unexpected error in runner:", error);
  process.exit(1);
});

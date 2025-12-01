# advent of code

2025 iteration and my solutions in typescript

## ▶️ running a specific day

each day's solution lives with the days input, question and answer 👇

```bash

src/day<N>/answer.ts

```

to run a specific day, from root folder use:

```bash

pnpm run day 3 # here n = 3, n can be any valid day number

```

## 🗂 project structure

```bash
utils/
  --- run.ts
  --- input.ts # to process q inputs
src/
  --- day<N>
    --- answer.ts
    --- input.txt
    --- question.txt
package.json
tsconfig.json
```

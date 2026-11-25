import { mkdirSync, writeFileSync } from "node:fs";

// One roast line, fixed and deterministic: the same text on every run.
// No randomness, no network, no files read outside this repository.
const LINE =
  "My smart fridge updated its firmware overnight, and now the ice maker only works after I rate the update five stars.";

// The gate allows 1-200 characters: refuse loudly rather than write an
// invalid entry if the line ever grows past it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`roast line is ${LINE.length} characters; the gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

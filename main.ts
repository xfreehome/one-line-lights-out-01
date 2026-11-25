import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "lid closed mid-sentence. my cursor still blinks at the word you never finished.";

if (entry.length < 1 || entry.length > 200) throw new Error("entry must be 1-200 chars");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "lid closed mid-sentence. my cursor is still blinking at the word you never finished.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

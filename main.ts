import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I didn't eat your sock. I rescued it from the floor — then accidentally filed it under 'dinner.'";

// Gate: /output/entry.txt must be UTF-8 text of 1–200 characters.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry must be 1–200 characters, got ${entry.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${outPath}`);

import * as fs from "node:fs";
import * as path from "node:path";

// Funniest Lost Sock Status Update — make.fun program/v1 entry.
// Writes exactly one file: <output dir>/entry.txt containing a single
// status update in the voice of a lost sock (118 characters, no newline).
const text =
  "Status: left in a limo, now the groom's emergency pocket square. " +
  "If my argyle heel peeks out mid-vow, we're both dead.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_OUTPUT ||
  "/output";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");

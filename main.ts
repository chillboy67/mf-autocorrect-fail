// Files the autocorrect fail as entry.txt for the make.fun run.
// No raccoons were harmed in the running of this script.
import * as fs from "node:fs";
import * as path from "node:path";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const fail =
  "I meant to text my boss 'I will send the report today', but autocorrect sent 'I will send the raccoon today', and now security has questions.";

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "entry.txt"), fail);
console.log("autocorrect fail saved to " + path.join(dir, "entry.txt"));

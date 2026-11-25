import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "I meant to text my boss 'I will send the report today', but autocorrect sent 'I will send the raccoon today', and now security has questions.");

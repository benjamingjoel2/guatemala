// Collects the strings client components translate (t("…") in "use client" files, and msg("…") anywhere)
// into i18n/client-keys.json. The layout sends just these keys, translated, to the browser.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["app", "components", "config", "lib", "data"];
const files = [];
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.tsx?$/.test(f)) files.push(p);
  }
};
roots.forEach(walk);

const keys = new Set();
const lit = String.raw`(?:"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|\x60((?:[^\x60\\$]|\\.)*)\x60)`;
for (const f of files) {
  const src = readFileSync(f, "utf8");
  const client = /^\s*["']use client["']/.test(src);
  const re = new RegExp(String.raw`\b(${client ? "t|tf|msg" : "msg"})\(\s*` + lit, "g");
  for (const m of src.matchAll(re)) {
    const s = m[2] ?? m[3] ?? m[4];
    keys.add(JSON.parse(`"${s.replace(/\\'/g, "'").replace(/\\`/g, "`").replace(/"/g, '\\"').replace(/\\\\"/g, '\\"')}"`));
  }
}
writeFileSync("i18n/client-keys.json", JSON.stringify([...keys].sort(), null, 1) + "\n");
console.log(`i18n: ${keys.size} client keys`);

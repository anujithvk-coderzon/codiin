/**
 * Replaces the inline <footer> block on every converted page with the shared
 * <Footer /> component.
 *
 * The original HTML had 23 hand-written footer variants with inconsistent and
 * outdated program lists. Routing them all through one component means the
 * program order lives in exactly one place (lib/site.ts).
 *
 * Run from the `codiin` directory:  node scripts/use-shared-footer.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

function pages(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...pages(p));
    else if (entry === "page.tsx") out.push(p);
  }
  return out;
}

/** Course pages and legal pages get the full list; articles get the grouped one. */
function variantFor(file) {
  if (file.includes("/articles/")) return "article";
  return "program";
}

let changed = 0;
const skipped = [];

for (const file of pages("app")) {
  if (file === "app/page.tsx") continue; // hand-built home page

  const src = readFileSync(file, "utf8");
  const start = src.indexOf("\n      <footer");
  const endMarker = "\n      </footer>";
  const end = src.indexOf(endMarker);

  if (start === -1 || end === -1 || end < start) {
    skipped.push(file);
    continue;
  }

  const variant = variantFor(file);
  let out =
    src.slice(0, start) +
    `\n      <Footer variant="${variant}" />` +
    src.slice(end + endMarker.length);

  // Add the Footer import, keeping the existing import grouping.
  if (!out.includes('from "@/components/Footer"')) {
    const anchor = out.match(/^import .*from "@\/components\/(JsonLd|Navbar)";$/m);
    if (anchor) {
      out = out.replace(
        anchor[0],
        `import Footer from "@/components/Footer";\n${anchor[0]}`,
      );
    }
  }

  // Drop a now-unused Link import (the footer was often its only consumer).
  if (!/<Link[\s/>]/.test(out)) {
    out = out.replace(/^import Link from "next\/link";\n/m, "");
  }

  writeFileSync(file, out, "utf8");
  changed++;
}

console.log(`Rewired ${changed} pages to the shared <Footer />.`);
if (skipped.length) {
  console.log(`Skipped ${skipped.length}:`);
  for (const s of skipped) console.log("  " + s);
}

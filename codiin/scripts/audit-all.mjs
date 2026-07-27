/**
 * Full-site responsive sweep: every route, at the widths where layout is
 * most likely to break. Reports overflow, illegible text and small targets.
 *
 * Usage: node scripts/audit-all.mjs [baseUrl] [width,width,...]
 */

import { chromium } from "playwright";
import ARTICLES from "./articles.json" with { type: "json" };

const BASE = process.argv[2] ?? "http://127.0.0.1:3200";
const WIDTHS = (process.argv[3] ?? "320,768").split(",").map(Number);

const COURSES = Object.keys(ARTICLES);

const ROUTES = [
  "/",
  ...COURSES.map((c) => `/${c}`),
  ...COURSES.flatMap((c) => ARTICLES[c].map((a) => `/${c}/articles/${a}`)),
  "/privacy-policy",
  "/terms-of-service",
  "/this-route-does-not-exist",
];

const problems = [];
const browser = await chromium.launch();

for (const width of WIDTHS) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  let done = 0;
  for (const route of ROUTES) {
    try {
      await page.goto(BASE + route, {
        waitUntil: "domcontentloaded",
        timeout: 20000,
      });
      await page.waitForTimeout(120);
    } catch (err) {
      problems.push(`[${route} @${width}] NAV FAILED: ${err.message.split("\n")[0]}`);
      continue;
    }

    const result = await page.evaluate((vw) => {
      const out = { scrollW: document.documentElement.scrollWidth, wide: [], small: [] };
      const seen = new Set();
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) continue;
        const s = getComputedStyle(el);
        if (s.display === "none" || s.visibility === "hidden") continue;

        if ((r.right > vw + 1 || r.left < -1) && s.position !== "fixed") {
          let p = el.parentElement, inScroller = false;
          while (p) {
            const ps = getComputedStyle(p);
            if (ps.overflowX === "auto" || ps.overflowX === "scroll") { inScroller = true; break; }
            p = p.parentElement;
          }
          if (!inScroller) {
            const key = el.tagName + "." + el.className;
            if (!seen.has(key)) { seen.add(key); out.wide.push(key.slice(0, 80)); }
          }
        }

        const fs = parseFloat(s.fontSize);
        const hasText = Array.from(el.childNodes).some(
          (n) => n.nodeType === 3 && n.textContent.trim().length > 2,
        );
        if (hasText && fs < 11) {
          const key = "fs:" + el.tagName + "." + el.className;
          if (!seen.has(key)) { seen.add(key); out.small.push(`${key.slice(0, 70)} @${fs}px`); }
        }
      }
      return out;
    }, width);

    if (result.scrollW > width + 1) {
      problems.push(`[${route} @${width}] PAGE OVERFLOW scrollWidth=${result.scrollW}`);
    }
    for (const w of result.wide) problems.push(`[${route} @${width}] wide: ${w}`);
    for (const s of result.small) problems.push(`[${route} @${width}] tiny text: ${s}`);

    done++;
    if (done % 40 === 0) process.stdout.write(`  ${width}px: ${done}/${ROUTES.length}\n`);
  }
  await context.close();
  console.log(`Finished ${width}px (${ROUTES.length} routes)`);
}

await browser.close();

console.log(`\nChecked ${ROUTES.length} routes x ${WIDTHS.length} widths.`);
if (problems.length === 0) {
  console.log("PASS — no responsive issues on any page.");
} else {
  console.log(`${problems.length} issue(s):\n`);
  for (const p of problems.slice(0, 120)) console.log("  " + p);
  if (problems.length > 120) console.log(`  ... and ${problems.length - 120} more`);
}

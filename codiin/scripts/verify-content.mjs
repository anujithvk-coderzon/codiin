/**
 * Content parity check: every meaningful text fragment in the original HTML
 * page must be present in the rendered Next.js page.
 *
 * Usage: node scripts/verify-content.mjs [baseUrl]
 */

import { readFileSync } from "node:fs";
import { chromium } from "playwright";
import ARTICLES from "./articles.json" with { type: "json" };

const BASE = process.argv[2] ?? "http://127.0.0.1:3300";
const SRC = new URL("../../", import.meta.url).pathname;

const COURSES = Object.keys(ARTICLES);

const PAGES = [
  ["index.html", "/"],
  ...COURSES.map((c) => [`${c}.html`, `/${c}`]),
  ...COURSES.flatMap((c) =>
    ARTICLES[c].map((a) => [`${c}/articles/${a}.html`, `/${c}/articles/${a}`]),
  ),
  ["privacy-policy.html", "/privacy-policy"],
  ["terms-of-service.html", "/terms-of-service"],
];

const ENT = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'",
  "&nbsp;": " ",
  // Symbol entities map to the real character so both sides of the
  // comparison normalise identically.
  "&copy;": "\u00a9", "&mdash;": "\u2014", "&ndash;": "\u2013",
  "&rsquo;": "\u2019", "&lsquo;": "\u2018", "&ldquo;": "\u201c",
  "&rdquo;": "\u201d", "&hellip;": "\u2026", "&times;": "\u00d7",
  "&check;": "\u2713", "&rarr;": "\u2192", "&larr;": "\u2190",
};

function sourceText(file) {
  let html = readFileSync(SRC + file, "utf8");
  html = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<style[\s\S]*?<\/style>/gi, "");
  html = html.replace(/<head[\s\S]*?<\/head>/gi, "");
  html = html.replace(/<!--[\s\S]*?-->/g, "");
  // Code samples are compared separately; their raw < confuses tag stripping.
  html = html.replace(/<pre[\s\S]*?<\/pre>/gi, " ");
  html = html.replace(/<[^>]+>/g, " ");
  html = html.replace(/&[a-z#0-9]+;/gi, (m) => ENT[m] ?? " ");
  return html.replace(/\s+/g, " ").trim();
}

/** Sentence-ish fragments long enough to be meaningful. */
function fragments(text) {
  return text
    .split(/(?<=[.!?:])\s+|\s{2,}/)
    .map((s) => s.trim())
    .filter((s) => s.length >= 25 && /[a-zA-Z]/.test(s));
}

/**
 * Content characters only. Element boundaries produce different whitespace in
 * the source string vs the rendered DOM, so whitespace and punctuation are
 * dropped entirely — a genuinely absent sentence is still absent.
 */
function normalize(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();

let checked = 0;
const failures = [];

for (const [file, route] of PAGES) {
  await page.goto(BASE + route, { waitUntil: "domcontentloaded", timeout: 20000 });
  // textContent, not innerText: it includes content that is present in the
  // DOM but visually hidden (e.g. the success modal).
  const rendered = normalize(
    await page.evaluate(() => {
      const clone = document.body.cloneNode(true);
      for (const n of clone.querySelectorAll("script, style, noscript, pre")) n.remove();
      return clone.textContent ?? "";
    }),
  );

  const missing = [];
  for (const frag of fragments(sourceText(file))) {
    if (!rendered.includes(normalize(frag))) missing.push(frag);
  }

  if (missing.length) {
    failures.push({ route, count: missing.length, samples: missing.slice(0, 3) });
  }
  checked++;
  if (checked % 40 === 0) process.stdout.write(`  ${checked}/${PAGES.length}\n`);
}

await browser.close();

console.log(`\nCompared ${checked} pages against their original HTML.`);
if (failures.length === 0) {
  console.log("PASS — every text fragment from the original is present.");
} else {
  console.log(`${failures.length} page(s) with missing text:\n`);
  for (const f of failures.slice(0, 25)) {
    console.log(`  ${f.route} — ${f.count} missing`);
    for (const s of f.samples) console.log(`      "${s.slice(0, 110)}"`);
  }
}

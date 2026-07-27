/**
 * Responsive audit. Loads pages at a range of widths and reports:
 *   - horizontal page overflow (the page itself scrolls sideways)
 *   - individual elements wider than the viewport
 *   - text smaller than a legible floor
 *   - tap targets below 24px
 *
 * Usage: node scripts/audit.mjs [baseUrl]
 */

import { chromium } from "playwright";

const BASE = process.argv[2] ?? "http://127.0.0.1:3000";

const WIDTHS = [320, 360, 390, 480, 768, 1024, 1280, 1440];

const PAGES = [
  ["home", "/"],
  ["course", "/agentic-ai"],
  ["course2", "/data-science"],
  ["course3", "/full-stack-dotnet"],
  ["article", "/agentic-ai/articles/rag"],
  ["article-table", "/agentic-ai/articles/vector-databases"],
  ["article-code", "/full-stack-dotnet/articles/aspnet-core"],
  ["legal", "/privacy-policy"],
  ["terms", "/terms-of-service"],
  ["404", "/this-page-does-not-exist"],
];

const problems = [];

const browser = await chromium.launch();

// Guard: if the stylesheet fails to load, every page renders as unstyled
// block flow, which trivially "passes" an overflow check. Verify first.
{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(500);
  const ok = await page.evaluate(() => {
    const btn = document.querySelector("a.btn.btn-primary");
    if (!btn) return "no .btn found on home page";
    const s = getComputedStyle(btn);
    if (!s.display.includes("flex")) return `.btn display is "${s.display}" — stylesheet not applied`;
    const navbar = document.querySelector(".navbar");
    if (navbar && getComputedStyle(navbar).position !== "fixed") {
      return ".navbar is not fixed — stylesheet not applied";
    }
    return null;
  });
  await context.close();
  if (ok) {
    console.error(`STYLESHEET CHECK FAILED: ${ok}`);
    console.error("Rebuild and restart the server before auditing.");
    await browser.close();
    process.exit(2);
  }
  console.log("Stylesheet loaded — running audit.\n");
}

for (const [name, path] of PAGES) {
  for (const width of WIDTHS) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    try {
      await page.goto(BASE + path, {
        waitUntil: "domcontentloaded",
        timeout: 20000,
      });
      await page.waitForTimeout(400);
    } catch (err) {
      problems.push(`[${name} @${width}] NAVIGATION FAILED: ${err.message.split("\n")[0]}`);
      await context.close();
      continue;
    }

    const result = await page.evaluate((vw) => {
      const out = { scrollW: 0, wide: [], small: [], tiny: [] };
      out.scrollW = document.documentElement.scrollWidth;

      const seen = new Set();
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) continue;

        const style = getComputedStyle(el);
        if (style.display === "none" || style.visibility === "hidden") continue;

        // Element sticks out past the right edge of the viewport.
        // Allow 1px for sub-pixel rounding.
        const overflowsRight = r.right > vw + 1;
        const startsLeft = r.left < -1;
        if ((overflowsRight || startsLeft) && style.position !== "fixed") {
          // Ignore elements inside an intentional horizontal scroller.
          let p = el.parentElement;
          let inScroller = false;
          while (p) {
            const ps = getComputedStyle(p);
            if (ps.overflowX === "auto" || ps.overflowX === "scroll") {
              inScroller = true;
              break;
            }
            p = p.parentElement;
          }
          if (!inScroller) {
            const key = el.tagName + "." + el.className;
            if (!seen.has(key)) {
              seen.add(key);
              out.wide.push({
                sel: key.slice(0, 90),
                left: Math.round(r.left),
                right: Math.round(r.right),
              });
            }
          }
        }

        // Legibility: body text below 11px.
        const fs = parseFloat(style.fontSize);
        const hasText =
          el.childNodes.length > 0 &&
          Array.from(el.childNodes).some(
            (n) => n.nodeType === 3 && n.textContent.trim().length > 2,
          );
        if (hasText && fs < 11) {
          const key = el.tagName + "." + el.className + "@" + fs;
          if (!seen.has(key)) {
            seen.add(key);
            out.small.push({ sel: key.slice(0, 90), size: fs });
          }
        }

        // Tap targets.
        if (
          (el.tagName === "A" || el.tagName === "BUTTON") &&
          r.width > 0 &&
          r.height > 0 &&
          r.height < 24 &&
          el.textContent.trim().length > 0
        ) {
          const key = "tap:" + el.tagName + "." + el.className;
          if (!seen.has(key)) {
            seen.add(key);
            out.tiny.push({
              sel: key.slice(0, 90),
              h: Math.round(r.height),
            });
          }
        }
      }
      return out;
    }, width);

    if (result.scrollW > width + 1) {
      problems.push(
        `[${name} @${width}] PAGE OVERFLOW: scrollWidth=${result.scrollW}`,
      );
    }
    for (const w of result.wide) {
      problems.push(
        `[${name} @${width}] wide element: ${w.sel} (left=${w.left} right=${w.right})`,
      );
    }
    for (const s of result.small) {
      problems.push(`[${name} @${width}] tiny text ${s.size}px: ${s.sel}`);
    }
    for (const t of result.tiny) {
      problems.push(`[${name} @${width}] small tap target ${t.h}px: ${t.sel}`);
    }

    await context.close();
  }
}

await browser.close();

if (problems.length === 0) {
  console.log("PASS — no responsive issues found.");
} else {
  console.log(`${problems.length} issue(s):\n`);
  for (const p of problems) console.log("  " + p);
}

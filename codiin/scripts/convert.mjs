/**
 * One-shot migration: converts the static HTML site into App Router pages.
 *
 * Run from the `codiin` directory:  node scripts/convert.mjs
 *
 * Design notes
 * ------------
 * - `<pre>` contents are pulled out as RAW TEXT before parsing. The source
 *   code samples contain unescaped `<` (e.g. `List<Product>`, `<div>`), which
 *   any HTML parser — including the browser — would swallow as tags. Emitting
 *   them as template literals preserves both the characters and the
 *   indentation.
 * - Every text node is emitted as a JS string expression, so JSX whitespace
 *   trimming can never eat a space between inline elements.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

const SRC = resolve(process.cwd(), "..");

const { parse } = await import("node-html-parser");

/* ------------------------------------------------------------------ utils */

const VOID = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

/** HTML attribute name to JSX prop name. aria- and data- prefixes stay as-is. */
const ATTR_MAP = {
  class: "className",
  for: "htmlFor",
  colspan: "colSpan",
  rowspan: "rowSpan",
  tabindex: "tabIndex",
  maxlength: "maxLength",
  autocomplete: "autoComplete",
  readonly: "readOnly",
  novalidate: "noValidate",
  enctype: "encType",
  usemap: "useMap",
  srcset: "srcSet",
  crossorigin: "crossOrigin",
  datetime: "dateTime",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-opacity": "strokeOpacity",
  "stroke-miterlimit": "strokeMiterlimit",
  "fill-rule": "fillRule",
  "fill-opacity": "fillOpacity",
  "clip-rule": "clipRule",
  "clip-path": "clipPath",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "text-anchor": "textAnchor",
  "font-size": "fontSize",
  "font-family": "fontFamily",
  "font-weight": "fontWeight",
  "vector-effect": "vectorEffect",
  "xlink:href": "xlinkHref",
  "xml:space": "xmlSpace",
  viewbox: "viewBox",
  preserveaspectratio: "preserveAspectRatio",
  gradientunits: "gradientUnits",
  gradienttransform: "gradientTransform",
  spreadmethod: "spreadMethod",
  patternunits: "patternUnits",
  markerwidth: "markerWidth",
  markerheight: "markerHeight",
  refx: "refX",
  refy: "refY",
};

const BOOLEAN_ATTRS = new Set([
  "required", "disabled", "checked", "selected", "readonly",
  "multiple", "autofocus", "novalidate", "hidden", "open",
]);

const ENTITIES = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"',
  "&apos;": "'", "&#39;": "'", "&#x27;": "'", "&nbsp;": "\u00a0",
  "&copy;": "\u00a9", "&mdash;": "\u2014", "&ndash;": "\u2013",
  "&hellip;": "\u2026", "&rsquo;": "\u2019", "&lsquo;": "\u2018",
  "&ldquo;": "\u201c", "&rdquo;": "\u201d", "&times;": "\u00d7",
  "&check;": "\u2713", "&rarr;": "\u2192", "&larr;": "\u2190",
  "&deg;": "\u00b0", "&trade;": "\u2122", "&reg;": "\u00ae",
};

function decodeEntities(text) {
  return text
    .replace(/&(?:amp|lt|gt|quot|apos|nbsp|copy|mdash|ndash|hellip|rsquo|lsquo|ldquo|rdquo|times|check|rarr|larr|deg|trade|reg|#39|#x27);/g,
      (m) => ENTITIES[m] ?? m)
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)));
}

/** Escapes a string for use inside a double-quoted JS string literal. */
function jsString(text) {
  return JSON.stringify(text);
}

/** Escapes a string for use inside a template literal. */
function templateLiteral(text) {
  return "`" + text.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";
}

function camel(prop) {
  if (prop.startsWith("--")) return prop;
  return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

/* ------------------------------------------------------------ link mapping */

const COURSE_SLUGS = new Set([
  "full-stack-javascript", "full-stack-python", "full-stack-java",
  "full-stack-dotnet", "hybrid-mobile-app", "data-analytics",
  "data-engineering", "data-science", "agentic-ai",
]);

/**
 * Rewrites an href from the old .html layout to the new clean routes,
 * resolving relative paths against the file being converted.
 */
function mapHref(href, srcFile) {
  if (!href) return href;
  if (/^(https?:|mailto:|tel:|#|data:)/i.test(href)) return href;

  const [pathPart, hash = ""] = href.split("#");
  const suffix = hash ? `#${hash}` : "";

  if (!pathPart) return href;

  // Already site-absolute: only strip the .html extension.
  if (pathPart.startsWith("/")) {
    const cleaned = pathPart.replace(/\.html$/, "");
    return (cleaned === "/index" ? "/" : cleaned) + suffix;
  }

  // Resolve relative to the source file's directory, then make site-absolute.
  const abs = resolve(dirname(join(SRC, srcFile)), pathPart);
  let rel = relative(SRC, abs).split("\\").join("/");

  if (rel === "index.html" || rel === "") return `/${suffix}`;
  if (rel.startsWith("img/") || rel.startsWith("favicon")) return `/${rel}`;

  rel = rel.replace(/\.html$/, "");
  if (rel === "index") return `/${suffix}`;
  return `/${rel}${suffix}`;
}

/* --------------------------------------------------------------- pre stash */

/**
 * Replaces every <pre>…</pre> with a placeholder and returns the raw inner
 * text, so unescaped `<` inside code samples survives parsing.
 */
function stashPreBlocks(html) {
  const blocks = [];
  const out = html.replace(/<pre([^>]*)>([\s\S]*?)<\/pre>/gi, (_m, attrs, inner) => {
    let content = inner;
    let codeAttrs = null;
    const codeMatch = content.match(/^\s*<code([^>]*)>([\s\S]*?)<\/code>\s*$/i);
    if (codeMatch) {
      codeAttrs = codeMatch[1];
      content = codeMatch[2];
    }
    blocks.push({ attrs, codeAttrs, text: decodeEntities(content) });
    return `<pre data-stash="${blocks.length - 1}"></pre>`;
  });
  return { html: out, blocks };
}

function parseAttrString(attrString) {
  const attrs = {};
  if (!attrString) return attrs;
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let m;
  while ((m = re.exec(attrString))) {
    attrs[m[1]] = m[2] ?? m[3] ?? m[4] ?? "";
  }
  return attrs;
}

/* ------------------------------------------------------------- JSX emitter */

/** Tags that sit on the text line, where a neighbouring space is visible. */
const INLINE_TAGS = new Set([
  "a", "span", "strong", "b", "em", "i", "u", "s", "small", "code", "kbd",
  "samp", "var", "sub", "sup", "abbr", "cite", "q", "time", "mark", "label",
  "button", "img", "svg", "br", "input", "select", "textarea",
]);

function isInline(node) {
  if (!node) return false;
  if (node.nodeType === 3) return (node.rawText ?? "").trim() !== "";
  return INLINE_TAGS.has((node.rawTagName ?? "").toLowerCase());
}

class Emitter {
  constructor(srcFile, preBlocks) {
    this.srcFile = srcFile;
    this.preBlocks = preBlocks;
    this.usesLink = false;
    this.usesCssProperties = false;
  }

  attributes(node) {
    const parts = [];
    for (const [rawName, rawValue] of Object.entries(node.attributes ?? {})) {
      const name = rawName.toLowerCase();
      if (name === "data-stash") continue;

      if (name === "style") {
        const style = {};
        for (const decl of rawValue.split(";")) {
          const idx = decl.indexOf(":");
          if (idx === -1) continue;
          const prop = decl.slice(0, idx).trim();
          const val = decl.slice(idx + 1).trim();
          if (!prop || !val) continue;
          style[camel(prop)] = val;
          if (prop.startsWith("--")) this.usesCssProperties = true;
        }
        if (Object.keys(style).length === 0) continue;
        const body = Object.entries(style)
          .map(([k, v]) => `${JSON.stringify(k)}: ${jsString(v)}`)
          .join(", ");
        const hasCustom = Object.keys(style).some((k) => k.startsWith("--"));
        parts.push(
          `style={{ ${body} }${hasCustom ? " as CSSProperties" : ""}}`.replace(
            /\}( as CSSProperties)\}$/,
            "}$1}",
          ),
        );
        continue;
      }

      let value = decodeEntities(rawValue);
      if ((name === "href" || name === "src") && value) {
        value = mapHref(value, this.srcFile);
      }

      const jsxName = ATTR_MAP[name] ?? name;

      if (BOOLEAN_ATTRS.has(name) && (value === "" || value === name)) {
        parts.push(jsxName);
        continue;
      }
      if (name === "aria-hidden" || name === "aria-expanded") {
        parts.push(`${jsxName}={${value === "true"}}`);
        continue;
      }
      parts.push(`${jsxName}=${jsString(value)}`);
    }
    return parts;
  }

  /**
   * Collapses whitespace the way HTML rendering does.
   *
   * A whitespace-only node between two inline elements is a real, visible
   * space (`<a>…</a> <span>…</span>` renders with a gap), so it is preserved
   * as {" "}. Between block elements it collapses to nothing — and emitting
   * one there would inject a stray anonymous item into flex/grid containers.
   */
  text(node, isFirst, isLast, siblings, index) {
    const raw = decodeEntities(node.rawText ?? "");
    const collapsed = raw.replace(/\s+/g, " ");

    if (collapsed.trim() === "") {
      if (isFirst || isLast) return null;
      const prevInline = isInline(siblings[index - 1]);
      const nextInline = isInline(siblings[index + 1]);
      return prevInline && nextInline ? `{" "}` : null;
    }

    let out = collapsed;
    if (isFirst) out = out.replace(/^ /, "");
    if (isLast) out = out.replace(/ $/, "");
    if (out === "") return null;
    return `{${jsString(out)}}`;
  }

  preBlock(node, indent) {
    const idx = Number(node.getAttribute("data-stash"));
    const block = this.preBlocks[idx];
    const pad = "  ".repeat(indent);
    const preAttrs = this.attributes({ attributes: parseAttrString(block.attrs) });
    const open = preAttrs.length ? `<pre ${preAttrs.join(" ")}>` : "<pre>";

    if (block.codeAttrs !== null) {
      const codeAttrs = this.attributes({
        attributes: parseAttrString(block.codeAttrs),
      });
      const codeOpen = codeAttrs.length ? `<code ${codeAttrs.join(" ")}>` : "<code>";
      return `${pad}${open}${codeOpen}{${templateLiteral(block.text)}}</code></pre>`;
    }
    return `${pad}${open}{${templateLiteral(block.text)}}</pre>`;
  }

  node(node, indent, isFirst, isLast, siblings, index) {
    const pad = "  ".repeat(indent);

    if (node.nodeType === 3) {
      const t = this.text(node, isFirst, isLast, siblings, index);
      return t === null ? null : pad + t;
    }
    if (node.nodeType === 8) return null; // comment

    const tag = (node.rawTagName ?? "").toLowerCase();
    if (!tag) return null;

    if (tag === "pre" && node.getAttribute("data-stash") !== undefined) {
      return this.preBlock(node, indent);
    }

    // Internal links become next/link for client-side navigation.
    let jsxTag = tag;
    const href = node.getAttribute?.("href");
    if (tag === "a" && href && mapHref(href, this.srcFile).startsWith("/")) {
      jsxTag = "Link";
      this.usesLink = true;
    }

    const attrs = this.attributes(node);
    const attrString = attrs.length ? " " + attrs.join(" ") : "";

    if (VOID.has(tag)) return `${pad}<${jsxTag}${attrString} />`;

    const children = this.children(node, indent + 1);
    if (children.length === 0) return `${pad}<${jsxTag}${attrString} />`;

    const body = children.join("\n");
    const element = `${pad}<${jsxTag}${attrString}>\n${body}\n${pad}</${jsxTag}>`;

    // Tables get a horizontally scrollable wrapper so a wide table never
    // forces the whole page to scroll sideways on a phone.
    if (tag === "table") {
      const inner = element
        .split("\n")
        .map((l) => "  " + l)
        .join("\n");
      return `${pad}<div className="table-wrap">\n${inner}\n${pad}</div>`;
    }
    return element;
  }

  children(node, indent) {
    const kids = (node.childNodes ?? []).filter((c) => {
      if (c.nodeType === 8) return false;
      if (c.nodeType === 3) return true;
      return !!(c.rawTagName ?? "");
    });
    const out = [];
    kids.forEach((child, i) => {
      const line = this.node(child, indent, i === 0, i === kids.length - 1, kids, i);
      if (line !== null) out.push(line);
    });
    return out;
  }
}

/* ---------------------------------------------------------- head metadata */

function extractMeta(html) {
  const get = (re) => {
    const m = html.match(re);
    return m ? decodeEntities(m[1]).trim() : "";
  };
  return {
    title: get(/<title>([\s\S]*?)<\/title>/i),
    description: get(/<meta\s+name="description"\s+content="([^"]*)"/i),
    keywords: get(/<meta\s+name="keywords"\s+content="([^"]*)"/i),
    canonical: get(/<link\s+rel="canonical"\s+href="([^"]*)"/i),
    ogType: get(/<meta\s+property="og:type"\s+content="([^"]*)"/i),
    ogTitle: get(/<meta\s+property="og:title"\s+content="([^"]*)"/i),
    ogDesc: get(/<meta\s+property="og:description"\s+content="([^"]*)"/i),
    ogUrl: get(/<meta\s+property="og:url"\s+content="([^"]*)"/i),
    ogImage: get(/<meta\s+property="og:image"\s+content="([^"]*)"/i),
    twTitle: get(/<meta\s+name="twitter:title"\s+content="([^"]*)"/i),
    twDesc: get(/<meta\s+name="twitter:description"\s+content="([^"]*)"/i),
    robots: get(/<meta\s+name="robots"\s+content="([^"]*)"/i),
  };
}

function extractJsonLd(html) {
  const out = [];
  const re = /<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    try {
      out.push(JSON.parse(m[1]));
    } catch {
      /* malformed block in source — skip rather than emit broken JS */
    }
  }
  return out;
}

function extractNavLinks(html, srcFile) {
  // Most pages use <ul class="nav-links">; eleven article pages ship a bare
  // <nav><ul> instead. Fall back to that so those pages keep their own links.
  const block =
    html.match(/<ul class="nav-links"[^>]*>([\s\S]*?)<\/ul>/i) ??
    html.match(/<nav[^>]*>\s*<ul[^>]*>([\s\S]*?)<\/ul>/i);
  if (!block) return null;
  const links = [];
  const re = /<a\s+href="([^"]*)"([^>]*)>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(block[1]))) {
    links.push({
      href: mapHref(m[1], srcFile),
      label: decodeEntities(m[3].replace(/<[^>]+>/g, "")).trim(),
      cta: /btn-primary/.test(m[2]),
    });
  }
  return links.length ? links : null;
}

function extractWhatsApp(html) {
  const m = html.match(/whatsapp-float[^>]*/);
  const href = html.match(/<a\s+href="(https:\/\/wa\.me\/[^"]*)"[^>]*class="whatsapp-float"/i)
    ?? html.match(/class="whatsapp-float"[^>]*href="(https:\/\/wa\.me\/[^"]*)"/i);
  if (!href) return m ? "" : null;
  const text = href[1].split("text=")[1];
  return text ? decodeURIComponent(text.replace(/\+/g, " ")) : "";
}

/**
 * Splits a document into its main content and its footer.
 *
 * Must be given HTML whose <pre> blocks are already stashed — several code
 * samples contain a literal `<footer>` tag that would otherwise be mistaken
 * for the page footer.
 */
function extractRegions(html) {
  let start = 0;
  const headerEnd = html.search(/<\/header>/i);
  const navEnd = html.search(/<\/nav>/i);
  if (headerEnd !== -1) start = headerEnd + "</header>".length;
  else if (navEnd !== -1) start = navEnd + "</nav>".length;

  const footerStart = html.search(/<footer[\s>]/i);
  const footerEnd = html.search(/<\/footer>/i);

  const bodyEnd = footerStart === -1 ? html.search(/<\/body>/i) : footerStart;
  let body = html.slice(start, bodyEnd === -1 ? undefined : bodyEnd);

  let footer = "";
  if (footerStart !== -1 && footerEnd !== -1) {
    footer = html.slice(footerStart, footerEnd + "</footer>".length);
  }

  const clean = (s) =>
    s
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<a[^>]*class="whatsapp-float"[\s\S]*?<\/a>/gi, "")
      .replace(/<div class="modal"[\s\S]*?<\/div>\s*<\/div>/gi, "")
      .trim();

  body = clean(body);

  // Unwrap <main> — the generated page supplies its own.
  const mainMatch = body.match(/<main[^>]*>([\s\S]*)<\/main>/i);
  if (mainMatch) body = mainMatch[1].trim();

  return { body, footer: clean(footer) };
}

/* ------------------------------------------------------------- page writer */

function metadataLiteral(meta, route) {
  const lines = [];
  if (meta.title) lines.push(`  title: ${jsString(meta.title.replace(/\s*\|\s*CODiiN.*$/, ""))},`);
  if (meta.description) lines.push(`  description: ${jsString(meta.description)},`);
  if (meta.keywords) {
    const kw = meta.keywords.split(",").map((k) => k.trim()).filter(Boolean);
    lines.push(`  keywords: [${kw.map(jsString).join(", ")}],`);
  }
  if (meta.robots && /noindex/i.test(meta.robots)) {
    lines.push(`  robots: { index: false, follow: false },`);
  }
  lines.push(`  alternates: { canonical: ${jsString(route)} },`);

  const og = [];
  og.push(`    type: ${jsString(meta.ogType || "website")},`);
  og.push(`    url: ${jsString(route)},`);
  if (meta.ogTitle) og.push(`    title: ${jsString(meta.ogTitle)},`);
  if (meta.ogDesc) og.push(`    description: ${jsString(meta.ogDesc)},`);
  if (meta.ogImage) {
    const img = meta.ogImage.replace(/^https?:\/\/[^/]+/, "");
    og.push(`    images: [${jsString(img)}],`);
  }
  lines.push(`  openGraph: {\n${og.join("\n")}\n  },`);

  if (meta.twTitle || meta.twDesc) {
    const tw = [`    card: "summary_large_image",`];
    if (meta.twTitle) tw.push(`    title: ${jsString(meta.twTitle)},`);
    if (meta.twDesc) tw.push(`    description: ${jsString(meta.twDesc)},`);
    lines.push(`  twitter: {\n${tw.join("\n")}\n  },`);
  }
  return `{\n${lines.join("\n")}\n}`;
}

function convert(srcFile, outFile, { exportName, notFound = false }) {
  const raw = readFileSync(join(SRC, srcFile), "utf8");
  const meta = extractMeta(raw);
  const jsonLd = extractJsonLd(raw);
  const navLinks = extractNavLinks(raw, srcFile);
  const whatsapp = extractWhatsApp(raw);

  // Strip head/script/style, then stash <pre> before any structural search so
  // literal tags inside code samples cannot be mistaken for page structure.
  const doc = raw
    .replace(/<head[\s\S]*?<\/head>/i, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const { html: stashed, blocks } = stashPreBlocks(doc);
  const regions = extractRegions(stashed);

  const parseOpts = {
    lowerCaseTagName: false,
    comment: false,
    blockTextElements: { script: true, noscript: true, style: true, pre: false },
  };

  const emitter = new Emitter(srcFile, blocks);
  const body = emitter
    .children(parse(regions.body, parseOpts), 4)
    .join("\n");
  const footer = regions.footer
    ? emitter.children(parse(regions.footer, parseOpts), 3).join("\n")
    : "";

  const route = "/" + outFile.replace(/^app\//, "").replace(/\/page\.tsx$/, "").replace(/^\/?/, "");
  const routePath = route === "/not-found" ? "/404" : route;

  const imports = [];
  if (!notFound) imports.push(`import type { Metadata } from "next";`);
  if (emitter.usesCssProperties) imports.push(`import type { CSSProperties } from "react";`);
  if (emitter.usesLink) imports.push(`import Link from "next/link";`);
  if (jsonLd.length) imports.push(`import JsonLd from "@/components/JsonLd";`);
  imports.push(`import Navbar from "@/components/Navbar";`);
  if (whatsapp !== null) imports.push(`import WhatsAppFloat from "@/components/WhatsAppFloat";`);

  const parts = [imports.join("\n"), ""];

  if (!notFound) {
    parts.push(`export const metadata: Metadata = ${metadataLiteral(meta, routePath)};`, "");
  }

  if (navLinks) {
    const links = navLinks
      .map((l) => `  { href: ${jsString(l.href)}, label: ${jsString(l.label)}${l.cta ? ", cta: true" : ""} },`)
      .join("\n");
    parts.push(`const NAV_LINKS = [\n${links}\n];`, "");
  }

  jsonLd.forEach((data, i) => {
    parts.push(
      `const SCHEMA_${i + 1} = ${JSON.stringify(data, null, 2)} as const;`,
      "",
    );
  });

  const schemaTags = jsonLd.map((_, i) => `      <JsonLd data={SCHEMA_${i + 1}} />`).join("\n");

  parts.push(
    `export default function ${exportName}() {`,
    `  return (`,
    `    <>`,
    ...(schemaTags ? [schemaTags] : []),
    `      <Navbar${navLinks ? " links={NAV_LINKS}" : ""} />`,
    ``,
    `      <main>`,
    body,
    `      </main>`,
    ``,
    ...(footer ? [footer, ``] : []),
    ...(whatsapp !== null
      ? [`      <WhatsAppFloat${whatsapp ? ` message={${jsString(whatsapp)}}` : ""} />`]
      : []),
    `    </>`,
    `  );`,
    `}`,
    ``,
  );

  const outPath = join(process.cwd(), outFile);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, parts.join("\n"), "utf8");
  return outFile;
}

/* --------------------------------------------------------------- pipeline */

function pascal(slug) {
  return slug
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");
}

const written = [];

// Course pages
for (const slug of COURSE_SLUGS) {
  written.push(
    convert(`${slug}.html`, `app/${slug}/page.tsx`, {
      exportName: `${pascal(slug)}Page`,
    }),
  );
}

// Article pages
for (const slug of COURSE_SLUGS) {
  const dir = join(SRC, slug, "articles");
  if (!existsSync(dir)) continue;
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".html"))) {
    const article = file.replace(/\.html$/, "");
    written.push(
      convert(`${slug}/articles/${file}`, `app/${slug}/articles/${article}/page.tsx`, {
        exportName: `${pascal(slug)}${pascal(article)}Page`,
      }),
    );
  }
}

// Legal pages
for (const slug of ["privacy-policy", "terms-of-service"]) {
  written.push(
    convert(`${slug}.html`, `app/${slug}/page.tsx`, {
      exportName: `${pascal(slug)}Page`,
    }),
  );
}

// app/not-found.tsx is hand-written: the original 404 carried its own inline
// <style> block and a `javascript:history.back()` link, neither of which
// survives a mechanical conversion. Left alone on purpose.

console.log(`Converted ${written.length} pages.`);

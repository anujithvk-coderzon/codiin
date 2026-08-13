/**
 * Whether a request came from a machine rather than a person.
 *
 * Checked before a visit is written, so crawlers never reach the Visit table
 * at all — the count on the dashboard should be people, not Googlebot working
 * through the sitemap.
 *
 * Two things are being caught:
 *
 *  - crawlers and previewers that identify themselves, which is most of them.
 *    Search engines, AI crawlers, SEO tools and the link-preview fetchers
 *    behind WhatsApp and Facebook all announce what they are.
 *  - HTTP libraries and automation tools, which announce themselves too
 *    because nobody bothered to change the default.
 *
 * What it cannot catch is a scraper deliberately sending a normal Chrome
 * user agent — from the outside that is indistinguishable from Chrome. This
 * removes the honest majority, not every last one.
 */
const BOT = new RegExp(
  [
    // Self-declared crawlers
    "bot", "crawl", "spider", "slurp", "scrape", "index",
    /* Google runs plenty of crawlers whose names contain no "bot" at all —
       GoogleOther for non-search product work, Google-NotebookLM when someone
       pastes a URL into it, Google-Extended, Google-InspectionTool,
       APIs-Google, Mediapartners-Google. Matched on the hyphen rather than on
       "google" alone, because a real person using the Google app on an iPhone
       sends "GSA/" in an otherwise ordinary Safari user agent and must not be
       caught. None of these affect search ranking — Googlebot itself is
       already covered by "bot" above. */
    "googleother", "google-", "-google",
    // Other AI fetchers that do not say "bot" either.
    "claude-", "meta-external", "duckassist", "ccbot",
    // Named ones that do not contain any of the above
    "bytespider", "yandex", "baidu", "sogou", "duckduck", "petal",
    "perplexity", "chatgpt", "anthropic", "cohere",
    // Link previewers
    "facebookexternalhit", "whatsapp", "telegram", "discord", "slack",
    "embedly", "skypeuripreview", "preview",
    // Monitoring and auditing
    "monitor", "uptime", "pingdom", "lighthouse", "gtmetrix", "chrome-privacy",
    // Automation frameworks
    "headless", "phantom", "selenium", "puppeteer", "playwright",
    // HTTP clients left on their defaults
    "curl", "wget", "python-requests", "python-urllib", "go-http",
    "java/", "okhttp", "libwww", "httpclient", "axios", "node-fetch",
    "postman", "insomnia", "guzzle", "restsharp",
  ].join("|"),
  "i",
);

/**
 * @param userAgent      the `user-agent` header
 * @param acceptLanguage the `accept-language` header
 */
export const isBot = (
  userAgent: string | null,
  acceptLanguage: string | null,
) => {
  // No user agent at all is not a browser. Every real one sends it.
  if (!userAgent) return true;

  /* Neither is a request with no Accept-Language. A browser always sends it —
     it is how the page knows which language to serve — but a script fetching
     HTML has no reason to, and plenty do not bother. It catches a class of
     scraper that copies a Chrome user-agent string and stops there. */
  if (!acceptLanguage) return true;

  return BOT.test(userAgent);
};

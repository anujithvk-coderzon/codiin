
const BOT = new RegExp(
  [
    "bot", "crawl", "spider", "slurp", "scrape", "index",
    "googleother", "google-", "-google",
    "claude-", "meta-external", "duckassist", "ccbot",
    "bytespider", "yandex", "baidu", "sogou", "duckduck", "petal",
    "perplexity", "chatgpt", "anthropic", "cohere",
    "facebookexternalhit", "whatsapp", "telegram", "discord", "slack",
    "embedly", "skypeuripreview", "preview",
    "monitor", "uptime", "pingdom", "lighthouse", "gtmetrix", "chrome-privacy",
    "headless", "phantom", "selenium", "puppeteer", "playwright",
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


const OLDEST_REAL_CHROME = 140;


const BLOCKED_PREFIXES = ["43.172.", "43.173.", "65.21."];

export const isBlockedNetwork = (ip: string) =>
  BLOCKED_PREFIXES.some((prefix) => ip.startsWith(prefix));

export const isBot = (
  userAgent: string | null,
  acceptLanguage: string | null,
) => {
  if (!userAgent) return true;

  if (!acceptLanguage) return true;

  if (BOT.test(userAgent)) return true;

  const version = Number(userAgent.match(/Chrome\/(\d+)/)?.[1]);
  if (version < OLDEST_REAL_CHROME) return true;

  return false;
};

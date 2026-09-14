/**
 * URL-safe slug: lowercase ASCII letters, digits and single hyphens only.
 * Titles often carry punctuation (em dashes, commas, "&"), which the browser
 * percent-encodes and the event page then fails to match, so everything that
 * is not a letter or digit collapses to one hyphen.
 */
export function slugify(text: string) {
  return text
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

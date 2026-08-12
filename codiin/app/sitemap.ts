import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { PROGRAMS, SITE_URL } from "@/lib/site";

/**
 * Replaces the hand-maintained sitemap.xml. Generated from the real route
 * table, so it can never drift out of sync with the pages that exist.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const internship: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/internship`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const oneOnOne: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/one-on-one`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const events: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/events`,
      // Listed events change as they are added and pass, so this is the one
      // page on the site worth crawling often.
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const programs: MetadataRoute.Sitemap = PROGRAMS.map((p) => ({
    url: `${SITE_URL}/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const articles: MetadataRoute.Sitemap = Object.entries(ARTICLES).flatMap(
    ([course, slugs]) =>
      slugs.map((slug) => ({
        url: `${SITE_URL}/${course}/articles/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
  );

  const legal: MetadataRoute.Sitemap = [
    "privacy-policy",
    "terms-of-service",
  ].map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...home, ...internship, ...oneOnOne, ...events, ...programs, ...articles, ...legal];
}

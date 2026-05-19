import type { MetadataRoute } from "next";
import { locales, routes } from "@/lib/i18n";
import { getContent } from "@/content";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jane.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    entries.push({ url: `${SITE}/${locale}`, changeFrequency: "monthly", priority: 1 });
    for (const [key, slug] of Object.entries(routes[locale])) {
      if (!slug || slug.startsWith("#") || key === "home") continue;
      entries.push({
        url: `${SITE}/${locale}/${slug}`,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
    for (const item of getContent(locale).experiencesData) {
      entries.push({
        url: `${SITE}/${locale}/${routes[locale].experiences}/${item.slug}`,
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
    for (const coach of getContent(locale).coachesData) {
      entries.push({
        url: `${SITE}/${locale}/${routes[locale].coaches}/${coach.slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }
  return entries;
}

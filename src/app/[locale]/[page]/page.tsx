import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, routes, type Locale, type RouteKey } from "@/lib/i18n";
import { getContent } from "@/content";
import { AboutPage } from "@/views/AboutPage";
import { MethodologyPage } from "@/views/MethodologyPage";
import { ExperiencesPage } from "@/views/ExperiencesPage";
import { InstitutePage } from "@/views/InstitutePage";

function resolveRoute(locale: Locale, slug: string): RouteKey | null {
  for (const [key, value] of Object.entries(routes[locale])) {
    if (value === slug) return key as RouteKey;
  }
  return null;
}

export function generateStaticParams() {
  const params: { locale: string; page: string }[] = [];
  for (const locale of Object.keys(routes) as Locale[]) {
    for (const [key, slug] of Object.entries(routes[locale])) {
      if (!slug || slug.startsWith("#") || key === "home") continue;
      params.push({ locale, page: slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; page: string }>;
}): Promise<Metadata> {
  const { locale, page } = await params;
  if (!isLocale(locale)) return {};
  const key = resolveRoute(locale, page);
  if (!key) return {};
  const t = getContent(locale);
  switch (key) {
    case "about":
      return { title: t.about.metaTitle, description: t.about.metaDescription };
    case "methodology":
      return { title: t.methodology.metaTitle, description: t.methodology.metaDescription };
    case "experiences":
      return { title: t.experiences.metaTitle, description: t.experiences.metaDescription };
    case "institute":
      return { title: t.institute.metaTitle, description: t.institute.metaDescription };
    default:
      return {};
  }
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ locale: string; page: string }>;
}) {
  const { locale, page } = await params;
  if (!isLocale(locale)) notFound();
  const key = resolveRoute(locale, page);
  if (!key) notFound();
  switch (key) {
    case "about":
      return <AboutPage locale={locale} />;
    case "methodology":
      return <MethodologyPage locale={locale} />;
    case "experiences":
      return <ExperiencesPage locale={locale} />;
    case "institute":
      return <InstitutePage locale={locale} />;
    default:
      notFound();
  }
}

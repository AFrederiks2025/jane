import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, routes, type Locale, type RouteKey } from "@/lib/i18n";
import { getContent } from "@/content";
import { AboutPage } from "@/views/AboutPage";
import { MethodologyPage } from "@/views/MethodologyPage";
import { TalentsPage } from "@/views/TalentsPage";
import { CoachesPage } from "@/views/CoachesPage";
import { AudiencesPage } from "@/views/AudiencesPage";
import { ExperiencesPage } from "@/views/ExperiencesPage";
import { InstitutePage } from "@/views/InstitutePage";
import { OpleidingPage } from "@/views/OpleidingPage";
import { BooksPage } from "@/views/BooksPage";
import { getOpleiding } from "@/content/opleiding";

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
    case "talents":
      return {
        title: locale === "nl" ? "De 27 Jane® talenten" : "The 27 Jane® talents",
        description:
          locale === "nl"
            ? "Alle 27 talenten uit het Jane® diagram, uitgelegd door Dirk van der Schaaf."
            : "All 27 talents from the Jane® diagram, explained by Dirk van der Schaaf.",
      };
    case "coaches":
      return {
        title: locale === "nl" ? "Onze coaches" : "Our coaches",
        description:
          locale === "nl"
            ? "Vind de Jane® gecertificeerde coach die bij jou past."
            : "Find the Jane® certified coach who fits you.",
      };
    case "audiences":
      return {
        title: locale === "nl" ? "Doelgroepen" : "Audiences",
        description:
          locale === "nl"
            ? "Voor wie is Jane®? Ontdek de doelgroep die bij jouw vraag past."
            : "Who is Jane® for? Discover the audience that fits your question.",
      };
    case "experiences":
      return { title: t.experiences.metaTitle, description: t.experiences.metaDescription };
    case "institute":
      return { title: t.institute.metaTitle, description: t.institute.metaDescription };
    case "training": {
      const o = getOpleiding(locale);
      return { title: o.metaTitle, description: o.metaDescription };
    }
    case "books":
      return {
        title: locale === "nl" ? "Boeken" : "Books",
        description:
          locale === "nl"
            ? "De Jane® methodiek in boekvorm — voor wie zelf aan de slag wil."
            : "The Jane® methodology in book form — for those who want to do the work themselves.",
      };
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
    case "talents":
      return <TalentsPage locale={locale} />;
    case "coaches":
      return <CoachesPage locale={locale} />;
    case "audiences":
      return <AudiencesPage locale={locale} />;
    case "experiences":
      return <ExperiencesPage locale={locale} />;
    case "institute":
      return <InstitutePage locale={locale} />;
    case "training":
      return <OpleidingPage locale={locale} />;
    case "books":
      return <BooksPage locale={locale} />;
    default:
      notFound();
  }
}

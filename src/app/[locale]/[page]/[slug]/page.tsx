import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Avatar } from "@/components/Avatar";
import { PillButton } from "@/components/PillButton";
import { CTABanner } from "@/components/CTABanner";
import { CoachDetailPage } from "@/views/CoachDetailPage";
import { getContent } from "@/content";
import { isLocale, locales, path, routes, type Locale } from "@/lib/i18n";

function findStory(locale: Locale, slug: string) {
  return getContent(locale).experiencesData.find((e) => e.slug === slug);
}

export function generateStaticParams() {
  const params: { locale: string; page: string; slug: string }[] = [];
  for (const locale of locales) {
    const experiencesSlug = routes[locale].experiences;
    for (const item of getContent(locale).experiencesData) {
      params.push({ locale, page: experiencesSlug, slug: item.slug });
    }
    const coachesSlug = routes[locale].coaches;
    for (const coach of getContent(locale).coachesData) {
      params.push({ locale, page: coachesSlug, slug: coach.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; page: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, page, slug } = await params;
  if (!isLocale(locale)) return {};
  if (page === routes[locale].experiences) {
    const item = findStory(locale, slug);
    if (!item) return {};
    return { title: item.name, description: item.excerpt };
  }
  if (page === routes[locale].coaches) {
    const coach = getContent(locale).coachesData.find((c) => c.slug === slug);
    if (!coach) return {};
    return { title: coach.name, description: coach.bio };
  }
  return {};
}

export default async function NestedDetail({
  params,
}: {
  params: Promise<{ locale: string; page: string; slug: string }>;
}) {
  const { locale, page, slug } = await params;
  if (!isLocale(locale)) notFound();

  if (page === routes[locale].coaches) {
    return <CoachDetailPage locale={locale} slug={slug} />;
  }

  if (page !== routes[locale].experiences) notFound();

  const t = getContent(locale);
  const item = findStory(locale, slug);
  if (!item) notFound();

  const isNL = locale === "nl";
  const categoryLabel =
    item.category === "professionals"
      ? t.experiences.filters.professionals
      : t.experiences.filters.participants;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16 relative">
          <Link
            href={path(locale, "experiences")}
            className="inline-flex items-center text-jane-navy/70 hover:text-jane-orange transition-colors text-sm uppercase tracking-widest"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mr-2">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {isNL ? "Terug naar ervaringen" : "Back to experiences"}
          </Link>
          <div className="mt-10 flex flex-col md:flex-row items-center md:items-end gap-8">
            <Avatar name={item.name} size={160} />
            <div className="text-center md:text-left">
              <p className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium mb-3">
                {categoryLabel}
              </p>
              <h1 className="text-3xl md:text-5xl font-light text-jane-navy leading-tight">
                {item.name}
              </h1>
              {item.role && (
                <p className="mt-2 text-jane-navy/70 text-lg font-light">{item.role}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          {item.story ? (
            <div className="space-y-5 text-jane-navy/85 text-lg font-light leading-relaxed">
              {item.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : (
            <p className="text-jane-navy/85 text-lg font-light leading-relaxed">{item.excerpt}</p>
          )}
        </div>
      </section>

      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">
            {isNL ? "Ontdek hoe Jane® werkt in de praktijk." : "Discover how Jane® works in practice."}
          </h2>
          <div className="mt-6">
            <PillButton variant="ghost" href={path(locale, "experiences")}>
              {isNL ? "Alle ervaringen" : "All experiences"}
            </PillButton>
          </div>
        </div>
      </section>

      <CTABanner locale={locale} />
    </>
  );
}

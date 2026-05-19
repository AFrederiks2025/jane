import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Avatar } from "@/components/Avatar";
import { Blob, DotArc } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { CTABanner } from "@/components/CTABanner";
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
  if (page !== routes[locale].experiences) return {};
  const item = findStory(locale, slug);
  if (!item) return {};
  return {
    title: item.name,
    description: item.excerpt,
  };
}

export default async function ExperienceDetail({
  params,
}: {
  params: Promise<{ locale: string; page: string; slug: string }>;
}) {
  const { locale, page, slug } = await params;
  if (!isLocale(locale)) notFound();
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
        <Blob color="orange" opacity={0.2} size={460} className="absolute -left-24 -top-12" />
        <Blob color="mint-soft" opacity={0.7} size={400} className="absolute -right-16 bottom-0" rotate={20} />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 relative">
          <Link
            href={path(locale, "experiences")}
            className="inline-flex items-center text-jane-navy/70 hover:text-jane-orange transition-colors text-sm uppercase tracking-widest"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mr-2">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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
            <p className="text-jane-navy/85 text-lg font-light leading-relaxed">
              {item.excerpt}
            </p>
          )}
        </div>
      </section>

      <section className="relative isolate py-20 bg-jane-cream">
        <DotArc color="#04a98b" size={120} className="absolute right-10 top-8 opacity-70" />
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-xs font-medium mb-4">
            {isNL ? "Meer verhalen" : "More stories"}
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">
            {isNL
              ? "Ontdek hoe Jane® werkt in de praktijk."
              : "Discover how Jane® works in practice."}
          </h2>
          <div className="mt-8">
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

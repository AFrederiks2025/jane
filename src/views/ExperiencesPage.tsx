import { Blob, DotArc } from "@/components/Blob";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { CTABanner } from "@/components/CTABanner";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";

export function ExperiencesPage({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const e = t.experiences;
  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="orange" opacity={0.25} size={460} className="absolute -left-32 -top-16" />
        <Blob color="mint-soft" opacity={0.7} size={420} className="absolute -right-16 bottom-0" rotate={20} />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 text-center relative">
          <DotArc color="#04a98b" size={120} className="absolute right-10 -top-2 opacity-80" />
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-5">
            {e.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-jane-navy leading-tight">
            {e.hero.title}
          </h1>
          <p className="mt-6 text-lg text-jane-navy/80 max-w-2xl mx-auto font-light">
            {e.hero.lead}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ExperienceGrid
            items={t.experiencesData}
            labels={e.filters}
            readMore={t.common.readMore}
          />
        </div>
      </section>

      <CTABanner locale={locale} />
    </>
  );
}

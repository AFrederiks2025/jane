import { Blob } from "@/components/Blob";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { CTABanner } from "@/components/CTABanner";
import { getContent } from "@/content";
import { path, type Locale } from "@/lib/i18n";

export function ExperiencesPage({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const e = t.experiences;
  const isNL = locale === "nl";
  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="mint-soft" opacity={0.45} size={420} className="absolute -right-24 -top-12" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 text-center relative">
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ExperienceGrid
            items={t.experiencesData}
            labels={e.filters}
            readMore={t.common.readMore}
            basePath={path(locale, "experiences")}
          />
        </div>
      </section>

      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-3">
            {isNL ? "Heb jij ook een verhaal?" : "Have a story to share?"}
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">
            {isNL
              ? "Deel hoe Jane® jouw werk of leven heeft veranderd."
              : "Tell us how Jane® changed your work or life."}
          </h2>
          <p className="mt-4 text-jane-navy/75 font-light">
            {isNL
              ? "We voegen graag nieuwe ervaringen toe — kort of uitgebreid, anoniem of met naam."
              : "We’d love to add new experiences — short or long, anonymous or named."}
          </p>
          <a
            href={`mailto:${t.common.footer.email}?subject=${encodeURIComponent(
              isNL ? "Mijn Jane® verhaal" : "My Jane® story",
            )}`}
            className="mt-6 inline-flex items-center rounded-full bg-jane-mint text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#038f74] transition-colors"
          >
            {isNL ? "Stuur ons je verhaal" : "Send us your story"}
          </a>
        </div>
      </section>

      <CTABanner locale={locale} />
    </>
  );
}

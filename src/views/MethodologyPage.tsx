import { Blob } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { ReportCover, type ReportCoverPalette } from "@/components/ReportCover";
import { VideoEmbed } from "@/components/VideoEmbed";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";

const palettes: ReportCoverPalette[] = ["talenten", "functie", "jong"];

export function MethodologyPage({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const m = t.methodology;
  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="mint-soft" opacity={0.5} size={420} className="absolute -right-24 -top-12" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 text-center relative">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-5">
            {m.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-jane-navy">
            {m.hero.title}
          </h1>
          <p className="mt-6 text-lg text-jane-navy/80 max-w-3xl mx-auto font-light">
            {m.hero.lead}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <VideoEmbed
            youtubeId="kB7zerhZdjQ"
            title={
              locale === "nl"
                ? "Uitleg Jane® Talenten Methodiek"
                : "Jane® Talent Methodology explained"
            }
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-5 text-jane-navy/85 text-lg font-light leading-relaxed">
          {m.explainer.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="py-20 bg-jane-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-8 lg:grid-cols-2">
          {m.blocks.map((b, i) => (
            <article
              key={i}
              className="bg-white rounded-3xl p-10 border border-jane-navy/5"
            >
              <div
                className="w-12 h-12 rounded-full mb-5 grid place-items-center text-white"
                style={{ background: i === 0 ? "#04a98b" : "#d65d1f" }}
              >
                {i + 1}
              </div>
              <p className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium mb-3">
                {b.eyebrow}
              </p>
              <h3 className="text-2xl md:text-3xl font-light text-jane-navy leading-snug">
                {b.title}
              </h3>
              <p className="mt-5 text-jane-navy/80 text-base leading-relaxed">
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={m.portfolio.title}
            title={m.portfolio.subtitle}
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {m.portfolio.items.map((item, i) => {
              const palette = palettes[i] ?? "talenten";
              const candidateLabel =
                locale === "nl" ? "Voorbeeld kandidaat" : "Sample candidate";
              return (
                <article
                  key={item.name}
                  className="bg-white rounded-3xl overflow-hidden border border-jane-navy/10 flex flex-col"
                >
                  <ReportCover
                    palette={palette}
                    candidate={candidateLabel}
                    date={palette === "jong" ? "30-04-2021" : "11-01-2021"}
                  />
                  <div className="p-7 lg:p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-normal text-jane-navy leading-snug">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-jane-navy/75 text-[15px] leading-relaxed flex-1">
                      {item.description}
                    </p>
                    <div className="mt-6">
                      {item.href && item.href !== "#" ? (
                        <PillButton
                          variant="ghost"
                          href={item.href}
                          target="_blank"
                          rel="noopener"
                        >
                          {t.common.download}
                        </PillButton>
                      ) : (
                        <span className="inline-flex items-center text-jane-navy/50 text-xs uppercase tracking-widest">
                          {locale === "nl" ? "Binnenkort beschikbaar" : "Coming soon"}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner locale={locale} />
    </>
  );
}

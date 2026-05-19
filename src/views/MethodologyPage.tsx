import { Blob } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";

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

      <section className="py-20">
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
            {m.portfolio.items.map((item, i) => (
              <div
                key={item.name}
                className="bg-white rounded-3xl p-8 border border-jane-navy/10 flex flex-col"
              >
                <div
                  className="w-14 h-14 rounded-full mb-5 grid place-items-center text-white text-xl font-light"
                  style={{
                    background: i === 0 ? "#04a98b" : i === 1 ? "#d65d1f" : "#212c56",
                  }}
                >
                  {i + 1}
                </div>
                <h3 className="text-xl font-normal text-jane-navy">{item.name}</h3>
                <p className="mt-3 text-jane-navy/75 text-[15px] leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="mt-6">
                  <PillButton variant="ghost" href={item.href}>
                    {t.common.download}
                  </PillButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner locale={locale} />
    </>
  );
}

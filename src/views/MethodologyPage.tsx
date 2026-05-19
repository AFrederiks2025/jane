import { Blob, DotArc } from "@/components/Blob";
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
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #fdf6f0 0%, #ffffff 50%, #f4faf8 100%)",
            }}
          />
          <Blob color="mint-soft" opacity={0.8} size={520} className="absolute -right-32 -top-20" />
          <Blob color="orange" opacity={0.22} size={420} className="absolute -left-20 bottom-0" rotate={30} />
        </div>
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 text-center">
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
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-10 lg:grid-cols-2">
          {m.blocks.map((b, i) => (
            <article
              key={i}
              className="relative bg-white rounded-3xl p-10 border border-jane-navy/5 overflow-hidden"
            >
              <DotArc
                color={i === 0 ? "#04a98b" : "#d65d1f"}
                size={100}
                className="absolute right-4 top-4 opacity-80"
              />
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

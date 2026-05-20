import Link from "next/link";
import { Blob } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { getOpleiding } from "@/content/opleiding";
import { getContent } from "@/content";
import { path, type Locale } from "@/lib/i18n";

export function OpleidingPage({ locale }: { locale: Locale }) {
  const o = getOpleiding(locale);
  const t = getContent(locale);
  const isNL = locale === "nl";
  const guideHref = `mailto:${t.common.footer.email}?subject=${encodeURIComponent(
    isNL ? "Aanvraag opleidingsgids — JANE Coach-opleiding" : "Request training guide — JANE Coach training",
  )}`;
  const callHref = `mailto:${t.common.footer.email}?subject=${encodeURIComponent(
    isNL ? "Oriëntatiegesprek — JANE Coach-opleiding" : "Orientation call — JANE Coach training",
  )}`;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="mint-soft" opacity={0.5} size={440} className="absolute -right-24 -top-12" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 relative">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-4">
            {o.heroEyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-jane-navy leading-tight max-w-3xl">
            {o.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-jane-navy/80 max-w-2xl font-light italic">
            {o.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <PillButton variant="orange" href={guideHref}>
              {o.ctaLabel}
            </PillButton>
            <PillButton variant="ghost" href={callHref}>
              {isNL ? "Plan een oriëntatiegesprek" : "Schedule an orientation call"}
            </PillButton>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-jane-navy/85 text-lg font-light leading-relaxed">{o.intro}</p>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="pb-14">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium mb-6">
            {o.recognitionTitle}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {o.recognition.map((r, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border border-jane-navy/10 rounded-2xl px-5 py-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-jane-mint">
                  <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-jane-navy/85 font-light leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OFFERS */}
      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">{o.offersTitle}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {o.offers.map((b, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-jane-navy/5">
                <h3 className="text-jane-navy font-normal text-lg">{b.title}</h3>
                <p className="mt-2 text-jane-navy/75 font-light leading-relaxed text-[15px]">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">{o.programTitle}</h2>
          <p className="mt-4 text-jane-navy/80 font-light">{o.programIntro}</p>
          <ol className="mt-8 space-y-3">
            {o.program.map((row) => (
              <li key={row.module} className="flex flex-col sm:flex-row gap-2 sm:gap-6 bg-white border border-jane-navy/10 rounded-2xl p-5">
                <div className="sm:w-64 shrink-0">
                  <p className="text-jane-navy font-normal leading-snug">{row.module}</p>
                  <p className="text-jane-navy/55 text-xs uppercase tracking-wider mt-0.5">
                    {isNL ? "Maand" : "Month"} {row.months}
                  </p>
                </div>
                <p className="text-jane-navy/75 font-light leading-relaxed text-[15px] flex-1">{row.learn}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-jane-navy/70 font-light leading-relaxed text-[15px]">{o.programNote}</p>
          <div className="mt-8">
            <PillButton variant="ghost" href={`/${locale}/inloggen/student`}>
              {isNL ? "Bekijk de modules in het portaal" : "View the modules in the portal"}
            </PillButton>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 grid gap-6 md:grid-cols-2">
          <div className="bg-white border border-jane-mint/40 rounded-3xl p-7">
            <h3 className="text-jane-mint uppercase tracking-[0.2em] text-xs font-medium mb-4">
              {isNL ? "Deze opleiding past goed bij je als…" : "This training fits you if…"}
            </h3>
            <ul className="space-y-3">
              {o.forWhomYes.map((y, i) => (
                <li key={i} className="flex items-start gap-3 text-jane-navy/85">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-jane-mint">
                    <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{y}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-jane-navy/10 rounded-3xl p-7">
            <h3 className="text-jane-navy/60 uppercase tracking-[0.2em] text-xs font-medium mb-4">
              {isNL ? "Minder geschikt als…" : "Less suitable if…"}
            </h3>
            <ul className="space-y-3">
              {o.forWhomNo.map((n, i) => (
                <li key={i} className="flex items-start gap-3 text-jane-navy/70">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-jane-navy/40">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="bg-jane-navy text-white rounded-3xl px-7 py-8 md:px-10 md:py-10">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
              <h2 className="text-2xl md:text-3xl font-light">{o.investmentTitle}</h2>
              <span className="text-3xl md:text-4xl font-light tabular-nums">{o.investmentPrice}</span>
            </div>
            <p className="mt-5 text-white/85 font-light leading-relaxed">{o.investmentBody}</p>
            <p className="mt-4 text-white/70 font-light leading-relaxed text-[15px]">{o.investmentRoi}</p>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium mb-3">
            {isNL ? "De methode achter de opleiding" : "The method behind the training"}
          </h2>
          <p className="text-jane-navy/85 text-lg font-light leading-relaxed">{o.method}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight mb-8">
            {isNL ? "Veelgestelde vragen" : "Frequently asked questions"}
          </h2>
          <div className="space-y-4">
            {o.faq.map((f, i) => (
              <details key={i} className="group bg-white border border-jane-navy/10 rounded-2xl px-6 py-4 [&_summary]:cursor-pointer">
                <summary className="flex items-center justify-between gap-4 text-jane-navy font-normal list-none">
                  <span>{f.q}</span>
                  <span aria-hidden="true" className="text-jane-mint text-xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-jane-navy/75 font-light leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-jane-navy leading-tight">{o.closingTitle}</h2>
          <p className="mt-5 text-jane-navy/80 font-light max-w-xl mx-auto leading-relaxed">{o.closingText}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PillButton variant="orange" href={guideHref}>
              {o.ctaLabel}
            </PillButton>
            <Link href={path(locale, "institute")} className="inline-flex items-center text-jane-navy/70 hover:text-jane-orange text-sm uppercase tracking-widest">
              {isNL ? "Over het Jane® instituut" : "About the Jane® institute"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

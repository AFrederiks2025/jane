import Link from "next/link";
import { notFound } from "next/navigation";
import { Blob } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { getAudience, clusterMeta } from "@/content/audiences";
import { getContent } from "@/content";
import { path, type Locale } from "@/lib/i18n";

export function AudienceDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const audience = getAudience(locale, slug);
  if (!audience) notFound();

  const isNL = locale === "nl";
  const t = getContent(locale);
  const cluster = clusterMeta(locale).find((c) => c.id === audience.cluster);
  const contactHref = `mailto:${t.common.footer.email}?subject=${encodeURIComponent(
    `${isNL ? "Kennismaking" : "Introduction"}: ${audience.name}`,
  )}`;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="mint-soft" opacity={0.45} size={400} className="absolute -right-20 -top-10" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16 relative">
          <Link
            href={path(locale, "audiences")}
            className="inline-flex items-center text-jane-navy/70 hover:text-jane-orange transition-colors text-sm uppercase tracking-widest"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mr-2">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {isNL ? "Alle doelgroepen" : "All audiences"}
          </Link>

          <div className="mt-10 max-w-3xl">
            {cluster && (
              <p className="text-jane-orange uppercase tracking-[0.22em] text-xs font-medium">
                {cluster.label}
              </p>
            )}
            <h1 className="mt-3 text-3xl md:text-5xl font-light text-jane-navy leading-tight">
              {audience.heroTitle}
            </h1>
            <p className="mt-5 text-xl text-jane-navy/80 font-light italic">
              {audience.heroSubtitle}
            </p>
            <div className="mt-8">
              <PillButton variant="orange" href={contactHref}>
                {audience.ctaLabel}
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-jane-navy/85 text-lg font-light leading-relaxed">{audience.intro}</p>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="pb-14">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium mb-6">
            {isNL ? "Herken je dit?" : "Does this sound familiar?"}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {audience.recognition.map((r, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white border border-jane-navy/10 rounded-2xl px-5 py-4"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-jane-mint">
                  <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-jane-navy/85 font-light leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT JANE DOES */}
      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">
            {isNL ? "Wat Jane® voor jou doet" : "What Jane® does for you"}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {audience.whatJaneDoes.map((b, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-jane-navy/5">
                <h3 className="text-jane-navy font-normal text-lg">{b.title}</h3>
                <p className="mt-2 text-jane-navy/75 font-light leading-relaxed text-[15px]">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAJECT */}
      {audience.traject.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight mb-8">
              {isNL ? "Hoe ziet het traject eruit?" : "What does the journey look like?"}
            </h2>
            <ol className="space-y-4">
              {audience.traject.map((s) => (
                <li
                  key={s.step}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white border border-jane-navy/10 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-4 sm:w-56 shrink-0">
                    <span className="grid place-items-center w-9 h-9 rounded-full bg-jane-navy text-white text-sm shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <p className="text-jane-navy font-normal leading-snug">{s.title}</p>
                      <p className="text-jane-navy/55 text-xs uppercase tracking-wider mt-0.5">
                        {s.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-jane-navy/75 font-light leading-relaxed text-[15px] flex-1">
                    {s.what}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FOR WHOM */}
      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 grid gap-6 md:grid-cols-2">
          <div className="bg-white border border-jane-mint/40 rounded-3xl p-7">
            <h3 className="text-jane-mint uppercase tracking-[0.2em] text-xs font-medium mb-4">
              {isNL ? "Dit past goed bij je als…" : "This fits you if…"}
            </h3>
            <ul className="space-y-3">
              {audience.forWhomYes.map((y, i) => (
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
              {audience.forWhomNo.map((n, i) => (
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

      {/* METHOD */}
      {audience.method && (
        <section className="py-14">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <div className="bg-jane-navy text-white rounded-3xl px-7 py-8">
              <p className="text-jane-mint uppercase tracking-[0.2em] text-xs font-medium mb-3">
                {isNL ? "De methode achter dit traject" : "The method behind this journey"}
              </p>
              <p className="text-lg font-light leading-relaxed text-white/90">{audience.method}</p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight mb-8">
            {isNL ? "Veelgestelde vragen" : "Frequently asked questions"}
          </h2>
          <div className="space-y-4">
            {audience.faq.map((f, i) => (
              <details
                key={i}
                className="group bg-white border border-jane-navy/10 rounded-2xl px-6 py-4 [&_summary]:cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 text-jane-navy font-normal list-none">
                  <span>{f.q}</span>
                  <span aria-hidden="true" className="text-jane-mint text-xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-jane-navy/75 font-light leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-jane-navy leading-tight">
            {audience.closingTitle}
          </h2>
          <p className="mt-5 text-jane-navy/80 font-light max-w-xl mx-auto leading-relaxed">
            {audience.closingText}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PillButton variant="orange" href={contactHref}>
              {audience.ctaLabel}
            </PillButton>
            <PillButton variant="ghost" href={path(locale, "coaches")}>
              {isNL ? "Bekijk de coaches" : "View the coaches"}
            </PillButton>
          </div>
        </div>
      </section>
    </>
  );
}

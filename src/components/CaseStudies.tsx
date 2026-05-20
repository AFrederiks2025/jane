import { getCases } from "@/content/cases";
import type { Locale } from "@/lib/i18n";

export function CaseStudies({ locale }: { locale: Locale }) {
  const isNL = locale === "nl";
  const cases = getCases(locale);
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-3">
            {isNL ? "Bewijs uit de praktijk" : "Proof from practice"}
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-jane-navy leading-tight">
            {isNL
              ? "Gebruikt bij gemeentes, teams en organisaties."
              : "Used by congregations, teams and organisations."}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <article
              key={c.org}
              className="bg-white border border-jane-navy/10 rounded-3xl p-6 flex flex-col"
            >
              <p className="text-jane-mint uppercase tracking-[0.18em] text-xs font-medium">
                {c.tag}
              </p>
              <h3 className="mt-2 text-xl text-jane-navy font-normal leading-snug">{c.org}</h3>
              <p className="mt-3 text-jane-navy/75 text-[15px] font-light leading-relaxed">
                {c.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-jane-navy/55 text-sm max-w-2xl">
          {isNL
            ? "Een greep uit ruim twee decennia praktijk. We noemen alleen organisaties — nooit persoonsgegevens van deelnemers."
            : "A selection from more than two decades of practice. We name organisations only — never participants’ personal data."}
        </p>
      </div>
    </section>
  );
}

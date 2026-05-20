import Link from "next/link";
import { Blob } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { audiencesByCluster } from "@/content/audiences";
import { path, type Locale } from "@/lib/i18n";

const accentDot: Record<"orange" | "mint" | "navy", string> = {
  orange: "bg-jane-orange",
  mint: "bg-jane-mint",
  navy: "bg-jane-navy",
};
const accentText: Record<"orange" | "mint" | "navy", string> = {
  orange: "text-jane-orange",
  mint: "text-jane-mint",
  navy: "text-jane-navy",
};

export function AudiencesPage({ locale }: { locale: Locale }) {
  const isNL = locale === "nl";
  const groups = audiencesByCluster(locale);
  const base = path(locale, "audiences");

  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="mint-soft" opacity={0.5} size={420} className="absolute -right-24 -top-12" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 relative">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-4">
            {isNL ? "Voor wie is Jane®?" : "Who is Jane® for?"}
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-jane-navy leading-tight max-w-3xl">
            {isNL
              ? "Eén methodiek, veertien werelden."
              : "One methodology, fourteen worlds."}
          </h1>
          <p className="mt-6 text-lg text-jane-navy/80 max-w-2xl font-light">
            {isNL
              ? "De Jane® Talenten Methodiek is voor iedereen dezelfde — maar de taal en toepassing verschillen per situatie. Kies de doelgroep die bij jouw vraag past."
              : "The Jane® Talent Methodology is the same for everyone — but the language and application differ per situation. Choose the audience that fits your question."}
          </p>
        </div>
      </section>

      {groups.map(({ cluster, items }) => (
        <section
          key={cluster.id}
          id={cluster.id}
          className="py-16 border-b border-jane-navy/5 scroll-mt-24 last:border-0"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="flex items-baseline gap-3 mb-8">
              <span aria-hidden="true" className={`w-2 h-2 rounded-full ${accentDot[cluster.accent]}`} />
              <h2 className={`uppercase tracking-[0.18em] text-sm font-medium ${accentText[cluster.accent]}`}>
                {cluster.label}
              </h2>
              <span className="text-jane-navy/50 text-sm font-light">— {cluster.tagline}</span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((a) => (
                <Link
                  key={a.slug}
                  href={`${base}/${a.slug}`}
                  className="group block bg-white border border-jane-navy/10 rounded-3xl p-6 hover:border-jane-mint/60 transition-colors"
                >
                  <h3 className="text-jane-navy text-lg font-normal leading-snug group-hover:text-jane-orange transition-colors">
                    {a.name}
                  </h3>
                  <p className="mt-2 text-jane-navy/75 text-[15px] font-light leading-relaxed">
                    {a.proposition}
                  </p>
                  <span className="mt-4 inline-flex items-center text-jane-mint text-xs uppercase tracking-widest group-hover:text-jane-orange transition-colors">
                    {isNL ? "Lees meer" : "Read more"} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-jane-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-4">
            {isNL ? "Niet zeker welke past?" : "Not sure which fits?"}
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-jane-navy leading-tight">
            {isNL ? "Vind in twee stappen jouw startpunt." : "Find your starting point in two steps."}
          </h2>
          <p className="mt-5 text-jane-navy/80 font-light">
            {isNL
              ? "Beantwoord twee korte vragen op de coaches-pagina — we wijzen je naar het cluster dat het beste past."
              : "Answer two short questions on the coaches page — we'll point you to the cluster that fits best."}
          </p>
          <div className="mt-8">
            <PillButton variant="mint" href={path(locale, "coaches")}>
              {isNL ? "Naar de coach-matcher" : "To the coach matcher"}
            </PillButton>
          </div>
        </div>
      </section>
    </>
  );
}

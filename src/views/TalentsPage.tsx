import { Blob } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { TalentsExplorer } from "@/components/TalentsExplorer";
import { getTalents } from "@/content/talents";
import { path, type Locale } from "@/lib/i18n";

export function TalentsPage({ locale }: { locale: Locale }) {
  const isNL = locale === "nl";
  const talents = getTalents(locale);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="mint-soft" opacity={0.5} size={420} className="absolute -right-24 -top-12" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 relative">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-4">
            {isNL ? "Het hart van de methodiek" : "The heart of the methodology"}
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-jane-navy leading-tight max-w-3xl">
            {isNL ? "De 27 Jane® talenten" : "The 27 Jane® talents"}
          </h1>
          <p className="mt-6 text-lg text-jane-navy/80 max-w-2xl font-light">
            {isNL
              ? "Natuurlijke talenten zijn de lens waarmee we naar onze omgeving kijken. Hieronder vind je alle 27 talenten uit het Jane® diagram, uitgelegd door grondlegger Dirk van der Schaaf."
              : "Natural talents are the lens through which we see the world. Below are all 27 talents from the Jane® diagram, explained by founder Dirk van der Schaaf."}
          </p>
          <div className="mt-8">
            <PillButton variant="ghost" href={`/${locale}/inloggen/student`}>
              {isNL ? "Bekijk de video's in het archief" : "Watch the videos in the archive"}
            </PillButton>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <TalentsExplorer talents={talents} locale={locale} />
        </div>
      </section>

      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">
            {isNL
              ? "Benieuwd welke talenten in jou het sterkst zijn?"
              : "Curious which talents are strongest in you?"}
          </h2>
          <p className="mt-4 text-jane-navy/75 font-light">
            {isNL
              ? "Een gecertificeerde Jane® coach brengt jouw persoonlijke talentenprofiel in kaart."
              : "A certified Jane® coach maps your personal talent profile."}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PillButton variant="orange" href={path(locale, "coaches")}>
              {isNL ? "Vind een coach" : "Find a coach"}
            </PillButton>
            <PillButton variant="ghost" href={path(locale, "methodology")}>
              {isNL ? "Over de methodiek" : "About the methodology"}
            </PillButton>
          </div>
        </div>
      </section>
    </>
  );
}

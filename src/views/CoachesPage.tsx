import { CoachCard } from "@/components/CoachCard";
import { Blob } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { getContent } from "@/content";
import { path, type Locale } from "@/lib/i18n";

export function CoachesPage({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const isNL = locale === "nl";
  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="mint-soft" opacity={0.5} size={420} className="absolute -right-24 -top-12" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 relative">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-4">
            {isNL ? "Onze gecertificeerde coaches" : "Our certified coaches"}
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-jane-navy leading-tight max-w-3xl">
            {isNL
              ? "Vind de coach die bij jou past."
              : "Find the coach who fits you."}
          </h1>
          <p className="mt-6 text-lg text-jane-navy/80 max-w-2xl font-light">
            {isNL
              ? "Iedere Jane® coach is gecertificeerd in de Talenten Methodiek. Klik op een coach voor zijn of haar achtergrond, specialiteiten en contactgegevens."
              : "Every Jane® coach is certified in the Talent Methodology. Click on a coach to see their background, specialties and contact details."}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.coachesData.map((coach) => (
              <CoachCard
                key={coach.slug}
                coach={coach}
                href={`${path(locale, "coaches")}/${coach.slug}`}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-jane-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-4">
            {isNL ? "Coach worden?" : "Become a coach?"}
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-jane-navy leading-tight">
            {isNL
              ? "Werk zelf met de Jane® Talenten Methodiek."
              : "Work with the Jane® Talent Methodology yourself."}
          </h2>
          <p className="mt-5 text-jane-navy/80 font-light">
            {isNL
              ? "Het Jane® Instituut biedt certificeringstrainingen voor coaches, trainers en adviseurs."
              : "The Jane® Institute offers certification trainings for coaches, trainers and consultants."}
          </p>
          <div className="mt-8">
            <PillButton variant="mint" href={path(locale, "institute")}>
              {isNL ? "Naar het Jane® instituut" : "To the Jane® institute"}
            </PillButton>
          </div>
        </div>
      </section>
    </>
  );
}

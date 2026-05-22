import { Blob } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { ExercisesExplorer } from "@/components/ExercisesExplorer";
import { exerciseGroups, exercises } from "@/content/exercises";
import { path, type Locale } from "@/lib/i18n";

export function ExercisesPage({ locale }: { locale: Locale }) {
  const isNL = locale === "nl";
  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="mint-soft" opacity={0.5} size={420} className="absolute -right-24 -top-12" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 relative">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-4">
            {isNL ? "Oefeningenboek" : "Exercise book"}
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-jane-navy leading-tight max-w-3xl">
            {isNL ? "Oefeningen per doelgroep" : "Exercises per audience"}
          </h1>
          <p className="mt-6 text-lg text-jane-navy/80 max-w-2xl font-light">
            {isNL
              ? "Concrete oefeningen om de Jane®-methodiek in praktijk te brengen — 52 werkvormen voor 14 doelgroepen, plus universele oefeningen waarmee vrijwel iedereen kan starten."
              : "Concrete exercises to put the Jane® methodology into practice — 52 formats for 14 audiences, plus universal exercises almost anyone can start with."}
          </p>
          {!isNL && (
            <p className="mt-3 text-sm text-jane-navy/55">
              The exercise material is in Dutch (the “International” group is in English).
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-jane-navy/70">
            <span className="rounded-full bg-white px-4 py-1.5">52 {isNL ? "oefeningen" : "exercises"}</span>
            <span className="rounded-full bg-white px-4 py-1.5">14 {isNL ? "doelgroepen" : "audiences"}</span>
            <span className="rounded-full bg-white px-4 py-1.5">
              {isNL ? "4 werkvormen" : "4 formats"}
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ExercisesExplorer groups={exerciseGroups} exercises={exercises} locale={locale} />
        </div>
      </section>

      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">
            {isNL
              ? "Deze oefeningen vervangen geen volledig traject."
              : "These exercises don’t replace a full journey."}
          </h2>
          <p className="mt-4 text-jane-navy/75 font-light">
            {isNL
              ? "Ze zijn losse interventies — als opening, reflectie tussen sessies of zelfwerk. Een diepgaand traject vraagt om een gecertificeerde Jane® coach."
              : "They are stand-alone interventions — as an opening, reflection between sessions or self-work. An in-depth journey calls for a certified Jane® coach."}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PillButton variant="orange" href={path(locale, "coaches")}>
              {isNL ? "Vind een coach" : "Find a coach"}
            </PillButton>
            <PillButton variant="ghost" href={path(locale, "talents")}>
              {isNL ? "Bekijk de 27 talenten" : "View the 27 talents"}
            </PillButton>
          </div>
        </div>
      </section>
    </>
  );
}

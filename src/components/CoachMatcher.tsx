"use client";

import { useState } from "react";
import { PillButton } from "./PillButton";
import type { Locale } from "@/lib/i18n";

interface Option {
  label: string;
  detail?: string;
  cluster: "bestemming" | "rol" | "team";
}

interface Step {
  question: string;
  options: Option[];
}

function copyFor(locale: Locale) {
  const isNL = locale === "nl";
  const steps: Step[] = isNL
    ? [
        {
          question: "Voor wie zoek je begeleiding?",
          options: [
            {
              label: "Voor mezelf",
              detail: "Persoonlijk traject",
              cluster: "bestemming",
            },
            {
              label: "Voor mijn team",
              detail: "Eendaags of meerdaags",
              cluster: "team",
            },
            {
              label: "Voor mijn organisatie",
              detail: "HR / cultuur / selectie",
              cluster: "team",
            },
          ],
        },
        {
          question: "Wat past het meest bij jouw vraag?",
          options: [
            {
              label: "Ik zoek richting in mijn leven of loopbaan",
              cluster: "bestemming",
            },
            {
              label: "Ik herken een patroon dat me tegenhoudt",
              cluster: "bestemming",
            },
            {
              label: "Ik wil beter functioneren in mijn rol",
              cluster: "rol",
            },
            {
              label: "Mijn relatie, gezin of geloofsleven",
              cluster: "rol",
            },
          ],
        },
      ]
    : [
        {
          question: "Who are you seeking coaching for?",
          options: [
            { label: "For myself", detail: "Personal journey", cluster: "bestemming" },
            { label: "For my team", detail: "One day or multi-day", cluster: "team" },
            {
              label: "For my organisation",
              detail: "HR / culture / selection",
              cluster: "team",
            },
          ],
        },
        {
          question: "Which best matches your question?",
          options: [
            { label: "I'm looking for direction in life or career", cluster: "bestemming" },
            { label: "I recognise a pattern that holds me back", cluster: "bestemming" },
            { label: "I want to function better in my role", cluster: "rol" },
            { label: "My relationship, family or faith life", cluster: "rol" },
          ],
        },
      ];
  return {
    steps,
    isNL,
    introEyebrow: isNL ? "Welke past bij jou?" : "Which fits you?",
    introTitle: isNL
      ? "Vind je startpunt in twee stappen."
      : "Find your starting point in two steps.",
    introBody: isNL
      ? "Beantwoord twee korte vragen — we wijzen je naar het cluster dat het beste past, zodat je niet door honderd profielen hoeft."
      : "Answer two short questions — we'll point you to the cluster that fits best, so you don't have to scroll through every profile.",
    resultEyebrow: isNL ? "Aanbevolen voor jou" : "Recommended for you",
    resultCta: isNL ? "Bekijk dit cluster »" : "View this cluster »",
    restart: isNL ? "Opnieuw beginnen" : "Start over",
    results: {
      bestemming: {
        title: isNL
          ? "Persoonlijke bestemming & functie"
          : "Personal calling & function",
        body: isNL
          ? "Een bestemmings-, blinde-vlek- of gavencoach past het best — het hart van Jane®."
          : "A calling, blind-spot or gifts coach fits best — the heart of Jane®.",
        href: "#cluster-bestemming",
      },
      rol: {
        title: isNL ? "Per rol of levensfase" : "By role or life stage",
        body: isNL
          ? "Een doelgroep-specifieke coach past je context: loopbaan, leiderschap, relatie of voorganger."
          : "An audience-specific coach fits your context: career, leadership, relationship or pastor.",
        href: "#cluster-rol",
      },
      team: {
        title: isNL
          ? "Teams & organisaties"
          : "Teams & organisations",
        body: isNL
          ? "Een team- of organisatiecoach — Team Life Statement, cultuurtraject of workshop."
          : "A team or organisation coach — Team Life Statement, culture journey or workshop.",
        href: "#cluster-team",
      },
    },
  };
}

export function CoachMatcher({ locale }: { locale: Locale }) {
  const t = copyFor(locale);
  const [answers, setAnswers] = useState<Option[]>([]);
  const step = answers.length;
  const showResult =
    step >= t.steps.length || (answers[0]?.cluster === "team" && step >= 1);

  const result = (() => {
    if (!showResult) return null;
    const winner: "bestemming" | "rol" | "team" =
      answers[0]?.cluster === "team"
        ? "team"
        : (answers[1]?.cluster ?? answers[0]?.cluster ?? "bestemming");
    return t.results[winner];
  })();

  const pick = (opt: Option) => setAnswers((prev) => [...prev, opt]);
  const reset = () => setAnswers([]);

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-3">
            {t.introEyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-jane-navy leading-tight">
            {t.introTitle}
          </h2>
          <p className="mt-5 text-jane-navy/75 font-light">{t.introBody}</p>
        </div>

        <div className="mt-10 rounded-3xl bg-white border border-jane-navy/5 p-7 lg:p-10">
          {!showResult && (
            <>
              <p className="text-jane-orange text-xs uppercase tracking-widest mb-3">
                {t.isNL ? "Vraag" : "Question"} {step + 1} / {t.steps.length}
              </p>
              <h3 className="text-xl md:text-2xl font-light text-jane-navy leading-snug">
                {t.steps[step].question}
              </h3>
              <div className="mt-6 grid gap-3">
                {t.steps[step].options.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => pick(opt)}
                    className="text-left rounded-2xl border border-jane-navy/10 px-5 py-4 hover:border-jane-mint hover:bg-jane-mint/5 transition-colors"
                  >
                    <span className="block text-jane-navy text-[15px]">
                      {opt.label}
                    </span>
                    {opt.detail && (
                      <span className="block text-jane-navy/60 text-sm mt-0.5">
                        {opt.detail}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </>
          )}

          {showResult && result && (
            <div>
              <p className="text-jane-mint text-xs uppercase tracking-widest mb-3">
                {t.resultEyebrow}
              </p>
              <h3 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">
                {result.title}
              </h3>
              <p className="mt-4 text-jane-navy/80 font-light leading-relaxed">
                {result.body}
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <PillButton variant="mint" href={result.href}>
                  {t.resultCta}
                </PillButton>
                <button
                  type="button"
                  onClick={reset}
                  className="text-jane-navy/70 hover:text-jane-orange text-sm uppercase tracking-widest"
                >
                  {t.restart}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

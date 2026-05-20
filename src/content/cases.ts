import type { Locale } from "@/lib/i18n";

export interface CaseItem {
  org: string;
  tag: string;
  body: string;
}

// Only organisation / case names — no personal names (AVG/GDPR).
const nl: CaseItem[] = [
  {
    org: "VEG Bennekom",
    tag: "Profielschets & gemeentevisie",
    body: "Meerdere profielschetsen van de gemeente en een gedragen gemeentevisie, gebaseerd op de gaven en functies die feitelijk aanwezig zijn.",
  },
  {
    org: "PG Wassenaar",
    tag: "Gemeentevisie",
    body: "Een gemeentebrede analyse vertaald naar een visie die past bij wie de gemeente werkelijk is — onder de noemer ‘Vrij zijn om te veranderen’.",
  },
  {
    org: "Villa Klarendal",
    tag: "Team Life Statement (2014)",
    body: "Een eendaags teamtraject dat de collectieve sterkte én de blinde vlek van het team in beeld bracht, met een gedragen Team Life Statement als uitkomst.",
  },
  {
    org: "Alexport",
    tag: "Sales-traject",
    body: "Sales-professionals begeleid om te verkopen vanuit hun natuurlijke functie in plaats van vanuit een script — met meer energie en duurzamer resultaat.",
  },
];

const en: CaseItem[] = [
  {
    org: "VEG Bennekom",
    tag: "Profile sketch & church vision",
    body: "Several profile sketches of the congregation and a shared church vision, based on the gifts and functions actually present.",
  },
  {
    org: "PG Wassenaar",
    tag: "Church vision",
    body: "A congregation-wide analysis translated into a vision that fits who the congregation truly is — under the banner ‘Free to change’.",
  },
  {
    org: "Villa Klarendal",
    tag: "Team Life Statement (2014)",
    body: "A one-day team journey that mapped the team’s collective strength and blind spot, with a shared Team Life Statement as the outcome.",
  },
  {
    org: "Alexport",
    tag: "Sales journey",
    body: "Sales professionals guided to sell from their natural function instead of from a script — with more energy and more sustainable results.",
  },
];

export function getCases(locale: Locale): CaseItem[] {
  return locale === "nl" ? nl : en;
}

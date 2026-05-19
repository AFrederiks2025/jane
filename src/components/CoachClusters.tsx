import { SectionHeading } from "./SectionHeading";
import type { Locale } from "@/lib/i18n";

interface Cluster {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  items: { name: string; detail: string }[];
  accent: "orange" | "mint" | "navy";
}

function clustersFor(locale: Locale): Cluster[] {
  if (locale === "nl") {
    return [
      {
        id: "bestemming",
        eyebrow: "Het hart van Jane®",
        title: "Persoonlijke bestemming & functie",
        body: "Voor mensen die voelen: 'ik doe iets, maar het is niet helemaal van mij.' De drie-stappen-workshop staat centraal: wie ben ik niet, wie ben ik wel, wat houdt me tegen.",
        accent: "orange",
        items: [
          {
            name: "Bestemmingscoach",
            detail: "Begeleidt de drie-stappen-workshop met de 27 Jane® functies als kader.",
          },
          {
            name: "Blinde-vlek & compensatietalent",
            detail: "Voor wie al jaren hetzelfde patroon herkent — gespecialiseerd in stap 3.",
          },
          {
            name: "Gaven- en talentcoach",
            detail: "Spirituele bestemming naast je functie, incl. vijfvoudige bediening.",
          },
        ],
      },
      {
        id: "rol",
        eyebrow: "Per rol of levensfase",
        title: "Doelgroep-specifieke coaches",
        body: "De Jane®-methodiek toegepast op jouw situatie. Lagere drempel, herkenbare taal, materialen afgestemd op de context.",
        accent: "mint",
        items: [
          { name: "Loopbaan & heroriëntatie", detail: "Tussen banen of in burn-out herstel." },
          { name: "Managers & leiderschap", detail: "Unieke Bestemming Manager-variant." },
          { name: "Sales & ondernemers", detail: "Jane® toegepast op commerciële rollen." },
          { name: "Team- en projectleiders", detail: "Voor wie formeel of informeel anderen aanstuurt." },
          { name: "Voorgangers & kerkleiders", detail: "Inclusief het TOP-programma." },
          { name: "Echtparen & relaties", detail: "Jane® functies binnen de relatiedynamiek." },
          { name: "Jongeren & studiekeuze", detail: "Jane® voor 16–25-jarigen, richting kiezen." },
        ],
      },
      {
        id: "team",
        eyebrow: "Teams & organisaties",
        title: "Team & organisatiecoaching",
        body: "Jane® als fundament voor groepen. Van een eendaags Team Life Statement-traject tot werving en selectie op talent.",
        accent: "navy",
        items: [
          {
            name: "Teamcoach",
            detail: "Team Life Statement-traject: 1-daagse offsite plus follow-up.",
          },
          {
            name: "Organisatie- en cultuurcoach",
            detail: "MKB-directies die Jane® inzetten als HR- en selectiefundament.",
          },
          {
            name: "Workshop-facilitator",
            detail: "Jane® seminars als lage-drempel kennismaking — instroomproduct.",
          },
        ],
      },
    ];
  }
  return [
    {
      id: "bestemming",
      eyebrow: "The heart of Jane®",
      title: "Personal calling & function",
      body: "For people who feel: 'I'm doing something, but it isn't fully mine.' The three-step workshop is central: who am I not, who am I, what's holding me back.",
      accent: "orange",
      items: [
        {
          name: "Calling coach",
          detail: "Guides the three-step workshop with the 27 Jane® functions as framework.",
        },
        {
          name: "Blind-spot & compensation coach",
          detail: "For people who recognise the same pattern for years — specialised in step 3.",
        },
        {
          name: "Gifts & talents coach",
          detail: "Spiritual calling alongside your function, incl. the fivefold ministry.",
        },
      ],
    },
    {
      id: "rol",
      eyebrow: "By role or life stage",
      title: "Audience-specific coaches",
      body: "The Jane® method applied to your context. Lower threshold, familiar language, materials tailored to the situation.",
      accent: "mint",
      items: [
        { name: "Career & reorientation", detail: "Between jobs or recovering from burnout." },
        { name: "Managers & leadership", detail: "Unique Calling Manager variant." },
        { name: "Sales & entrepreneurs", detail: "Jane® applied to commercial roles." },
        { name: "Team & project leads", detail: "For anyone who formally or informally leads others." },
        { name: "Pastors & church leaders", detail: "Including the TOP programme." },
        { name: "Couples & relationships", detail: "Jane® functions inside relationship dynamics." },
        { name: "Youth & study choice", detail: "Jane® for 16–25-year-olds, choosing direction." },
      ],
    },
    {
      id: "team",
      eyebrow: "Teams & organisations",
      title: "Team & organisation coaching",
      body: "Jane® as a foundation for groups. From a one-day Team Life Statement to talent-based recruitment.",
      accent: "navy",
      items: [
        { name: "Team coach", detail: "Team Life Statement: one-day offsite plus follow-up." },
        {
          name: "Organisation & culture coach",
          detail: "SME boards using Jane® as HR and selection foundation.",
        },
        {
          name: "Workshop facilitator",
          detail: "Jane® seminars as low-threshold introduction — entry product.",
        },
      ],
    },
  ];
}

const accentDot: Record<Cluster["accent"], string> = {
  orange: "bg-jane-orange",
  mint: "bg-jane-mint",
  navy: "bg-jane-navy",
};

const accentEyebrow: Record<Cluster["accent"], string> = {
  orange: "text-jane-orange",
  mint: "text-jane-mint",
  navy: "text-jane-navy",
};

export function CoachClusters({ locale }: { locale: Locale }) {
  const isNL = locale === "nl";
  const clusters = clustersFor(locale);
  return (
    <section id="soorten" className="py-20 bg-jane-cream scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={isNL ? "Soorten begeleiding" : "Types of coaching"}
          title={
            isNL
              ? "Drie clusters, één methodiek."
              : "Three clusters, one methodology."
          }
        />
        <p className="mx-auto mt-5 max-w-2xl text-center text-jane-navy/75 font-light text-lg">
          {isNL
            ? "Onze coaches zijn allemaal gecertificeerd in dezelfde Jane® Talenten Methodiek, maar passen hem toe in heel verschillende contexten. Vind het cluster dat bij jouw vraag past."
            : "Our coaches are all certified in the same Jane® Talent Methodology, but apply it across very different contexts. Find the cluster that fits your question."}
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {clusters.map((c) => (
            <article
              key={c.id}
              id={`cluster-${c.id}`}
              className="bg-white rounded-3xl p-7 lg:p-8 border border-jane-navy/5 flex flex-col scroll-mt-24"
            >
              <p
                className={`uppercase tracking-[0.22em] text-xs font-medium mb-3 ${accentEyebrow[c.accent]}`}
              >
                {c.eyebrow}
              </p>
              <h3 className="text-2xl font-light text-jane-navy leading-tight">
                {c.title}
              </h3>
              <p className="mt-4 text-jane-navy/75 font-light leading-relaxed">
                {c.body}
              </p>
              <ul className="mt-6 space-y-4">
                {c.items.map((it) => (
                  <li key={it.name} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${accentDot[c.accent]}`}
                    />
                    <div>
                      <p className="text-jane-navy font-normal text-[15px]">{it.name}</p>
                      <p className="text-jane-navy/70 text-sm leading-snug mt-0.5">
                        {it.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Locale } from "@/lib/i18n";

export interface ProgramRow {
  months: string;
  module: string;
  learn: string;
}

export interface OpleidingContent {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaLabel: string;
  ctaSecondary: string;
  intro: string;
  recognitionTitle: string;
  recognition: string[];
  offersTitle: string;
  offers: { title: string; body: string }[];
  programTitle: string;
  programIntro: string;
  programHead: { months: string; module: string; learn: string };
  program: ProgramRow[];
  programNote: string;
  forWhomYes: string[];
  forWhomNo: string[];
  investmentTitle: string;
  investmentPrice: string;
  investmentBody: string;
  investmentRoi: string;
  method: string;
  faq: { q: string; a: string }[];
  closingTitle: string;
  closingText: string;
}

const nl: OpleidingContent = {
  metaTitle: "Coach-opleiding — Word Certified JANE Coach",
  metaDescription:
    "Een 12-maands opleiding tot Certified JANE Coach: zes modules, een eigen JANE-traject, certificering en toegang tot het coachnetwerk.",
  heroEyebrow: "Jane® Coach-opleiding",
  heroTitle: "Word Certified JANE Coach",
  heroSubtitle:
    "Een 12-maands opleiding voor coaches, kerkleiders en JANE-cliënten die de methodiek willen leren toepassen — en willen werken in een netwerk van gelijkgestemde collega's.",
  ctaLabel: "Vraag de volledige opleidingsgids aan",
  ctaSecondary: "Of plan een telefonisch oriëntatiegesprek (30 min, vrijblijvend)",
  intro:
    "Sommige cliënten ontdekken in hun JANE-traject dat 'Coach' hun eigen functie is — nummer 22 binnen de 27 Jane-functies. Anderen zijn al jaren coach en zoeken een methode-verdieping die hun praktijk fundamenteel onderscheidt van de overvolle algemene coachmarkt. Voor allebei is er nu één route: de volledige opleiding tot Certified JANE Coach.",
  recognitionTitle: "Herken je dit?",
  recognition: [
    "Je hebt eigen ervaring met JANE en voelt dat dít het werk is dat je wilt doen voor anderen.",
    "Je bent al coach of consultant, maar mist methodische diepte die jouw praktijk onderscheidt.",
    "Je leidt een gemeente en wilt zelf coaches kunnen opleiden binnen je organisatie.",
    "Je staat voor een loopbaanswitch en zoekt een serieuze opleiding die ook commercieel houvast biedt.",
  ],
  offersTitle: "Wat de JANE Coach-opleiding je biedt",
  offers: [
    {
      title: "Methodische diepte die zichzelf verkoopt.",
      body: "Geen algemene coachvaardigheden, maar volledige beheersing van een eigen methodiek met 27 functies, een drie-stappen-workshop, gaventeksten en het Jane-diagram. Klanten weten wat ze bij jou krijgen.",
    },
    {
      title: "Vier coaching-formats, één opleiding.",
      body: "Naast 1-op-1 coaching leer je het loopbaan-vijfsessietraject, de Team Life Statement-methodiek, en het 'Op reis met Jane'-boekformat. Een gediplomeerde JANE Coach heeft een breder palet dan de meeste coaches op de markt.",
    },
    {
      title: "Toegang tot een bestaand netwerk en marketing.",
      body: "Direct na certificering wordt je opgenomen in het JANE-coachnetwerk: doorverwijzingen vanuit centrale marketing, gezamenlijke aanbesteding op grotere opdrachten, intervisie met collega's, en marketing-templates voor je eigen praktijk.",
    },
    {
      title: "Een persoonlijk traject als onderdeel.",
      body: "Module 2 van de opleiding is je eigen JANE-traject onder begeleiding. Geen JANE Coach geeft door wat hij of zij niet zelf heeft doorleefd.",
    },
  ],
  programTitle: "Hoe ziet het programma eruit",
  programIntro: "Twaalf maanden, zes modules, 480–560 uur. Twee cohorten per jaar (september en februari).",
  programHead: { months: "Maand", module: "Module", learn: "Wat je leert" },
  program: [
    { months: "1–2", module: "Module 1 — Fundament JANE", learn: "Alle 27 functies, gaventeksten, het diagramsysteem." },
    { months: "2–3", module: "Module 2 — Persoonlijk fundament", learn: "Eigen JANE-traject onder begeleiding." },
    { months: "3–5", module: "Module 3 — Coachingsvaardigheden", learn: "Luisteren, vragen, spiegelen, coach-ethiek." },
    { months: "5–8", module: "Module 4 — Drie-stappen-methodiek faciliteren", learn: "Stap 1, 2 en 3 zelfstandig begeleiden bij anderen." },
    { months: "8–10", module: "Module 5 — Specialisatie", learn: "Keuze: Christelijk, Professioneel, of Team & Organisatie." },
    { months: "10–12", module: "Module 6 — Praktijk + certificering", learn: "Drie cliënten onder supervisie, eindcasus, examen." },
  ],
  programNote:
    "Doorlopend tijdens de gehele opleiding: maandelijkse intervisie in vaste groepen, een persoonlijke supervisor, en (vanaf maand 6) stage bij een ervaren JANE-coach. Twee fysieke startweekenden, vier verdiepingsweekenden, examen op locatie. De rest hybride / online.",
  forWhomYes: [
    "Je hebt minimaal vijf jaar werkervaring in een rol waarin contact met mensen centraal staat.",
    "Je bent minimaal 28 jaar en hebt voldoende praktijkrijpheid om met cliënten te kunnen werken.",
    "Je hebt minstens 9–11 uur per week beschikbaar gedurende twaalf maanden.",
    "Je hebt het voornemen om na de opleiding tenminste tien JANE-trajecten per jaar te begeleiden.",
    "Je staat open voor de combinatie van methodisch leren én een eigen persoonlijk traject.",
  ],
  forWhomNo: [
    "Je zoekt een korte training of certificaat, geen volledige vakopleiding.",
    "Je bent niet bereid om eerst zelf een JANE-traject te doorlopen.",
    "Je zit middenin een ingrijpend life event of acute crisis — wacht hier nog even mee.",
    "Je hebt geen voornemen om de methode na de opleiding daadwerkelijk in te zetten.",
  ],
  investmentTitle: "De investering",
  investmentPrice: "€14.500",
  investmentBody:
    "De totale opleidingsprijs is €14.500 (BTW vrijgesteld). Daarin zitten alle modules, materialen (Jane boek 2, 3, 4 en 6), de fysieke onderdelen inclusief overnachting, het eigen JANE-traject en het examen. Drie betalingsopties: ineens, in twee termijnen, of in twaalf maandtermijnen.",
  investmentRoi:
    "Doorrekening voor een gemiddelde coach in 2026: een standaard 1-op-1 JANE-traject is €2.100–€3.500. Een parttime coach met twaalf trajecten per jaar realiseert €33.600 omzet — de opleiding is daarmee in ongeveer vijf maanden terugverdiend. Voor fulltime coaches binnen drie maanden van het eerste jaar.",
  method:
    "JANE is in 1998 ontwikkeld door Dirk van der Schaaf, met materiaal dat in bijna drie decennia is uitgewerkt: 27 functies, drie boeken, vier coaching-formats, en honderden begeleidde cliënten. De ACT-propositie (Jane Adviseurs, Coaches en Trainers) bestaat sinds 2010 — deze opleiding is de doorontwikkeling tot een volledig gestructureerde Certified-JANE-Coach-route. De opleidingsraad bestaat uit senior JANE-coaches met elk minimaal vijf jaar praktijkervaring.",
  faq: [
    { q: "Is een eerdere coachopleiding verplicht?", a: "Nee. Voor kerkleiders en oud-cliënten geen voorwaarde. Wel verplicht: minimaal vijf jaar werkervaring in een rol waarin contact met mensen centraal staat, plus een eigen JANE-traject voorafgaand aan de opleiding." },
    { q: "Is JANE een christelijke methode?", a: "JANE heeft een geestelijke laag die optioneel is. In de opleiding zit deze laag wel als basismaterie omdat een Certified Coach in beide werelden moet kunnen werken. Je hoeft niet christelijk te zijn om mee te doen." },
    { q: "Kan ik parttime werken tijdens de opleiding?", a: "Ja, dat is de norm. Reken op 9–11 uur per week, met enkele intensieve weekenden. De meeste cursisten combineren de opleiding met een hoofdfunctie." },
    { q: "Wat kost mij dit naast de €14.500 nog meer?", a: "Reiskosten naar fysieke locaties (€300–€800 over het hele jaar) en eventuele aanmelding bij externe coachregisters na afronding (€200–€500/jaar)." },
    { q: "Krijg ik na de opleiding daadwerkelijk cliënten doorverwezen?", a: "Ja, mits je actief blijft (continueringseisen) en kwaliteit levert. Gemiddeld twee tot vier verwijzingen in het eerste jaar, oplopend tot acht tot vijftien in latere jaren bij positieve klanttevredenheid." },
    { q: "Hoe verhoudt dit zich tot een 3-jarige NLP- of NOBCO-coachopleiding?", a: "Deze opleiding is gespecialiseerder en compacter. Algemene opleidingen leren breed coachen met meerdere methodes; deze opleiding maakt je expert in één specifieke. Voor wie al een algemeen coachfundament heeft is dit een efficiëntere route." },
  ],
  closingTitle: "Een eerste stap",
  closingText:
    "Niet iedereen wordt JANE Coach — en dat is goed. De opleiding is bewust intensief en de toelating selectief. Maar als deze opleiding bij je past, vind je hier een vakopleiding die methodisch onderscheidend is, een netwerk dat je verder helpt, en een terugverdienpad dat binnen het eerste jaar realistisch is. De eerste stap is een telefonisch oriëntatiegesprek met de opleidingsraad — 30 minuten, vrijblijvend.",
};

const en: OpleidingContent = {
  metaTitle: "Coach training — Become a Certified JANE Coach",
  metaDescription:
    "A 12-month training to become a Certified JANE Coach: six modules, your own JANE journey, certification and access to the coach network.",
  heroEyebrow: "Jane® Coach training",
  heroTitle: "Become a Certified JANE Coach",
  heroSubtitle:
    "A 12-month training for coaches, church leaders and JANE clients who want to learn to apply the methodology — and to work in a network of like-minded colleagues.",
  ctaLabel: "Request the full training guide",
  ctaSecondary: "Or schedule a phone orientation (30 min, no obligation)",
  intro:
    "Some clients discover during their JANE journey that 'Coach' is their own function — number 22 of the 27 Jane functions. Others have been coaching for years and seek a methodological depth that fundamentally sets their practice apart from the crowded general coaching market. For both, there is now one route: the full training to become a Certified JANE Coach.",
  recognitionTitle: "Does this sound familiar?",
  recognition: [
    "You have your own experience with JANE and feel this is the work you want to do for others.",
    "You are already a coach or consultant, but miss the methodological depth that sets your practice apart.",
    "You lead a congregation and want to be able to train coaches within your own organisation.",
    "You are facing a career switch and want a serious training that also offers commercial footing.",
  ],
  offersTitle: "What the JANE Coach training gives you",
  offers: [
    {
      title: "Methodological depth that sells itself.",
      body: "Not generic coaching skills, but full command of a distinct methodology with 27 functions, a three-step workshop, gift texts and the Jane diagram. Clients know what they get with you.",
    },
    {
      title: "Four coaching formats, one training.",
      body: "Besides one-on-one coaching you learn the five-session career journey, the Team Life Statement methodology, and the 'On the road with Jane' book format. A qualified JANE Coach has a broader palette than most coaches on the market.",
    },
    {
      title: "Access to an existing network and marketing.",
      body: "Right after certification you join the JANE coach network: referrals from central marketing, joint bidding on larger assignments, intervision with colleagues, and marketing templates for your own practice.",
    },
    {
      title: "A personal journey as part of it.",
      body: "Module 2 of the training is your own JANE journey under guidance. No JANE Coach passes on what they have not lived through themselves.",
    },
  ],
  programTitle: "What the programme looks like",
  programIntro: "Twelve months, six modules, 480–560 hours. Two cohorts per year (September and February).",
  programHead: { months: "Month", module: "Module", learn: "What you learn" },
  program: [
    { months: "1–2", module: "Module 1 — JANE foundation", learn: "All 27 functions, gift texts, the diagram system." },
    { months: "2–3", module: "Module 2 — Personal foundation", learn: "Your own JANE journey under guidance." },
    { months: "3–5", module: "Module 3 — Coaching skills", learn: "Listening, questioning, mirroring, coaching ethics." },
    { months: "5–8", module: "Module 4 — Facilitating the three-step method", learn: "Independently guiding steps 1, 2 and 3 for others." },
    { months: "8–10", module: "Module 5 — Specialisation", learn: "Choice: Christian, Professional, or Team & Organisation." },
    { months: "10–12", module: "Module 6 — Practice + certification", learn: "Three clients under supervision, final case, exam." },
  ],
  programNote:
    "Throughout the training: monthly intervision in fixed groups, a personal supervisor, and (from month 6) an internship with an experienced JANE coach. Two physical opening weekends, four deepening weekends, exam on location. The rest hybrid / online.",
  forWhomYes: [
    "You have at least five years of work experience in a role centred on contact with people.",
    "You are at least 28 and have enough practical maturity to work with clients.",
    "You have at least 9–11 hours per week available over twelve months.",
    "You intend to guide at least ten JANE journeys per year after the training.",
    "You are open to combining methodical learning with your own personal journey.",
  ],
  forWhomNo: [
    "You are looking for a short training or certificate, not a full professional training.",
    "You are not willing to first complete a JANE journey yourself.",
    "You are in the middle of a major life event or acute crisis — hold off on this for now.",
    "You have no intention of actually applying the method after the training.",
  ],
  investmentTitle: "The investment",
  investmentPrice: "€14,500",
  investmentBody:
    "The total training price is €14,500 (VAT exempt). It covers all modules, materials (Jane books 2, 3, 4 and 6), the physical components including accommodation, your own JANE journey and the exam. Three payment options: in full, in two instalments, or in twelve monthly instalments.",
  investmentRoi:
    "A calculation for an average coach in 2026: a standard one-on-one JANE journey is €2,100–€3,500. A part-time coach with twelve journeys per year earns €33,600 in revenue — the training pays for itself in about five months. For full-time coaches, within three months of the first year.",
  method:
    "JANE was developed in 1998 by Dirk van der Schaaf, with material refined over nearly three decades: 27 functions, three books, four coaching formats, and hundreds of guided clients. The ACT proposition (Jane Advisers, Coaches and Trainers) has existed since 2010 — this training is its development into a fully structured Certified JANE Coach route. The training board consists of senior JANE coaches each with at least five years of practical experience.",
  faq: [
    { q: "Is a prior coaching qualification required?", a: "No. For church leaders and former clients it is not a condition. Required: at least five years of work experience in a role centred on contact with people, plus your own JANE journey before the training." },
    { q: "Is JANE a Christian method?", a: "JANE has a spiritual layer that is optional. In the training this layer is included as basic material because a Certified Coach must be able to work in both worlds. You don't have to be Christian to take part." },
    { q: "Can I work part-time during the training?", a: "Yes, that is the norm. Count on 9–11 hours per week, with a few intensive weekends. Most participants combine the training with a main job." },
    { q: "What else will this cost me besides the €14,500?", a: "Travel to physical locations (€300–€800 over the whole year) and optional registration with external coaching registers after completion (€200–€500/year)." },
    { q: "After the training, will I actually get clients referred to me?", a: "Yes, provided you stay active (continuation requirements) and deliver quality. On average two to four referrals in the first year, rising to eight to fifteen in later years with positive client satisfaction." },
    { q: "How does this compare to a 3-year NLP or NOBCO coaching course?", a: "This training is more specialised and compact. General courses teach broad coaching with multiple methods; this training makes you an expert in one specific method. For those who already have a general coaching foundation, this is a more efficient route." },
  ],
  closingTitle: "A first step",
  closingText:
    "Not everyone becomes a JANE Coach — and that's good. The training is deliberately intensive and admission is selective. But if this training fits you, you'll find a professional training that is methodologically distinctive, a network that helps you forward, and a payback path that is realistic within the first year. The first step is a phone orientation with the training board — 30 minutes, no obligation.",
};

export function getOpleiding(locale: Locale): OpleidingContent {
  return locale === "nl" ? nl : en;
}

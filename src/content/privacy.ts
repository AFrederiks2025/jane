import type { Locale } from "@/lib/i18n";

interface PrivacySection {
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface PrivacyContent {
  title: string;
  intro: string;
  lastUpdated: string;
  controller: PrivacySection;
  data: PrivacySection;
  purposes: PrivacySection;
  legalBasis: PrivacySection;
  retention: PrivacySection;
  sharing: PrivacySection;
  rights: PrivacySection;
  cookies: PrivacySection;
  contact: PrivacySection;
  disclaimer: string;
}

// NB: this is a sensible starting text — have a legal professional review
// before going live, and fill in the [INVULLEN] / [FILL IN] placeholders.

const lastUpdated = "19 mei 2026";

const nl: PrivacyContent = {
  title: "Privacy Policy",
  lastUpdated: `Laatst bijgewerkt: ${lastUpdated}`,
  intro:
    "Bij Jane® gaan we zorgvuldig om met jouw persoonsgegevens. In dit privacy statement leggen we uit welke gegevens we verzamelen, waarom we ze gebruiken, hoe lang we ze bewaren en welke rechten je hebt.",
  controller: {
    title: "1. Verwerkingsverantwoordelijke",
    paragraphs: [
      "Verantwoordelijk voor de verwerking van persoonsgegevens is:",
      "Jane® — Jamila de Jong-van der Schaaf",
      "Adres: [INVULLEN]",
      "KvK-nummer: [INVULLEN]",
      "E-mail: jamila@jane.nl",
      "Telefoon: 06 49749381",
    ],
  },
  data: {
    title: "2. Welke gegevens we verwerken",
    paragraphs: [
      "We verwerken alleen de gegevens die we nodig hebben om onze dienstverlening te kunnen leveren.",
    ],
    list: [
      "Contactgegevens — naam, e-mailadres en telefoonnummer wanneer je contact opneemt via het formulier, mail of telefoon.",
      "Trajectgegevens — bij deelname aan een Jane® traject: gegevens uit het assessment (IQ-test, vragenlijsten), het validatiegesprek en je Talenten Rapportage.",
      "Account- en inloggegevens — wanneer je een account aanmaakt voor het coach-, opleider- of student-portaal.",
      "Technische gegevens — IP-adres, browsertype, bezochte pagina's en bezoektijden (zie cookies hieronder).",
    ],
  },
  purposes: {
    title: "3. Waarvoor we ze gebruiken",
    paragraphs: [],
    list: [
      "Het uitvoeren van het Jane® Talenten Traject en het opstellen van rapportages.",
      "Het beantwoorden van vragen en verzoeken die je aan ons stelt.",
      "Het verzorgen van trainingen en intervisie via het Jane® Instituut.",
      "Het verbeteren van onze site en dienstverlening (statistieken — alleen met toestemming).",
      "Het voldoen aan wettelijke verplichtingen, bijvoorbeeld de fiscale bewaarplicht.",
    ],
  },
  legalBasis: {
    title: "4. Rechtsgronden",
    paragraphs: [
      "We verwerken jouw gegevens op basis van één of meer van de volgende rechtsgronden uit de AVG:",
    ],
    list: [
      "Toestemming — bijvoorbeeld voor statistiekcookies of een nieuwsbrief.",
      "Uitvoering van een overeenkomst — bij deelname aan een traject of training.",
      "Wettelijke verplichting — bijvoorbeeld voor administratie en belastingaangifte.",
      "Gerechtvaardigd belang — om onze site en dienstverlening veilig te houden en te verbeteren.",
    ],
  },
  retention: {
    title: "5. Bewaartermijnen",
    paragraphs: [
      "We bewaren je gegevens niet langer dan nodig. Concrete termijnen die we hanteren:",
    ],
    list: [
      "Administratieve gegevens (facturen, contracten): zeven jaar — wettelijke fiscale bewaarplicht.",
      "Assessment- en trajectgegevens: tot twee jaar na afronding, daarna alleen geanonimiseerd voor onderzoek en doorontwikkeling.",
      "Contactaanvragen zonder vervolg: maximaal één jaar.",
      "Technische logs en statistieken: maximaal 26 maanden.",
    ],
  },
  sharing: {
    title: "6. Met wie we gegevens delen",
    paragraphs: [
      "Jouw gegevens blijven binnen Jane®. We delen alleen wat strikt nodig is met betrouwbare verwerkers waarmee we een verwerkersovereenkomst hebben — bijvoorbeeld onze hostingpartner, e-mailprovider en statistiektool. We verkopen geen gegevens aan derden.",
      "Wanneer je begeleid wordt door een Jane® gecertificeerde coach, deelt deze coach jouw rapport alleen na expliciete toestemming binnen het Jane® platform.",
    ],
  },
  rights: {
    title: "7. Jouw rechten",
    paragraphs: ["Je hebt onder de AVG de volgende rechten:"],
    list: [
      "Inzage in de gegevens die we van jou verwerken.",
      "Correctie van onjuiste of onvolledige gegevens.",
      "Verwijdering van je gegevens (recht om vergeten te worden).",
      "Beperking van de verwerking.",
      "Bezwaar tegen de verwerking.",
      "Dataportabiliteit — je gegevens in een gangbaar formaat ontvangen.",
      "Intrekken van eerder gegeven toestemming.",
      "Klacht indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).",
    ],
  },
  cookies: {
    title: "8. Cookies",
    paragraphs: [
      "We gebruiken een beperkt aantal cookies. Noodzakelijke cookies zijn altijd aan om de site te laten werken. Statistiek- en marketingcookies plaatsen we alleen na expliciete toestemming via de cookiebanner. Je kunt jouw voorkeuren op elk moment aanpassen via de link “Cookie-instellingen” onderaan elke pagina.",
    ],
  },
  contact: {
    title: "9. Vragen of klachten",
    paragraphs: [
      "Heb je een vraag, opmerking of klacht over de manier waarop we met jouw gegevens omgaan? Neem contact op met Jamila via jamila@jane.nl of 06 49749381. We reageren binnen één werkweek.",
    ],
  },
  disclaimer:
    "Deze tekst is een uitgangspunt en moet voor publicatie worden gereviewd door een juridisch professional. De gemarkeerde [INVULLEN]-velden moeten worden aangevuld met de actuele bedrijfsgegevens.",
};

const en: PrivacyContent = {
  title: "Privacy Policy",
  lastUpdated: `Last updated: ${lastUpdated}`,
  intro:
    "At Jane® we handle your personal data with care. This privacy statement explains which data we collect, why we use it, how long we keep it and what rights you have.",
  controller: {
    title: "1. Data controller",
    paragraphs: [
      "Responsible for processing personal data is:",
      "Jane® — Jamila de Jong-van der Schaaf",
      "Address: [FILL IN]",
      "Chamber of Commerce: [FILL IN]",
      "Email: jamila@jane.nl",
      "Phone: +31 6 49749381",
    ],
  },
  data: {
    title: "2. What data we process",
    paragraphs: [
      "We only process the data we need to deliver our services.",
    ],
    list: [
      "Contact details — name, email and phone number when you reach out via form, email or phone.",
      "Journey data — when participating in a Jane® journey: assessment data (IQ test, questionnaires), validation interview notes and your Talent Report.",
      "Account and login data — when you create an account for the coach, trainer or student portal.",
      "Technical data — IP address, browser type, visited pages and visit times (see cookies below).",
    ],
  },
  purposes: {
    title: "3. Why we use it",
    paragraphs: [],
    list: [
      "To deliver the Jane® Talent Journey and produce reports.",
      "To answer questions and requests.",
      "To run trainings and intervision via the Jane® Institute.",
      "To improve our site and services (statistics — only with consent).",
      "To meet legal obligations, e.g. tax retention.",
    ],
  },
  legalBasis: {
    title: "4. Legal basis",
    paragraphs: [
      "We process your data based on one or more of the following GDPR legal bases:",
    ],
    list: [
      "Consent — e.g. for analytics cookies or a newsletter.",
      "Performance of a contract — when you participate in a journey or training.",
      "Legal obligation — e.g. for administration and tax filings.",
      "Legitimate interest — to keep our site and services secure and to improve them.",
    ],
  },
  retention: {
    title: "5. Retention",
    paragraphs: ["We don’t keep your data any longer than needed. Concrete retention periods:"],
    list: [
      "Administrative data (invoices, contracts): seven years — statutory tax retention.",
      "Assessment and journey data: up to two years after completion, after that only anonymised for research and improvement.",
      "Contact requests without follow-up: maximum one year.",
      "Technical logs and statistics: maximum 26 months.",
    ],
  },
  sharing: {
    title: "6. Who we share data with",
    paragraphs: [
      "Your data stays within Jane®. We only share what is strictly necessary with trusted processors with whom we have a data processing agreement — e.g. our hosting partner, email provider and analytics tool. We never sell your data to third parties.",
      "When you’re guided by a Jane® certified coach, that coach only shares your report with explicit consent within the Jane® platform.",
    ],
  },
  rights: {
    title: "7. Your rights",
    paragraphs: ["Under GDPR you have the following rights:"],
    list: [
      "Access to the data we hold on you.",
      "Correction of incorrect or incomplete data.",
      "Erasure of your data (right to be forgotten).",
      "Restriction of processing.",
      "Objection to processing.",
      "Data portability — receive your data in a common format.",
      "Withdrawal of previously given consent.",
      "Filing a complaint with the Dutch Data Protection Authority (autoriteitpersoonsgegevens.nl).",
    ],
  },
  cookies: {
    title: "8. Cookies",
    paragraphs: [
      "We use a limited number of cookies. Necessary cookies are always on to make the site work. Analytics and marketing cookies are only placed after explicit consent via the cookie banner. You can change your preferences at any time via the “Cookie settings” link at the bottom of every page.",
    ],
  },
  contact: {
    title: "9. Questions or complaints",
    paragraphs: [
      "Do you have a question, comment or complaint about how we handle your data? Contact Jamila at jamila@jane.nl or +31 6 49749381. We reply within one business week.",
    ],
  },
  disclaimer:
    "This text is a starting point and should be reviewed by a legal professional before publication. The marked [FILL IN] fields should be completed with the actual company details.",
};

export function getPrivacy(locale: Locale): PrivacyContent {
  return locale === "nl" ? nl : en;
}

import type { Locale } from "@/lib/i18n";

export interface StudentModule {
  slug: string;
  number: string;
  duration: string;
  tag: string;
  title: string;
  description: string;
  objectives: string[];
  reflection: string;
}

const nl: StudentModule[] = [
  {
    slug: "fundament-jane",
    number: "01",
    tag: "Fundament",
    duration: "Maand 1–2",
    title: "Fundament JANE",
    description:
      "De eerste twee maanden bouwen het volledige theoretische fundament op: geen verkorting of samenvatting, maar een complete onderdompeling in de methodiek zoals die in bijna drie decennia is ontwikkeld. Je leert de 27 functies, het onderscheid tussen talent, functie en competentie, de geestelijke laag en het diagram-systeem. De acht weken zijn opgedeeld in vier weken theoretisch fundament en vier weken verdieping en toepassing met eigen casuïstiek.",
    objectives: [
      "Alle 27 JANE-functies onderscheiden, beschrijven en herkennen in gedrag.",
      "Het onderscheid begrijpen tussen talent (aanleg), functie (rol) en competentie (uitgewerkt vermogen).",
      "De structuur van de 9 talentcategorieën (A1–A9, B1–B9, C1–C9) en hun onderlinge verhoudingen kennen.",
      "De geestelijke laag (gaven, vijfvoudige bediening) onderscheiden van de functie-laag.",
      "Het diagram-systeem (GD5, OD1) lezen en interpreteren.",
      "Hoorcolleges en wekelijkse werkcolleges volgen (elk 8 × 2 uur) met ongeveer 60 uur zelfstudie uit Jane boek 2 en 3.",
      "Twee schriftelijke tussenopdrachten maken: een analyse van de 27 functies in een geschreven case en een analyse van een eigen team.",
    ],
    reflection:
      "Na deze module ken je de volledige theoretische taal van JANE en kun je in een mondelinge toets functies en gedragsbeschrijvingen koppelen aan de juiste talentcategorieën.",
  },
  {
    slug: "persoonlijk-fundament",
    number: "02",
    tag: "Persoonlijk",
    duration: "Maand 2–3",
    title: "Persoonlijk fundament — eigen JANE-traject",
    description:
      "Een JANE Coach kan onmogelijk overdragen wat hij of zij niet zelf heeft doorleefd. Daarom doorloop je in deze module een verplicht eigen JANE-traject onder begeleiding van een senior JANE-coach uit het netwerk — exact het traject dat een gewone cliënt krijgt, maar met diepere reflectie op je eigen coach-rol. De module bestaat uit vier individuele sessies en vier wekelijkse reflectie-bijeenkomsten in de intervisiegroep.",
    objectives: [
      "Je eigen JANE-diagram opleveren.",
      "Je eigen blinde vlek en compensatietalent helder benoemen — niet abstract, maar herkenbaar in concrete situaties.",
      "Reflecteren op wat je profiel betekent voor je rol als coach: welke cliënten bij je passen, welke niet, en welke valkuilen je in coaching-relaties tegenkomt.",
      "Vier individuele sessies van 1,5 uur volgen met een senior JANE-coach.",
      "Deelnemen aan vier wekelijkse reflectie-bijeenkomsten in de intervisiegroep.",
      "Een persoonlijk dossier van 10–15 pagina's opstellen met je diagram, blinde vlek, compensatie en coach-implicaties.",
    ],
    reflection:
      "Na deze module heb je je eigen JANE-traject doorleefd en weet je hoe je persoonlijke profiel, blinde vlek en compensatie je werk als coach beïnvloeden.",
  },
  {
    slug: "coachingsvaardigheden",
    number: "03",
    tag: "Vaardigheden",
    duration: "Maand 3–5",
    title: "Coachingsvaardigheden",
    description:
      "In deze module leer je de basisvaardigheden van coaching én verbijzonder je ze naar de JANE-context. De negen weken zijn opgedeeld in drie blokken: algemene coachingsvaardigheden, JANE-specifieke gesprekstechnieken, en intake en grensbewaking. Voor ervaren coaches is een deel herhaling, maar de JANE-specifieke verbijzondering is voor iedereen nieuw.",
    objectives: [
      "Actieve luistervaardigheden, krachtig vragen stellen, spiegelen en confronteren beheersen.",
      "De coaching-ethiek kennen en grenzen herkennen tussen coaching, therapie en pastoraat.",
      "Een intake-gesprek voeren waarin je beoordeelt of JANE de juiste interventie is.",
      "JANE-specifieke gesprekssituaties herkennen en professioneel hanteren: weerstand bij stap 3, verwarring bij stap 1 en euforie bij stap 2.",
      "Negen werkcolleges van 3 uur volgen met rollenspellen, video-opnames van eigen sessies en feedback-rondes.",
      "Wekelijks twee uur peer-oefenen en zes coach-the-coach-sessies van 45 minuten met een senior coach doen.",
    ],
    reflection:
      "Na deze module kun je een professioneel intake- en coachgesprek voeren en JANE-specifieke gesprekssituaties herkennen en hanteren, aantoonbaar in een video-beoordeling op zeven competenties.",
  },
  {
    slug: "drie-stappen-faciliteren",
    number: "04",
    tag: "Faciliteren",
    duration: "Maand 5–8",
    title: "Drie-stappen-methodiek faciliteren",
    description:
      "De kern van het vak: het zelfstandig kunnen faciliteren van het drie-stappen-traject bij anderen. Dit is de langste module — vier maanden — omdat elke stap apart wordt geleerd, geoefend en getoetst, telkens met colleges, peer-sessies, live observatie van een senior coach en supervisie. Stap 1 (Wie ben ik niet), stap 2 (Wie ben ik wel) en stap 3 (Wat houdt me tegen) komen achtereenvolgens aan bod.",
    objectives: [
      "Stap 1 (Wie ben ik niet) zelfstandig faciliteren met de master-template en de modelopdracht als huiswerk.",
      "Stap 2 (Wie ben ik wel) zelfstandig faciliteren en per cliënt 5 tot 8 functies uit de 27 identificeren met onderbouwing.",
      "Stap 3 (Wat houdt me tegen) zelfstandig faciliteren, ook bij weerstand, zonder oordelend te worden of de cliënt emotioneel te overbelasten.",
      "Per stap deelnemen aan peer-sessies (tien in totaal) waarin je zowel faciliteert als deelneemt.",
      "Live observaties van senior coaches bijwonen en intensieve supervisie op je eigen facilitatie krijgen.",
      "Drie schriftelijke cliënt-uitwerkingen maken (één per stap), waaronder fictieve cliëntcasussen.",
    ],
    reflection:
      "Na deze module kun je alle drie de stappen van de JANE-methodiek zelfstandig bij anderen faciliteren, getoetst met video-opnames van een stap 2- en stap 3-sessie en drie schriftelijke uitwerkingen.",
  },
  {
    slug: "specialisatie",
    number: "05",
    tag: "Specialisatie",
    duration: "Maand 8–10",
    title: "Specialisatie",
    description:
      "In deze module kies je één van drie specialisatiesporen, afgestemd op je toepassingsdomein; een tweede spoor kun je later via een verkorte vervolgmodule toevoegen. Spoor 1 (Christelijk) richt zich op de geestelijke laag: de 35 gaventeksten, de vijfvoudige bediening en de christelijke doelgroepen. Spoor 2 (Professioneel) gaat over functie-specifieke varianten en het loopbaan-vijfsessietraject; spoor 3 (Team & Organisatie) over het Team Life Statement-traject en organisatie-trajecten.",
    objectives: [
      "Eén specialisatiespoor kiezen: Christelijk, Professioneel, of Team & Organisatie.",
      "Christelijk spoor: de 35 gaventeksten, de vijfvoudige bediening en coaching van gemeenteleden, voorgangers en oudstenteams beheersen.",
      "Professioneel spoor: de functie-specifieke varianten (Manager, Sales, Team-/Projectleider) en het loopbaantraject 'Vind je beste functie' beheersen.",
      "Team & Organisatie spoor: het volledige Team Life Statement-traject, de gemeente-profielschets-methodiek en de oudstenteam-stof beheersen.",
      "Per spoor zes halve-dag-colleges en twee weekendworkshops volgen.",
      "Een eigen specialisatie-casus uitwerken in het gekozen domein en mondeling verdedigen (60 minuten).",
    ],
    reflection:
      "Na deze module heb je diepgaande domeinkennis binnen je gekozen spoor en kun je een domeinspecifieke casus opstellen, verdedigen en jezelf binnen dat domein positioneren.",
  },
  {
    slug: "praktijk-certificering",
    number: "06",
    tag: "Certificering",
    duration: "Maand 10–12",
    title: "Praktijk + certificering",
    description:
      "In de laatste drie maanden draait alles om eigen praktijk: je coacht drie eigen cliënten van begin tot eind onder supervisie van een senior coach, met trajecten van 6–8 weken elk. Daarnaast werk je één traject uit tot een eindcasus van 25–30 pagina's en leg je het driedelige certificeringsexamen af. Wie alle onderdelen voldoende afsluit, ontvangt het certificaat Certified JANE Coach (CJC).",
    objectives: [
      "Drie eigen cliënten zelfstandig begeleiden van intake tot afronding, elk traject van 6–8 weken.",
      "Elk traject documenteren in een coach-dossier op CJC-niveau.",
      "Eén traject uitwerken tot een eindcasus van 25–30 pagina's: intake, drie-stappen-uitwerking, persoonlijk diagram, vervolgafspraken en reflectie op je eigen rol.",
      "Het schriftelijk examen over de methodiek afleggen (3 uur, 60 vragen).",
      "Het mondeling examen doen waarin twee experts de eindcasus bevragen (60 minuten).",
      "Een live observatie van één coaching-sessie met een peer-cliënt ondergaan.",
    ],
    reflection:
      "Na deze module heb je drie volledige trajecten zelfstandig begeleid en het driedelige examen behaald, waarmee je het certificaat Certified JANE Coach (CJC) ontvangt.",
  },
];

const en: StudentModule[] = [
  {
    slug: "fundament-jane",
    number: "01",
    tag: "Foundation",
    duration: "Month 1–2",
    title: "JANE Foundation",
    description:
      "The first two months build the complete theoretical foundation: no shortcuts or summaries, but a full immersion in the methodology as it has developed over nearly three decades. You learn the 27 functions, the distinction between talent, function and competency, the spiritual layer, and the diagram system. The eight weeks are split into four weeks of theoretical foundation and four weeks of deepening and application with your own case material.",
    objectives: [
      "Distinguish, describe and recognise all 27 JANE functions in behaviour.",
      "Understand the distinction between talent (aptitude), function (role) and competency (developed ability).",
      "Know the structure of the 9 talent categories (A1–A9, B1–B9, C1–C9) and how they relate to one another.",
      "Distinguish the spiritual layer (gifts, fivefold ministry) from the function layer.",
      "Read and interpret the diagram system (GD5, OD1).",
      "Attend lectures and weekly seminars (8 × 2 hours each) alongside roughly 60 hours of self-study from Jane books 2 and 3.",
      "Complete two written interim assignments: an analysis of the 27 functions in a written case and an analysis of your own team.",
    ],
    reflection:
      "After this module you know the full theoretical language of JANE and can, in an oral assessment, link functions and behavioural descriptions to the correct talent categories.",
  },
  {
    slug: "persoonlijk-fundament",
    number: "02",
    tag: "Personal",
    duration: "Month 2–3",
    title: "Personal Foundation — your own JANE journey",
    description:
      "A JANE Coach cannot possibly pass on what they have not lived through themselves. That is why this module takes you through a mandatory personal JANE journey under the guidance of a senior JANE coach from the network — exactly the journey an ordinary client receives, but with deeper reflection on your own role as a coach. The module consists of four individual sessions and four weekly reflection meetings in the peer group.",
    objectives: [
      "Produce your own JANE diagram.",
      "Clearly name your own blind spot and compensation talent — not in the abstract, but recognisable in concrete situations.",
      "Reflect on what your profile means for your role as a coach: which clients suit you, which do not, and which pitfalls you will meet in coaching relationships.",
      "Attend four individual 1.5-hour sessions with a senior JANE coach.",
      "Take part in four weekly reflection meetings in the peer group.",
      "Compile a personal dossier of 10–15 pages covering your diagram, blind spot, compensation and coaching implications.",
    ],
    reflection:
      "After this module you have lived through your own JANE journey and understand how your personal profile, blind spot and compensation shape your work as a coach.",
  },
  {
    slug: "coachingsvaardigheden",
    number: "03",
    tag: "Skills",
    duration: "Month 3–5",
    title: "Coaching Skills",
    description:
      "In this module you learn the core skills of coaching and tailor them to the JANE context. The nine weeks are split into three blocks: general coaching skills, JANE-specific conversation techniques, and intake and boundary-keeping. For experienced coaches part of this is revision, but the JANE-specific tailoring is new for everyone.",
    objectives: [
      "Master active listening, powerful questioning, mirroring and confronting.",
      "Know the ethics of coaching and recognise the boundaries between coaching, therapy and pastoral care.",
      "Conduct an intake conversation in which you assess whether JANE is the right intervention.",
      "Recognise and professionally handle JANE-specific situations: resistance at step 3, confusion at step 1 and euphoria at step 2.",
      "Attend nine 3-hour seminars with role-plays, video recordings of your own sessions and feedback rounds.",
      "Practise two hours weekly with peers and complete six 45-minute coach-the-coach sessions with a senior coach.",
    ],
    reflection:
      "After this module you can conduct a professional intake and coaching conversation and recognise and handle JANE-specific situations, demonstrated in a video assessment against seven competencies.",
  },
  {
    slug: "drie-stappen-faciliteren",
    number: "04",
    tag: "Facilitating",
    duration: "Month 5–8",
    title: "Facilitating the Three-Step Method",
    description:
      "The heart of the craft: being able to facilitate the three-step journey for others on your own. This is the longest module — four months — because each step is taught, practised and assessed separately, each time with lectures, peer sessions, live observation of a senior coach and supervision. Step 1 (Who I am not), step 2 (Who I am) and step 3 (What holds me back) are covered in turn.",
    objectives: [
      "Facilitate step 1 (Who I am not) independently using the master template and the model assignment as homework.",
      "Facilitate step 2 (Who I am) independently and identify 5 to 8 of the 27 functions per client, with supporting evidence.",
      "Facilitate step 3 (What holds me back) independently, including in the face of resistance, without becoming judgemental or emotionally overloading the client.",
      "Take part per step in peer sessions (ten in total) in which you both facilitate and participate.",
      "Attend live observations of senior coaches and receive intensive supervision on your own facilitation.",
      "Produce three written client write-ups (one per step), including fictional client cases.",
    ],
    reflection:
      "After this module you can independently facilitate all three steps of the JANE method for others, assessed through video recordings of a step 2 and a step 3 session plus three written write-ups.",
  },
  {
    slug: "specialisatie",
    number: "05",
    tag: "Specialisation",
    duration: "Month 8–10",
    title: "Specialisation",
    description:
      "In this module you choose one of three specialisation tracks, matched to your field of application; a second track can be added later via a shortened follow-up module. Track 1 (Christian) focuses on the spiritual layer: the 35 gift texts, the fivefold ministry and the Christian target groups. Track 2 (Professional) covers function-specific variants and the five-session career journey; track 3 (Team & Organisation) covers the Team Life Statement journey and organisational work.",
    objectives: [
      "Choose one specialisation track: Christian, Professional, or Team & Organisation.",
      "Christian track: master the 35 gift texts, the fivefold ministry, and coaching of church members, pastors and elder teams.",
      "Professional track: master the function-specific variants (Manager, Sales, Team/Project Leader) and the career journey 'Find your best function'.",
      "Team & Organisation track: master the full Team Life Statement journey, the church profiling method and the elder-team material.",
      "Attend six half-day lectures and two weekend workshops within your track.",
      "Develop your own specialisation case in the chosen domain and defend it orally (60 minutes).",
    ],
    reflection:
      "After this module you have in-depth domain knowledge within your chosen track and can build a domain-specific case, defend it, and position yourself within that domain.",
  },
  {
    slug: "praktijk-certificering",
    number: "06",
    tag: "Certification",
    duration: "Month 10–12",
    title: "Practice + Certification",
    description:
      "In the final three months everything centres on your own practice: you coach three of your own clients from start to finish under the supervision of a senior coach, with journeys of 6–8 weeks each. In addition you develop one journey into a final case of 25–30 pages and sit the three-part certification exam. Anyone who passes all parts receives the Certified JANE Coach (CJC) certificate.",
    objectives: [
      "Guide three of your own clients independently from intake to completion, each journey lasting 6–8 weeks.",
      "Document each journey in a coach dossier at CJC level.",
      "Develop one journey into a final case of 25–30 pages: intake, three-step write-up, personal diagram, follow-up arrangements and reflection on your own role.",
      "Sit the written exam on the methodology (3 hours, 60 questions).",
      "Take the oral exam in which two experts question you on the final case (60 minutes).",
      "Undergo a live observation of one coaching session with a peer client.",
    ],
    reflection:
      "After this module you have independently guided three full journeys and passed the three-part exam, earning you the Certified JANE Coach (CJC) certificate.",
  },
];

export function getModules(locale: Locale): StudentModule[] {
  return locale === "nl" ? nl : en;
}

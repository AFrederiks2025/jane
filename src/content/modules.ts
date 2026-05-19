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
    slug: "welkom",
    number: "01",
    duration: "4 min",
    tag: "Introductie",
    title: "Welkom bij Jane®",
    description:
      "Een korte kennismaking met de Jane® Talenten Methodiek: waarom we kijken naar natuurlijke talenten, wat je in dit traject gaat ontdekken en hoe je hier het meeste uit haalt.",
    objectives: [
      "Begrijpen wat de Jane® methodiek wil bereiken",
      "Weten wat je kunt verwachten van dit traject",
      "Je eerste reflectievraag formuleren",
    ],
    reflection:
      "Schrijf in drie zinnen op wat je hoopt te ontdekken in dit traject. Bewaar dit — we komen er aan het einde op terug.",
  },
  {
    slug: "talentdiagram",
    number: "02",
    duration: "12 min",
    tag: "Methodiek",
    title: "Jouw 27 talenten",
    description:
      "Hoe lees je het Jane® talentdiagram? We leggen uit hoe de 27 talenten zich tot elkaar verhouden, welke combinaties iets bijzonders doen en wat een groeiremmer is.",
    objectives: [
      "Het Jane® talentdiagram in één oogopslag kunnen lezen",
      "Het verschil tussen talent, vaardigheid en competentie kennen",
      "Je eigen top-3 talenten herkennen in het diagram",
    ],
    reflection:
      "Welke drie talenten herken je het sterkst bij jezelf? En welke combinatie ervan voelt het meest ‘typisch jou’?",
  },
  {
    slug: "validatiegesprek",
    number: "03",
    duration: "8 min",
    tag: "Voorbereiding",
    title: "Het validatiegesprek voorbereiden",
    description:
      "Het validatiegesprek met je coach is hét moment waarop het rapport tot leven komt. We laten zien hoe je je voorbereidt zodat het gesprek écht iets oplevert.",
    objectives: [
      "Weten wat een validatiegesprek is en wat je coach van je vraagt",
      "Aantekeningen kunnen maken bij je rapport",
      "Met drie scherpe vragen het gesprek in gaan",
    ],
    reflection:
      "Welke uitkomst in je rapport verraste je het meest, en wat zou je daarover aan je coach willen vragen?",
  },
  {
    slug: "talenten-in-actie",
    number: "04",
    duration: "15 min",
    tag: "Toepassing",
    title: "Talenten in actie",
    description:
      "Inzicht is leuk, maar pas door dóen verandert er iets. In deze module zet je je talenten om in concrete acties voor de komende week — in werk én privé.",
    objectives: [
      "Je top-talenten herkennen in een gewone werkdag",
      "Eén talent kiezen dat je bewuster wil inzetten",
      "Een week-experiment ontwerpen rond dat talent",
    ],
    reflection:
      "Welk talent ga je deze week bewust inzetten — en hoe weet je aan het einde van de week dat het gelukt is?",
  },
  {
    slug: "groeiremmers",
    number: "05",
    duration: "10 min",
    tag: "Verdieping",
    title: "Groeiremmers herkennen en doorbreken",
    description:
      "Iedereen heeft ze: patronen die je hardnekkig in de weg zitten. We laten zien hoe je je groeiremmer benoemt, waar hij vandaan komt en hoe je hem stap voor stap omzet in groei.",
    objectives: [
      "Je belangrijkste groeiremmer kunnen benoemen",
      "Begrijpen waar deze remmer vandaan komt",
      "Eén concreet experiment kiezen om hem te doorbreken",
    ],
    reflection:
      "Welke ene zin zou je vaker tegen jezelf willen zeggen wanneer je groeiremmer opspeelt?",
  },
];

const en: StudentModule[] = [
  {
    slug: "welkom",
    number: "01",
    duration: "4 min",
    tag: "Introduction",
    title: "Welcome to Jane®",
    description:
      "A short introduction to the Jane® Talent Methodology: why we look at natural talents, what you will discover in this journey, and how to get the most out of it.",
    objectives: [
      "Understand what the Jane® methodology sets out to do",
      "Know what to expect from this journey",
      "Formulate your first reflection question",
    ],
    reflection:
      "In three sentences, write down what you hope to discover during this journey. Save this — we’ll return to it at the end.",
  },
  {
    slug: "talentdiagram",
    number: "02",
    duration: "12 min",
    tag: "Methodology",
    title: "Your 27 talents",
    description:
      "How do you read the Jane® talent diagram? We explain how the 27 talents relate to each other, which combinations create something special, and what a growth inhibitor is.",
    objectives: [
      "Read the Jane® talent diagram at a glance",
      "Tell the difference between talent, skill and competency",
      "Recognise your own top-three talents in the diagram",
    ],
    reflection:
      "Which three talents do you most strongly recognise in yourself? And which combination of them feels most ‘typically you’?",
  },
  {
    slug: "validatiegesprek",
    number: "03",
    duration: "8 min",
    tag: "Preparation",
    title: "Preparing your validation conversation",
    description:
      "The validation conversation with your coach is the moment when the report comes to life. We show you how to prepare so that the conversation actually delivers.",
    objectives: [
      "Know what a validation conversation is and what your coach expects",
      "Be able to make notes in your report",
      "Enter the conversation with three sharp questions",
    ],
    reflection:
      "Which finding in your report surprised you most, and what would you like to ask your coach about it?",
  },
  {
    slug: "talenten-in-actie",
    number: "04",
    duration: "15 min",
    tag: "Application",
    title: "Talents in action",
    description:
      "Insight is great, but real change comes through doing. In this module you translate your talents into concrete actions for the coming week — at work and at home.",
    objectives: [
      "Recognise your top talents during an ordinary work day",
      "Pick one talent you want to apply more deliberately",
      "Design a week-long experiment around that talent",
    ],
    reflection:
      "Which talent will you deliberately apply this week — and how will you know at the end of the week that you succeeded?",
  },
  {
    slug: "groeiremmers",
    number: "05",
    duration: "10 min",
    tag: "Deepening",
    title: "Recognising and breaking growth inhibitors",
    description:
      "Everyone has them: patterns that stubbornly get in your way. We show you how to name your growth inhibitor, where it comes from, and how to turn it into growth step by step.",
    objectives: [
      "Be able to name your main growth inhibitor",
      "Understand where this inhibitor comes from",
      "Choose one concrete experiment to break it",
    ],
    reflection:
      "What single sentence would you like to tell yourself more often when your growth inhibitor flares up?",
  },
];

export function getModules(locale: Locale): StudentModule[] {
  return locale === "nl" ? nl : en;
}

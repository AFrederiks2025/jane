import type { Locale } from "@/lib/i18n";

export interface BookSpec {
  label: string;
  value: string;
}

export interface BookItem {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  publisher: string;
  isbn: string;
  ean: string;
  pages: number;
  languageLabel: string;
  format: string;
  illustrations: string;
  edition: number;
  dimensionsLabel: string;
  weightLabel: string;
  categoryLabel: string;
  coverFront: string;
  coverBack?: string;
  shortDescription: string;
  longDescription: string[];
  testimonial?: { quote: string; author: string };
  /** Price in cents (EUR). Set when you know it; undefined means we hide the price. */
  priceCents?: number;
  /** ISO date string */
  publishedAt?: string;
  available: boolean;
}

const shared = {
  slug: "ontdek-uw-unieke-bestemming",
  author: "Dirk van der Schaaf",
  publisher: "VanderSchaaf Publications",
  isbn: "9789080894617",
  ean: "9789080894617",
  pages: 208,
  edition: 1,
  coverFront: "/photos/books/ontdek-uw-unieke-bestemming-front.jpg",
  coverBack: "/photos/books/ontdek-uw-unieke-bestemming-back.jpg",
  available: true,
};

const nl: BookItem[] = [
  {
    ...shared,
    title: "Ontdek uw unieke bestemming",
    subtitle: "9 stappen om uw droom te realiseren",
    languageLabel: "Nederlands",
    format: "Paperback",
    illustrations: "Met zwart-wit illustraties",
    dimensionsLabel: "168 × 240 × 12 mm",
    weightLabel: "412 g",
    categoryLabel: "Religie, Spiritualiteit & Filosofie / Theologie",
    shortDescription:
      "In uw talenten- en gavencombinatie zit Gods unieke bestemming met uw leven verborgen. Hij heeft een plan met uw natuurlijke talenten in uw dagelijkse werk en met uw geestelijke gaven in het Lichaam van Christus.",
    longDescription: [
      "De schrijver heeft 25 jaar ervaring met het analyseren van de talenten van mensen in binnen- en buitenland. Hij adviseert organisaties bij de inzet van hun mensen. Tevens traint hij managementteams in het ontdekken en realiseren van de unieke bestemming van hun onderneming.",
      "Zijn zoektocht naar de bijbelse methode mondde uit in een unieke test die in negen stappen de natuurlijke en geestelijke talenten van mensen in beeld brengt: de Jane® talenten- en gaventest.",
      "Tijdens de eendaagse Jane® seminars komen de taken, verantwoordelijkheden en rollen ter sprake die het beste bij iemand passen. Zij vormen de bouwstenen van iemands unieke bestemming.",
      "Aan de orde komen ook iemands ‘blinde vlek’ en het ‘compensatietalent’. De blinde vlek is een zwak punt waarvan mensen zich niet bewust zijn en die hun ontwikkeling ernstig kan belemmeren. Compensatie van blinde vlekken heeft als nadeel dat de werkelijke potentie in iemand verborgen blijft.",
      "Deze unieke talenten- en gaventest meet ook leidinggevende capaciteiten en geeft aanwijzingen over iemands hoofdtalent.",
    ],
    testimonial: {
      quote: "Leer je gave kennen en ga erin functioneren.",
      author: "Voorganger in Rotterdam — over de Jane® talenten- en gaventest",
    },
  },
];

const en: BookItem[] = [
  {
    ...shared,
    title: "Discover your unique purpose",
    subtitle: "Nine steps to realising your dream",
    languageLabel: "Dutch",
    format: "Paperback",
    illustrations: "With black-and-white illustrations",
    dimensionsLabel: "168 × 240 × 12 mm",
    weightLabel: "412 g",
    categoryLabel: "Religion, Spirituality & Philosophy / Theology",
    shortDescription:
      "Your unique purpose is hidden in the combination of your natural talents and spiritual gifts. God has a plan for your natural talents in your daily work and for your spiritual gifts in the Body of Christ.",
    longDescription: [
      "The author draws on 25 years of analysing the talents of people in the Netherlands and abroad. He advises organisations on deploying their people and trains management teams in discovering and realising the unique purpose of their company.",
      "His search for a biblical method led to a unique test that maps both natural and spiritual talents in nine steps: the Jane® talents-and-gifts assessment.",
      "During the one-day Jane® seminars the tasks, responsibilities and roles that suit someone best are discussed. They form the building blocks of a person’s unique purpose.",
      "Also addressed are the ‘blind spot’ and the ‘compensation talent’. A blind spot is a weakness people are unaware of, which can seriously hinder development. Compensating for blind spots has the side effect that the real potential within a person stays hidden.",
      "This unique talents-and-gifts assessment also measures leadership capacities and points to a person’s primary talent.",
    ],
    testimonial: {
      quote: "Learn to know your gift, and live in it.",
      author: "A pastor in Rotterdam — on the Jane® talents-and-gifts assessment",
    },
  },
];

export function getBooks(locale: Locale): BookItem[] {
  return locale === "nl" ? nl : en;
}

export function getBook(locale: Locale, slug: string): BookItem | undefined {
  return getBooks(locale).find((b) => b.slug === slug);
}

export function priceLabel(book: BookItem, locale: Locale): string | null {
  if (!book.priceCents) return null;
  return new Intl.NumberFormat(locale === "nl" ? "nl-NL" : "en-GB", {
    style: "currency",
    currency: "EUR",
  }).format(book.priceCents / 100);
}

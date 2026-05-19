import type { Locale } from "@/lib/i18n";

export interface ArchiveVideo {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  speaker: string;
}

const nl: ArchiveVideo[] = [
  {
    id: "dirk-1",
    youtubeId: "ld-ZB9r_Kuc",
    title: "Lezing Dirk van der Schaaf — deel 1",
    description:
      "Een lezing waarin Dirk vanuit zijn jarenlange ervaring vertelt over talent, bestemming en de bijbelse fundamenten onder de Jane® methodiek.",
    speaker: "Dirk van der Schaaf",
  },
  {
    id: "dirk-2",
    youtubeId: "W7AhvIN2ajg",
    title: "Lezing Dirk van der Schaaf — deel 2",
    description:
      "Vervolg op de eerste lezing — Dirk gaat dieper in op de praktische toepassing van talenten en geestelijke gaven in werk en gemeente.",
    speaker: "Dirk van der Schaaf",
  },
];

const en: ArchiveVideo[] = [
  {
    id: "dirk-1",
    youtubeId: "ld-ZB9r_Kuc",
    title: "Lecture Dirk van der Schaaf — part 1",
    description:
      "Drawing on years of experience, Dirk speaks on talent, purpose and the biblical foundations of the Jane® methodology. (In Dutch.)",
    speaker: "Dirk van der Schaaf",
  },
  {
    id: "dirk-2",
    youtubeId: "W7AhvIN2ajg",
    title: "Lecture Dirk van der Schaaf — part 2",
    description:
      "Continuing the first lecture, Dirk goes deeper into the practical application of talents and spiritual gifts in work and the church. (In Dutch.)",
    speaker: "Dirk van der Schaaf",
  },
];

export function getArchive(locale: Locale): ArchiveVideo[] {
  return locale === "nl" ? nl : en;
}

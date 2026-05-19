import type { Locale } from "@/lib/i18n";

export interface ArchiveVideo {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  speaker: string;
  group?: string;
}

const TALENTEN_NL = "De talenten uitgelegd";
const TALENTEN_EN = "The talents explained";
const LEZINGEN_NL = "Lezingen";
const LEZINGEN_EN = "Lectures";

const talentenVideoIds = [
  "HxijseJ4734",
  "-Wpc2pxAopc",
  "Trknfhqip6M",
  "C2Lb66TenXk",
  "1FzXpb0ycpc",
  "ksvZHr3KS9E",
];

const nl: ArchiveVideo[] = [
  ...talentenVideoIds.map((youtubeId, i) => ({
    id: `talenten-${i + 1}`,
    youtubeId,
    title: `De talenten uitgelegd — deel ${i + 1}`,
    description:
      "Dirk van der Schaaf bespreekt een set talenten uit het Jane® talentdiagram en laat zien hoe deze in de praktijk doorwerken.",
    speaker: "Dirk van der Schaaf",
    group: TALENTEN_NL,
  })),
  {
    id: "dirk-1",
    youtubeId: "ld-ZB9r_Kuc",
    title: "Lezing Dirk van der Schaaf — deel 1",
    description:
      "Een lezing waarin Dirk vanuit zijn jarenlange ervaring vertelt over talent, bestemming en de bijbelse fundamenten onder de Jane® methodiek.",
    speaker: "Dirk van der Schaaf",
    group: LEZINGEN_NL,
  },
  {
    id: "dirk-2",
    youtubeId: "W7AhvIN2ajg",
    title: "Lezing Dirk van der Schaaf — deel 2",
    description:
      "Vervolg op de eerste lezing — Dirk gaat dieper in op de praktische toepassing van talenten en geestelijke gaven in werk en gemeente.",
    speaker: "Dirk van der Schaaf",
    group: LEZINGEN_NL,
  },
];

const en: ArchiveVideo[] = [
  ...talentenVideoIds.map((youtubeId, i) => ({
    id: `talenten-${i + 1}`,
    youtubeId,
    title: `The talents explained — part ${i + 1}`,
    description:
      "Dirk van der Schaaf discusses a set of talents from the Jane® diagram and shows how they play out in practice. (In Dutch.)",
    speaker: "Dirk van der Schaaf",
    group: TALENTEN_EN,
  })),
  {
    id: "dirk-1",
    youtubeId: "ld-ZB9r_Kuc",
    title: "Lecture Dirk van der Schaaf — part 1",
    description:
      "Drawing on years of experience, Dirk speaks on talent, purpose and the biblical foundations of the Jane® methodology. (In Dutch.)",
    speaker: "Dirk van der Schaaf",
    group: LEZINGEN_EN,
  },
  {
    id: "dirk-2",
    youtubeId: "W7AhvIN2ajg",
    title: "Lecture Dirk van der Schaaf — part 2",
    description:
      "Continuing the first lecture, Dirk goes deeper into the practical application of talents and spiritual gifts in work and the church. (In Dutch.)",
    speaker: "Dirk van der Schaaf",
    group: LEZINGEN_EN,
  },
];

export function getArchive(locale: Locale): ArchiveVideo[] {
  return locale === "nl" ? nl : en;
}

export function groupArchive(videos: ArchiveVideo[]): { group: string; videos: ArchiveVideo[] }[] {
  const out: { group: string; videos: ArchiveVideo[] }[] = [];
  for (const v of videos) {
    const g = v.group ?? "";
    let bucket = out.find((b) => b.group === g);
    if (!bucket) {
      bucket = { group: g, videos: [] };
      out.push(bucket);
    }
    bucket.videos.push(v);
  }
  return out;
}

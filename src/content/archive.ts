import type { Locale } from "@/lib/i18n";

export interface ArchiveVideo {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  speaker: string;
  group?: string;
  talents?: string[];
}

const TALENTEN_NL = "De talenten uitgelegd";
const TALENTEN_EN = "The talents explained";
const LEZINGEN_NL = "Lezingen";
const LEZINGEN_EN = "Lectures";

interface TalentVideo {
  youtubeId: string;
  talentsNl: string[];
  talentsEn: string[];
}

const talentVideos: TalentVideo[] = [
  { youtubeId: "HxijseJ4734", talentsNl: ["Analyse", "Formulering", "Investering"], talentsEn: ["Analysis", "Formulation", "Investment"] },
  { youtubeId: "-Wpc2pxAopc", talentsNl: ["Onderscheiding", "Inleving", "Combinatie"], talentsEn: ["Discernment", "Empathy", "Combination"] },
  { youtubeId: "Trknfhqip6M", talentsNl: ["Routine", "Argumentatie", "Uitleg"], talentsEn: ["Routine", "Argumentation", "Explanation"] },
  { youtubeId: "C2Lb66TenXk", talentsNl: ["Helpen", "Signaleren", "Etaleren"], talentsEn: ["Helping", "Signalling", "Displaying"] },
  { youtubeId: "1FzXpb0ycpc", talentsNl: ["Vertrouwen", "Contact", "Corrigeren"], talentsEn: ["Trust", "Contact", "Correction"] },
  { youtubeId: "ksvZHr3KS9E", talentsNl: ["Doorbraak", "Beheersen", "Vertalen", "Route"], talentsEn: ["Breakthrough", "Control", "Translation", "Route"] },
];

function joinTalents(list: string[]): string {
  if (list.length <= 1) return list.join("");
  return `${list.slice(0, -1).join(", ")} & ${list[list.length - 1]}`;
}

const nl: ArchiveVideo[] = [
  ...talentVideos.map((v, i) => ({
    id: `talenten-${i + 1}`,
    youtubeId: v.youtubeId,
    title: `Deel ${i + 1} — ${joinTalents(v.talentsNl)}`,
    description: `Dirk van der Schaaf legt deze talenten uit en laat zien hoe ze in de praktijk doorwerken: ${joinTalents(v.talentsNl)}.`,
    speaker: "Dirk van der Schaaf",
    group: TALENTEN_NL,
    talents: v.talentsNl,
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
  ...talentVideos.map((v, i) => ({
    id: `talenten-${i + 1}`,
    youtubeId: v.youtubeId,
    title: `Part ${i + 1} — ${joinTalents(v.talentsEn)}`,
    description: `Dirk van der Schaaf explains these talents and shows how they play out in practice: ${joinTalents(v.talentsEn)}. (In Dutch.)`,
    speaker: "Dirk van der Schaaf",
    group: TALENTEN_EN,
    talents: v.talentsEn,
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

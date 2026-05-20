import type { Locale } from "@/lib/i18n";
import { audiencesNl } from "./audiences-nl";
import { audiencesEn } from "./audiences-en";

export type AudienceClusterId =
  | "geestelijk"
  | "ontwikkeling"
  | "zakelijk"
  | "relaties"
  | "team"
  | "advies"
  | "internationaal";

/** Internal status — used for ordering/priority, NOT shown to visitors. */
export type AudienceStatus = "kernlijn" | "groeilijn" | "slapend" | "specialistisch";

export interface AudienceFaq {
  q: string;
  a: string;
}

export interface WhatBlock {
  title: string;
  body: string;
}

export interface TrajectStep {
  step: string;
  title: string;
  duration: string;
  what: string;
}

export interface AudienceItem {
  slug: string;
  cluster: AudienceClusterId;
  status: AudienceStatus;
  /** Short label for cards, nav and overview */
  name: string;
  shortName: string;
  /** One-line summary for cards */
  proposition: string;
  /** Landing page */
  heroTitle: string;
  heroSubtitle: string;
  ctaLabel: string;
  intro: string;
  recognition: string[];
  whatJaneDoes: WhatBlock[];
  traject: TrajectStep[];
  forWhomYes: string[];
  forWhomNo: string[];
  method: string;
  faq: AudienceFaq[];
  closingTitle: string;
  closingText: string;
}

export interface ClusterMeta {
  id: AudienceClusterId;
  label: string;
  tagline: string;
  accent: "orange" | "mint" | "navy";
}

export function clusterMeta(locale: Locale): ClusterMeta[] {
  if (locale === "nl") {
    return [
      { id: "geestelijk", label: "Geestelijk & persoonlijk", tagline: "Bestemming, gaven en geloof", accent: "orange" },
      { id: "ontwikkeling", label: "Persoonlijke ontwikkeling", tagline: "Richting kiezen in studie en loopbaan", accent: "mint" },
      { id: "zakelijk", label: "Zakelijk & professioneel", tagline: "Leiderschap, sales en rollen", accent: "navy" },
      { id: "relaties", label: "Relaties", tagline: "Samen beter begrijpen", accent: "orange" },
      { id: "team", label: "Team & organisatie", tagline: "Van team tot hele organisatie", accent: "mint" },
      { id: "advies", label: "Strategisch advies", tagline: "Visie en profiel van een gemeente", accent: "navy" },
      { id: "internationaal", label: "Internationaal", tagline: "Jane® for the English-speaking world", accent: "orange" },
    ];
  }
  return [
    { id: "geestelijk", label: "Spiritual & personal", tagline: "Calling, gifts and faith", accent: "orange" },
    { id: "ontwikkeling", label: "Personal development", tagline: "Choosing a direction in study and career", accent: "mint" },
    { id: "zakelijk", label: "Business & professional", tagline: "Leadership, sales and roles", accent: "navy" },
    { id: "relaties", label: "Relationships", tagline: "Understanding each other better", accent: "orange" },
    { id: "team", label: "Team & organisation", tagline: "From team to whole organisation", accent: "mint" },
    { id: "advies", label: "Strategic advice", tagline: "Vision and profile of a community", accent: "navy" },
    { id: "internationaal", label: "International", tagline: "Jane® for the English-speaking world", accent: "orange" },
  ];
}

export function getAudiences(locale: Locale): AudienceItem[] {
  return locale === "nl" ? audiencesNl : audiencesEn;
}

export function getAudience(locale: Locale, slug: string): AudienceItem | undefined {
  return getAudiences(locale).find((a) => a.slug === slug);
}

export function audiencesByCluster(locale: Locale) {
  const clusters = clusterMeta(locale);
  const items = getAudiences(locale);
  return clusters
    .map((c) => ({ cluster: c, items: items.filter((i) => i.cluster === c.id) }))
    .filter((g) => g.items.length > 0);
}

export type ExperienceCategory = "participants" | "professionals";

export interface ExperienceItem {
  slug: string;
  name: string;
  role?: string;
  category: ExperienceCategory;
  excerpt: string;
  story?: string[];
}

export interface CoachItem {
  name: string;
  role: string;
}

export interface Person {
  name: string;
  role: string;
  bio: string;
}

export interface PortfolioItem {
  name: string;
  description: string;
  href: string;
}

export interface ValueItem {
  title: string;
  body: string;
}

export interface Block {
  eyebrow: string;
  title: string;
  body: string;
}

export interface SiteContent {
  common: {
    langName: string;
    switchTo: string;
    nav: {
      home: string;
      about: string;
      methodology: string;
      experiences: string;
      institute: string;
      contact: string;
    };
    cta: {
      header: string;
      forMe: string;
      forOthers: string;
    };
    footer: {
      tagline: string;
      contactTitle: string;
      email: string;
      phone: string;
      phoneHref: string;
      social: string;
      legal: string;
      legalHref: string;
      credit: string;
    };
    chat: string;
    readMore: string;
    download: string;
    downloadBrochure: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    hero: { eyebrow: string; title: string; subtitle: string };
    unique: { eyebrow: string; title: string; paragraphs: string[] };
    value: { eyebrow: string; title: string; items: ValueItem[] };
    blogs: {
      eyebrow: string;
      title: string;
      filterLabel: string;
      filters: { all: string; participants: string; professionals: string };
    };
    coaches: { eyebrow: string; title: string; cta: string };
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    quote: string;
    intro: { title: string; paragraphs: string[] };
    people: Person[];
  };
  methodology: {
    metaTitle: string;
    metaDescription: string;
    hero: { eyebrow: string; title: string; lead: string };
    explainer: string[];
    blocks: Block[];
    portfolio: { title: string; subtitle: string; items: PortfolioItem[] };
  };
  experiences: {
    metaTitle: string;
    metaDescription: string;
    hero: { eyebrow: string; title: string; lead: string };
    filters: { all: string; participants: string; professionals: string };
  };
  institute: {
    metaTitle: string;
    metaDescription: string;
    hero: { eyebrow: string; title: string; lead: string };
    certification: { title: string; body: string };
    intervision: { title: string; body: string };
    practical: { title: string; lines: string[] };
    trainings: PortfolioItem[];
    quote: string;
    selfWorth: { title: string; body: string; tagline: string };
  };
  experiencesData: ExperienceItem[];
  coachesData: CoachItem[];
}

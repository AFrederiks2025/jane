import { nl } from "./nl";
import { en } from "./en";
import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "./types";

const all: Record<Locale, SiteContent> = { nl, en };

export function getContent(locale: Locale): SiteContent {
  return all[locale];
}

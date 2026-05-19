"use client";

import { openCookieSettings } from "@/lib/cookieConsent";
import type { Locale } from "@/lib/i18n";

export function CookieSettingsLink({ locale }: { locale: Locale }) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="text-white/70 hover:text-jane-mint underline-offset-4 hover:underline"
    >
      {locale === "nl" ? "Cookie-instellingen" : "Cookie settings"}
    </button>
  );
}

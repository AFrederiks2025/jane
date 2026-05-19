"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

const STORAGE_KEY = "jane-cookie-accepted";

export function CookieBanner({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const copy =
    locale === "nl"
      ? {
          body: "Wij gebruiken cookies om je een optimale ervaring te bieden.",
          accept: "Accepteer",
          settings: "Cookie-instellingen",
        }
      : {
          body: "We use cookies to give you the best possible experience.",
          accept: "Accept",
          settings: "Cookie settings",
        };

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-white border border-jane-navy/10 shadow-2xl rounded-2xl p-5">
      <p className="text-jane-navy text-sm">{copy.body}</p>
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={accept}
          className="rounded-full bg-jane-navy text-white px-5 py-2 text-xs uppercase tracking-wider hover:bg-black transition-colors"
        >
          {copy.accept}
        </button>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="text-jane-navy/70 hover:text-jane-navy text-xs uppercase tracking-wider"
        >
          {copy.settings}
        </button>
      </div>
    </div>
  );
}

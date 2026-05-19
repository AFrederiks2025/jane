"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readConsent, writeConsent } from "@/lib/cookieConsent";
import type { Locale } from "@/lib/i18n";

interface CookieBannerProps {
  locale: Locale;
}

export function CookieBanner({ locale }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    if (!consent) setVisible(true);
    else {
      setAnalytics(consent.analytics);
      setMarketing(consent.marketing);
    }
    const onOpen = () => {
      const current = readConsent();
      if (current) {
        setAnalytics(current.analytics);
        setMarketing(current.marketing);
      }
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener("jane-consent-open", onOpen);
    return () => window.removeEventListener("jane-consent-open", onOpen);
  }, []);

  if (!visible) return null;

  const isNL = locale === "nl";
  const copy = isNL
    ? {
        title: "Cookies op deze site",
        body: "We gebruiken cookies om de site te laten werken en — met jouw toestemming — om hem te verbeteren.",
        acceptAll: "Accepteer alles",
        denyAll: "Alleen noodzakelijk",
        save: "Voorkeuren opslaan",
        customize: "Voorkeuren aanpassen",
        privacy: "Privacy Policy",
        privacyHref: "/nl/privacy",
        categories: {
          necessary: {
            title: "Noodzakelijk",
            body: "Voor het functioneren van de site. Altijd aan.",
          },
          analytics: {
            title: "Statistieken",
            body: "Helpt ons begrijpen hoe de site wordt gebruikt (Google Analytics).",
          },
          marketing: {
            title: "Marketing",
            body: "Voor relevante advertenties en social media. Op dit moment niet actief.",
          },
        },
        always: "Altijd",
      }
    : {
        title: "Cookies on this site",
        body: "We use cookies to keep the site working and — with your consent — to improve it.",
        acceptAll: "Accept all",
        denyAll: "Necessary only",
        save: "Save preferences",
        customize: "Customise preferences",
        privacy: "Privacy Policy",
        privacyHref: "/en/privacy",
        categories: {
          necessary: {
            title: "Necessary",
            body: "Required for the site to function. Always on.",
          },
          analytics: {
            title: "Analytics",
            body: "Helps us understand how the site is used (Google Analytics).",
          },
          marketing: {
            title: "Marketing",
            body: "For relevant ads and social media. Not active at this time.",
          },
        },
        always: "Always",
      };

  const finish = () => setVisible(false);

  const acceptAll = () => {
    writeConsent({ analytics: true, marketing: true });
    finish();
  };
  const denyAll = () => {
    writeConsent({ analytics: false, marketing: false });
    finish();
  };
  const save = () => {
    writeConsent({ analytics, marketing });
    finish();
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:max-w-md z-50 bg-white border border-jane-navy/10 shadow-2xl rounded-2xl p-6">
      <p className="text-jane-orange uppercase tracking-[0.18em] text-xs font-medium mb-2">
        {copy.title}
      </p>
      <p className="text-jane-navy/85 text-sm leading-relaxed">
        {copy.body}{" "}
        <Link href={copy.privacyHref} className="text-jane-mint hover:text-jane-orange underline-offset-2 hover:underline">
          {copy.privacy}
        </Link>
        .
      </p>

      {showDetails && (
        <ul className="mt-4 space-y-3 border-t border-jane-navy/10 pt-4">
          {(["necessary", "analytics", "marketing"] as const).map((cat) => {
            const c = copy.categories[cat];
            const checked = cat === "necessary" ? true : cat === "analytics" ? analytics : marketing;
            return (
              <li key={cat} className="flex items-start gap-3">
                <label className="inline-flex items-center pt-0.5">
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={cat === "necessary"}
                    onChange={(e) => {
                      if (cat === "analytics") setAnalytics(e.target.checked);
                      if (cat === "marketing") setMarketing(e.target.checked);
                    }}
                    className="w-4 h-4 accent-jane-mint disabled:opacity-50"
                  />
                </label>
                <div>
                  <p className="text-jane-navy text-sm font-medium">
                    {c.title}
                    {cat === "necessary" && (
                      <span className="ml-2 text-xs text-jane-navy/50 uppercase tracking-widest">
                        ({copy.always})
                      </span>
                    )}
                  </p>
                  <p className="text-jane-navy/70 text-xs leading-relaxed">{c.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {showDetails ? (
          <button
            type="button"
            onClick={save}
            className="rounded-full bg-jane-navy text-white px-5 py-2 text-xs uppercase tracking-wider hover:bg-black transition-colors"
          >
            {copy.save}
          </button>
        ) : (
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-full bg-jane-navy text-white px-5 py-2 text-xs uppercase tracking-wider hover:bg-black transition-colors"
          >
            {copy.acceptAll}
          </button>
        )}
        <button
          type="button"
          onClick={denyAll}
          className="rounded-full border border-jane-navy/30 text-jane-navy px-5 py-2 text-xs uppercase tracking-wider hover:border-jane-navy transition-colors"
        >
          {copy.denyAll}
        </button>
        {!showDetails && (
          <button
            type="button"
            onClick={() => setShowDetails(true)}
            className="text-jane-navy/70 hover:text-jane-navy text-xs uppercase tracking-wider"
          >
            {copy.customize}
          </button>
        )}
      </div>
    </div>
  );
}

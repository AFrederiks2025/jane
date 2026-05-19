"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { AccountMenu } from "./AccountMenu";
import { path, type Locale, type RouteKey } from "@/lib/i18n";
import { getContent } from "@/content";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const t = getContent(locale);
  const items: { key: RouteKey; label: string }[] = [
    { key: "methodology", label: t.common.nav.methodology },
    { key: "coaches", label: t.common.nav.coaches },
    { key: "experiences", label: t.common.nav.experiences },
    { key: "institute", label: t.common.nav.institute },
    { key: "about", label: t.common.nav.about },
  ];
  const otherLocale: Locale = locale === "nl" ? "en" : "nl";

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-jane-navy/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Logo locale={locale} />

        <nav className="hidden lg:flex items-center gap-7">
          {items.map((it) => (
            <Link
              key={it.key}
              href={path(locale, it.key)}
              className="text-jane-navy text-[15px] font-light hover:text-jane-orange transition-colors"
            >
              {it.label}
            </Link>
          ))}
          <Link
            href={`/${locale}#contact`}
            className="text-jane-navy text-[15px] font-light hover:text-jane-orange transition-colors"
          >
            {t.common.nav.contact}
          </Link>
          <AccountMenu locale={locale} />
          <Link
            href={`/${otherLocale}`}
            className="ml-1 text-jane-mint text-[15px] uppercase tracking-wider hover:text-jane-navy transition-colors"
            aria-label={`Switch to ${otherLocale === "en" ? "English" : "Nederlands"}`}
          >
            {otherLocale === "en" ? "EN" : "NL"}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className="lg:hidden p-2 -mr-2 text-jane-navy"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 7h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 17h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-jane-navy/5 bg-white px-6 py-4 space-y-3">
          {items.map((it) => (
            <Link
              key={it.key}
              href={path(locale, it.key)}
              onClick={() => setOpen(false)}
              className="block text-jane-navy text-base font-light py-1"
            >
              {it.label}
            </Link>
          ))}
          <Link
            href={`/${locale}#contact`}
            onClick={() => setOpen(false)}
            className="block text-jane-navy text-base font-light py-1"
          >
            {t.common.nav.contact}
          </Link>
          <AccountMenu locale={locale} variant="mobile" onNavigate={() => setOpen(false)} />
          <Link
            href={`/${otherLocale}`}
            onClick={() => setOpen(false)}
            className="block text-jane-mint text-base uppercase tracking-wider py-1 pt-3 border-t border-jane-navy/10"
          >
            {otherLocale === "en" ? "English" : "Nederlands"}
          </Link>
        </nav>
      )}
    </header>
  );
}

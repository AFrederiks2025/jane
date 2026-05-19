"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";

interface AccountMenuProps {
  locale: Locale;
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}

const COACH_APP_URL = "https://app.jane.nl/nl";

export function AccountMenu({ locale, variant = "desktop", onNavigate }: AccountMenuProps) {
  const t = getContent(locale).common.account;
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(
    () => () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    },
    [],
  );

  const handleNavigate = () => {
    setOpen(false);
    onNavigate?.();
  };

  const ExternalIcon = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="ml-1 inline-block opacity-60"
    >
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 7h8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  if (variant === "mobile") {
    return (
      <div className="border-t border-jane-navy/10 pt-3 mt-2 space-y-2">
        <p className="text-jane-orange text-xs uppercase tracking-widest">{t.label}</p>
        <a
          href={COACH_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleNavigate}
          className="block text-jane-navy text-base font-light py-1"
        >
          {t.coachLogin}
          <ExternalIcon />
        </a>
        <Link
          href={`/${locale}/inloggen/student`}
          onClick={handleNavigate}
          className="block text-jane-navy text-base font-light py-1"
        >
          {t.studentLogin}
        </Link>
        <Link
          href={`/${locale}/inloggen/opleider`}
          onClick={handleNavigate}
          className="block text-jane-navy text-base font-light py-1"
        >
          {t.trainerLogin}
        </Link>
        <div className="h-px bg-jane-navy/10 my-2" />
        <Link
          href={`/${locale}/account`}
          onClick={handleNavigate}
          className="block text-jane-navy text-base font-light py-1"
        >
          {t.myAccount}
        </Link>
        <p className="pt-2 text-sm text-jane-navy/70">
          {t.noAccount}{" "}
          <Link
            href={`/${locale}/account/registreren`}
            onClick={handleNavigate}
            className="text-jane-mint hover:text-jane-orange"
          >
            {t.register}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-jane-navy/20 px-4 py-1.5 text-jane-navy text-[15px] font-light hover:border-jane-mint hover:text-jane-mint transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M5 19a7 7 0 0 1 14 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        {t.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        id={menuId}
        role="menu"
        aria-hidden={!open}
        className={`absolute right-0 top-full pt-3 w-64 transition-all ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl bg-white border border-jane-navy/10 shadow-xl overflow-hidden">
          <a
            href={COACH_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={handleNavigate}
            className="flex items-center justify-between px-5 py-3 text-jane-navy hover:bg-jane-cream hover:text-jane-orange transition-colors"
          >
            <span>{t.coachLogin}</span>
            <ExternalIcon />
          </a>
          <Link
            href={`/${locale}/inloggen/student`}
            role="menuitem"
            onClick={handleNavigate}
            className="block px-5 py-3 text-jane-navy hover:bg-jane-cream hover:text-jane-orange transition-colors"
          >
            {t.studentLogin}
          </Link>
          <Link
            href={`/${locale}/inloggen/opleider`}
            role="menuitem"
            onClick={handleNavigate}
            className="block px-5 py-3 text-jane-navy hover:bg-jane-cream hover:text-jane-orange transition-colors"
          >
            {t.trainerLogin}
          </Link>
          <div className="h-px bg-jane-navy/10" />
          <Link
            href={`/${locale}/account`}
            role="menuitem"
            onClick={handleNavigate}
            className="block px-5 py-3 text-jane-navy hover:bg-jane-cream hover:text-jane-orange transition-colors"
          >
            {t.myAccount}
          </Link>
          <div className="px-5 py-4 bg-jane-cream/70 text-sm text-jane-navy/80">
            {t.noAccount}{" "}
            <Link
              href={`/${locale}/account/registreren`}
              role="menuitem"
              onClick={handleNavigate}
              className="text-jane-mint hover:text-jane-orange font-medium"
            >
              {t.register}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

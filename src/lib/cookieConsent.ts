"use client";

import { useEffect, useState } from "react";

export const CONSENT_VERSION = 1;
const STORAGE_KEY = `jane-cookie-consent-v${CONSENT_VERSION}`;
const EVENT = "jane-consent-change";

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export interface CookieConsent {
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
}

export const denyAll: CookieConsent = {
  version: CONSENT_VERSION,
  necessary: true,
  analytics: false,
  marketing: false,
  decidedAt: new Date(0).toISOString(),
};

export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(consent: Omit<CookieConsent, "version" | "necessary" | "decidedAt">) {
  if (typeof window === "undefined") return;
  const full: CookieConsent = {
    ...consent,
    version: CONSENT_VERSION,
    necessary: true,
    decidedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
    window.dispatchEvent(new CustomEvent(EVENT, { detail: full }));
  } catch {
    /* ignore */
  }
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("jane-consent-open"));
}

export function useCookieConsent(): CookieConsent | null {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    setConsent(readConsent());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<CookieConsent>).detail;
      setConsent(detail ?? null);
    };
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);

  return consent;
}

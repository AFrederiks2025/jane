import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  CONSENT_VERSION,
  denyAll,
  openCookieSettings,
  readConsent,
  writeConsent,
} from "./cookieConsent";

const STORAGE_KEY = `jane-cookie-consent-v${CONSENT_VERSION}`;

// Stability: every test starts from a clean slate. The classic flaky-auth-test
// failure is consent/session state leaking between tests via localStorage, so
// we clear it (and any spies) before and after each test.
beforeEach(() => {
  window.localStorage.clear();
  vi.restoreAllMocks();
  vi.useRealTimers();
});

afterEach(() => {
  window.localStorage.clear();
  vi.useRealTimers();
});

describe("readConsent", () => {
  it("returns null when nothing is stored", () => {
    expect(readConsent()).toBeNull();
  });

  it("round-trips a written consent", () => {
    writeConsent({ analytics: true, marketing: false });
    const consent = readConsent();
    expect(consent).not.toBeNull();
    expect(consent?.analytics).toBe(true);
    expect(consent?.marketing).toBe(false);
    expect(consent?.necessary).toBe(true);
    expect(consent?.version).toBe(CONSENT_VERSION);
  });

  it("ignores a stored consent from a previous version (re-consent trigger)", () => {
    const stale = {
      version: CONSENT_VERSION - 1,
      necessary: true,
      analytics: true,
      marketing: true,
      decidedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stale));
    expect(readConsent()).toBeNull();
  });

  it("returns null instead of throwing on corrupt JSON", () => {
    window.localStorage.setItem(STORAGE_KEY, "{not valid json");
    expect(() => readConsent()).not.toThrow();
    expect(readConsent()).toBeNull();
  });
});

describe("writeConsent", () => {
  it("persists under the versioned storage key", () => {
    writeConsent({ analytics: false, marketing: true });
    const raw = window.localStorage.getItem(STORAGE_KEY);
    expect(raw).toBeTruthy();
    const parsed = JSON.parse(raw as string);
    expect(parsed.marketing).toBe(true);
    expect(parsed.necessary).toBe(true);
  });

  it("always forces necessary to true even if a caller tries otherwise", () => {
    // @ts-expect-error — deliberately passing an invalid extra field
    writeConsent({ analytics: false, marketing: false, necessary: false });
    expect(readConsent()?.necessary).toBe(true);
  });

  it("writes a deterministic decidedAt when time is controlled", () => {
    // Stability: decidedAt uses new Date(). Pinning the clock makes the
    // timestamp deterministic so the assertion never flakes.
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-02T03:04:05.000Z"));
    writeConsent({ analytics: true, marketing: true });
    expect(readConsent()?.decidedAt).toBe("2026-01-02T03:04:05.000Z");
  });

  it("dispatches a consent-change event carrying the new consent", () => {
    const handler = vi.fn();
    window.addEventListener("jane-consent-change", handler);
    writeConsent({ analytics: true, marketing: false });
    expect(handler).toHaveBeenCalledTimes(1);
    const event = handler.mock.calls[0][0] as CustomEvent;
    expect(event.detail.analytics).toBe(true);
    window.removeEventListener("jane-consent-change", handler);
  });
});

describe("openCookieSettings", () => {
  it("dispatches the open event", () => {
    const handler = vi.fn();
    window.addEventListener("jane-consent-open", handler);
    openCookieSettings();
    expect(handler).toHaveBeenCalledTimes(1);
    window.removeEventListener("jane-consent-open", handler);
  });
});

describe("denyAll", () => {
  it("denies analytics and marketing but keeps necessary", () => {
    expect(denyAll.necessary).toBe(true);
    expect(denyAll.analytics).toBe(false);
    expect(denyAll.marketing).toBe(false);
    expect(denyAll.version).toBe(CONSENT_VERSION);
  });
});

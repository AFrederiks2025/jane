import { describe, expect, it } from "vitest";
import { isLocale, path } from "./i18n";

// The locale guard is the route-level gatekeeper used by every page's
// generateMetadata/notFound check. Treat it like an auth/route guard: it must
// accept exactly the known locales and reject everything else, deterministically.
describe("isLocale", () => {
  it("accepts supported locales", () => {
    expect(isLocale("nl")).toBe(true);
    expect(isLocale("en")).toBe(true);
  });

  it("rejects unknown or malformed values", () => {
    expect(isLocale("de")).toBe(false);
    expect(isLocale("")).toBe(false);
    expect(isLocale(undefined)).toBe(false);
    expect(isLocale("NL")).toBe(false);
    expect(isLocale("nl/over-ons")).toBe(false);
  });
});

describe("path", () => {
  it("builds the home path per locale", () => {
    expect(path("nl", "home")).toBe("/nl");
    expect(path("en", "home")).toBe("/en");
  });

  it("uses localised slugs", () => {
    expect(path("nl", "about")).toBe("/nl/over-ons");
    expect(path("en", "about")).toBe("/en/about");
    expect(path("nl", "methodology")).toBe("/nl/talenten-methodiek");
    expect(path("en", "methodology")).toBe("/en/talent-methodology");
    expect(path("nl", "books")).toBe("/nl/boeken");
    expect(path("en", "books")).toBe("/en/books");
  });

  it("keeps shared slugs identical across locales", () => {
    expect(path("nl", "coaches")).toBe("/nl/coaches");
    expect(path("en", "coaches")).toBe("/en/coaches");
  });

  it("renders the contact anchor on the locale home", () => {
    expect(path("nl", "contact")).toBe("/nl#contact");
    expect(path("en", "contact")).toBe("/en#contact");
  });
});

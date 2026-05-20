export const locales = ["nl", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "nl";

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export const routes = {
  nl: {
    home: "",
    about: "over-ons",
    methodology: "talenten-methodiek",
    coaches: "coaches",
    audiences: "doelgroepen",
    experiences: "ervaringen",
    institute: "jane-instituut",
    training: "opleiding",
    books: "boeken",
    contact: "#contact",
  },
  en: {
    home: "",
    about: "about",
    methodology: "talent-methodology",
    coaches: "coaches",
    audiences: "audiences",
    experiences: "experiences",
    institute: "jane-institute",
    training: "training",
    books: "books",
    contact: "#contact",
  },
} as const;

export type RouteKey = keyof typeof routes.nl;

export function path(locale: Locale, key: RouteKey): string {
  const slug = routes[locale][key];
  if (slug.startsWith("#")) return `/${locale}${slug}`;
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

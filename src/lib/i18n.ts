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
    experiences: "ervaringen",
    institute: "jane-instituut",
    books: "boeken",
    contact: "#contact",
  },
  en: {
    home: "",
    about: "about",
    methodology: "talent-methodology",
    coaches: "coaches",
    experiences: "experiences",
    institute: "jane-institute",
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

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { getContent } from "@/content";
import { isLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Account aanmaken",
  description: "Start een Jane® traject en maak je account aan.",
};

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);
  const isNL = locale === "nl";
  return (
    <ComingSoon
      locale={locale}
      eyebrow={t.common.account.label}
      title={isNL ? "Start hier je traject" : "Start your journey here"}
      body={
        isNL
          ? "Een Jane® account wordt aangemaakt zodra je een traject start. Neem contact op met Jamila om de mogelijkheden te bespreken — telefonisch of via e-mail."
          : "A Jane® account is created as soon as you start a journey. Get in touch with Jamila to discuss your options — by phone or email."
      }
      primaryHref={`/${locale}#contact`}
      primaryLabel={isNL ? "Neem contact op" : "Get in touch"}
      secondaryHref={`/${locale}/talenten-methodiek`}
      secondaryLabel={isNL ? "Lees over de methodiek" : "Read about the methodology"}
    />
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { getContent } from "@/content";
import { isLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Inlog student",
  description: "Log in als student / deelnemer van een Jane® traject.",
};

export default async function StudentLoginPage({
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
      title={t.common.account.studentLogin}
      body={
        isNL
          ? "De omgeving voor deelnemers aan een Jane® traject komt hier binnenkort beschikbaar. Op dit moment ontvang je je rapportage en uitnodiging direct van je coach."
          : "The environment for participants in a Jane® journey will become available here soon. For now, you receive your report and invitation directly from your coach."
      }
      primaryHref={`/${locale}/talenten-methodiek`}
      primaryLabel={isNL ? "Meer over de methodiek" : "About the methodology"}
      secondaryHref={`/${locale}`}
      secondaryLabel={isNL ? "Terug naar home" : "Back to home"}
    />
  );
}

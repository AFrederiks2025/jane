import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { getContent } from "@/content";
import { isLocale, path } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Mijn gegevens",
  description: "Bekijk en beheer je Jane® account.",
};

export default async function AccountPage({
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
      title={t.common.account.myAccount}
      body={
        isNL
          ? "Hier komt straks je persoonlijke omgeving, met je rapportages, trajecten en contactgegevens."
          : "Your personal environment — with your reports, journeys and contact details — will be available here soon."
      }
      primaryHref={`/${locale}/account/registreren`}
      primaryLabel={t.common.account.register}
      secondaryHref={path(locale, "home")}
      secondaryLabel={isNL ? "Terug naar home" : "Back to home"}
    />
  );
}

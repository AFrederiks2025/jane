import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { getContent } from "@/content";
import { isLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Inlog opleider",
  description: "Log in als Jane® opleider.",
};

export default async function TrainerLoginPage({
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
      title={t.common.account.trainerLogin}
      body={
        isNL
          ? "De omgeving voor Jane® opleiders is in ontwikkeling. Geef je trainingen via het Jane® Instituut? Neem dan contact op met Jamila voor je inloggegevens."
          : "The Jane® trainers environment is under development. Do you give trainings through the Jane® Institute? Please contact Jamila for your login details."
      }
      primaryHref={`mailto:${t.common.footer.email}`}
      primaryLabel={isNL ? "Mail Jamila" : "Email Jamila"}
      secondaryHref={`/${locale}/jane-instituut`}
      secondaryLabel={isNL ? "Over het Jane® instituut" : "About the Jane® institute"}
    />
  );
}

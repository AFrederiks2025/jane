import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { getContent } from "@/content";
import { isLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Inlog coach",
  description: "Log in als Jane® gecertificeerde coach.",
};

export default async function CoachLoginPage({
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
      title={t.common.account.coachLogin}
      body={
        isNL
          ? "De online webapplicatie voor gecertificeerde Jane® coaches komt hier beschikbaar. Heb je nu al een account? Neem dan contact op met Jamila."
          : "The online web application for certified Jane® coaches will become available here. Already have an account? Please contact Jamila."
      }
      primaryHref={`mailto:${t.common.footer.email}`}
      primaryLabel={isNL ? "Mail Jamila" : "Email Jamila"}
      secondaryHref={`/${locale}`}
      secondaryLabel={isNL ? "Terug naar home" : "Back to home"}
    />
  );
}

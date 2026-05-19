import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { StudentPortal } from "@/components/StudentPortal";
import { getModules } from "@/content/modules";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isNL = locale === "nl";
  return {
    title: isNL ? "Student portaal" : "Student portal",
    description: isNL
      ? "Bekijk en rond je Jane® modules af."
      : "View and complete your Jane® modules.",
  };
}

export default async function StudentPortalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const modules = getModules(locale);
  return <StudentPortal locale={locale} modules={modules} />;
}

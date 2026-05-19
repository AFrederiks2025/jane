import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacyverklaring Jane®",
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isNL = locale === "nl";
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h1 className="text-3xl md:text-4xl font-light text-jane-navy">
          {isNL ? "Privacy Policy" : "Privacy Policy"}
        </h1>
        <p className="mt-6 text-jane-navy/80 leading-relaxed">
          {isNL
            ? "Hier komt de actuele privacyverklaring van Jane®. Voor vragen kun je contact opnemen via jamila@jane.nl."
            : "Jane®’s current privacy statement will be published here. For questions please contact jamila@jane.nl."}
        </p>
      </div>
    </section>
  );
}

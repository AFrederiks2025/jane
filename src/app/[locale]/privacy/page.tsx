import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPrivacy } from "@/content/privacy";
import { isLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacyverklaring Jane®",
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = getPrivacy(locale);

  const sections = [
    p.controller,
    p.data,
    p.purposes,
    p.legalBasis,
    p.retention,
    p.sharing,
    p.rights,
    p.cookies,
    p.contact,
  ];

  return (
    <article className="py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="text-jane-orange uppercase tracking-[0.22em] text-xs font-medium mb-3">
          {p.lastUpdated}
        </p>
        <h1 className="text-3xl md:text-4xl font-light text-jane-navy leading-tight">
          {p.title}
        </h1>
        <p className="mt-6 text-jane-navy/85 text-lg font-light leading-relaxed">{p.intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl md:text-2xl font-normal text-jane-navy">{s.title}</h2>
              {s.paragraphs.map((para, i) => (
                <p key={i} className="mt-4 text-jane-navy/85 leading-relaxed">
                  {para}
                </p>
              ))}
              {s.list && (
                <ul className="mt-4 space-y-2">
                  {s.list.map((item, i) => (
                    <li key={i} className="flex gap-3 text-jane-navy/85 leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 w-1.5 h-1.5 rounded-full bg-jane-mint shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <p className="mt-12 text-xs text-jane-navy/55 border-t border-jane-navy/10 pt-6 italic">
          {p.disclaimer}
        </p>
      </div>
    </article>
  );
}

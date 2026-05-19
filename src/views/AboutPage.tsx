import { Blob, DotArc } from "@/components/Blob";
import { Avatar } from "@/components/Avatar";
import { CTABanner } from "@/components/CTABanner";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";

export function AboutPage({ locale }: { locale: Locale }) {
  const t = getContent(locale).about;
  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="orange" opacity={0.25} size={520} className="absolute -left-32 -top-20" />
        <Blob color="mint-soft" opacity={0.8} size={420} className="absolute -right-24 bottom-0" rotate={20} />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 text-center relative">
          <DotArc color="#d65d1f" size={120} className="absolute left-1/2 -translate-x-1/2 -top-2 opacity-80" />
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-5">
            {locale === "nl" ? "Over ons" : "About us"}
          </p>
          <h1 className="text-3xl md:text-5xl font-light text-jane-navy leading-tight max-w-3xl mx-auto">
            “{t.quote}”
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-light text-jane-navy">{t.intro.title}</h2>
          <div className="mt-8 space-y-5 text-jane-navy/85 text-lg font-light leading-relaxed">
            {t.intro.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-jane-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 space-y-20">
          {t.people.map((person) => (
            <article
              key={person.name}
              className="grid lg:grid-cols-12 gap-10 items-start"
            >
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <Avatar name={person.name} size={180} />
                <h3 className="mt-5 text-xl text-jane-navy font-normal">{person.name}</h3>
                <p className="text-jane-orange text-xs uppercase tracking-widest mt-1">
                  {person.role}
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="text-jane-navy/85 text-lg font-light leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner locale={locale} />
    </>
  );
}

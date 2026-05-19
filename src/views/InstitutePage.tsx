import { Blob } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";

export function InstitutePage({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const i = t.institute;
  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="mint-soft" opacity={0.5} size={420} className="absolute -right-24 -top-12" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 text-center relative">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-5">
            {i.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-jane-navy">
            {i.hero.title}
          </h1>
          <p className="mt-6 text-lg text-jane-navy/80 max-w-3xl mx-auto font-light">
            {i.hero.lead}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-2 gap-8">
          <article className="bg-white border border-jane-navy/10 rounded-3xl p-10">
            <div className="w-12 h-12 rounded-full mb-5 grid place-items-center bg-jane-mint text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3l9 4-9 4-9-4 9-4zM3 11l9 4 9-4M3 16l9 4 9-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-jane-navy">
              {i.certification.title}
            </h2>
            <p className="mt-5 text-jane-navy/80 leading-relaxed">{i.certification.body}</p>
          </article>
          <article className="bg-white border border-jane-navy/10 rounded-3xl p-10">
            <div className="w-12 h-12 rounded-full mb-5 grid place-items-center bg-jane-orange text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                <path
                  d="M3 20a6 6 0 0 1 12 0M15 20a5 5 0 0 1 6 0"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-jane-navy">{i.intervision.title}</h2>
            <p className="mt-5 text-jane-navy/80 leading-relaxed">{i.intervision.body}</p>
          </article>
        </div>
      </section>

      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-xl md:text-2xl text-jane-navy font-normal tracking-wide uppercase">
            {i.practical.title}
          </h2>
          <ul className="mt-6 space-y-2 text-jane-navy/85 text-lg font-light">
            {i.practical.lines.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PillButton variant="navy" href={`/${locale}/inloggen/student`}>
              {locale === "nl" ? "Inlog student" : "Student login"}
            </PillButton>
            <p className="text-jane-navy/65 text-sm max-w-md">
              {locale === "nl"
                ? "Volg je een traject? Log in op het student portaal voor je modules en het archief."
                : "Following a journey? Log in to the student portal for your modules and the archive."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={locale === "nl" ? "Onze trainingen" : "Our trainings"}
            title={locale === "nl" ? "Drie trajecten op maat" : "Three tailored journeys"}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {i.trainings.map((tr, idx) => (
              <div
                key={tr.name}
                className="bg-white rounded-3xl p-8 border border-jane-navy/10 flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-full mb-5 grid place-items-center text-white text-base font-light"
                  style={{
                    background: idx === 0 ? "#04a98b" : idx === 1 ? "#d65d1f" : "#212c56",
                  }}
                >
                  {idx + 1}
                </div>
                <h3 className="text-lg font-normal text-jane-navy leading-snug">{tr.name}</h3>
                <p className="mt-3 text-jane-navy/75 text-[15px] leading-relaxed flex-1">
                  {tr.description}
                </p>
                <div className="mt-6">
                  <PillButton variant="ghost" href={tr.href}>
                    {t.common.downloadBrochure}
                  </PillButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-jane-navy text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <p className="text-3xl md:text-4xl font-light leading-tight">
            “{i.quote}”
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-light text-jane-navy leading-tight">
            {i.selfWorth.title}
          </h2>
          <p className="mt-6 text-jane-navy/85 text-lg font-light leading-relaxed">
            {i.selfWorth.body}
          </p>
          <p className="mt-6 text-jane-orange uppercase tracking-[0.18em] text-sm font-medium">
            {i.selfWorth.tagline}
          </p>
        </div>
      </section>

      <CTABanner locale={locale} />
    </>
  );
}

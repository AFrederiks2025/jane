import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Blob } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { SectionHeading } from "@/components/SectionHeading";
import { CoachCard } from "@/components/CoachCard";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { CTABanner } from "@/components/CTABanner";
import { ContactSection } from "@/components/ContactSection";
import { VideoEmbed } from "@/components/VideoEmbed";
import { getContent } from "@/content";
import { isLocale, path, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getContent(locale);
  return {
    title: t.home.metaTitle,
    description: t.home.metaDescription,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const safeLocale: Locale = locale;
  const t = getContent(safeLocale);
  const isNL = safeLocale === "nl";

  const pathDecisionEyebrow = isNL ? "Voor wie ben je hier?" : "Who are you here for?";
  const pathDecisionTitle = isNL ? "Kies jouw startpunt." : "Choose where you start.";

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#fdf6f0_0%,#fff7ee_45%,#ffffff_100%)] dark:bg-[linear-gradient(135deg,#0c1330_0%,#141b3a_45%,#0c1330_100%)]" />
          <Blob
            color="mint-soft"
            opacity={0.45}
            size={520}
            className="absolute -right-40 top-20"
            rotate={20}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-20 lg:pt-28 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-5">
              {t.home.hero.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-jane-navy">
              {t.home.hero.title}
            </h1>
            <p className="mt-6 text-lg text-jane-navy/75 max-w-xl font-light">
              {t.home.hero.subtitle}
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-sm mx-auto">
              <div className="absolute inset-0 rounded-[42%_58%_55%_45%/45%_45%_55%_55%] overflow-hidden shadow-xl">
                <Image
                  src="/photos/about/jamila.jpg"
                  alt={isNL ? "Jamila — Jane® coach" : "Jamila — Jane® coach"}
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 384px, 80vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 mix-blend-soft-light"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(184,232,222,0.35) 0%, rgba(4,169,139,0.15) 60%, rgba(33,44,86,0.25) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWEE PADEN */}
      <section className="relative isolate py-16 lg:py-20 bg-white border-t border-jane-navy/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-3">
              {pathDecisionEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-jane-navy leading-tight">
              {pathDecisionTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Kandidaat / individu */}
            <article className="relative overflow-hidden rounded-3xl bg-jane-cream p-8 md:p-10 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-jane-orange text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
                    <path
                      d="M4 21a8 8 0 0 1 16 0"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="text-jane-orange text-xs uppercase tracking-widest">
                  {isNL ? "Voor jou" : "For you"}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">
                {isNL ? "Ontdek je eigen talenten." : "Discover your own talents."}
              </h3>
              <p className="mt-4 text-jane-navy/80 font-light leading-relaxed">
                {isNL
                  ? "Een Jane® traject met een gecertificeerde coach. Inzicht in je natuurlijke talenten, je unieke waarde en je groeiremmers — vertaald naar concrete stappen."
                  : "A Jane® journey with a certified coach. Insight into your natural talents, your unique value and your growth inhibitors — translated into concrete steps."}
              </p>
              <ul className="mt-6 space-y-2 text-jane-navy/80">
                {(isNL
                  ? [
                      "Wetenschappelijk onderbouwd assessment",
                      "Persoonlijk validatiegesprek",
                      "Eigen Talenten Rapportage",
                    ]
                  : [
                      "Scientifically grounded assessment",
                      "Personal validation conversation",
                      "Your own Talent Report",
                    ]
                ).map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[15px]">
                    <span
                      aria-hidden="true"
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-jane-orange shrink-0"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-3">
                <PillButton variant="orange" href={path(safeLocale, "coaches")}>
                  {isNL ? "Vind een coach" : "Find a coach"}
                </PillButton>
                <Link
                  href={path(safeLocale, "methodology")}
                  className="inline-flex items-center text-jane-navy/70 hover:text-jane-orange text-sm uppercase tracking-widest"
                >
                  {isNL ? "Eerst meer lezen »" : "Read more first »"}
                </Link>
              </div>
            </article>

            {/* Coach / professional */}
            <article className="relative overflow-hidden rounded-3xl bg-jane-cream p-8 md:p-10 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-jane-mint text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-jane-mint text-xs uppercase tracking-widest">
                  {isNL ? "Voor coaches" : "For coaches"}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">
                {isNL
                  ? "Werk zelf met de Jane® methodiek."
                  : "Work with the Jane® methodology."}
              </h3>
              <p className="mt-4 text-jane-navy/80 font-light leading-relaxed">
                {isNL
                  ? "Word gecertificeerd in de Jane® Talenten Methodiek en zet hem in voor je eigen cliënten, teams of organisaties. Met persoonlijke begeleiding en jaarlijkse intervisie."
                  : "Get certified in the Jane® Talent Methodology and apply it with your own clients, teams or organisations. With personal guidance and yearly intervision."}
              </p>
              <ul className="mt-6 space-y-2 text-jane-navy/80">
                {(isNL
                  ? [
                      "Certificeringstraining in Rotterdam",
                      "Toegang tot de online webapplicatie",
                      "Jaarlijkse intervisie met collega-coaches",
                    ]
                  : [
                      "Certification training in Rotterdam",
                      "Access to the online web application",
                      "Yearly intervision with peer coaches",
                    ]
                ).map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[15px]">
                    <span
                      aria-hidden="true"
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-jane-mint shrink-0"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-3">
                <PillButton variant="mint" href={path(safeLocale, "institute")}>
                  {isNL ? "Naar Jane® instituut" : "To Jane® institute"}
                </PillButton>
                <Link
                  href={path(safeLocale, "coaches")}
                  className="inline-flex items-center text-jane-navy/70 hover:text-jane-mint text-sm uppercase tracking-widest"
                >
                  {isNL ? "Onze coaches »" : "Our coaches »"}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* INTRO VIDEO */}
      <section className="py-16 lg:py-20 bg-jane-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-3">
              {isNL ? "In het kort" : "In short"}
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-jane-navy leading-tight">
              {isNL ? "Jane® in twee minuten." : "Jane® in two minutes."}
            </h2>
          </div>
          <VideoEmbed
            youtubeId={isNL ? "KBs8VZQaFjQ" : "CFB5wu28nYA"}
            title={isNL ? "Jane® in het kort" : "Jane® in short"}
          />
        </div>
      </section>

      {/* UNIEK */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={t.home.unique.eyebrow}
              title={t.home.unique.title}
              align="left"
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-jane-navy/85 text-lg font-light leading-relaxed">
            {t.home.unique.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="py-20 bg-jane-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.home.value.eyebrow}
            title={t.home.value.title}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.value.items.map((it, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 border border-jane-navy/5"
              >
                <div
                  className="w-11 h-11 rounded-full mb-5 grid place-items-center text-white font-light text-sm"
                  style={{ background: i % 2 === 0 ? "#04a98b" : "#d65d1f" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg text-jane-navy font-normal leading-snug">
                  {it.title}
                </h3>
                <p className="mt-3 text-jane-navy/75 text-[15px] leading-relaxed">
                  {it.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-3">
                {t.home.coaches.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-jane-navy leading-tight max-w-2xl">
                {t.home.coaches.title}
              </h2>
            </div>
            <PillButton variant="ghost" href={path(safeLocale, "coaches")}>
              {t.home.coaches.cta}
            </PillButton>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.coachesData.slice(0, 6).map((coach) => (
              <CoachCard
                key={coach.slug}
                coach={coach}
                href={`${path(safeLocale, "coaches")}/${coach.slug}`}
                locale={safeLocale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-20 bg-jane-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.home.blogs.eyebrow}
            title={t.home.blogs.title}
          />
          <div className="mt-12">
            <ExperienceGrid
              items={t.experiencesData.slice(0, 6)}
              labels={t.home.blogs.filters}
              filterLabel={t.home.blogs.filterLabel}
              readMore={t.common.readMore}
              basePath={path(safeLocale, "experiences")}
            />
          </div>
          <div className="mt-10 text-center">
            <PillButton variant="ghost" href={path(safeLocale, "experiences")}>
              {isNL ? "Alle ervaringen" : "All experiences"}
            </PillButton>
          </div>
        </div>
      </section>

      <CTABanner locale={safeLocale} />
      <ContactSection locale={safeLocale} />
    </>
  );
}

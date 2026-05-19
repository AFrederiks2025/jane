import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Blob, DotArc } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Avatar } from "@/components/Avatar";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { CTABanner } from "@/components/CTABanner";
import { ContactSection } from "@/components/ContactSection";
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

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #fdf6f0 0%, #fff7ee 40%, #ffffff 100%)",
            }}
          />
          <Blob color="orange" opacity={0.35} size={620} className="absolute -left-40 -top-20" />
          <Blob color="mint-soft" opacity={0.9} size={520} className="absolute -right-32 top-40" rotate={20} />
          <DotArc color="#04a98b" size={160} className="absolute left-1/3 bottom-10 opacity-70" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
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

            <div className="mt-10">
              <p className="text-jane-orange uppercase tracking-[0.22em] text-xs font-medium mb-4">
                {t.common.cta.header}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <PillButton variant="orange" href={path(safeLocale, "methodology")}>
                  {t.common.cta.forMe}
                </PillButton>
                <PillButton variant="mint" href={path(safeLocale, "institute")}>
                  {t.common.cta.forOthers}
                </PillButton>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-sm mx-auto">
              <div className="absolute inset-0 rounded-[40%_60%_60%_40%/45%_45%_55%_55%] overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      "linear-gradient(160deg, #b8e8de 0%, #04a98b 60%, #212c56 100%)",
                  }}
                />
              </div>
              <DotArc color="#d65d1f" size={120} className="absolute -left-8 -top-6 opacity-90" />
              <Blob color="orange" opacity={0.9} size={130} className="absolute -right-6 -bottom-4" />
            </div>
          </div>
        </div>
      </section>

      {/* UNIEK */}
      <section className="relative isolate py-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Blob color="mint-soft" opacity={0.5} size={400} className="absolute -left-20 top-10" />
        </div>
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
      <section className="relative isolate py-24 bg-jane-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.home.value.eyebrow}
            title={t.home.value.title}
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.value.items.map((it, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 border border-jane-navy/5 hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-full mb-5 grid place-items-center text-white font-light"
                  style={{
                    background: i % 2 === 0 ? "#04a98b" : "#d65d1f",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl text-jane-navy font-normal leading-snug">
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

      {/* EXPERIENCES */}
      <section className="relative isolate py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.home.blogs.eyebrow}
            title={t.home.blogs.title}
          />
          <div className="mt-14">
            <ExperienceGrid
              items={t.experiencesData.slice(0, 6)}
              labels={t.home.blogs.filters}
              filterLabel={t.home.blogs.filterLabel}
              readMore={t.common.readMore}
              basePath={path(safeLocale, "experiences")}
            />
          </div>
          <div className="mt-12 text-center">
            <PillButton variant="ghost" href={path(safeLocale, "experiences")}>
              {safeLocale === "nl" ? "Alle ervaringen" : "All experiences"}
            </PillButton>
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section className="relative isolate py-24 bg-jane-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.home.coaches.eyebrow}
            title={t.home.coaches.title}
          />
          <div className="mt-14 grid gap-y-10 gap-x-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {t.coachesData.map((c) => (
              <div key={c.name} className="flex flex-col items-center text-center">
                <Avatar name={c.name} size={120} />
                <h3 className="mt-4 text-jane-navy text-base font-normal leading-snug">
                  {c.name}
                </h3>
                <p className="text-jane-orange text-xs uppercase tracking-widest mt-1">
                  {c.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner locale={safeLocale} />
      <ContactSection locale={safeLocale} />
    </>
  );
}

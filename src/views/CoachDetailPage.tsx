import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar } from "@/components/Avatar";
import { Blob } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { getContent } from "@/content";
import { path, routes, type Locale } from "@/lib/i18n";

export function CoachDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getContent(locale);
  const coach = t.coachesData.find((c) => c.slug === slug);
  if (!coach) notFound();

  const isNL = locale === "nl";
  const contactEmail = coach.email ?? t.common.footer.email;
  const story = coach.storySlug
    ? t.experiencesData.find((e) => e.slug === coach.storySlug)
    : undefined;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="mint-soft" opacity={0.4} size={380} className="absolute -right-20 -top-10" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16 relative">
          <Link
            href={path(locale, "coaches")}
            className="inline-flex items-center text-jane-navy/70 hover:text-jane-orange transition-colors text-sm uppercase tracking-widest"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mr-2">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {isNL ? "Terug naar coaches" : "Back to coaches"}
          </Link>

          <div className="mt-10 grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left">
              <Avatar name={coach.name} src={coach.photo} size={180} />
              <h1 className="mt-6 text-3xl md:text-4xl font-light text-jane-navy leading-tight">
                {coach.name}
              </h1>
              <p className="mt-2 text-jane-orange uppercase tracking-[0.18em] text-xs font-medium">
                {coach.role}
              </p>
              <p className="mt-1 text-jane-navy/70">{coach.location}</p>
              {coach.acceptingClients && (
                <p className="mt-4 inline-flex items-center gap-2 text-jane-mint text-xs uppercase tracking-widest">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-jane-mint" />
                  {isNL ? "Neemt nieuwe cliënten aan" : "Accepting new clients"}
                </p>
              )}
            </div>

            <div className="lg:col-span-8">
              <h2 className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium mb-3">
                {isNL ? "Specialiteiten" : "Specialties"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {coach.specialties.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full bg-white border border-jane-navy/10 text-jane-navy/80 text-sm px-3.5 py-1.5"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <h2 className="mt-10 text-jane-orange uppercase tracking-[0.2em] text-xs font-medium mb-3">
                {isNL ? "Over deze coach" : "About this coach"}
              </h2>
              <p className="text-jane-navy/85 text-lg font-light leading-relaxed">{coach.bio}</p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <PillButton variant="mint" href={`mailto:${contactEmail}`}>
                  {isNL ? "Neem contact op" : "Get in touch"}
                </PillButton>
                {coach.linkedin && (
                  <PillButton variant="ghost" href={coach.linkedin}>
                    LinkedIn
                  </PillButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {story && (
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-3">
              {isNL ? "Verhaal uit de praktijk" : "Story from the field"}
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">
              {isNL ? `In de woorden van ${coach.name.split(" ")[0]}` : `In ${coach.name.split(" ")[0]}’s words`}
            </h2>
            {story.story ? (
              <div className="mt-6 space-y-4 text-jane-navy/85 text-lg font-light leading-relaxed">
                {story.story.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-jane-navy/85 text-lg font-light leading-relaxed">
                {story.excerpt}
              </p>
            )}
            <div className="mt-8">
              <Link
                href={`/${locale}/${routes[locale].experiences}/${story.slug}`}
                className="inline-flex items-center text-jane-mint hover:text-jane-orange text-sm uppercase tracking-widest"
              >
                {isNL ? "Lees het hele verhaal »" : "Read the full story »"}
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-jane-navy">
            {isNL
              ? "Past deze coach niet bij jou?"
              : "Not the right fit?"}
          </h2>
          <p className="mt-4 text-jane-navy/75 font-light">
            {isNL
              ? "Bekijk al onze gecertificeerde coaches om er een te vinden die wel klikt."
              : "Browse all our certified coaches to find one that does click."}
          </p>
          <div className="mt-6">
            <PillButton variant="ghost" href={path(locale, "coaches")}>
              {isNL ? "Alle coaches" : "All coaches"}
            </PillButton>
          </div>
        </div>
      </section>
    </>
  );
}

import { PillButton } from "./PillButton";
import { Blob } from "./Blob";
import { getContent } from "@/content";
import { path, type Locale } from "@/lib/i18n";

export function CTABanner({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  return (
    <section className="relative isolate my-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Blob color="orange" opacity={0.18} size={520} className="absolute -left-32 -top-24" />
        <Blob color="mint-soft" opacity={0.7} size={460} className="absolute -right-32 -bottom-24" rotate={45} />
      </div>
      <div className="mx-auto max-w-4xl text-center px-6">
        <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-4">
          {t.common.cta.header}
        </p>
        <h2 className="text-3xl md:text-5xl font-light text-jane-navy leading-tight">
          {locale === "nl"
            ? "Ontdek wat jouw natuurlijke talenten zijn."
            : "Discover what your natural talents are."}
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <PillButton variant="orange" href={path(locale, "methodology")}>
            {t.common.cta.forMe}
          </PillButton>
          <PillButton variant="mint" href={path(locale, "institute")}>
            {t.common.cta.forOthers}
          </PillButton>
        </div>
      </div>
    </section>
  );
}

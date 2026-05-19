import { PillButton } from "./PillButton";
import { Blob } from "./Blob";
import { getContent } from "@/content";
import { path, type Locale } from "@/lib/i18n";

export function CTABanner({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  return (
    <section className="relative isolate py-20 bg-jane-cream">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Blob color="mint-soft" opacity={0.4} size={420} className="absolute -right-24 -bottom-12" rotate={20} />
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

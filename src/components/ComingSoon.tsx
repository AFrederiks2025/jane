import Link from "next/link";
import { Blob } from "./Blob";
import { PillButton } from "./PillButton";
import type { Locale } from "@/lib/i18n";

interface ComingSoonProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function ComingSoon({
  locale,
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: ComingSoonProps) {
  return (
    <section className="relative isolate overflow-hidden bg-jane-cream py-24 min-h-[60vh] flex items-center">
      <Blob color="orange" opacity={0.2} size={460} className="absolute -left-32 -top-16" />
      <Blob color="mint-soft" opacity={0.7} size={400} className="absolute -right-16 bottom-0" rotate={20} />
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center relative">
        <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-4">
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-5xl font-light text-jane-navy leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg text-jane-navy/80 font-light">{body}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <PillButton variant="mint" href={primaryHref}>
            {primaryLabel}
          </PillButton>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="text-jane-navy/70 hover:text-jane-orange text-sm uppercase tracking-widest"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
        <p className="mt-10 text-xs uppercase tracking-widest text-jane-navy/50">
          {locale === "nl" ? "Deze pagina is in ontwikkeling" : "This page is under construction"}
        </p>
      </div>
    </section>
  );
}

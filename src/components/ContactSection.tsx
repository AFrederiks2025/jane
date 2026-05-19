import { ContactForm } from "./ContactForm";
import { Blob } from "./Blob";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";

export function ContactSection({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const isNL = locale === "nl";
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-jane-navy text-white">
      <Blob color="orange" opacity={0.18} size={520} className="absolute -left-32 -top-24" />
      <Blob color="mint" opacity={0.2} size={460} className="absolute -right-32 -bottom-24" rotate={45} />
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-jane-mint uppercase tracking-[0.22em] text-sm font-medium mb-4">
              {isNL ? "Neem contact op" : "Get in touch"}
            </p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              {isNL
                ? "Stel je vraag — we denken graag met je mee."
                : "Ask your question — we’d love to think along with you."}
            </h2>
            <div className="mt-8 space-y-3 text-white/80">
              <p>
                <a href={`mailto:${t.common.footer.email}`} className="hover:text-jane-mint transition-colors">
                  {t.common.footer.email}
                </a>
              </p>
              <p>
                <a href={t.common.footer.phoneHref} className="hover:text-jane-mint transition-colors">
                  {t.common.footer.phone}
                </a>
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm locale={locale} toEmail={t.common.footer.email} />
          </div>
        </div>
      </div>
    </section>
  );
}

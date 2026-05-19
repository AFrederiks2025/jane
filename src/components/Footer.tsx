import Link from "next/link";
import { Logo } from "./Logo";
import { getContent } from "@/content";
import { path, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const f = t.common.footer;
  const otherLocale: Locale = locale === "nl" ? "en" : "nl";
  return (
    <footer className="relative mt-24 bg-jane-navy text-white/85 overflow-hidden">

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="text-white">
            <Link href={`/${locale}`} className="inline-flex items-baseline gap-1">
              <span className="text-3xl font-light lowercase">jane</span>
              <svg viewBox="0 0 24 32" width="14" height="20" aria-hidden="true" className="-ml-1 -translate-y-1">
                <path d="M12 1c4 4 8 8 8 14a8 8 0 1 1-16 0c0-6 4-10 8-14z" fill="#04a98b" />
              </svg>
            </Link>
          </div>
          <p className="mt-5 font-light text-white/75 max-w-xs">{f.tagline}</p>
        </div>

        <div>
          <h3 className="text-white text-sm uppercase tracking-[0.18em] mb-4">
            {f.contactTitle}
          </h3>
          <ul className="space-y-2 font-light">
            <li>
              <a href={`mailto:${f.email}`} className="hover:text-jane-mint transition-colors">
                {f.email}
              </a>
            </li>
            <li>
              <a href={f.phoneHref} className="hover:text-jane-mint transition-colors">
                {f.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm uppercase tracking-[0.18em] mb-4">
            {f.social}
          </h3>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/jane-talenten-methodiek/"
              aria-label="LinkedIn"
              className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-jane-mint transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.76-2 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-3.99V9z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-jane-mint transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5H17V4.2c-.3-.04-1.3-.2-2.4-.2-2.4 0-4 1.5-4 4.1V10.5H8v3h2.6V21h2.9z" />
              </svg>
            </a>
          </div>
          <div className="mt-8 text-sm">
            <Link
              href={`/${otherLocale}`}
              className="text-white/70 hover:text-jane-mint underline-offset-4 hover:underline"
            >
              {t.common.switchTo}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/55">
          <p>{f.credit}</p>
          <Link href={f.legalHref} className="hover:text-jane-mint">
            {f.legal}
          </Link>
        </div>
      </div>
    </footer>
  );
}

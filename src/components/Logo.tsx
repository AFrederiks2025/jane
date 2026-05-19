import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function Logo({ locale, className = "" }: { locale: Locale; className?: string }) {
  return (
    <Link
      href={`/${locale}`}
      aria-label="Jane home"
      className={`group inline-flex items-baseline gap-1 ${className}`}
    >
      <span className="text-jane-navy font-light text-3xl tracking-tight lowercase">
        jane
      </span>
      <svg
        viewBox="0 0 24 32"
        width="14"
        height="20"
        aria-hidden="true"
        className="-ml-1 -translate-y-1 transition-transform group-hover:-translate-y-2"
      >
        <path
          d="M12 1c4 4 8 8 8 14a8 8 0 1 1-16 0c0-6 4-10 8-14z"
          fill="#04a98b"
        />
      </svg>
    </Link>
  );
}

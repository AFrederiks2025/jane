import Image from "next/image";
import Link from "next/link";
import type { BookItem } from "@/content/books";
import { priceLabel } from "@/content/books";
import type { Locale } from "@/lib/i18n";

interface BookCardProps {
  book: BookItem;
  href: string;
  locale: Locale;
}

export function BookCard({ book, href, locale }: BookCardProps) {
  const price = priceLabel(book, locale);
  const ctaLabel = locale === "nl" ? "Bekijk boek" : "View book";
  const inStockLabel = locale === "nl" ? "Op voorraad" : "In stock";
  return (
    <Link
      href={href}
      className="group block bg-white border border-jane-navy/10 rounded-3xl p-7 hover:border-jane-mint/60 transition-colors"
    >
      <div className="flex items-start gap-6">
        <div className="relative w-28 sm:w-32 shrink-0 aspect-[3/4]">
          <Image
            src={book.coverFront}
            alt={book.title}
            fill
            sizes="128px"
            className="object-contain drop-shadow-md"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-jane-orange text-xs uppercase tracking-widest mb-2">
            {book.author}
          </p>
          <h3 className="text-jane-navy text-lg font-normal leading-snug group-hover:text-jane-orange transition-colors">
            {book.title}
          </h3>
          {book.subtitle && (
            <p className="mt-1 text-jane-navy/70 text-sm font-light">{book.subtitle}</p>
          )}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-jane-navy/60">
            <span>{book.format}</span>
            <span className="text-jane-navy/30">·</span>
            <span>{book.pages} pp.</span>
            <span className="text-jane-navy/30">·</span>
            <span>{book.languageLabel}</span>
          </div>
          <div className="mt-5 flex items-center justify-between">
            {price ? (
              <span className="text-jane-navy text-lg">{price}</span>
            ) : book.available ? (
              <span className="inline-flex items-center gap-2 text-jane-mint text-xs uppercase tracking-widest">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-jane-mint" />
                {inStockLabel}
              </span>
            ) : null}
            <span className="text-jane-mint text-xs uppercase tracking-widest group-hover:text-jane-orange transition-colors">
              {ctaLabel} →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

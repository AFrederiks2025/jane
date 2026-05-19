import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blob } from "@/components/Blob";
import { PillButton } from "@/components/PillButton";
import { getBook, priceLabel } from "@/content/books";
import { getContent } from "@/content";
import { path, type Locale } from "@/lib/i18n";

interface BookDetailPageProps {
  locale: Locale;
  slug: string;
}

export function BookDetailPage({ locale, slug }: BookDetailPageProps) {
  const book = getBook(locale, slug);
  if (!book) notFound();

  const t = getContent(locale);
  const isNL = locale === "nl";
  const price = priceLabel(book, locale);

  const orderSubject = `Bestelling: ${book.title} (ISBN ${book.isbn})`;
  const orderBody = isNL
    ? `Beste Jamila,\n\nIk wil graag het boek "${book.title}" van ${book.author} bestellen.\n\nNaam:\nAdres:\nPostcode + plaats:\nTelefoon:\nAantal exemplaren: 1\n\nGraag verneem ik de prijs, verzendkosten en betalingsmogelijkheden.\n\nMet vriendelijke groet,\n`
    : `Hello Jamila,\n\nI would like to order the book "${book.title}" by ${book.author}.\n\nName:\nAddress:\nPostcode + city:\nPhone:\nNumber of copies: 1\n\nPlease let me know the price, shipping cost and payment options.\n\nKind regards,\n`;
  const orderHref = `mailto:${t.common.footer.email}?subject=${encodeURIComponent(orderSubject)}&body=${encodeURIComponent(orderBody)}`;

  const specs = [
    { label: isNL ? "Auteur" : "Author", value: book.author },
    { label: isNL ? "Uitgever" : "Publisher", value: book.publisher },
    { label: "ISBN / EAN", value: book.isbn },
    { label: isNL ? "Taal" : "Language", value: book.languageLabel },
    { label: isNL ? "Uitvoering" : "Format", value: book.format },
    { label: isNL ? "Aantal pagina's" : "Pages", value: String(book.pages) },
    { label: isNL ? "Illustraties" : "Illustrations", value: book.illustrations },
    { label: isNL ? "Editie" : "Edition", value: String(book.edition) },
    { label: isNL ? "Afmetingen" : "Dimensions", value: book.dimensionsLabel },
    { label: isNL ? "Gewicht" : "Weight", value: book.weightLabel },
    { label: isNL ? "Categorie" : "Category", value: book.categoryLabel },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    alternateName: book.subtitle,
    author: { "@type": "Person", name: book.author },
    publisher: { "@type": "Organization", name: book.publisher },
    isbn: book.isbn,
    inLanguage: locale,
    numberOfPages: book.pages,
    bookFormat: "Paperback",
    image: book.coverFront,
    description: book.shortDescription,
    offers: book.priceCents
      ? {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: (book.priceCents / 100).toFixed(2),
          availability: book.available
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
        }
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="mint-soft" opacity={0.4} size={380} className="absolute -right-20 -top-10" />
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16 relative">
          <Link
            href={path(locale, "books")}
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
            {isNL ? "Terug naar boeken" : "Back to books"}
          </Link>

          <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] max-w-sm mx-auto">
                <Image
                  src={book.coverFront}
                  alt={`${book.title} — voorzijde`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 400px, 70vw"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-jane-orange uppercase tracking-[0.22em] text-xs font-medium mb-3">
                {book.author}
              </p>
              <h1 className="text-3xl md:text-5xl font-light text-jane-navy leading-tight">
                {book.title}
              </h1>
              {book.subtitle && (
                <p className="mt-3 text-lg text-jane-navy/75 font-light">{book.subtitle}</p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-jane-navy/60">
                <span>{book.format}</span>
                <span className="text-jane-navy/30">·</span>
                <span>{book.pages} {isNL ? "pagina's" : "pages"}</span>
                <span className="text-jane-navy/30">·</span>
                <span>{book.languageLabel}</span>
                {book.available && (
                  <>
                    <span className="text-jane-navy/30">·</span>
                    <span className="inline-flex items-center gap-2 text-jane-mint uppercase tracking-widest text-xs">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-jane-mint" />
                      {isNL ? "Leverbaar" : "Available"}
                    </span>
                  </>
                )}
              </div>

              <p className="mt-8 text-jane-navy/85 text-lg font-light leading-relaxed">
                {book.shortDescription}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                {price ? (
                  <span className="text-3xl font-light text-jane-navy tabular-nums">{price}</span>
                ) : (
                  <span className="text-jane-navy/70 text-sm">
                    {isNL ? "Prijs op aanvraag" : "Price on request"}
                  </span>
                )}
                <div className="flex flex-col sm:flex-row gap-3">
                  <PillButton variant="orange" href={orderHref}>
                    {isNL ? "Bestel via e-mail" : "Order via email"}
                  </PillButton>
                  <PillButton variant="ghost" href={`mailto:${t.common.footer.email}?subject=${encodeURIComponent("Vraag over " + book.title)}`}>
                    {isNL ? "Stel een vraag" : "Ask a question"}
                  </PillButton>
                </div>
              </div>

              <p className="mt-5 text-xs text-jane-navy/55">
                {isNL
                  ? "Bestellen verloopt voorlopig via e-mail. We bevestigen de prijs, verzendkosten en betalingsmogelijkheden in een persoonlijk antwoord."
                  : "Orders go through email for now. We confirm price, shipping cost and payment options in a personal reply."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium mb-3">
              {isNL ? "Over dit boek" : "About this book"}
            </h2>
            <div className="space-y-5 text-jane-navy/85 text-lg font-light leading-relaxed">
              {book.longDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {book.testimonial && (
              <blockquote className="mt-10 border-l-4 border-jane-mint pl-6 py-2">
                <p className="text-jane-navy text-xl font-light italic leading-relaxed">
                  “{book.testimonial.quote}”
                </p>
                <footer className="mt-3 text-sm text-jane-navy/70">
                  — {book.testimonial.author}
                </footer>
              </blockquote>
            )}
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-jane-cream rounded-3xl p-7">
              <h2 className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium mb-5">
                {isNL ? "Specificaties" : "Specifications"}
              </h2>
              <dl className="divide-y divide-jane-navy/10 text-sm">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-start justify-between gap-4 py-2.5">
                    <dt className="text-jane-navy/60">{s.label}</dt>
                    <dd className="text-jane-navy text-right">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {book.coverBack && (
              <div className="mt-8 relative aspect-[3/4] max-w-sm mx-auto">
                <Image
                  src={book.coverBack}
                  alt={`${book.title} — achterzijde`}
                  fill
                  sizes="(min-width: 1024px) 400px, 70vw"
                  className="object-contain drop-shadow-xl"
                />
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="py-16 bg-jane-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">
            {isNL
              ? "Wil je begeleid worden bij de inzet van je talenten?"
              : "Looking for guidance in applying your talents?"}
          </h2>
          <p className="mt-4 text-jane-navy/75 font-light max-w-xl mx-auto">
            {isNL
              ? "Het boek geeft de methodiek; een gecertificeerde Jane® coach helpt je hem toe te passen."
              : "The book offers the method; a certified Jane® coach helps you put it into practice."}
          </p>
          <div className="mt-6">
            <PillButton variant="mint" href={path(locale, "coaches")}>
              {isNL ? "Vind een coach" : "Find a coach"}
            </PillButton>
          </div>
        </div>
      </section>
    </>
  );
}

import { Blob } from "@/components/Blob";
import { BookCard } from "@/components/BookCard";
import { getBooks } from "@/content/books";
import { path, type Locale } from "@/lib/i18n";

export function BooksPage({ locale }: { locale: Locale }) {
  const books = getBooks(locale);
  const isNL = locale === "nl";
  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="mint-soft" opacity={0.45} size={420} className="absolute -right-24 -top-12" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 relative">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-4">
            {isNL ? "Boeken" : "Books"}
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-jane-navy leading-tight max-w-3xl">
            {isNL
              ? "Verdieping voor wie zelf aan de slag wil."
              : "Going deeper — for those who want to do the work themselves."}
          </h1>
          <p className="mt-6 text-lg text-jane-navy/80 max-w-2xl font-light">
            {isNL
              ? "De Jane® methodiek is uitgewerkt in boeken die je naast de begeleiding kunt lezen — of als startpunt om zelf in te duiken."
              : "The Jane® methodology is captured in books you can read alongside the coaching — or as a starting point to dive in yourself."}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {books.map((book) => (
              <BookCard
                key={book.slug}
                book={book}
                href={`${path(locale, "books")}/${book.slug}`}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useMemo, useState } from "react";
import type { Talent } from "@/content/talents";
import type { Locale } from "@/lib/i18n";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/** Relevance score of a talent against a query. Higher = better match. */
function score(talent: Talent, query: string): number {
  const q = normalize(query.trim());
  if (!q) return 0;
  const name = normalize(talent.name);
  const desc = normalize(talent.description);

  let total = 0;
  // Name matches weigh heaviest.
  if (name === q) total += 1000;
  else if (name.startsWith(q)) total += 400;
  else if (name.includes(q)) total += 200;

  // Per-word matching so multi-word and partial queries still rank.
  for (const word of q.split(/\s+/).filter(Boolean)) {
    if (name.includes(word)) total += 120;
    if (desc.includes(word)) total += 30;
  }
  return total;
}

interface TalentsExplorerProps {
  talents: Talent[];
  locale: Locale;
}

export function TalentsExplorer({ talents, locale }: TalentsExplorerProps) {
  const [query, setQuery] = useState("");
  const isNL = locale === "nl";

  const results = useMemo(() => {
    if (!query.trim()) return talents;
    return talents
      .map((t) => ({ t, s: score(t, query) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s || a.t.number - b.t.number)
      .map((r) => r.t);
  }, [talents, query]);

  const hasQuery = query.trim().length > 0;

  return (
    <div>
      {/* SEARCH BAR */}
      <div className="sticky top-24 z-20 -mx-2 px-2 py-3 mb-8 bg-white/85 backdrop-blur rounded-2xl">
        <div className="relative max-w-xl mx-auto">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-jane-navy/40"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="M20 20l-3.2-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            role="searchbox"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isNL ? "Zoek een talent…" : "Search a talent…"}
            aria-label={isNL ? "Zoek in de 27 talenten" : "Search the 27 talents"}
            className="w-full rounded-full border border-jane-navy/15 bg-white pl-11 pr-11 py-3 text-jane-navy placeholder:text-jane-navy/45 focus:border-jane-mint focus:outline-none transition-colors"
          />
          {hasQuery && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={isNL ? "Wissen" : "Clear"}
              className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-7 h-7 rounded-full text-jane-navy/50 hover:bg-jane-cream hover:text-jane-navy transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
        {hasQuery && (
          <p className="mt-2 text-center text-jane-navy/55 text-sm">
            {results.length === 0
              ? isNL
                ? "Geen talent gevonden."
                : "No talent found."
              : isNL
                ? `${results.length} ${results.length === 1 ? "talent" : "talenten"} gevonden`
                : `${results.length} ${results.length === 1 ? "talent" : "talents"} found`}
          </p>
        )}
      </div>

      {/* RESULTS */}
      {results.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((t, i) => {
            const isBest = hasQuery && i === 0;
            return (
              <article
                id={t.slug}
                key={t.slug}
                className={`bg-white rounded-3xl p-6 scroll-mt-40 transition-colors ${
                  isBest ? "border-2 border-jane-mint" : "border border-jane-navy/10"
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-jane-mint/70 text-sm tabular-nums font-medium">
                    {String(t.number).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl text-jane-navy font-normal leading-snug">{t.name}</h2>
                  {isBest && (
                    <span className="ml-auto text-jane-mint text-[10px] uppercase tracking-widest font-medium">
                      {isNL ? "Beste match" : "Best match"}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-jane-navy/75 text-[15px] font-light leading-relaxed">
                  {t.description}
                </p>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-jane-navy/70">
            {isNL
              ? "Probeer een andere zoekterm — bijvoorbeeld een woord uit de omschrijving."
              : "Try another search term — for example a word from the description."}
          </p>
        </div>
      )}
    </div>
  );
}

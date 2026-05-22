"use client";

import { useMemo, useState } from "react";
import type { Exercise, ExerciseGroup } from "@/content/exercises";
import type { Locale } from "@/lib/i18n";

interface ExercisesExplorerProps {
  groups: ExerciseGroup[];
  exercises: Exercise[];
  locale: Locale;
}

const formTone: Record<string, string> = {
  Individueel: "bg-jane-mint/10 text-jane-mint",
  Individual: "bg-jane-mint/10 text-jane-mint",
  "Duo/Paar": "bg-jane-orange/10 text-jane-orange",
  Duo: "bg-jane-orange/10 text-jane-orange",
  "Groep (5-10)": "bg-jane-navy/10 text-jane-navy",
  Groep: "bg-jane-navy/10 text-jane-navy",
  "Team-traject (offsite)": "bg-jane-navy/10 text-jane-navy",
};

function toneFor(form: string): string {
  for (const key of Object.keys(formTone)) {
    if (form.startsWith(key)) return formTone[key];
  }
  return "bg-jane-navy/10 text-jane-navy";
}

export function ExercisesExplorer({ groups, exercises, locale }: ExercisesExplorerProps) {
  const isNL = locale === "nl";
  const [activeGroup, setActiveGroup] = useState<string>("all");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const e of exercises) c[e.group] = (c[e.group] ?? 0) + 1;
    return c;
  }, [exercises]);

  const visible = useMemo(
    () => (activeGroup === "all" ? exercises : exercises.filter((e) => e.group === activeGroup)),
    [exercises, activeGroup],
  );

  // group visible exercises by group, preserving group order
  const sections = groups
    .map((g) => ({ group: g, items: visible.filter((e) => e.group === g.id) }))
    .filter((s) => s.items.length > 0);

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      {/* SIDEBAR */}
      <aside className="lg:col-span-3">
        <nav className="lg:sticky lg:top-24 bg-white border border-jane-navy/10 rounded-3xl p-3 max-h-[80vh] overflow-auto">
          <button
            type="button"
            onClick={() => setActiveGroup("all")}
            aria-pressed={activeGroup === "all"}
            className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-2xl text-left transition-colors ${
              activeGroup === "all" ? "bg-jane-navy text-white" : "text-jane-navy hover:bg-jane-cream"
            }`}
          >
            <span className="text-[15px]">{isNL ? "Alle doelgroepen" : "All audiences"}</span>
            <span className="text-xs opacity-70 tabular-nums">{exercises.length}</span>
          </button>
          <div className="my-2 h-px bg-jane-navy/10" />
          {groups.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActiveGroup(g.id)}
              aria-pressed={activeGroup === g.id}
              className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-2xl text-left transition-colors ${
                activeGroup === g.id ? "bg-jane-navy text-white" : "text-jane-navy hover:bg-jane-cream"
              }`}
            >
              <span className="text-[15px] leading-tight">{g.title}</span>
              <span className="text-xs opacity-70 tabular-nums">{counts[g.id] ?? 0}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* CONTENT */}
      <div className="lg:col-span-9 space-y-12">
        {sections.map(({ group, items }) => (
          <section key={group.id} id={group.id} className="scroll-mt-24">
            <div className="mb-5">
              <h2 className="text-2xl md:text-3xl font-light text-jane-navy leading-tight">
                {group.title}
              </h2>
              <p className="mt-1 text-jane-navy/70 font-light">{group.subtitle}</p>
            </div>
            <div className="space-y-4">
              {items.map((ex) => {
                const isOpen = openSlug === ex.slug;
                return (
                  <article
                    key={ex.slug}
                    className={`bg-white border rounded-3xl overflow-hidden transition-colors ${
                      isOpen ? "border-jane-mint/60" : "border-jane-navy/10"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenSlug(isOpen ? null : ex.slug)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-6 md:p-7 flex flex-col sm:flex-row sm:items-start gap-4"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] uppercase tracking-widest ${toneFor(
                              ex.form,
                            )}`}
                          >
                            {ex.form}
                          </span>
                          <span className="text-jane-navy/50 text-xs">{ex.duration}</span>
                        </div>
                        <h3 className="text-lg text-jane-navy font-normal leading-snug">{ex.name}</h3>
                        <p className="mt-1.5 text-jane-navy/75 text-[15px] font-light leading-relaxed">
                          {ex.goal}
                        </p>
                      </div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className={`shrink-0 text-jane-mint mt-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="border-t border-jane-navy/10 bg-jane-cream/40 px-6 md:px-8 py-7">
                        {ex.materials && (
                          <p className="text-sm text-jane-navy/70 mb-6">
                            <span className="uppercase tracking-widest text-[11px] text-jane-orange font-medium">
                              {isNL ? "Materiaal" : "Materials"}:
                            </span>{" "}
                            {ex.materials}
                          </p>
                        )}
                        <div className="grid gap-8 md:grid-cols-2">
                          <div>
                            <h4 className="text-jane-orange uppercase tracking-[0.18em] text-[11px] font-medium mb-3">
                              {isNL ? "Stappen" : "Steps"}
                            </h4>
                            <ol className="space-y-2.5">
                              {ex.steps.map((s, i) => (
                                <li key={i} className="flex gap-3 text-jane-navy/85 text-[15px] leading-relaxed">
                                  <span className="shrink-0 grid place-items-center w-6 h-6 rounded-full bg-white border border-jane-navy/15 text-xs tabular-nums text-jane-navy/70">
                                    {i + 1}
                                  </span>
                                  <span>{s}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                          <div>
                            {ex.reflection.length > 0 && (
                              <>
                                <h4 className="text-jane-orange uppercase tracking-[0.18em] text-[11px] font-medium mb-3">
                                  {isNL ? "Reflectievragen" : "Reflection questions"}
                                </h4>
                                <ul className="space-y-2">
                                  {ex.reflection.map((r, i) => (
                                    <li key={i} className="flex gap-3 text-jane-navy/85 text-[15px] leading-relaxed">
                                      <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-jane-mint shrink-0" />
                                      <span>{r}</span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                            {ex.coachTip && (
                              <div className="mt-6 rounded-2xl bg-white border border-jane-navy/10 p-4">
                                <p className="text-jane-mint uppercase tracking-[0.18em] text-[11px] font-medium mb-1">
                                  {isNL ? "Tip voor de coach" : "Coach tip"}
                                </p>
                                <p className="text-jane-navy/80 text-sm leading-relaxed">{ex.coachTip}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { Blob, DotArc } from "./Blob";
import { PillButton } from "./PillButton";
import type { StudentModule } from "@/content/modules";
import type { Locale } from "@/lib/i18n";

interface StudentPortalProps {
  locale: Locale;
  modules: StudentModule[];
}

const STORAGE_KEY = "jane-student-completed";

function loadCompleted(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

function saveCompleted(completed: Set<string>) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  } catch {
    /* ignore */
  }
}

export function StudentPortal({ locale, modules }: StudentPortalProps) {
  const isNL = locale === "nl";
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCompleted(loadCompleted());
    setHydrated(true);
  }, []);

  const toggleComplete = (slug: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      saveCompleted(next);
      return next;
    });
  };

  const reset = () => {
    setCompleted(new Set());
    saveCompleted(new Set());
  };

  const stats = useMemo(() => {
    const total = modules.length;
    const done = modules.filter((m) => completed.has(m.slug)).length;
    return { total, done, pct: total === 0 ? 0 : Math.round((done / total) * 100) };
  }, [modules, completed]);

  const labels = isNL
    ? {
        portal: "Student portaal",
        welcome: "Welkom terug",
        intro: "Doorloop de modules in je eigen tempo. Wat je hier afrondt, bewaren we lokaal in deze browser.",
        progress: "Voortgang",
        moduleOf: (n: number, total: number) => `${n} van ${total} modules afgerond`,
        objectives: "Wat je leert",
        reflection: "Reflectievraag",
        watch: "Bekijk module",
        hide: "Sluit module",
        markDone: "Markeer als afgerond",
        markedDone: "Afgerond",
        undo: "Ongedaan maken",
        videoSoon: "Video volgt — je coach deelt met jou de definitieve content.",
        reset: "Voortgang resetten",
        confirmReset: "Weet je zeker dat je je voortgang wilt resetten?",
        completed: "Afgerond",
        notStarted: "Nog niet gestart",
        allDone: "Alle modules afgerond — geweldig! Bespreek je inzichten met je coach.",
      }
    : {
        portal: "Student portal",
        welcome: "Welcome back",
        intro: "Work through the modules at your own pace. What you complete here is saved locally in this browser.",
        progress: "Progress",
        moduleOf: (n: number, total: number) => `${n} of ${total} modules completed`,
        objectives: "What you’ll learn",
        reflection: "Reflection",
        watch: "Open module",
        hide: "Close module",
        markDone: "Mark as completed",
        markedDone: "Completed",
        undo: "Undo",
        videoSoon: "Video coming soon — your coach will share the final content with you.",
        reset: "Reset progress",
        confirmReset: "Are you sure you want to reset your progress?",
        completed: "Completed",
        notStarted: "Not started",
        allDone: "All modules completed — well done! Discuss your insights with your coach.",
      };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="orange" opacity={0.2} size={460} className="absolute -left-32 -top-16" />
        <Blob color="mint-soft" opacity={0.7} size={400} className="absolute -right-16 bottom-0" rotate={20} />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16 relative">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-3">
            {labels.portal}
          </p>
          <h1 className="text-3xl md:text-5xl font-light text-jane-navy leading-tight">
            {labels.welcome}.
          </h1>
          <p className="mt-4 text-jane-navy/80 max-w-2xl font-light">{labels.intro}</p>

          <div className="mt-10 bg-white border border-jane-navy/10 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium">
                  {labels.progress}
                </p>
                <p className="mt-1 text-jane-navy text-xl">
                  {hydrated
                    ? labels.moduleOf(stats.done, stats.total)
                    : labels.moduleOf(0, stats.total)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-jane-navy/70 text-sm tabular-nums">
                  {hydrated ? `${stats.pct}%` : "0%"}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(labels.confirmReset)) reset();
                  }}
                  className="text-jane-navy/60 hover:text-jane-orange text-xs uppercase tracking-widest"
                >
                  {labels.reset}
                </button>
              </div>
            </div>
            <div className="mt-4 h-2 rounded-full bg-jane-navy/10 overflow-hidden">
              <div
                className="h-full bg-jane-mint transition-all duration-500"
                style={{ width: hydrated ? `${stats.pct}%` : "0%" }}
              />
            </div>
            {hydrated && stats.done === stats.total && stats.total > 0 && (
              <p className="mt-4 text-jane-mint text-sm">{labels.allDone}</p>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <DotArc color="#04a98b" size={120} className="absolute right-10 top-8 opacity-60" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-5">
          {modules.map((m) => {
            const isOpen = openSlug === m.slug;
            const isDone = completed.has(m.slug);
            return (
              <article
                key={m.slug}
                className={`bg-white border rounded-3xl overflow-hidden transition-all ${
                  isDone ? "border-jane-mint/60 shadow-sm" : "border-jane-navy/10 hover:border-jane-mint/40"
                }`}
              >
                <header className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 md:p-8">
                  <div
                    className={`grid place-items-center w-14 h-14 rounded-full text-white text-lg font-light shrink-0 ${
                      isDone ? "bg-jane-mint" : "bg-jane-navy"
                    }`}
                    aria-hidden="true"
                  >
                    {isDone ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      m.number
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-widest">
                      <span className="text-jane-orange">{m.tag}</span>
                      <span className="text-jane-navy/40">·</span>
                      <span className="text-jane-navy/60">{m.duration}</span>
                      <span className="text-jane-navy/40">·</span>
                      <span className={isDone ? "text-jane-mint" : "text-jane-navy/60"}>
                        {isDone ? labels.completed : labels.notStarted}
                      </span>
                    </div>
                    <h2 className="mt-2 text-xl md:text-2xl text-jane-navy font-normal leading-snug">
                      {m.title}
                    </h2>
                    <p className="mt-2 text-jane-navy/75 text-[15px] leading-relaxed">
                      {m.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setOpenSlug(isOpen ? null : m.slug)}
                      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs uppercase tracking-widest font-medium border border-jane-navy/20 text-jane-navy hover:border-jane-mint hover:text-jane-mint transition-colors"
                    >
                      {isOpen ? labels.hide : labels.watch}
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleComplete(m.slug)}
                      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs uppercase tracking-widest font-medium transition-colors ${
                        isDone
                          ? "bg-white text-jane-mint border border-jane-mint hover:bg-jane-mint hover:text-white"
                          : "bg-jane-mint text-white hover:bg-[#038f74]"
                      }`}
                    >
                      {isDone ? labels.undo : labels.markDone}
                    </button>
                  </div>
                </header>

                {isOpen && (
                  <div className="border-t border-jane-navy/10 bg-jane-cream/40 px-6 md:px-8 py-8">
                    <div className="aspect-video w-full rounded-2xl bg-jane-navy/90 text-white grid place-items-center mb-8 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-30">
                        <Blob color="mint" opacity={0.5} size={400} className="absolute -left-20 -top-12" />
                        <Blob color="orange" opacity={0.4} size={360} className="absolute -right-16 -bottom-10" rotate={30} />
                      </div>
                      <div className="relative text-center px-6">
                        <div className="grid place-items-center w-16 h-16 mx-auto rounded-full bg-white/15 mb-4 backdrop-blur-sm">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="text-white/85 text-sm uppercase tracking-widest">
                          {m.duration}
                        </p>
                        <p className="mt-2 text-white/85 max-w-md mx-auto text-sm">
                          {labels.videoSoon}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h3 className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium mb-3">
                          {labels.objectives}
                        </h3>
                        <ul className="space-y-2 text-jane-navy/85">
                          {m.objectives.map((o, i) => (
                            <li key={i} className="flex gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-2 w-1.5 h-1.5 rounded-full bg-jane-mint shrink-0"
                              />
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium mb-3">
                          {labels.reflection}
                        </h3>
                        <p className="text-jane-navy/85 italic leading-relaxed">
                          “{m.reflection}”
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                      <PillButton
                        variant={isDone ? "ghost" : "mint"}
                        onClick={() => toggleComplete(m.slug)}
                      >
                        {isDone ? labels.undo : labels.markDone}
                      </PillButton>
                      <button
                        type="button"
                        onClick={() => setOpenSlug(null)}
                        className="text-jane-navy/70 hover:text-jane-orange text-xs uppercase tracking-widest"
                      >
                        {labels.hide}
                      </button>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

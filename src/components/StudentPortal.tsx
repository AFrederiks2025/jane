"use client";

import { useEffect, useMemo, useState } from "react";
import { Blob } from "./Blob";
import { PillButton } from "./PillButton";
import type { StudentModule } from "@/content/modules";
import type { ArchiveVideo } from "@/content/archive";
import { groupArchive } from "@/content/archive";
import type { Locale } from "@/lib/i18n";

interface StudentPortalProps {
  locale: Locale;
  modules: StudentModule[];
  archive: ArchiveVideo[];
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

type View = "modules" | "archive";

export function StudentPortal({ locale, modules, archive }: StudentPortalProps) {
  const isNL = locale === "nl";
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [view, setView] = useState<View>("modules");
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
        intro:
          "Doorloop de modules in je eigen tempo. Wat je hier afrondt, bewaren we lokaal in deze browser.",
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
        nav: { modules: "Modules", archive: "Archief" },
        archiveTitle: "Archief",
        archiveIntro:
          "Oude opnames en lezingen — onder andere van Dirk van der Schaaf, grondlegger van Jane®.",
        watchOnYouTube: "Bekijk op YouTube",
      }
    : {
        portal: "Student portal",
        welcome: "Welcome back",
        intro:
          "Work through the modules at your own pace. What you complete here is saved locally in this browser.",
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
        nav: { modules: "Modules", archive: "Archive" },
        archiveTitle: "Archive",
        archiveIntro:
          "Older recordings and lectures — including talks by Dirk van der Schaaf, the founder of Jane®.",
        watchOnYouTube: "Watch on YouTube",
      };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-jane-cream">
        <Blob color="orange" opacity={0.2} size={460} className="absolute -left-32 -top-16" />
        <Blob color="mint-soft" opacity={0.7} size={400} className="absolute -right-16 bottom-0" rotate={20} />
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-14 relative">
          <p className="text-jane-orange uppercase tracking-[0.22em] text-sm font-medium mb-3">
            {labels.portal}
          </p>
          <h1 className="text-3xl md:text-5xl font-light text-jane-navy leading-tight">
            {labels.welcome}.
          </h1>
          <p className="mt-4 text-jane-navy/80 max-w-2xl font-light">{labels.intro}</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-10 lg:grid-cols-12">
          {/* SIDEBAR */}
          <aside className="lg:col-span-3">
            <nav
              aria-label={labels.portal}
              className="bg-white border border-jane-navy/10 rounded-3xl p-3 lg:sticky lg:top-24"
            >
              <SidebarButton
                active={view === "modules"}
                onClick={() => setView("modules")}
                label={labels.nav.modules}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="4" y="14" width="16" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                }
                badge={hydrated ? `${stats.done}/${stats.total}` : undefined}
              />
              <SidebarButton
                active={view === "archive"}
                onClick={() => setView("archive")}
                label={labels.nav.archive}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
                    <path
                      d="M5 8h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path d="M10 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                }
                badge={String(archive.length)}
              />
            </nav>
          </aside>

          {/* CONTENT */}
          <div className="lg:col-span-9">
            {view === "modules" && (
              <ModulesView
                modules={modules}
                completed={completed}
                openSlug={openSlug}
                setOpenSlug={setOpenSlug}
                toggleComplete={toggleComplete}
                reset={reset}
                hydrated={hydrated}
                stats={stats}
                labels={labels}
              />
            )}
            {view === "archive" && <ArchiveView archive={archive} labels={labels} />}
          </div>
        </div>
      </section>
    </>
  );
}

function SidebarButton({
  active,
  onClick,
  label,
  icon,
  badge,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
  badge?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl transition-colors ${
        active
          ? "bg-jane-navy text-white"
          : "text-jane-navy hover:bg-jane-cream"
      }`}
    >
      <span className="flex items-center gap-3">
        <span aria-hidden="true">{icon}</span>
        <span className="text-[15px]">{label}</span>
      </span>
      {badge && (
        <span
          className={`text-xs px-2 py-0.5 rounded-full tabular-nums ${
            active ? "bg-white/15 text-white" : "bg-jane-navy/10 text-jane-navy/70"
          }`}
        >
          {badge}
        </span>
      )}
    </button>
  );
}

interface Labels {
  progress: string;
  moduleOf: (n: number, total: number) => string;
  reset: string;
  confirmReset: string;
  allDone: string;
  completed: string;
  notStarted: string;
  objectives: string;
  reflection: string;
  watch: string;
  hide: string;
  markDone: string;
  undo: string;
  videoSoon: string;
  archiveTitle: string;
  archiveIntro: string;
  watchOnYouTube: string;
}

function ModulesView({
  modules,
  completed,
  openSlug,
  setOpenSlug,
  toggleComplete,
  reset,
  hydrated,
  stats,
  labels,
}: {
  modules: StudentModule[];
  completed: Set<string>;
  openSlug: string | null;
  setOpenSlug: (slug: string | null) => void;
  toggleComplete: (slug: string) => void;
  reset: () => void;
  hydrated: boolean;
  stats: { total: number; done: number; pct: number };
  labels: Labels;
}) {
  return (
    <div>
      <div className="bg-white border border-jane-navy/10 rounded-3xl p-6 md:p-7 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium">
              {labels.progress}
            </p>
            <p className="mt-1 text-jane-navy text-lg">
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

      <div className="space-y-5">
        {modules.map((m) => {
          const isOpen = openSlug === m.slug;
          const isDone = completed.has(m.slug);
          return (
            <article
              key={m.slug}
              className={`bg-white border rounded-3xl overflow-hidden transition-all ${
                isDone ? "border-jane-mint/60" : "border-jane-navy/10 hover:border-jane-mint/40"
              }`}
            >
              <header className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 md:p-7">
                <div
                  className={`grid place-items-center w-14 h-14 rounded-full text-white text-lg font-light shrink-0 ${
                    isDone ? "bg-jane-mint" : "bg-jane-navy"
                  }`}
                  aria-hidden="true"
                >
                  {isDone ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12.5l4.5 4.5L19 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
                      <p className="text-white/85 text-sm uppercase tracking-widest">{m.duration}</p>
                      <p className="mt-2 text-white/85 max-w-md mx-auto text-sm">{labels.videoSoon}</p>
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
                      <p className="text-jane-navy/85 italic leading-relaxed">“{m.reflection}”</p>
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
    </div>
  );
}

function ArchiveView({
  archive,
  labels,
}: {
  archive: ArchiveVideo[];
  labels: Labels;
}) {
  const groups = groupArchive(archive);
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-2xl md:text-3xl font-light text-jane-navy">{labels.archiveTitle}</h2>
        <p className="mt-3 text-jane-navy/80 font-light max-w-2xl">{labels.archiveIntro}</p>
      </header>

      <div className="space-y-12">
        {groups.map((g) => (
          <section key={g.group || "ungrouped"}>
            {g.group && (
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-jane-orange uppercase tracking-[0.2em] text-xs font-medium">
                  {g.group}
                </h3>
                <span className="text-jane-navy/50 text-xs tabular-nums">
                  {g.videos.length} {g.videos.length === 1 ? "video" : "video's"}
                </span>
              </div>
            )}
            <div className="space-y-6">
              {g.videos.map((v) => (
                <article
                  key={v.id}
                  className="bg-white border border-jane-navy/10 rounded-3xl overflow-hidden"
                >
                  <div className="aspect-video w-full bg-black">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <p className="text-jane-orange text-xs uppercase tracking-widest">{v.speaker}</p>
                    <h4 className="mt-2 text-xl text-jane-navy font-normal leading-snug">{v.title}</h4>
                    <p className="mt-3 text-jane-navy/75 leading-relaxed">{v.description}</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-jane-mint hover:text-jane-orange text-xs uppercase tracking-widest"
                    >
                      {labels.watchOnYouTube}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="ml-1.5">
                        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        <path
                          d="M9 7h8v8"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

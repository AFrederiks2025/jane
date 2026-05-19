"use client";

import { useState } from "react";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";

export function ChatBubble({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = getContent(locale);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-3">
      {open && (
        <div className="bg-white border border-jane-navy/10 shadow-lg rounded-2xl rounded-br-sm px-5 py-3 max-w-xs">
          <p className="text-jane-navy text-sm">{t.common.chat}</p>
          <a
            href={`mailto:${t.common.footer.email}`}
            className="mt-2 inline-flex text-jane-mint text-xs uppercase tracking-widest hover:text-jane-orange"
          >
            {locale === "nl" ? "Mail Jamila »" : "Email Jamila »"}
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Sluit chat" : "Open chat"}
        aria-expanded={open}
        className="w-12 h-12 rounded-full bg-jane-mint text-white shadow-md grid place-items-center hover:bg-[#038f74] transition-colors shrink-0"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-5 4V6a2 2 0 0 1 2-2z" />
          </svg>
        )}
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";

export function ChatBubble({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(true);
  const t = getContent(locale);
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Chat openen"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-jane-mint text-white shadow-lg grid place-items-center hover:scale-105 transition-transform"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-5 4V6a2 2 0 0 1 2-2z" />
        </svg>
      </button>
    );
  }
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <div className="bg-white border border-jane-navy/10 shadow-lg rounded-2xl rounded-br-sm px-5 py-3 max-w-xs">
        <p className="text-jane-navy text-sm">{t.common.chat}</p>
      </div>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Chat sluiten"
        className="w-14 h-14 rounded-full bg-jane-mint text-white shadow-lg grid place-items-center hover:scale-105 transition-transform shrink-0"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-5 4V6a2 2 0 0 1 2-2z" />
        </svg>
      </button>
    </div>
  );
}

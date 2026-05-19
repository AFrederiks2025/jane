"use client";

import { useState, type FormEvent } from "react";
import { PillButton } from "./PillButton";
import type { Locale } from "@/lib/i18n";

interface ContactFormProps {
  locale: Locale;
  toEmail: string;
}

export function ContactForm({ locale, toEmail }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);

  const labels =
    locale === "nl"
      ? {
          name: "Naam",
          email: "E-mailadres",
          subject: "Onderwerp",
          message: "Bericht",
          send: "Verstuur bericht",
          intent: "Ik wil…",
          intentMe: "Dit voor mezelf ontdekken",
          intentOthers: "Anderen helpen met ontdekken",
          intentInstitute: "Coach worden",
          placeholderMsg: "Vertel hier kort over je vraag of doel.",
          hint: "We reageren meestal binnen één werkdag.",
          opensMail: "Je e-mailprogramma opent met je bericht klaar om te versturen.",
        }
      : {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
          send: "Send message",
          intent: "I want to…",
          intentMe: "Discover this for myself",
          intentOthers: "Help others discover this",
          intentInstitute: "Become a coach",
          placeholderMsg: "Tell us briefly what you’re looking for.",
          hint: "We usually reply within one business day.",
          opensMail: "Your email client will open with the message ready to send.",
        };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const intent = String(data.get("intent") ?? "");
    const subject = String(data.get("subject") ?? "") || (intent || "Jane® website");
    const message = String(data.get("message") ?? "");
    const body = [
      `Naam / Name: ${name}`,
      `E-mail: ${email}`,
      intent ? `Interesse / Intent: ${intent}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setTimeout(() => setSubmitting(false), 1500);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="block text-jane-navy text-sm uppercase tracking-widest mb-2">
            {labels.name}
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="w-full bg-white border border-jane-navy/20 rounded-full px-5 py-3 text-jane-navy focus:border-jane-mint focus:outline-none transition-colors"
          />
        </label>
        <label className="block">
          <span className="block text-jane-navy text-sm uppercase tracking-widest mb-2">
            {labels.email}
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="w-full bg-white border border-jane-navy/20 rounded-full px-5 py-3 text-jane-navy focus:border-jane-mint focus:outline-none transition-colors"
          />
        </label>
      </div>

      <fieldset>
        <legend className="text-jane-navy text-sm uppercase tracking-widest mb-3">
          {labels.intent}
        </legend>
        <div className="flex flex-wrap gap-2">
          {[labels.intentMe, labels.intentOthers, labels.intentInstitute].map((opt) => (
            <label
              key={opt}
              className="cursor-pointer text-sm rounded-full border border-jane-navy/20 px-4 py-2 text-jane-navy/80 hover:border-jane-mint has-checked:bg-jane-mint has-checked:text-white has-checked:border-jane-mint transition-colors"
            >
              <input type="radio" name="intent" value={opt} className="sr-only" />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="block text-jane-navy text-sm uppercase tracking-widest mb-2">
          {labels.subject}
        </span>
        <input
          type="text"
          name="subject"
          className="w-full bg-white border border-jane-navy/20 rounded-full px-5 py-3 text-jane-navy focus:border-jane-mint focus:outline-none transition-colors"
        />
      </label>

      <label className="block">
        <span className="block text-jane-navy text-sm uppercase tracking-widest mb-2">
          {labels.message}
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={labels.placeholderMsg}
          className="w-full bg-white border border-jane-navy/20 rounded-3xl px-5 py-3 text-jane-navy focus:border-jane-mint focus:outline-none transition-colors resize-y"
        />
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <PillButton variant="mint">{submitting ? "…" : labels.send}</PillButton>
        <p className="text-sm text-white/70">{labels.opensMail}</p>
      </div>
      <p className="text-xs text-white/60">{labels.hint}</p>
    </form>
  );
}

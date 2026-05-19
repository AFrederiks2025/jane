import Link from "next/link";
import { Avatar } from "./Avatar";
import type { CoachItem } from "@/content/types";
import type { Locale } from "@/lib/i18n";

interface CoachCardProps {
  coach: CoachItem;
  href: string;
  locale: Locale;
}

export function CoachCard({ coach, href, locale }: CoachCardProps) {
  const acceptLabel = locale === "nl" ? "Neemt nieuwe cliënten aan" : "Accepting new clients";
  return (
    <Link
      href={href}
      className="group block bg-white border border-jane-navy/10 rounded-3xl p-6 hover:border-jane-mint/60 transition-colors"
    >
      <div className="flex items-start gap-4">
        <Avatar name={coach.name} size={72} />
        <div className="flex-1 min-w-0">
          <h3 className="text-jane-navy text-lg font-normal leading-snug group-hover:text-jane-orange transition-colors">
            {coach.name}
          </h3>
          <p className="text-jane-orange text-xs uppercase tracking-widest mt-1">{coach.role}</p>
          <p className="text-jane-navy/60 text-sm mt-1">{coach.location}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {coach.specialties.map((s) => (
          <span
            key={s}
            className="inline-flex items-center rounded-full bg-jane-cream text-jane-navy/80 text-xs px-2.5 py-1"
          >
            {s}
          </span>
        ))}
      </div>
      {coach.acceptingClients && (
        <p className="mt-4 inline-flex items-center gap-2 text-jane-mint text-xs uppercase tracking-widest">
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-jane-mint" />
          {acceptLabel}
        </p>
      )}
    </Link>
  );
}

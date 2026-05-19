"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Avatar } from "./Avatar";
import type { ExperienceCategory, ExperienceItem } from "@/content/types";

interface ExperienceGridProps {
  items: ExperienceItem[];
  labels: { all: string; participants: string; professionals: string };
  filterLabel?: string;
  readMore: string;
  basePath: string;
}

type Filter = "all" | ExperienceCategory;

export function ExperienceGrid({
  items,
  labels,
  filterLabel,
  readMore,
  basePath,
}: ExperienceGridProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [items, filter],
  );

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: labels.all },
    { key: "participants", label: labels.participants },
    { key: "professionals", label: labels.professionals },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {filterLabel && (
          <span className="mr-2 text-sm text-jane-navy/60 uppercase tracking-widest">
            {filterLabel}
          </span>
        )}
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-5 py-2 text-sm uppercase tracking-wider transition-colors ${
              filter === f.key
                ? "bg-jane-navy text-white"
                : "bg-white text-jane-navy border border-jane-navy/15 hover:border-jane-navy/40"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <Link
            key={item.slug}
            href={`${basePath}/${item.slug}`}
            className="group block bg-white rounded-3xl p-7 border border-jane-navy/5 hover:border-jane-mint/60 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4">
              <Avatar name={item.name} size={64} />
              <div>
                <h3 className="text-jane-navy text-lg font-normal leading-snug">
                  {item.name}
                </h3>
                <p className="text-jane-orange text-xs uppercase tracking-widest mt-1">
                  {item.category === "professionals"
                    ? labels.professionals
                    : labels.participants}
                </p>
              </div>
            </div>
            <p className="mt-5 text-jane-navy/75 text-[15px] leading-relaxed">
              {item.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center text-jane-mint text-sm uppercase tracking-wider group-hover:text-jane-orange transition-colors">
              {readMore}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

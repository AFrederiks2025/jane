"use client";

import { useRef, useState } from "react";
import { CoachMatcher, type ClusterId } from "./CoachMatcher";
import { CoachClusters } from "./CoachClusters";
import type { Locale } from "@/lib/i18n";

export function CoachesExplorer({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<ClusterId | null>(null);
  const clustersRef = useRef<HTMLDivElement>(null);

  const handleSelectCluster = (cluster: ClusterId) => {
    setFilter(cluster);
    requestAnimationFrame(() => {
      clustersRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <CoachMatcher locale={locale} onSelectCluster={handleSelectCluster} />
      <div ref={clustersRef}>
        <CoachClusters
          locale={locale}
          filter={filter}
          onShowAll={() => setFilter(null)}
        />
      </div>
    </>
  );
}

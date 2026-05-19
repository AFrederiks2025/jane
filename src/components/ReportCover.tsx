type Palette = "talenten" | "functie" | "jong";

const palettes: Record<Palette, string[]> = {
  // 18 tiles arranged 6 rows × 3 cols, taken from the actual PDF cover
  talenten: [
    "#d59e6c", "#c9d56b", "#7fb4cc",
    "#6f9968", "#581916", "#a9c468",
    "#3897b8", "#cbc051", "#cd2f1d",
    "#252e62", "#c98a3c", "#3f6c70",
    "#2cb39e", "#789f7a", "#deae87",
    "#c8454b", "#467a39", "#27468c",
  ],
  functie: Array.from({ length: 18 }, () => "#2c5a9e"),
  jong: Array.from({ length: 18 }, () => "#5e8c3a"),
};

const titles: Record<Palette, { lineA: string; italic?: string; lineB: string }> = {
  talenten: { lineA: "Jane Talenten", lineB: "Rapportage" },
  functie: { lineA: "Jane Functie", lineB: "Rapportage" },
  jong: { lineA: "Jane", italic: "Jong", lineB: "Talenten Rapportage" },
};

interface ReportCoverProps {
  palette: Palette;
  candidate: string;
  date: string;
}

export function ReportCover({ palette, candidate, date }: ReportCoverProps) {
  const colors = palettes[palette];
  const title = titles[palette];
  return (
    <div className="relative aspect-[3/4] bg-white border-b border-jane-navy/10 overflow-hidden">
      <div className="absolute inset-0 px-6 pt-6 pb-5 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="text-jane-navy text-[15px] leading-tight font-light">
            <div>
              {title.lineA}
              {title.italic && (
                <>
                  {" "}
                  <span className="italic font-normal" style={{ fontFamily: "var(--font-josefin)" }}>
                    {title.italic}
                  </span>
                </>
              )}{" "}
              {title.lineB.includes("Talenten") ? <br /> : null}
              {title.lineB}
            </div>
          </div>
          <span className="text-jane-navy text-lg font-light leading-none flex items-baseline">
            jane
            <svg viewBox="0 0 24 32" width="9" height="13" aria-hidden="true" className="ml-0.5">
              <path d="M12 1c4 4 8 8 8 14a8 8 0 1 1-16 0c0-6 4-10 8-14z" fill="#04a98b" />
            </svg>
          </span>
        </div>
        <div className="mt-3 text-jane-navy/80 text-[11px] leading-snug">
          <div>{candidate}</div>
          <div>{date}</div>
        </div>
        <div className="mt-4 flex-1 grid grid-cols-3 grid-rows-6 gap-1.5">
          {colors.map((c, i) => (
            <div
              key={i}
              className="rounded-[2px]"
              style={{ background: c }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export type { Palette as ReportCoverPalette };

function initialsFor(name: string): string {
  return name
    .replace(/[®©]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

const palettes = [
  { bg: "#04a98b", fg: "#ffffff" },
  { bg: "#d65d1f", fg: "#ffffff" },
  { bg: "#212c56", fg: "#ffffff" },
  { bg: "#b8e8de", fg: "#212c56" },
  { bg: "#fdf6f0", fg: "#d65d1f" },
];

function paletteFor(name: string) {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return palettes[h % palettes.length];
}

interface AvatarProps {
  name: string;
  size?: number;
  className?: string;
}

export function Avatar({ name, size = 96, className = "" }: AvatarProps) {
  const { bg, fg } = paletteFor(name);
  const initials = initialsFor(name);
  return (
    <div
      className={`rounded-full grid place-items-center font-light tracking-wide shadow-sm ${className}`}
      style={{
        width: size,
        height: size,
        background: bg,
        color: fg,
        fontSize: Math.round(size * 0.34),
      }}
      aria-label={name}
      role="img"
    >
      {initials}
    </div>
  );
}

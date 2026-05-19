import type { CSSProperties } from "react";

type Color = "orange" | "mint" | "mint-soft" | "navy" | "cream";

const fill: Record<Color, string> = {
  orange: "#d65d1f",
  mint: "#04a98b",
  "mint-soft": "#b8e8de",
  navy: "#212c56",
  cream: "#fdf6f0",
};

interface BlobProps {
  color?: Color;
  opacity?: number;
  size?: number;
  className?: string;
  style?: CSSProperties;
  rotate?: number;
}

export function Blob({
  color = "orange",
  opacity = 0.4,
  size = 400,
  className = "",
  style,
  rotate = 0,
}: BlobProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      <path
        fill={fill[color]}
        fillOpacity={opacity}
        d="M44.6,-65.7C57.1,-56.1,65.6,-41.5,69.9,-26.2C74.2,-10.9,74.4,5.1,69.5,19.2C64.6,33.2,54.6,45.3,42,55.1C29.4,64.9,14.7,72.5,-0.7,73.4C-16.1,74.4,-32.2,68.8,-45.1,58.7C-58,48.6,-67.6,34.1,-71.5,18.2C-75.4,2.3,-73.5,-15,-66.5,-29.6C-59.5,-44.2,-47.3,-56.2,-33.4,-64.9C-19.5,-73.6,-3.9,-79,9.7,-77C23.3,-75,32.2,-75.3,44.6,-65.7Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function DotArc({
  color = "#04a98b",
  size = 140,
  className = "",
  style,
}: {
  color?: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const dots = Array.from({ length: 14 }).map((_, i) => {
    const angle = (Math.PI * i) / 13;
    const r = 60;
    const cx = 70 + r * Math.cos(angle);
    const cy = 70 - r * Math.sin(angle);
    return <circle key={i} cx={cx} cy={cy} r="2.4" fill={color} />;
  });
  return (
    <svg
      viewBox="0 0 140 140"
      width={size}
      height={size}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    >
      {dots}
    </svg>
  );
}

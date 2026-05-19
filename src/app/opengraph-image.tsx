import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Jane® — Ontdek identiteit en bestemming";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #fdf6f0 0%, #ffffff 45%, #b8e8de 100%)",
          color: "#212c56",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: "45% 55% 50% 50%",
            background: "rgba(214, 93, 31, 0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 360,
            height: 360,
            borderRadius: "55% 45% 60% 40%",
            background: "rgba(4, 169, 139, 0.45)",
          }}
        />
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
          <span style={{ fontSize: 120, fontWeight: 300, letterSpacing: -3, lineHeight: 1 }}>
            jane
          </span>
          <div
            style={{
              display: "flex",
              width: 28,
              height: 40,
              background: "#04a98b",
              borderRadius: "45% 45% 50% 50% / 60% 60% 40% 40%",
              transform: "rotate(-10deg)",
              marginLeft: -6,
              marginBottom: 16,
            }}
          />
        </div>
        <p
          style={{
            marginTop: 28,
            fontSize: 56,
            fontWeight: 300,
            lineHeight: 1.1,
            maxWidth: 920,
          }}
        >
          Ontdek identiteit en bestemming met de Jane® Talenten Methodiek.
        </p>
        <p
          style={{
            marginTop: 18,
            fontSize: 22,
            color: "#d65d1f",
            textTransform: "uppercase",
            letterSpacing: 6,
          }}
        >
          Jane® Talenten Methodiek
        </p>
      </div>
    ),
    size,
  );
}

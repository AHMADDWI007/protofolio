import { ImageResponse } from "next/og";

export const alt = "Ahmad Dwi Kurnia — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
          fontFamily: "system-ui, sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Ahmad Dwi Kurnia
        </div>
        <div
          style={{
            fontSize: 48,
            color: "rgba(255,255,255,0.9)",
            marginTop: 24,
            fontWeight: 500,
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            marginTop: 60,
            fontFamily: "monospace",
          }}
        >
          github.com/AHMADDWI007
        </div>
      </div>
    ),
    { ...size }
  );
}
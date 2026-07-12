import { ImageResponse } from "next/og";

export const alt = "Lihi Shtoyer Gilead — Corporate Podcast Production";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Build-safe generated OG image (Latin text → renders with the default font,
// no external font fetch required).
export default function Image() {
  const bars = [28, 52, 86, 44, 68, 36, 80, 48, 62, 40];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "76px",
        background: "linear-gradient(135deg, #2b2922 0%, #1d1b17 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "6px",
            height: "60px",
          }}
        >
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                width: "8px",
                height: `${h}%`,
                borderRadius: "6px",
                background: "#C79F5F",
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            color: "#C79F5F",
            fontSize: "24px",
            letterSpacing: "3px",
          }}
        >
          PODCASTS FOR COMPANIES
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            color: "#F7F3EC",
            fontSize: "82px",
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          Lihi Shtoyer Gilead
        </div>
        <div
          style={{
            display: "flex",
            color: "#B08542",
            fontSize: "42px",
            marginTop: "20px",
          }}
        >
          Corporate Podcast Production
        </div>
      </div>

      <div style={{ display: "flex", color: "#9A9183", fontSize: "26px" }}>
        Strategy · Content · Interviews · Filming · Editing
      </div>
    </div>,
    size,
  );
}

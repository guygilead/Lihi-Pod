import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon (Latin glyph → renders with the built-in font, no fetch).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1d1b17",
          color: "#C79F5F",
          fontSize: 104,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
        }}
      >
        L
      </div>
    ),
    size,
  );
}

import { Frank_Ruhl_Libre, Assistant } from "next/font/google";

/**
 * Hebrew-native type pairing, self-hosted at build time by next/font.
 * Frank Ruhl Libre — classic Hebrew serif for editorial display headings.
 * Assistant — humanist Hebrew sans for body & UI.
 * Latin subset is included for LTR runs (numbers, "Spotify", handles).
 */
export const frank = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-frank",
  display: "swap",
});

export const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-assistant",
  display: "swap",
});

import type { Episode, PodcastShow } from "@/lib/types";

/**
 * SABONcast — the real podcast produced by Lihi, presented as the flagship
 * case study. Episode IDs are the codes from open.spotify.com/episode/<id>.
 */
export const show: PodcastShow = {
  name: "SABONcast",
  spotifyShowId: "3wb0CKuIYFWiSlJgJtVQCD",
  spotifyShowUrl: "https://open.spotify.com/show/3wb0CKuIYFWiSlJgJtVQCD",
  tagline: "סדרת שיחות עם מנהלים ואנשים מתוך הארגון",
};

export const featuredEpisode: Episode = {
  id: "2pNThWdobSYZKhjxtKZuYJ",
  title: "HR at the Core",
  subtitle: "Driving Trust and Transformation Across Markets",
  guest: "Niv Barbu",
  role: "", // TODO_REPLACE: add the guest's title/role if provided.
  lang: "en",
  topic: "HR · הנהלה גלובלית · אמון ושינוי ארגוני",
  url: "https://open.spotify.com/episode/2pNThWdobSYZKhjxtKZuYJ",
  badges: ["SABONcast", "Video Episode"],
};

export const secondaryEpisode: Episode = {
  id: "67Nu0gDQZRI93c8RY6K1Vq",
  title: "אחריות חברתית ותקשורת ארגונית",
  subtitle: "",
  guest: "",
  role: "",
  lang: "he",
  topic: "CSR · תקשורת ארגונית · מותג מעסיק",
  url: "https://open.spotify.com/episode/67Nu0gDQZRI93c8RY6K1Vq",
  badges: ["SABONcast"],
};

/** Ordered list (feeds the PodcastEpisode JSON-LD). */
export const episodes: Episode[] = [featuredEpisode, secondaryEpisode];

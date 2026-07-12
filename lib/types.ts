import type { IconName } from "@/components/ui/Icon";

export type NavLink = { label: string; href: string };

export type Cta = { label: string; href: string };

export type Step = {
  num: string;
  title: string;
  text: string;
};

export type UseCase = {
  num: string;
  title: string;
  text: string;
  example: string;
};

export type Package = {
  icon: IconName;
  name: string;
  fitFor: string;
  includes: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
};

export type FaqItem = { q: string; a: string };

export type AssetSpoke = {
  icon: IconName;
  label: string;
  /** optional platform tint for the chip */
  tone?: "default" | "gold";
};

export type Episode = {
  /** Spotify episode ID (open.spotify.com/episode/<id>). */
  id: string;
  title: string;
  subtitle?: string;
  guest?: string;
  role?: string;
  lang?: "he" | "en";
  /** Short topical label for the card. */
  topic?: string;
  url: string;
  badges?: string[];
};

export type PodcastShow = {
  name: string;
  spotifyShowId: string;
  spotifyShowUrl: string;
  tagline?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  logo?: string;
};

export type SocialLink = {
  icon: IconName;
  label: string;
  value: string;
  href: string;
};

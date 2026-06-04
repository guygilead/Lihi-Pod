import type { NavLink } from "@/lib/types";

/** Section anchor ids — referenced by sections and nav to avoid typos. */
export const SECTION = {
  hero: "hero",
  about: "about",
  what: "what",
  benefits: "benefits",
  process: "process",
  deliverables: "deliverables",
  assets: "assets",
  useCases: "use-cases",
  portfolio: "portfolio",
  beforeAfter: "before-after",
  packages: "packages",
  faq: "faq",
  contact: "contact",
} as const;

export const navLinks: NavLink[] = [
  { label: "על ליהיא", href: `#${SECTION.about}` },
  { label: "השירות", href: `#${SECTION.what}` },
  { label: "תהליך העבודה", href: `#${SECTION.process}` },
  { label: "מסלולים", href: `#${SECTION.packages}` },
  { label: "דוגמאות", href: `#${SECTION.portfolio}` },
  { label: "שאלות נפוצות", href: `#${SECTION.faq}` },
];

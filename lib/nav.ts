import type { NavLink } from "@/lib/types";

/** Section anchor ids — referenced by sections and nav to avoid typos. */
export const SECTION = {
  hero: "hero",
  what: "what",
  useCases: "use-cases",
  caseStudy: "case-study",
  assets: "assets",
  about: "about",
  process: "process",
  work: "work",
  packages: "packages",
  testimonials: "testimonials",
  faq: "faq",
  contact: "contact",
} as const;

export const navLinks: NavLink[] = [
  { label: "עבודות", href: `#${SECTION.work}` },
  { label: "למי זה מתאים", href: `#${SECTION.useCases}` },
  { label: "השירות", href: `#${SECTION.what}` },
  { label: "התהליך", href: `#${SECTION.process}` },
  { label: "על ליהיא", href: `#${SECTION.about}` },
  { label: "שאלות", href: `#${SECTION.faq}` },
];

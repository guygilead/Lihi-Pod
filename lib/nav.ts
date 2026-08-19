import type { NavLink } from "@/lib/types";

/** Section anchor ids — referenced by sections and nav to avoid typos. */
export const SECTION = {
  hero: "hero",
  useCases: "use-cases",
  work: "work",
  assets: "assets",
  about: "about",
  process: "process",
  packages: "packages",
  testimonials: "testimonials",
  faq: "faq",
  contact: "contact",
} as const;

export const navLinks: NavLink[] = [
  { label: "עבודות", href: `/#${SECTION.work}` },
  { label: "למי זה מתאים", href: `/#${SECTION.useCases}` },
  { label: "התהליך", href: `/#${SECTION.process}` },
  { label: "על ליהיא", href: `/#${SECTION.about}` },
  { label: "מסלולים", href: `/#${SECTION.packages}` },
  { label: "שאלות", href: `/#${SECTION.faq}` },
];

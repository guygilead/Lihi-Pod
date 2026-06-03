# ליהיא שטויר גלעד — אתר שיווקי להפקת פודקאסטים לחברות

אתר תדמית ושיווק (עברית, RTL) לשירות הפקת פודקאסטים ארגוניים מקצה לקצה של ליהיא שטויר גלעד.

A premium, Hebrew / RTL marketing website for Lihi Shtoyer Gilad's done‑for‑you
corporate podcast production service. Built with Next.js (App Router),
TypeScript and Tailwind CSS v4.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS‑first `@theme` design tokens)
- **next/font** — Frank Ruhl Libre (display) + Assistant (body), Hebrew subsets
- **lucide-react** — icons
- **Resend** + **Zod** — contact‑form email API route
- Animations: lightweight CSS + IntersectionObserver (`prefers-reduced-motion` aware)

## Getting started

```bash
pnpm install
cp .env.example .env.local   # optional — see "Contact form" below
pnpm dev                     # http://localhost:3000
```

Scripts: `pnpm dev` · `pnpm build` · `pnpm start` · `pnpm lint` · `pnpm typecheck` · `pnpm format`

## Project structure

```
app/
  layout.tsx          # <html lang="he" dir="rtl">, fonts, metadata, JSON-LD, Header/Footer
  page.tsx            # composes all sections in order
  globals.css         # Tailwind import + @theme design tokens + base layer
  fonts.ts            # next/font (Frank Ruhl Libre + Assistant)
  metadata.ts         # SEO metadata + SITE_URL
  opengraph-image.tsx # generated social-share image
  icon.svg, robots.ts, sitemap.ts
  api/contact/route.ts# POST handler — Zod validation + Resend email
components/
  layout/   Header, MobileMenu, Footer
  sections/ Hero, Credibility, WhatIsCorporatePodcast, BenefitsExternal,
            BenefitsInternal, Process, Deliverables, OneEpisodeManyAssets,
            UseCases, Portfolio, BeforeAfter, Packages, Faq, ContactForm
  ui/       Section, Container, SectionHeading, Button, Card, IconBadge,
            Accordion, Reveal, Ltr, Field, Icon
  visuals/  HeroVisual, SoundWave, MicGlyph, ContentFlowDiagram,
            AssetHubSpoke, EmbedPlaceholder, WaveDivider
content/site.ts        # ALL Hebrew copy — edit text here, in one place
lib/                   # types, nav/anchors, useReveal hook, utils
```

## Editing content

Almost all text lives in **`content/site.ts`** (typed). Section anchors and the
header navigation come from **`lib/nav.ts`**. Components are presentation‑only,
so copy edits don't require touching JSX.

## Contact form

`components/sections/ContactForm.tsx` posts to the server route
`app/api/contact/route.ts`, which validates with Zod and emails via **Resend**.

- **Before configuration** the form still works: it returns success and logs the
  submission to the server console (so it's never "dead" in dev / pre‑launch).
- **To deliver emails**, set in `.env.local` (see `.env.example`):
  `RESEND_API_KEY`, `CONTACT_TO`, and optionally `CONTACT_FROM`
  (create a key + verify a domain at [resend.com](https://resend.com)).

> The form requires a server (it is **not** a static export). Deploy to a
> Node‑capable host such as Vercel.

## ✅ Owner TODO before launch (search the code for `TODO_REPLACE`)

- **Contact details & socials** — `content/site.ts` → `socials` (phone, email, LinkedIn, Instagram).
- **Portfolio embeds** — `content/site.ts` → `portfolio.embeds` (real Spotify / Instagram / YouTube URLs). The placeholders in `components/visuals/EmbedPlaceholder.tsx` mark where to drop real embed code.
- **Photos** — Lihi's portrait (`components/sections/Credibility.tsx`) and the cover / behind‑the‑scenes slots (`components/sections/Portfolio.tsx`). Replace the marked placeholders with a `next/image`.
- **Email env vars** — `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`.
- **Site URL** — `NEXT_PUBLIC_SITE_URL` (canonical / sitemap / OG).
- **Social‑proof logos** — Channel 1 / Kan 11 usage (with rights), if desired.

## Deploy

```bash
pnpm build && pnpm start
```

Deploy to Vercel (recommended) or any Node host. Set the environment variables
from `.env.example` in the hosting dashboard.

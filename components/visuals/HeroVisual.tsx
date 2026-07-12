import { Play, ArrowUpRight } from "lucide-react";
import { MicGlyph } from "./MicGlyph";
import { SoundWave } from "./SoundWave";
import { Ltr } from "@/components/ui/Ltr";
import { featuredEpisode, show } from "@/content/episodes";

/**
 * Hero media panel. Until a real SABONcast frame / production photo is
 * supplied (TODO_REPLACE), a designed studio visual carries the mood; the
 * player card links to the real flagship episode — no invented data.
 */
export function HeroVisual() {
  const ep = featuredEpisode;

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Studio panel */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-charcoal to-charcoal-deep shadow-[var(--shadow-lift)] ring-1 ring-line-dark">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gold/10 blur-2xl" />

        <div className="absolute start-5 top-5 inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1.5 text-sm font-medium text-cream ring-1 ring-cream/15 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-soft opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-soft" />
          </span>
          באולפן
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 -m-8 rounded-full bg-gold/15 blur-2xl" />
            <MicGlyph
              className="relative w-24 text-gold-soft drop-shadow-[0_4px_20px_rgba(185,139,67,0.35)]"
              strokeWidth={1.8}
            />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-28 [mask-image:linear-gradient(to_top,black,transparent)]">
          <SoundWave bars={34} className="h-full w-full px-4 text-gold-soft/40" />
        </div>
      </div>

      {/* Player card → the real flagship episode */}
      <a
        href={ep.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`להאזנה לפרק ${ep.title} ב־Spotify`}
        className="group absolute -start-3 -bottom-7 w-[80%] max-w-[19rem] rounded-2xl bg-paper p-4 shadow-[var(--shadow-lift)] ring-1 ring-line transition-shadow hover:shadow-[0_4px_8px_rgba(29,27,24,0.08),0_24px_48px_rgba(29,27,24,0.14)] sm:-start-6"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-white">
            <Play className="h-5 w-5 translate-x-px fill-current" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink" dir="ltr">
              {ep.title}
            </p>
            <p className="truncate text-sm text-muted">
              {show.name} · <Ltr>{ep.guest}</Ltr>
            </p>
          </div>
          <ArrowUpRight
            className="ms-auto h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-gold-deep"
            aria-hidden
          />
        </div>
      </a>

      {/* Exactly two floating tags (§5) */}
      <div className="absolute -end-2 top-10 hidden items-center gap-1.5 rounded-full bg-paper px-3 py-1.5 text-sm font-medium text-ink shadow-soft ring-1 ring-line sm:inline-flex lg:-end-5">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        פרק וידאו
      </div>
      <div className="absolute -end-1 top-1/2 hidden items-center gap-1.5 rounded-full bg-paper px-3 py-1.5 text-sm font-medium text-ink shadow-soft ring-1 ring-line sm:inline-flex lg:-end-4">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        קטעים לרשתות
      </div>
    </div>
  );
}

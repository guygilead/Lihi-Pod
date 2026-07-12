import { Play, ArrowUpRight } from "lucide-react";
import { StudioMic } from "./StudioMic";
import { SoundWave } from "./SoundWave";
import { Ltr } from "@/components/ui/Ltr";
import { featuredEpisode, show } from "@/content/episodes";

/**
 * Hero media panel — layered "broadcast studio" composition (spot glows,
 * concentric sound arcs, film grain, refined mic, mirrored waveform).
 * TODO_REPLACE: a real SABONcast frame / production photo can replace the
 * studio scene. The player card links to the real flagship episode.
 */
export function HeroVisual() {
  const ep = featuredEpisode;

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Studio panel */}
      <div className="texture-grain relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-charcoal via-charcoal to-charcoal-deep shadow-[var(--shadow-lift)] ring-1 ring-line-dark">
        {/* spot glows */}
        <div
          aria-hidden
          className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-16 -start-16 h-64 w-64 rounded-full bg-copper/10 blur-3xl"
        />

        {/* concentric sound arcs */}
        <svg
          viewBox="0 0 400 500"
          className="absolute inset-0 h-full w-full text-gold"
          aria-hidden
        >
          <circle cx="200" cy="205" r="86" stroke="currentColor" strokeOpacity="0.14" fill="none" />
          <circle cx="200" cy="205" r="128" stroke="currentColor" strokeOpacity="0.09" fill="none" />
          <circle
            cx="200"
            cy="205"
            r="172"
            stroke="currentColor"
            strokeOpacity="0.06"
            strokeDasharray="3 7"
            fill="none"
          />
        </svg>

        {/* on-air chip */}
        <div className="absolute start-5 top-5 inline-flex items-center gap-2.5 rounded-full bg-cream/8 px-3.5 py-1.5 text-sm font-medium tracking-wide text-cream ring-1 ring-cream/15 backdrop-blur-sm">
          <span className="dot-pulse h-2 w-2 rounded-full bg-gold-soft" />
          באולפן
        </div>

        {/* mic centerpiece */}
        <div className="absolute inset-x-0 top-[13%] flex justify-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -m-10 rounded-full bg-gold/15 blur-2xl"
            />
            <StudioMic className="relative h-52 text-gold-soft drop-shadow-[0_6px_24px_rgba(185,139,67,0.35)]" />
          </div>
        </div>

        {/* waveform base */}
        <div className="absolute inset-x-0 bottom-0 h-24 [mask-image:linear-gradient(to_top,black_35%,transparent)]">
          <SoundWave bars={40} className="h-full w-full px-6 text-gold-soft/35" />
        </div>
      </div>

      {/* Player card → the real flagship episode */}
      <a
        href={ep.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`להאזנה לפרק ${ep.title} ב־Spotify`}
        className="group absolute -start-3 -bottom-8 flex w-[84%] max-w-[20rem] items-center gap-3.5 rounded-2xl border border-line bg-paper/95 p-3.5 shadow-[var(--shadow-lift)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 sm:-start-6"
      >
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gold to-gold-deep text-white shadow-soft">
          <Play className="h-5 w-5 translate-x-px fill-current" aria-hidden />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold text-ink" dir="ltr">
            {ep.title}
          </span>
          <span className="mt-0.5 block truncate text-sm text-muted">
            {show.name} · <Ltr>{ep.guest}</Ltr>
          </span>
          <span className="mt-1.5 block">
            <SoundWave
              bars={22}
              animated={false}
              className="h-2.5 justify-start text-gold/50"
            />
          </span>
        </span>
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-deep"
          aria-hidden
        />
      </a>

      {/* Two floating tags (§5) — slow, staggered drift */}
      <div className="float-slow absolute -end-2 top-12 hidden items-center gap-2 rounded-full border border-line bg-paper/95 px-3.5 py-2 text-sm font-medium text-ink shadow-soft backdrop-blur sm:inline-flex lg:-end-6">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        פרק וידאו
      </div>
      <div className="float-slower absolute -end-1 top-[55%] hidden items-center gap-2 rounded-full border border-line bg-paper/95 px-3.5 py-2 text-sm font-medium text-ink shadow-soft backdrop-blur sm:inline-flex lg:-end-5">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        קטעים לרשתות
      </div>
    </div>
  );
}

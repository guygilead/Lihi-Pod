"use client";

import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { Ltr } from "@/components/ui/Ltr";
import { StudioMic } from "./StudioMic";
import { SoundWave } from "./SoundWave";
import { track } from "@/lib/analytics";
import type { Episode } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Media showcase for a flagship episode (§8). Designed 16:9 poster with real
 * episode metadata; the Spotify player is lazy-loaded only on click (no
 * autoplay). "לצפייה ב־Spotify" is the fallback / deep link.
 */
export function FeaturedEpisode({
  episode,
  className,
}: {
  episode: Episode;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const ltr = episode.lang === "en";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-card)] bg-charcoal shadow-[var(--shadow-lift)] ring-1 ring-line-dark",
        className,
      )}
    >
      <div className="relative aspect-video w-full">
        {playing ? (
          <iframe
            title={`${episode.title} — Spotify`}
            src={`https://open.spotify.com/embed/episode/${episode.id}?utm_source=generator`}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setPlaying(true);
              track("featured_episode_play", { episode: episode.id });
            }}
            aria-label={`נגן/י את הפרק ${episode.title}`}
            className="texture-grain group absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-charcoal to-charcoal-deep p-6 text-start md:p-8"
          >
            {/* glow + sound arcs + mic silhouette */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/18 blur-3xl"
            />
            <svg
              viewBox="0 0 640 360"
              className="pointer-events-none absolute inset-0 h-full w-full text-gold"
              aria-hidden
            >
              <circle cx="320" cy="180" r="70" stroke="currentColor" strokeOpacity="0.13" fill="none" />
              <circle cx="320" cy="180" r="110" stroke="currentColor" strokeOpacity="0.08" fill="none" />
              <circle
                cx="320"
                cy="180"
                r="150"
                stroke="currentColor"
                strokeOpacity="0.05"
                strokeDasharray="3 7"
                fill="none"
              />
            </svg>
            <StudioMic
              className="pointer-events-none absolute -bottom-7 -start-4 h-44 text-gold-soft/15"
              strokeWidth={1.3}
            />

            <div className="relative flex flex-wrap gap-2">
              {episode.badges?.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-cream/10 px-3 py-1 text-xs font-medium text-cream ring-1 ring-cream/15"
                >
                  <Ltr>{b}</Ltr>
                </span>
              ))}
            </div>

            <div className="relative flex flex-1 items-center justify-center">
              <span className="play-pulse flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white shadow-[var(--shadow-lift)] transition-transform duration-300 group-hover:scale-105">
                <Play className="h-7 w-7 translate-x-px fill-current" aria-hidden />
              </span>
            </div>

            <div className="relative">
              <p
                className="font-serif text-xl font-bold text-cream md:text-2xl"
                dir={ltr ? "ltr" : undefined}
              >
                {episode.title}
              </p>
              {episode.subtitle && (
                <p
                  className="mt-1 text-sm text-muted-light"
                  dir={ltr ? "ltr" : undefined}
                >
                  {episode.subtitle}
                </p>
              )}
              {episode.guest && (
                <p className="mt-2 text-sm font-medium text-gold-soft">
                  <Ltr>{episode.guest}</Ltr>
                  {episode.role ? ` · ${episode.role}` : ""}
                </p>
              )}
              <SoundWave
                bars={26}
                animated={false}
                className="mt-3 h-3 justify-start text-gold-soft/30"
              />
            </div>
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-line-dark px-5 py-4">
        {episode.topic && (
          <span className="text-sm text-muted-light">{episode.topic}</span>
        )}
        <a
          href={episode.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("spotify_open", { episode: episode.id })}
          className="ms-auto inline-flex items-center gap-1.5 text-sm font-semibold text-gold-soft transition-colors hover:text-cream"
        >
          לצפייה ב־Spotify
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </div>
  );
}

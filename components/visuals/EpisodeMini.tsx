"use client";

import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { track } from "@/lib/analytics";
import type { Episode } from "@/lib/types";

/** Slim playable episode row (used for secondary episodes). */
export function EpisodeMini({ episode }: { episode: Episode }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="overflow-hidden rounded-2xl ring-1 ring-line-dark">
        <iframe
          title={`${episode.title} — Spotify`}
          src={`https://open.spotify.com/embed/episode/${episode.id}?utm_source=generator`}
          className="h-[152px] w-full"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-2xl bg-charcoal-deep p-4 ring-1 ring-line-dark transition-colors hover:ring-gold/40">
      <button
        type="button"
        onClick={() => {
          setPlaying(true);
          track("featured_episode_play", { episode: episode.id });
        }}
        aria-label={`נגן/י את הפרק ${episode.title}`}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-white transition-transform duration-300 hover:scale-105"
      >
        <Play className="h-5 w-5 translate-x-px fill-current" aria-hidden />
      </button>
      <div className="min-w-0 flex-1">
        <p
          className="truncate font-serif text-base font-bold text-cream"
          dir={episode.lang === "en" ? "ltr" : undefined}
        >
          {episode.title}
        </p>
        {episode.topic && (
          <p className="truncate text-sm text-muted-light">{episode.topic}</p>
        )}
      </div>
      <a
        href={episode.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("spotify_open", { episode: episode.id })}
        aria-label={`לפתיחת הפרק ${episode.title} ב־Spotify`}
        className="shrink-0 text-gold-soft transition-colors hover:text-cream"
      >
        <ArrowUpRight className="h-5 w-5" aria-hidden />
      </a>
    </div>
  );
}

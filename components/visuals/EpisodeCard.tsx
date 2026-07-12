"use client";

import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { Ltr } from "@/components/ui/Ltr";
import { track } from "@/lib/analytics";
import type { Episode } from "@/lib/types";

/** Compact episode card with lazy click-to-load Spotify player. */
export function EpisodeCard({ episode }: { episode: Episode }) {
  const [playing, setPlaying] = useState(false);
  const ltr = episode.lang === "en";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-charcoal shadow-soft ring-1 ring-line-dark">
      {playing ? (
        <iframe
          title={`${episode.title} — Spotify`}
          src={`https://open.spotify.com/embed/episode/${episode.id}?utm_source=generator`}
          className="h-[152px] w-full"
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
          className="group relative flex aspect-video w-full items-center justify-center bg-gradient-to-br from-charcoal to-charcoal-deep"
        >
          {episode.badges?.[0] && (
            <span className="absolute start-3 top-3 rounded-full bg-cream/10 px-2.5 py-1 text-[11px] font-medium text-cream ring-1 ring-cream/15">
              <Ltr>{episode.badges[0]}</Ltr>
            </span>
          )}
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white transition-transform duration-300 group-hover:scale-105">
            <Play className="h-5 w-5 translate-x-px fill-current" aria-hidden />
          </span>
        </button>
      )}

      <div className="flex flex-1 flex-col p-5">
        <p
          className="font-serif text-lg font-bold text-cream"
          dir={ltr ? "ltr" : undefined}
        >
          {episode.title}
        </p>
        {episode.topic && (
          <p className="mt-1 text-sm text-muted-light">{episode.topic}</p>
        )}
        <a
          href={episode.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("spotify_open", { episode: episode.id })}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-soft transition-colors hover:text-cream"
        >
          לצפייה ב־Spotify
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </div>
  );
}

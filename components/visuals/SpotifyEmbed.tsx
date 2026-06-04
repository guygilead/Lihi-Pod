import { cn } from "@/lib/utils";

type Props = {
  /** "show" lists & plays every episode; "episode" is a single player. */
  type?: "show" | "episode";
  id: string;
  title?: string;
  /** Player height in px (show lists ≈ 352–520, single episode ≈ 152). */
  height?: number;
  className?: string;
};

/**
 * Official Spotify embed. The iframe loads client-side in the visitor's
 * browser, so it shows the real, always-current episodes regardless of where
 * the site is built.
 */
export function SpotifyEmbed({
  type = "show",
  id,
  title,
  height = 352,
  className,
}: Props) {
  const src = `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`;

  return (
    <iframe
      title={title ?? "נגן ספוטיפיי"}
      src={src}
      height={height}
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen
      className={cn(
        "w-full rounded-[var(--radius-card)] border border-line shadow-soft",
        className,
      )}
    />
  );
}

import { cn } from "@/lib/utils";
import { SoundWave } from "./SoundWave";

/** Slim editorial divider: hairline → small static soundwave → hairline. */
export function WaveDivider({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const line = tone === "light" ? "via-cream/25" : "via-line";
  const wave = tone === "light" ? "text-gold-soft/70" : "text-gold/60";

  return (
    <div
      className={cn("flex items-center justify-center gap-4", className)}
      aria-hidden
    >
      <span
        className={cn(
          "h-px w-full max-w-32 bg-gradient-to-l from-transparent",
          line,
        )}
      />
      <SoundWave bars={9} animated={false} className={cn("h-4 w-16", wave)} />
      <span
        className={cn(
          "h-px w-full max-w-32 bg-gradient-to-r from-transparent",
          line,
        )}
      />
    </div>
  );
}

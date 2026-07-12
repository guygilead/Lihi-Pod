import { cn } from "@/lib/utils";

/* Center-weighted, mirrored pattern — reads as one elegant waveform. */
const PATTERN = [
  22, 34, 52, 40, 66, 48, 82, 60, 96, 72, 100, 72, 96, 60, 82, 48, 66, 40, 52,
  34, 22,
];

/** Equalizer-style soundwave built from animated bars (decorative). */
export function SoundWave({
  bars = 32,
  className,
  barClassName,
  animated = true,
}: {
  bars?: number;
  className?: string;
  barClassName?: string;
  animated?: boolean;
}) {
  return (
    <div
      className={cn(
        "motion-safe-wave flex items-center justify-center gap-1",
        className,
      )}
      aria-hidden
    >
      {Array.from({ length: bars }).map((_, i) => {
        const h = PATTERN[i % PATTERN.length];
        return (
          <span
            key={i}
            style={{
              height: `${h}%`,
              animationDelay: `${(i % PATTERN.length) * 120}ms`,
            }}
            className={cn(
              "w-[2.5px] origin-center rounded-full bg-current",
              animated && "animate-[wave-pulse_2.4s_ease-in-out_infinite]",
              barClassName,
            )}
          />
        );
      })}
    </div>
  );
}

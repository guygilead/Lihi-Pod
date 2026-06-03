import { cn } from "@/lib/utils";

const PATTERN = [
  42, 70, 100, 58, 84, 46, 92, 54, 76, 38, 66, 96, 50, 80, 60, 88,
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
        "motion-safe-wave flex items-center justify-center gap-[3px]",
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
              animationDelay: `${(i % PATTERN.length) * 85}ms`,
            }}
            className={cn(
              "w-[3px] origin-center rounded-full bg-current",
              animated && "animate-[wave-pulse_1.3s_ease-in-out_infinite]",
              barClassName,
            )}
          />
        );
      })}
    </div>
  );
}

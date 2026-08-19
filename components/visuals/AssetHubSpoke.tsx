import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { MicGlyph } from "./MicGlyph";
import { assets } from "@/content/site";
import type { AssetSpoke } from "@/lib/types";
import { cn } from "@/lib/utils";

function SpokeChip({
  spoke,
  className,
}: {
  spoke: AssetSpoke;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-2xl border bg-paper px-4 py-3 shadow-soft",
        spoke.tone === "gold"
          ? "border-gold/40 bg-gold-tint/40"
          : "border-line",
        className,
      )}
    >
      <Icon
        name={spoke.icon}
        className={cn(
          "h-4.5 w-4.5 shrink-0",
          spoke.tone === "gold" ? "text-gold-deep" : "text-muted",
        )}
        strokeWidth={1.7}
        aria-hidden
      />
      <span className="text-base leading-tight font-medium text-ink">
        {spoke.label}
      </span>
    </div>
  );
}

function Hub({ label }: { label: string }) {
  return (
    <div className="flex h-32 w-32 flex-col items-center justify-center gap-1.5 rounded-full bg-gradient-to-b from-charcoal to-charcoal-deep text-center shadow-[var(--shadow-lift)] ring-1 ring-line-dark lg:h-40 lg:w-40 lg:shadow-[0_0_0_8px_rgba(185,139,67,0.1),var(--shadow-lift)]">
      <MicGlyph className="w-6 text-gold-soft lg:w-7" strokeWidth={1.8} />
      <span className="px-3 text-base font-semibold text-cream">{label}</span>
    </div>
  );
}

/** The single content-system infographic: radial on desktop, 2-col grid on mobile. */
export function AssetHubSpoke() {
  const { spokes, hubLabel } = assets;
  const N = spokes.length;
  const radius = 40; // percent of the square container

  const positions = spokes.map((_, i) => {
    const angle = ((-90 + (360 / N) * i) * Math.PI) / 180;
    return {
      cx: 50 + radius * Math.cos(angle),
      cy: 50 + radius * Math.sin(angle),
    };
  });

  return (
    <>
      {/* Desktop: radial hub-and-spoke */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-2xl lg:block">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {positions.map((p, i) => (
            <line
              key={`l-${i}`}
              x1="50"
              y1="50"
              x2={p.cx}
              y2={p.cy}
              stroke="var(--color-gold)"
              strokeOpacity="0.35"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {positions.map((p, i) => (
            <circle
              key={`d-${i}`}
              cx={p.cx}
              cy={p.cy}
              r="0.9"
              fill="var(--color-gold)"
            />
          ))}
        </svg>

        {spokes.map((s, i) => (
          <div
            key={s.label}
            className="absolute z-10 w-max max-w-[10rem] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${positions[i].cx}%`, top: `${positions[i].cy}%` }}
          >
            <Reveal delay={i * 60}>
              <SpokeChip spoke={s} />
            </Reveal>
          </div>
        ))}

        <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <Hub label={hubLabel} />
        </div>
      </div>

      {/* Mobile / tablet: hub on top, chips in a two-column grid (§9) */}
      <div className="lg:hidden">
        <div className="mb-10 flex justify-center">
          <Hub label={hubLabel} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {spokes.map((s, i) => (
            <Reveal key={s.label} delay={i * 45}>
              <SpokeChip spoke={s} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}

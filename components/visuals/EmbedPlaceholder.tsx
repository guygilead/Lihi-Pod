import { Play } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { SoundWave } from "./SoundWave";
import { Ltr } from "@/components/ui/Ltr";
import type { EmbedPlaceholder as EmbedType } from "@/lib/types";
import { cn } from "@/lib/utils";

const platformConfig: Record<
  EmbedType["platform"],
  { name: string; color: string; aspect: string }
> = {
  spotify: { name: "Spotify", color: "#1DB954", aspect: "aspect-video" },
  instagram: { name: "Instagram", color: "#E1306C", aspect: "aspect-[4/5]" },
  youtube: { name: "YouTube", color: "#FF0000", aspect: "aspect-video" },
};

export function EmbedPlaceholder({ embed }: { embed: EmbedType }) {
  const cfg = platformConfig[embed.platform];

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper shadow-soft">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <Icon
          name={embed.icon}
          className="h-5 w-5"
          style={{ color: cfg.color }}
          aria-hidden
        />
        <span className="text-sm font-semibold text-ink">{cfg.name}</span>
        <span className="ms-auto rounded-full bg-sand px-2.5 py-0.5 text-[11px] font-medium text-muted">
          דוגמה
        </span>
      </div>

      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal to-charcoal-deep",
          cfg.aspect,
        )}
      >
        <div className="absolute inset-x-0 bottom-0 h-1/2 [mask-image:linear-gradient(to_top,black,transparent)]">
          <SoundWave
            bars={26}
            animated={false}
            className="h-full w-full px-3 text-gold-soft/30"
          />
        </div>
        <span
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-cream/95 shadow-lift"
          style={{ color: cfg.color }}
        >
          <Play className="h-6 w-6 translate-x-px fill-current" aria-hidden />
        </span>
        <span className="absolute end-3 top-3 rounded-full bg-charcoal/60 px-2.5 py-1 text-[11px] font-medium text-cream ring-1 ring-cream/15">
          נוסף בקרוב
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-semibold text-ink">{embed.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{embed.note}</p>
        {embed.exampleUrl && (
          <p className="mt-3 truncate text-start text-xs text-muted/80">
            <Ltr>{embed.exampleUrl}</Ltr>
          </p>
        )}
      </div>
    </div>
  );
}

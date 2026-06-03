import { Icon, type IconName } from "./Icon";
import { cn } from "@/lib/utils";

type Tone = "gold" | "dark" | "outline";

const tones: Record<Tone, string> = {
  gold: "bg-gold-tint text-gold-deep",
  dark: "bg-charcoal text-gold-soft ring-1 ring-line-dark",
  outline: "bg-paper text-gold-deep ring-1 ring-line",
};

const sizes = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

export function IconBadge({
  name,
  tone = "gold",
  size = "md",
  className,
}: {
  name: IconName;
  tone?: Tone;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl",
        sizes[size],
        tones[tone],
        className,
      )}
    >
      <Icon
        name={name}
        className="h-[1.4rem] w-[1.4rem]"
        strokeWidth={1.6}
        aria-hidden
      />
    </span>
  );
}

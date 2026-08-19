"use client";

import { cn } from "@/lib/utils";
import { track, type AnalyticsEvent } from "@/lib/analytics";

type Variant =
  | "primary"
  | "secondary"
  | "gold"
  | "primaryLight"
  | "secondaryLight";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60";

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-[3.25rem] px-8 text-base",
};

const variants: Record<Variant, string> = {
  primary: "bg-ink text-cream shadow-soft hover:bg-charcoal-deep",
  secondary:
    "border border-ink/15 text-ink hover:border-gold hover:text-gold-deep",
  gold: "bg-gold text-white shadow-soft hover:bg-gold-deep",
  primaryLight: "bg-cream text-ink shadow-soft hover:bg-white",
  secondaryLight:
    "border border-cream/30 text-cream hover:border-gold-soft hover:text-gold-soft",
};

type Props = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  ariaLabel?: string;
  target?: string;
  rel?: string;
  /** Fire a (dependency-free) analytics event on click. */
  analyticsEvent?: AnalyticsEvent;
  analyticsParams?: Record<string, string | number | boolean | undefined>;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  disabled,
  onClick,
  ariaLabel,
  target,
  rel,
  analyticsEvent,
  analyticsParams,
}: Props) {
  const cls = cn(base, sizes[size], variants[variant], className);

  const handleClick: React.MouseEventHandler = (e) => {
    if (analyticsEvent) track(analyticsEvent, analyticsParams);
    onClick?.(e);
  };

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        onClick={handleClick}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

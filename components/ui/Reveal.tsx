"use client";

import { useReveal } from "@/lib/useReveal";

/**
 * Scroll-reveal wrapper. Pure CSS transition driven by IntersectionObserver
 * (see [data-reveal] in globals.css). `delay` enables staggered groups.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal
      data-revealed={revealed}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
}

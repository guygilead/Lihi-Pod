"use client";

import { useEffect, useRef } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

/** Fires an analytics event once when it scrolls into view. Renders nothing. */
export function ViewTracker({
  event,
  params,
}: {
  event: AnalyticsEvent;
  params?: Record<string, string | number | boolean | undefined>;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || fired.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            track(event, params);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [event, params]);

  return <span ref={ref} aria-hidden className="sr-only" />;
}

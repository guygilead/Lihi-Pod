"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import type { FaqItem } from "@/lib/types";

/** Clean accordion — only one item open at a time (§13). */
export function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className="border-b border-line">
            <h3 className="m-0">
              <button
                type="button"
                id={`${id}-btn-${i}`}
                aria-expanded={open}
                aria-controls={`${id}-panel-${i}`}
                onClick={() =>
                  setOpenIndex((cur) => {
                    if (cur !== i) track("faq_open", { q: item.q });
                    return cur === i ? null : i;
                  })
                }
                className="flex min-h-[44px] w-full items-center justify-between gap-4 py-5 text-start"
              >
                <span className="font-serif text-lg font-bold text-ink md:text-xl">
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-gold-deep transition-transform duration-300",
                    open && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={`${id}-panel-${i}`}
              role="region"
              aria-labelledby={`${id}-btn-${i}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-soft)]",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[650px] pb-6 text-base leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

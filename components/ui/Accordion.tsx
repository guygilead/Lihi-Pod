"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import type { FaqItem } from "@/lib/types";

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-line">
      <h3 className="m-0">
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() =>
            setOpen((o) => {
              if (!o) track("faq_open", { q: item.q });
              return !o;
            })
          }
          className="flex w-full items-center justify-between gap-4 py-5 text-start"
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
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-soft)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-6 leading-relaxed text-muted">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <AccordionItem key={i} item={item} />
      ))}
    </div>
  );
}

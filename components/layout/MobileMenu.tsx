"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { ctaPrimary, siteConfig, socials } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Ltr } from "@/components/ui/Ltr";
import { cn } from "@/lib/utils";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-60 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="תפריט ניווט"
        className={cn(
          "absolute inset-y-0 start-0 flex w-[86%] max-w-sm flex-col bg-cream shadow-[var(--shadow-lift)] transition-transform duration-300 ease-[var(--ease-out-soft)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="font-serif text-base font-bold text-ink">
            {siteConfig.name}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink hover:bg-sand"
            aria-label="סגירת תפריט"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-3 py-5" aria-label="ניווט ראשי">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="rounded-xl px-3 py-3 text-lg font-medium text-ink transition-colors hover:bg-sand hover:text-gold-deep"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-line px-5 py-5">
          <Button
            href={ctaPrimary.href}
            variant="primary"
            size="lg"
            className="w-full"
            onClick={onClose}
          >
            {ctaPrimary.label}
          </Button>
          <div className="mt-4 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-paper text-ink ring-1 ring-line transition-colors hover:text-gold-deep"
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                <Icon
                  name={s.icon}
                  className="h-5 w-5"
                  strokeWidth={1.7}
                  aria-hidden
                />
              </a>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">
            <Ltr>{socials[0].value}</Ltr>
          </p>
        </div>
      </div>
    </div>
  );
}

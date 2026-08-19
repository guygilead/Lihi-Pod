"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { siteConfig, ctaPrimary } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MicGlyph } from "@/components/visuals/MicGlyph";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-cream/85 backdrop-blur-md"
          : "border-transparent bg-cream/0",
      )}
    >
      <div className="container-editorial flex h-16 items-center justify-between md:h-18">
        <a
          href="#hero"
          className="flex items-center gap-2.5"
          aria-label={`${siteConfig.name} — ${siteConfig.tagline}`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-charcoal text-gold-soft">
            <MicGlyph className="w-4" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-bold text-ink">
              {siteConfig.name}
            </span>
            <span className="mt-1 text-[11px] text-muted">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="ניווט ראשי"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-gold-deep"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={ctaPrimary.href}
            variant="primary"
            className="hidden lg:inline-flex"
          >
            {ctaPrimary.label}
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink hover:bg-sand lg:hidden"
            aria-label="פתיחת תפריט"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

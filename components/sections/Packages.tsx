import { CheckCircle2 } from "lucide-react";
import { packages, packagesIntro } from "@/content/packages";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { SECTION } from "@/lib/nav";

/** Four comparable tracks (§12) — 2×2 grid, ≤5 bullets, per-card CTA. */
export function Packages() {
  return (
    <Section id={SECTION.packages} variant="sand">
      <SectionHeading title={packagesIntro.title} lead={packagesIntro.lead} />

      <div className="mx-auto mt-14 grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 80} className="h-full">
            <div
              className={cn(
                "flex h-full flex-col rounded-[var(--radius-card)] border bg-paper p-7 md:p-8",
                p.highlight
                  ? "border-gold/50 shadow-soft ring-1 ring-gold/30"
                  : "border-line",
              )}
            >
              <div className="flex items-center gap-4">
                <IconBadge name={p.icon} tone={p.highlight ? "gold" : "outline"} />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink">
                    {p.name}
                  </h3>
                  {p.highlight && (
                    <span className="mt-1 inline-flex items-center rounded-full bg-gold-tint px-2.5 py-0.5 text-sm font-semibold text-gold-deep">
                      מומלץ
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-4 text-base text-muted">
                <span className="font-semibold text-ink">מתאים ל: </span>
                {p.fitFor}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {p.includes.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2.5 text-base text-ink"
                  >
                    <CheckCircle2
                      className="mt-1 h-4 w-4 shrink-0 text-gold-deep"
                      strokeWidth={1.8}
                      aria-hidden
                    />
                    {it}
                  </li>
                ))}
              </ul>

              <Button
                href={p.ctaHref}
                variant={p.highlight ? "gold" : "secondary"}
                className="mt-7 w-full"
                analyticsEvent="package_cta_click"
                analyticsParams={{ package: p.name }}
              >
                {p.ctaLabel}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-[650px] text-center text-base text-muted">
        {packagesIntro.note}
      </p>
    </Section>
  );
}

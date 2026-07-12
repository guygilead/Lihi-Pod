import { CheckCircle2 } from "lucide-react";
import { packages, packagesIntro } from "@/content/packages";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { SECTION } from "@/lib/nav";

export function Packages() {
  return (
    <Section id={SECTION.packages} variant="cream">
      <SectionHeading
        eyebrow={packagesIntro.eyebrow}
        title={packagesIntro.title}
        lead={packagesIntro.lead}
      />

      <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={(i % 4) * 70} className="h-full">
            <div
              className={cn(
                "flex h-full flex-col rounded-[var(--radius-card)] border bg-paper p-6 shadow-soft",
                p.highlight
                  ? "border-gold/50 ring-1 ring-gold/30"
                  : "border-line",
              )}
            >
              {p.highlight ? (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-tint px-3 py-1 text-xs font-semibold text-gold-deep">
                  מומלץ
                </span>
              ) : null}
              <IconBadge name={p.icon} tone={p.highlight ? "gold" : "outline"} />
              <h3 className="mt-4 font-serif text-xl font-bold text-ink">
                {p.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{p.tagline}</p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {p.includes.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep"
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
                className="mt-6 w-full"
                analyticsEvent="package_cta_click"
                analyticsParams={{ package: p.name }}
              >
                {p.ctaLabel}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
        {packagesIntro.note}
      </p>
    </Section>
  );
}

import { packages } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { SECTION } from "@/lib/nav";

export function Packages() {
  return (
    <Section id={SECTION.packages} variant="cream">
      <SectionHeading
        eyebrow={packages.eyebrow}
        title={packages.title}
        lead={packages.lead}
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {packages.items.map((p, i) => (
          <Reveal key={p.name} delay={(i % 4) * 70} className="h-full">
            <div
              className={cn(
                "flex h-full flex-col rounded-[var(--radius-card)] border bg-paper p-6 shadow-soft",
                p.highlight
                  ? "border-gold/50 ring-1 ring-gold/30"
                  : "border-line",
              )}
            >
              {p.highlight && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-tint px-3 py-1 text-xs font-semibold text-gold-deep">
                  מומלץ
                </span>
              )}
              <IconBadge
                name={p.icon}
                tone={p.highlight ? "gold" : "outline"}
              />
              <h3 className="mt-4 font-serif text-xl font-bold text-ink">
                {p.name}
              </h3>
              <p className="mt-2.5 flex-1 leading-relaxed text-muted">
                {p.text}
              </p>
              <a
                href={packages.cta.href}
                className={cn(
                  "mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-center text-sm leading-snug font-semibold transition-colors",
                  p.highlight
                    ? "bg-gold text-white hover:bg-gold-deep"
                    : "border border-ink/15 text-ink hover:border-gold hover:text-gold-deep",
                )}
              >
                {packages.cta.label}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

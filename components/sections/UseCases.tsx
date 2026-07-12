import { ArrowLeft } from "lucide-react";
import { useCases } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION } from "@/lib/nav";

export function UseCases() {
  return (
    <Section id={SECTION.useCases} variant="cream">
      <SectionHeading
        eyebrow={useCases.eyebrow}
        title={useCases.title}
        lead={useCases.lead}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {useCases.cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 80} className="h-full">
            <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-paper p-7 shadow-soft transition-colors duration-300 hover:border-gold/40">
              <IconBadge name={c.icon} />
              <h3 className="mt-5 font-serif text-xl font-bold text-ink">
                {c.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-muted">{c.text}</p>
              {c.example && (
                <p className="mt-4 rounded-xl bg-cream px-3.5 py-2.5 text-sm text-ink/80 ring-1 ring-line">
                  {c.example}
                </p>
              )}
              <a
                href={useCases.ctaHref}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep transition-colors hover:text-ink"
              >
                {useCases.ctaLabel}
                <ArrowLeft className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

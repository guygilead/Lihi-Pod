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

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.cards.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 60} className="h-full">
            <div className="flex h-full items-center gap-4 rounded-2xl border border-line bg-paper px-5 py-4 shadow-soft transition-colors duration-300 hover:border-gold/40">
              <IconBadge name={c.icon} />
              <span className="font-serif text-lg font-bold text-ink">
                {c.title}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { useCases } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
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

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {useCases.cards.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 70} className="h-full">
            <Card interactive className="h-full">
              <div className="flex items-center gap-3.5">
                <IconBadge name={c.icon} />
                <h3 className="font-serif text-xl font-bold text-ink">
                  {c.title}
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-muted">{c.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

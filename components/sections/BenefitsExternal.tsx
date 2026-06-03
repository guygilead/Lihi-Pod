import { benefitsExternal } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION } from "@/lib/nav";

export function BenefitsExternal() {
  return (
    <Section id={SECTION.benefitsExternal} variant="sand">
      <SectionHeading
        eyebrow={benefitsExternal.eyebrow}
        title={benefitsExternal.title}
        lead={benefitsExternal.lead}
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefitsExternal.cards.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 70} className="h-full">
            <Card interactive className="h-full">
              <IconBadge name={c.icon} />
              <h3 className="mt-5 font-serif text-xl font-bold text-ink">
                {c.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-muted">{c.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

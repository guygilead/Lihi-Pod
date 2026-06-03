import { benefitsInternal } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION } from "@/lib/nav";

export function BenefitsInternal() {
  return (
    <Section id={SECTION.benefitsInternal} variant="charcoal">
      <SectionHeading
        tone="light"
        eyebrow={benefitsInternal.eyebrow}
        title={benefitsInternal.title}
        lead={benefitsInternal.text}
      />

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {benefitsInternal.cards.map((c, i) => (
          <Reveal key={c.title} delay={(i % 4) * 60} className="h-full">
            <div className="flex h-full flex-col gap-3.5 rounded-2xl bg-charcoal-deep p-5 ring-1 ring-line-dark">
              <IconBadge name={c.icon} tone="dark" size="sm" />
              <span className="font-medium text-cream">{c.title}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

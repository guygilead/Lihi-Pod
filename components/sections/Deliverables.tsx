import { CheckCircle2 } from "lucide-react";
import { deliverables } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION } from "@/lib/nav";

export function Deliverables() {
  return (
    <Section id={SECTION.deliverables} variant="paper">
      <SectionHeading
        eyebrow={deliverables.eyebrow}
        title={deliverables.title}
        lead={deliverables.lead}
      />

      <div className="mt-12 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {deliverables.items.map((item, i) => (
          <Reveal key={item} delay={(i % 3) * 50} className="h-full">
            <div className="flex h-full items-start gap-3 rounded-xl bg-cream px-4 py-3.5 ring-1 ring-line">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep"
                strokeWidth={1.8}
                aria-hidden
              />
              <span className="text-ink">{item}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

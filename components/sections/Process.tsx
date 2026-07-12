import { ChevronDown } from "lucide-react";
import { steps, processIntro } from "@/content/process";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION } from "@/lib/nav";

/** Five steps (§11): horizontal axis on desktop, accordion on mobile. */
export function Process() {
  return (
    <Section id={SECTION.process} variant="cream">
      <SectionHeading title={processIntro.title} lead={processIntro.lead} />

      {/* Desktop — horizontal timeline */}
      <div className="relative mx-auto mt-16 hidden max-w-6xl md:block">
        <div
          className="absolute inset-x-8 top-6 h-px bg-gold/30"
          aria-hidden
        />
        <ol className="grid grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <li key={s.num}>
              <Reveal delay={i * 70}>
                <div className="flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal font-serif text-base font-bold text-gold-soft ring-4 ring-cream">
                    {s.num}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[230px] text-base leading-relaxed text-muted">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile — accordion (§18) */}
      <div className="mx-auto mt-10 max-w-xl md:hidden">
        {steps.map((s) => (
          <details key={s.num} className="group border-b border-line">
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal font-serif text-sm font-bold text-gold-soft">
                {s.num}
              </span>
              <span className="flex-1 font-serif text-lg font-bold text-ink">
                {s.title}
              </span>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-gold-deep transition-transform duration-300 group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="pb-5 ps-14 text-base leading-relaxed text-muted">
              {s.text}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}

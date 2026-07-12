import { ChevronDown } from "lucide-react";
import { steps, allSteps, processIntro } from "@/content/process";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION } from "@/lib/nav";

export function Process() {
  return (
    <Section id={SECTION.process} variant="cream">
      <SectionHeading
        eyebrow={processIntro.eyebrow}
        title={processIntro.title}
        lead={processIntro.lead}
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div
          className="absolute start-[1.375rem] top-2 bottom-2 w-px bg-line md:start-6"
          aria-hidden
        />
        <ol className="space-y-5">
          {steps.map((s, i) => (
            <li key={s.num}>
              <Reveal delay={(i % 3) * 60}>
                <div className="relative flex gap-5 md:gap-6">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-charcoal text-sm font-bold text-gold-soft ring-4 ring-cream md:h-12 md:w-12">
                    {s.num}
                  </div>
                  <div className="flex-1 rounded-2xl border border-line bg-paper p-5 shadow-soft md:p-6">
                    <div className="flex items-center gap-2.5">
                      <Icon
                        name={s.icon}
                        className="h-5 w-5 shrink-0 text-gold-deep"
                        strokeWidth={1.7}
                        aria-hidden
                      />
                      <h3 className="font-serif text-lg font-bold text-ink">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      {/* Full nine-step breakdown, tucked into a native (accessible) accordion */}
      <div className="mx-auto mt-8 max-w-3xl">
        <details className="group rounded-2xl border border-line bg-paper/60 px-5 py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {processIntro.allStepsLabel}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-gold-deep transition-transform duration-300 group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <ol className="mt-4 space-y-3 border-t border-line pt-4">
            {allSteps.map((s, i) => (
              <li key={s.title} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-tint text-xs font-bold text-gold-deep">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink">{s.title}</p>
                  <p className="text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </Section>
  );
}

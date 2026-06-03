import { process } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION } from "@/lib/nav";

export function Process() {
  return (
    <Section id={SECTION.process} variant="cream">
      <SectionHeading
        eyebrow={process.eyebrow}
        title={process.title}
        lead={process.lead}
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div
          className="absolute start-[1.375rem] top-2 bottom-2 w-px bg-line md:start-6"
          aria-hidden
        />
        <ol className="space-y-5">
          {process.steps.map((s, i) => (
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
    </Section>
  );
}

import { CheckCircle2, Minus, ArrowLeft } from "lucide-react";
import { beforeAfter } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SoundWave } from "@/components/visuals/SoundWave";
import { SECTION } from "@/lib/nav";

export function BeforeAfter() {
  return (
    <Section id={SECTION.beforeAfter} variant="cream">
      <SectionHeading eyebrow={beforeAfter.eyebrow} title={beforeAfter.title} />

      <div className="relative mt-12 grid items-stretch gap-6 md:grid-cols-2">
        {/* Before */}
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-sand/70 p-7 md:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-cream px-3 py-1 text-sm font-semibold text-muted ring-1 ring-line">
              <Minus className="h-4 w-4" aria-hidden />
              {beforeAfter.beforeTitle}
            </span>
            <ul className="mt-6 space-y-3.5">
              {beforeAfter.before.map((b) => (
                <li key={b} className="flex items-start gap-3 text-muted">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/50"
                    aria-hidden
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* connector */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
          aria-hidden
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white shadow-lift">
            <ArrowLeft className="h-5 w-5" />
          </span>
        </div>

        {/* After */}
        <Reveal delay={120} className="h-full">
          <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-gold/30 bg-paper p-7 shadow-soft md:p-8">
            <div className="flex items-center justify-between">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-tint px-3 py-1 text-sm font-semibold text-gold-deep">
                <CheckCircle2 className="h-4 w-4" aria-hidden />
                {beforeAfter.afterTitle}
              </span>
              <SoundWave
                bars={7}
                animated={false}
                className="h-5 w-14 text-gold/50"
              />
            </div>
            <ul className="mt-6 space-y-3.5">
              {beforeAfter.after.map((a) => (
                <li key={a} className="flex items-start gap-3 text-ink">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep"
                    strokeWidth={1.8}
                    aria-hidden
                  />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

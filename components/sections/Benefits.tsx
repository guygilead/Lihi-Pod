import { benefits } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION } from "@/lib/nav";

export function Benefits() {
  return (
    <Section id={SECTION.benefits} variant="sand">
      <SectionHeading
        eyebrow={benefits.eyebrow}
        title={benefits.title}
        lead={benefits.lead}
      />

      <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
        {/* External — light */}
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-paper p-7 shadow-soft md:p-8">
            <h3 className="font-serif text-xl font-bold text-ink">
              {benefits.external.title}
            </h3>
            <ul className="mt-6 grid flex-1 gap-3 sm:grid-cols-2">
              {benefits.external.items.map((c) => (
                <li
                  key={c.title}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-cream px-4 py-3.5"
                >
                  <IconBadge name={c.icon} size="sm" />
                  <span className="font-medium text-ink">{c.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Internal — dark */}
        <Reveal delay={120} className="h-full">
          <div className="flex h-full flex-col rounded-[var(--radius-card)] bg-charcoal p-7 ring-1 ring-line-dark md:p-8">
            <h3 className="font-serif text-xl font-bold text-cream">
              {benefits.internal.title}
            </h3>
            <ul className="mt-6 grid flex-1 gap-3 sm:grid-cols-2">
              {benefits.internal.items.map((c) => (
                <li
                  key={c.title}
                  className="flex items-center gap-3 rounded-2xl bg-charcoal-deep px-4 py-3.5 ring-1 ring-line-dark"
                >
                  <IconBadge name={c.icon} tone="dark" size="sm" />
                  <span className="font-medium text-cream">{c.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

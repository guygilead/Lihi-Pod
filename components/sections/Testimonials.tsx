import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  testimonials,
  testimonialsEnabled,
  testimonialsIntro,
} from "@/content/testimonials";
import { SECTION } from "@/lib/nav";

/**
 * Recommendations. Hidden entirely until real testimonials exist
 * (testimonialsEnabled + non-empty list) — never rendered with dummy data.
 */
export function Testimonials() {
  if (!testimonialsEnabled || testimonials.length === 0) return null;

  return (
    <Section id={SECTION.testimonials} variant="sand">
      <SectionHeading
        eyebrow={testimonialsIntro.eyebrow}
        title={testimonialsIntro.title}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={`${t.name}-${i}`} delay={(i % 3) * 70} className="h-full">
            <figure className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-paper p-7 shadow-soft">
              <blockquote className="flex-1 leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="block text-sm text-muted">
                  {t.role}
                  {t.company ? ` · ${t.company}` : ""}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

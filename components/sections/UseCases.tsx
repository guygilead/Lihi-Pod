import { useCases } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION } from "@/lib/nav";

/** Three core uses (§7) — numbered cards, short copy, equal height. */
export function UseCases() {
  return (
    <Section id={SECTION.useCases} variant="cream">
      <SectionHeading title={useCases.title} lead={useCases.lead} />

      <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
        {useCases.cards.map((c, i) => (
          <Reveal key={c.num} delay={i * 80} className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper p-7 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-gold/40 md:p-8">
              {/* Oversized background number */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-7 -end-2 font-serif text-[7rem] leading-none font-bold text-gold/10 select-none"
              >
                {c.num}
              </span>

              <span className="font-serif text-base font-bold text-gold-deep">
                {c.num}
              </span>
              <h3 className="mt-3 font-serif text-2xl font-bold text-ink">
                {c.title}
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                {c.text}
              </p>
              <p className="mt-5 border-t border-line pt-4 text-base text-ink/75">
                <span className="font-semibold text-gold-deep">דוגמה: </span>
                {c.example}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

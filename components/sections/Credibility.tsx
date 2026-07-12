import { credibility } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { MicGlyph } from "@/components/visuals/MicGlyph";
import { SECTION } from "@/lib/nav";

function PortraitPlaceholder() {
  return (
    // TODO_REPLACE: swap for a real <Image> portrait + a behind-the-scenes shot.
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-b from-charcoal to-charcoal-deep shadow-[var(--shadow-lift)] ring-1 ring-line-dark">
      <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 -m-6 rounded-full bg-gold/10 blur-2xl" />
          <MicGlyph className="relative w-20 text-gold-soft" strokeWidth={1.6} />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal-deep to-transparent p-6 pt-16">
        <p className="font-serif text-xl font-bold text-cream">
          {credibility.portraitCaption}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-cream/10 px-3 py-1 text-xs font-medium text-cream ring-1 ring-cream/15">
            ערוץ 1
          </span>
          <span className="rounded-full bg-cream/10 px-3 py-1 text-xs font-medium text-cream ring-1 ring-cream/15">
            כאן 11
          </span>
        </div>
      </div>
    </div>
  );
}

export function Credibility() {
  return (
    <Section id={SECTION.about} variant="paper">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <PortraitPlaceholder />
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading
            align="start"
            eyebrow={credibility.eyebrow}
            title={credibility.title}
            lead={credibility.lead}
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {credibility.points.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="flex h-full items-center gap-3.5 rounded-2xl border border-line bg-cream px-4 py-4">
                  <IconBadge name={c.icon} size="sm" />
                  <span className="font-medium text-ink">{c.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

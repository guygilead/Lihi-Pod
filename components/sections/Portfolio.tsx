import { portfolio } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Ltr } from "@/components/ui/Ltr";
import { Icon, type IconName } from "@/components/ui/Icon";
import { EmbedPlaceholder } from "@/components/visuals/EmbedPlaceholder";
import { SECTION } from "@/lib/nav";

function CoverPlaceholder({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: IconName;
}) {
  return (
    // TODO_REPLACE: שלב כאן תמונת קאבר / מאחורי הקלעים אמיתית.
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-deep p-4 ring-1 ring-line-dark">
      <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gold/15 blur-2xl" />
      <Icon
        name={icon}
        className="absolute end-4 top-4 h-6 w-6 text-gold-soft/70"
        strokeWidth={1.6}
        aria-hidden
      />
      <p className="relative font-serif text-base font-bold text-cream">
        {title}
      </p>
      <p className="relative text-xs text-muted-light">{subtitle}</p>
    </div>
  );
}

export function Portfolio() {
  const { caseStudy, covers } = portfolio;

  return (
    <Section id={SECTION.portfolio} variant="paper">
      <SectionHeading
        eyebrow={portfolio.eyebrow}
        title={portfolio.title}
        lead={portfolio.lead}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {portfolio.embeds.map((e, i) => (
          <Reveal key={e.platform} delay={i * 70} className="h-full">
            <EmbedPlaceholder embed={e} />
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Reveal className="h-full lg:col-span-2">
          <div className="flex h-full flex-col justify-center rounded-[var(--radius-card)] border border-line bg-cream p-7 md:p-9">
            <span className="text-sm font-semibold text-gold-deep">
              {caseStudy.eyebrow}
            </span>
            <h3 className="mt-2 font-serif text-2xl font-bold text-ink">
              {caseStudy.title}
            </h3>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">
              {caseStudy.text}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
              {caseStudy.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl bg-paper p-4 text-center ring-1 ring-line"
                >
                  <p className="font-serif text-2xl font-bold text-gold-deep">
                    <Ltr>{m.value}</Ltr>
                  </p>
                  <p className="mt-1 text-xs text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
          <Reveal className="h-full">
            <CoverPlaceholder {...covers[0]} icon="headphones" />
          </Reveal>
          <Reveal delay={80} className="h-full">
            <CoverPlaceholder {...covers[1]} icon="video" />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

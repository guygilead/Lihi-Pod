import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ViewTracker } from "@/components/ui/ViewTracker";
import { FeaturedEpisode } from "@/components/visuals/FeaturedEpisode";
import { EpisodeMini } from "@/components/visuals/EpisodeMini";
import { show, featuredEpisode, secondaryEpisode } from "@/content/episodes";
import { caseStudy, ctaPrimary } from "@/content/site";
import { SECTION } from "@/lib/nav";

/** SABONcast — the central case study on a near-black band (§8). */
export function FeaturedCaseStudy() {
  return (
    <Section id={SECTION.work} variant="charcoal">
      <ViewTracker event="case_study_view" params={{ show: show.name }} />

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="order-2 lg:order-1">
          <FeaturedEpisode episode={featuredEpisode} />
          <div className="mt-4">
            <p className="mb-2.5 text-sm font-semibold text-muted-light">
              עוד מתוך הסדרה
            </p>
            <EpisodeMini episode={secondaryEpisode} />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.02em] text-gold-soft">
            <span className="h-px w-7 bg-current opacity-50" aria-hidden />
            {caseStudy.eyebrow} · {show.name}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-balance text-cream md:text-[2.75rem] md:leading-[1.12]">
            {caseStudy.title}
          </h2>
          <p className="mt-5 max-w-[650px] text-lg leading-relaxed text-muted-light">
            {caseStudy.text}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {caseStudy.outputs.map((o) => (
              <span
                key={o}
                className="inline-flex items-center gap-1.5 rounded-full bg-charcoal-deep px-3.5 py-1.5 text-base text-cream ring-1 ring-line-dark"
              >
                <CheckCircle2 className="h-4 w-4 text-gold-soft" aria-hidden />
                {o}
              </span>
            ))}
          </div>

          <div className="mt-9">
            <Button href={ctaPrimary.href} variant="gold" size="lg">
              {caseStudy.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { ArrowLeft } from "lucide-react";
import { portfolio, spotify } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Ltr } from "@/components/ui/Ltr";
import { SpotifyEmbed } from "@/components/visuals/SpotifyEmbed";
import { SECTION } from "@/lib/nav";

export function Portfolio() {
  const { caseStudy } = portfolio;

  return (
    <Section id={SECTION.portfolio} variant="paper">
      <SectionHeading
        eyebrow={portfolio.eyebrow}
        title={portfolio.title}
        lead={portfolio.lead}
      />

      <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-5">
        {/* Live Spotify show — real episodes, playable in place */}
        <Reveal className="h-full lg:col-span-3">
          <SpotifyEmbed
            type="show"
            id={spotify.showId}
            title={spotify.title}
            height={420}
            className="h-full min-h-[420px]"
          />
        </Reveal>

        {/* Case study */}
        <Reveal delay={100} className="h-full lg:col-span-2">
          <div className="flex h-full flex-col justify-center rounded-[var(--radius-card)] border border-line bg-cream p-7 md:p-8">
            <span className="text-sm font-semibold text-gold-deep">
              {caseStudy.eyebrow}
            </span>
            <h3 className="mt-2 font-serif text-2xl font-bold text-ink">
              {caseStudy.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{caseStudy.text}</p>
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
      </div>

      {/* Optional: specific featured episodes (set spotify.episodeIds) */}
      {spotify.episodeIds.length > 0 && (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {spotify.episodeIds.map((eid, i) => (
            <Reveal key={eid} delay={i * 80}>
              <SpotifyEmbed type="episode" id={eid} height={152} />
            </Reveal>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <a
          href={spotify.showUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-gold-deep transition-colors hover:text-ink"
        >
          {spotify.allEpisodesLabel}
          <ArrowLeft className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </Section>
  );
}

import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FeaturedEpisode } from "@/components/visuals/FeaturedEpisode";
import { EpisodeCard } from "@/components/visuals/EpisodeCard";
import { SpotifyEmbed } from "@/components/visuals/SpotifyEmbed";
import { show, featuredEpisode, secondaryEpisode } from "@/content/episodes";
import { SECTION } from "@/lib/nav";

/** Real media gallery (§6.8) — no placeholders, every card is playable. */
export function WorkGallery() {
  return (
    <Section id={SECTION.work} variant="paper">
      <SectionHeading
        eyebrow="עבודות"
        title="פרקים לצפייה והאזנה"
        lead="מבחר מתוך SABONcast — נגנו את הפרקים ישירות כאן, או עברו לכל הפרקים בספוטיפיי."
      />

      <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
        <Reveal className="h-full lg:col-span-2">
          <FeaturedEpisode episode={featuredEpisode} className="h-full" />
        </Reveal>
        <Reveal delay={100} className="h-full">
          <EpisodeCard episode={secondaryEpisode} />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <SpotifyEmbed
          type="show"
          id={show.spotifyShowId}
          title={`${show.name} — כל הפרקים`}
          height={352}
        />
      </Reveal>

      <div className="mt-8 text-center">
        <a
          href={show.spotifyShowUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-gold-deep transition-colors hover:text-ink"
        >
          לכל הפרקים בספוטיפיי
          <ArrowLeft className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </Section>
  );
}

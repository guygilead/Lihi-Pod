import { assets } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AssetHubSpoke } from "@/components/visuals/AssetHubSpoke";
import { SECTION } from "@/lib/nav";

/** One recording → a full content system (§9) — a single infographic. */
export function OneEpisodeManyAssets() {
  return (
    <Section id={SECTION.assets} variant="sand">
      <SectionHeading title={assets.title} lead={assets.text} />
      <div className="mt-14">
        <AssetHubSpoke />
      </div>
    </Section>
  );
}

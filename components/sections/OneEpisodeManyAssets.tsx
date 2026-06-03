import { assets } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AssetHubSpoke } from "@/components/visuals/AssetHubSpoke";
import { SECTION } from "@/lib/nav";

export function OneEpisodeManyAssets() {
  return (
    <Section id={SECTION.assets} variant="sand">
      <SectionHeading
        eyebrow={assets.eyebrow}
        title={assets.title}
        lead={assets.text}
      />
      <div className="mt-16">
        <AssetHubSpoke />
      </div>
    </Section>
  );
}

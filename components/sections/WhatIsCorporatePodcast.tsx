import { whatIs } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContentFlowDiagram } from "@/components/visuals/ContentFlowDiagram";
import { SECTION } from "@/lib/nav";

export function WhatIsCorporatePodcast() {
  return (
    <Section id={SECTION.what} variant="cream">
      <SectionHeading
        eyebrow={whatIs.eyebrow}
        title={whatIs.title}
        lead={whatIs.text}
      />
      <Reveal className="mt-12">
        <ContentFlowDiagram />
      </Reveal>
    </Section>
  );
}

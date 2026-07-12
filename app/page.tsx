import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { UseCases } from "@/components/sections/UseCases";
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy";
import { OneEpisodeManyAssets } from "@/components/sections/OneEpisodeManyAssets";
import { Credibility } from "@/components/sections/Credibility";
import { Process } from "@/components/sections/Process";
import { Packages } from "@/components/sections/Packages";
import { Faq } from "@/components/sections/Faq";
import { ContactForm } from "@/components/sections/ContactForm";

/* Home structure (§2): Hero → trust strip → three uses → SABONcast case
   study → content system → why Lihi → process → packages → FAQ → CTA+form. */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <UseCases />
      <FeaturedCaseStudy />
      <OneEpisodeManyAssets />
      <Credibility />
      <Process />
      <Packages />
      <Faq />
      <ContactForm />
    </>
  );
}

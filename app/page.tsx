import { Hero } from "@/components/sections/Hero";
import { WhatIsCorporatePodcast } from "@/components/sections/WhatIsCorporatePodcast";
import { UseCases } from "@/components/sections/UseCases";
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy";
import { OneEpisodeManyAssets } from "@/components/sections/OneEpisodeManyAssets";
import { Credibility } from "@/components/sections/Credibility";
import { Process } from "@/components/sections/Process";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { Packages } from "@/components/sections/Packages";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsCorporatePodcast />
      <UseCases />
      <FeaturedCaseStudy />
      <OneEpisodeManyAssets />
      <Credibility />
      <Process />
      <WorkGallery />
      <Packages />
      <Testimonials />
      <Faq />
      <ContactForm />
    </>
  );
}

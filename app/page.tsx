import { Hero } from "@/components/sections/Hero";
import { Credibility } from "@/components/sections/Credibility";
import { WhatIsCorporatePodcast } from "@/components/sections/WhatIsCorporatePodcast";
import { BenefitsExternal } from "@/components/sections/BenefitsExternal";
import { BenefitsInternal } from "@/components/sections/BenefitsInternal";
import { Process } from "@/components/sections/Process";
import { Deliverables } from "@/components/sections/Deliverables";
import { OneEpisodeManyAssets } from "@/components/sections/OneEpisodeManyAssets";
import { UseCases } from "@/components/sections/UseCases";
import { Portfolio } from "@/components/sections/Portfolio";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Packages } from "@/components/sections/Packages";
import { Faq } from "@/components/sections/Faq";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Credibility />
      <WhatIsCorporatePodcast />
      <BenefitsExternal />
      <BenefitsInternal />
      <Process />
      <Deliverables />
      <OneEpisodeManyAssets />
      <UseCases />
      <Portfolio />
      <BeforeAfter />
      <Packages />
      <Faq />
      <ContactForm />
    </>
  );
}

import { ArrowLeft } from "lucide-react";
import { faqs, faqIntro } from "@/content/faqs";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { SECTION } from "@/lib/nav";

/** Eight questions (§13), single-open accordion, small CTA below. */
export function Faq() {
  return (
    <Section id={SECTION.faq} variant="paper">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title={faqIntro.title} />
        <div className="mt-10">
          <Accordion items={faqs} />
        </div>
        <p className="mt-8 text-center">
          <a
            href={faqIntro.followUp.href}
            className="inline-flex items-center gap-2 text-base font-semibold text-gold-deep transition-colors hover:text-ink"
          >
            {faqIntro.followUp.label}
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </a>
        </p>
      </div>
    </Section>
  );
}

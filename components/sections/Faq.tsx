import { ctaPrimary } from "@/content/site";
import { faqs, faqIntro } from "@/content/faqs";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { SECTION } from "@/lib/nav";

export function Faq() {
  return (
    <Section id={SECTION.faq} variant="paper">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <SectionHeading
            align="start"
            eyebrow={faqIntro.eyebrow}
            title={faqIntro.title}
          />
          <p className="mt-5 leading-relaxed text-muted">
            לא מצאתם תשובה? נשמח לענות על כל שאלה בשיחת אפיון קצרה.
          </p>
          <Button
            href={ctaPrimary.href}
            variant="secondary"
            className="mt-6"
            analyticsEvent="hero_cta_click"
          >
            {ctaPrimary.label}
          </Button>
        </div>

        <div className="lg:col-span-8">
          <Accordion items={faqs} />
        </div>
      </div>
    </Section>
  );
}

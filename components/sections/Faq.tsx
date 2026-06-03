import { faq, ctaPrimary } from "@/content/site";
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
            eyebrow={faq.eyebrow}
            title={faq.title}
          />
          <p className="mt-5 leading-relaxed text-muted">
            לא מצאתם תשובה? נשמח לענות על כל שאלה בשיחת היכרות קצרה.
          </p>
          <Button href={ctaPrimary.href} variant="secondary" className="mt-6">
            {ctaPrimary.label}
          </Button>
        </div>

        <div className="lg:col-span-8">
          <Accordion items={faq.items} />
        </div>
      </div>
    </Section>
  );
}

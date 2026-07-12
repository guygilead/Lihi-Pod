import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ViewTracker } from "@/components/ui/ViewTracker";
import { FeaturedEpisode } from "@/components/visuals/FeaturedEpisode";
import { show, featuredEpisode, episodeOutputs } from "@/content/episodes";
import { ctaPrimary } from "@/content/site";
import { SECTION } from "@/lib/nav";

/** SABONcast — flagship case study, placed high in the page (§5.6 / §6.4). */
export function FeaturedCaseStudy() {
  return (
    <Section id={SECTION.caseStudy} variant="charcoal">
      <ViewTracker event="case_study_view" params={{ show: show.name }} />

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="order-2 lg:order-1">
          <FeaturedEpisode episode={featuredEpisode} />
        </Reveal>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.02em] text-gold-soft">
            <span className="h-px w-7 bg-current opacity-50" aria-hidden />
            עבודת הדגל · {show.name}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-cream md:text-4xl">
            SABONcast: סיפור ארגוני שהפך לסדרת שיחות
          </h2>
          <p className="mt-3 text-lg text-muted-light">
            {show.tagline}, שחושפת את הידע, התרבות והסיפורים שמאחורי המותג.
          </p>
          <p className="mt-5 leading-relaxed text-muted-light">
            SABONcast נבנה כדי להביא לקדמת הבמה את האנשים, הידע והסיפורים שמאחורי
            מותג גלובלי. כל פרק חיבר בין סיפור אישי, תובנות מקצועיות והתרבות
            הארגונית של החברה, והפך לשיחה שניתן לצרוך כפרק מלא וכחומר תוכן לערוצים
            נוספים.
          </p>

          <div className="mt-7">
            <p className="text-sm font-semibold text-cream">מה נוצר מכל פרק</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {episodeOutputs.map((o) => (
                <span
                  key={o}
                  className="inline-flex items-center gap-1.5 rounded-full bg-charcoal-deep px-3 py-1.5 text-sm text-cream ring-1 ring-line-dark"
                >
                  <CheckCircle2
                    className="h-3.5 w-3.5 text-gold-soft"
                    aria-hidden
                  />
                  {o}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Button href={ctaPrimary.href} variant="gold" size="lg">
              כך יכול להיראות הפודקאסט של החברה שלכם
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

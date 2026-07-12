import { Play } from "lucide-react";
import { hero, ctaPrimary, ctaSecondary } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { SECTION } from "@/lib/nav";

export function Hero() {
  return (
    <section
      id={SECTION.hero}
      className="relative flex overflow-hidden bg-cream pt-10 pb-20 md:pt-16 md:pb-24 lg:min-h-[88vh] lg:items-center"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -start-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -end-24 top-1/3 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          {/* Copy — right side in RTL */}
          <div className="text-center lg:text-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-1.5 text-sm font-medium text-gold-deep shadow-soft ring-1 ring-line">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {hero.eyebrow}
            </span>

            <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.1] font-bold text-balance text-ink sm:text-5xl lg:text-[4.25rem]">
              {hero.title}
            </h1>

            <p className="mx-auto mt-6 max-w-[650px] text-lg leading-relaxed text-muted md:text-xl lg:mx-0">
              {hero.subtitle}
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Button
                href={ctaPrimary.href}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                analyticsEvent="hero_cta_click"
              >
                {ctaPrimary.label}
              </Button>
              <Button
                href={ctaSecondary.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden />
                {ctaSecondary.label}
              </Button>
            </div>

            <p className="mt-5 flex items-center justify-center gap-2 text-base text-muted lg:justify-start">
              <span className="inline-block h-px w-6 bg-gold/50" aria-hidden />
              {hero.microcopy}
            </p>
          </div>

          {/* Real media — left side in RTL */}
          <div className="lg:ps-6">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { privacyPolicy } from "@/content/privacy";
import { contactDetails } from "@/content/site";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description:
    "מדיניות הפרטיות של אתר ליהיא שטויאר גלעד — איזה מידע נאסף, כיצד נעשה בו שימוש ומהן זכויותיכם.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const p = privacyPolicy;

  return (
    <div className="bg-cream py-16 md:py-24">
      <Container>
        <article className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-base font-semibold text-gold-deep transition-colors hover:text-ink"
          >
            {p.backHome}
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </Link>

          <h1 className="mt-6 font-serif text-[2.25rem] leading-[1.12] font-bold text-ink md:text-[3rem]">
            {p.title}
          </h1>
          <p className="mt-3 text-base text-muted">{p.updated}</p>
          <p className="mt-6 max-w-[650px] text-lg leading-relaxed text-muted">
            {p.intro}
          </p>

          <div className="mt-10 space-y-9">
            {p.sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-serif text-2xl font-bold text-ink">
                  {s.title}
                </h2>
                {s.body.map((para) => (
                  <p
                    key={para.slice(0, 24)}
                    className="mt-3 max-w-[650px] text-base leading-relaxed text-muted"
                  >
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <p className="mt-9 text-base text-muted">
            <a
              href={p.spotifyPolicy.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-gold-deep underline underline-offset-4 transition-colors hover:text-ink"
            >
              {p.spotifyPolicy.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </p>

          <div className="mt-12 rounded-[var(--radius-card)] border border-line bg-paper p-6 md:p-7">
            <h2 className="font-serif text-xl font-bold text-ink">
              יצירת קשר בנושאי פרטיות
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted">
              מייל:{" "}
              <a
                href={`mailto:${contactDetails.email}`}
                className="font-semibold text-gold-deep hover:text-ink"
                dir="ltr"
              >
                {contactDetails.email}
              </a>{" "}
              · טלפון:{" "}
              <a
                href="tel:+972542070096"
                className="font-semibold text-gold-deep hover:text-ink"
                dir="ltr"
              >
                {contactDetails.phone}
              </a>
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
}

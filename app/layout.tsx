import type { Viewport } from "next";
import "./globals.css";
import { frank, assistant } from "./fonts";
import { siteMetadata, SITE_URL } from "./metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { faqs } from "@/content/faqs";
import { show, episodes } from "@/content/episodes";
import { contactDetails } from "@/content/site";

export const metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: "#f7f3ec",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "ליהיא שטויאר גלעד — הפקת פודקאסטים לחברות",
      description:
        "אסטרטגיה, תוכן, ראיונות והפקת פודקאסט אודיו ווידאו לחברות וארגונים — לשיווק, מיתוג מעסיק ותקשורת פנים.",
      url: SITE_URL,
      areaServed: "IL",
      serviceType: "הפקת פודקאסטים ארגוניים",
      ...(contactDetails.email ? { email: contactDetails.email } : {}),
      ...(contactDetails.phone ? { telephone: contactDetails.phone } : {}),
      founder: { "@id": `${SITE_URL}/#lihi` },
      provider: { "@id": `${SITE_URL}/#lihi` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#lihi`,
      name: "ליהיא שטויאר גלעד",
      jobTitle: "מפיקת פודקאסטים, מגישת חדשות לשעבר",
      description:
        "מגישת חדשות לשעבר בערוץ 1 ובכאן 11. אסטרטגיה, ראיונות, כתיבה והפקת פודקאסטים לחברות וארגונים.",
      url: SITE_URL,
    },
    {
      "@type": "PodcastSeries",
      "@id": `${SITE_URL}/#saboncast`,
      name: show.name,
      url: show.spotifyShowUrl,
      inLanguage: ["he", "en"],
      producer: { "@id": `${SITE_URL}/#lihi` },
    },
    ...episodes.map((ep) => ({
      "@type": "PodcastEpisode",
      name: ep.subtitle ? `${ep.title} — ${ep.subtitle}` : ep.title,
      url: ep.url,
      inLanguage: ep.lang === "en" ? "en" : "he",
      partOfSeries: { "@id": `${SITE_URL}/#saboncast` },
    })),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frank.variable} ${assistant.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          דילוג לתוכן
        </a>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

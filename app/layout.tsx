import type { Viewport } from "next";
import "./globals.css";
import { frank, assistant } from "./fonts";
import { siteMetadata, SITE_URL } from "./metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: "#f7f3ec",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ליהיא שטויאר גלעד — הפקת פודקאסטים לחברות",
  description:
    "שירות מלא להפקת פודקאסט מקצועי לחברות וארגונים: אסטרטגיה, כתיבת תוכן, ראיונות, צילום, הקלטה, עריכה ונכסי תוכן.",
  url: SITE_URL,
  areaServed: "IL",
  serviceType: "הפקת פודקאסטים ארגוניים",
  founder: {
    "@type": "Person",
    name: "ליהיא שטויאר גלעד",
    jobTitle: "מפיקת פודקאסטים, מגישת חדשות לשעבר",
  },
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

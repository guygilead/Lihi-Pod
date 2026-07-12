import type { AssetSpoke, Cta, SocialLink, UseCase } from "@/lib/types";
import { SECTION } from "@/lib/nav";

/* ============================================================
   Core site copy (Hebrew, RTL). Episodes, packages, FAQs and
   testimonials live in their own content/*.ts files.
   Items marked TODO_REPLACE are placeholders for the site owner.
   ============================================================ */

export const siteConfig = {
  name: "ליהיא שטויאר גלעד",
  firstName: "ליהיא",
  tagline: "הפקת פודקאסטים לחברות וארגונים",
  about: "אסטרטגיה, תוכן והפקת פודקאסטים לחברות וארגונים.",
};

/**
 * Single source of truth for contact details. A field left empty is NOT
 * shown on the live site (no dummy data). The contact form delivers to Lihi
 * regardless (see app/api/contact/route.ts).
 * TODO_REPLACE: whatsapp / linkedin / instagram once provided.
 */
export const contactDetails = {
  phone: "054-2070096",
  email: "lihi@gilead.co.il",
  whatsapp: "",
  linkedin: "",
  instagram: "",
};

/** "054-…" → E.164 (+97254…) so tel:/wa.me links work internationally too. */
function e164(num: string): string {
  const digits = num.replace(/[^\d]/g, "");
  return digits.startsWith("0") ? `+972${digits.slice(1)}` : `+${digits}`;
}

function buildSocials(): SocialLink[] {
  const c = contactDetails;
  const list: SocialLink[] = [];
  if (c.phone)
    list.push({
      icon: "phone",
      label: "טלפון",
      value: c.phone,
      href: `tel:${e164(c.phone)}`,
    });
  if (c.whatsapp)
    list.push({
      icon: "phone",
      label: "WhatsApp",
      value: c.whatsapp,
      href: `https://wa.me/${e164(c.whatsapp).slice(1)}`,
    });
  if (c.email)
    list.push({
      icon: "mail",
      label: "אימייל",
      value: c.email,
      href: `mailto:${c.email}`,
    });
  if (c.linkedin)
    list.push({
      icon: "linkedin",
      label: "LinkedIn",
      value: "LinkedIn",
      href: c.linkedin,
    });
  if (c.instagram)
    list.push({
      icon: "instagram",
      label: "Instagram",
      value: c.instagram.startsWith("@") ? c.instagram : `@${c.instagram}`,
      href: `https://instagram.com/${c.instagram.replace(/^@/, "")}`,
    });
  return list;
}

/** Derived, dummy-free list of contact links (only fields that were filled). */
export const socials: SocialLink[] = buildSocials();

export const ctaPrimary: Cta = {
  label: "לתיאום שיחת אפיון",
  href: `#${SECTION.contact}`,
};

export const ctaSecondary: Cta = {
  label: "לצפייה בפרק לדוגמה",
  href: `#${SECTION.work}`,
};

export const hero = {
  eyebrow: "פודקאסטים לחברות וארגונים · אסטרטגיה והפקה מקצה לקצה",
  title: "להפוך את הסיפור של החברה שלכם לפודקאסט שאנשים באמת ירצו לשמוע",
  subtitle:
    "אסטרטגיה, תוכן, ראיונות והפקת אודיו ווידאו לחברות וארגונים. מהרעיון הראשון ועד לפרק, הסרטונים והתוכן שממשיכים לעבוד אחריו.",
  microcopy: "שיחת אפיון של 20 דקות · ללא התחייבות",
};

/** Trust strip — five capabilities, gold-dot separated. */
export const trustItems = [
  "אסטרטגיה ותוכן",
  "הכנת מרואיינים",
  "אודיו + וידאו",
  "עריכה מלאה",
  "עברית + אנגלית",
];

/* Three core uses (§7) — numbered editorial cards. */
export const useCases = {
  title: "לא עוד ערוץ תוכן. קול ברור לארגון.",
  lead: "פודקאסט ארגוני מאפשר לחברה להפוך ידע, אנשים וסיפורים לתוכן עמוק, אנושי ואמין.",
  cards: [
    {
      num: "01",
      title: "שיווק ומומחיות",
      text: "להפוך מנהלים, מומחים וידע מקצועי לתוכן שבונה אמון, בידול וסמכות.",
      example: "שיחות עם מומחים, לקוחות ומובילי תחום.",
    },
    {
      num: "02",
      title: "מותג מעסיק",
      text: "להציג את האנשים, התרבות והעשייה של החברה באופן שמחבר עובדים ומועמדים.",
      example: "סיפורי קריירה, צוותים ופרויקטים.",
    },
    {
      num: "03",
      title: "תקשורת פנים",
      text: "להנגיש הנהלה, ידע, שינוי ארגוני והצלחות בצורה שקל לצרוך ולשתף.",
      example: "פרקי הנהלה, חדשנות ותוכן פנים־ארגוני.",
    },
  ] satisfies UseCase[],
};

/* SABONcast case study copy (§8). */
export const caseStudy = {
  eyebrow: "עבודה לדוגמה",
  title: "כך הופכים את האנשים שמאחורי המותג לסדרת תוכן",
  text: "SABONcast נבנה כדי להביא לקדמת הבמה את האנשים, הידע והסיפורים שמאחורי מותג גלובלי. כל פרק חיבר בין סיפור אישי, תובנות מקצועיות והתרבות הארגונית של החברה.",
  outputs: ["פרק מלא", "קטעי וידאו", "תוכן לרשתות", "תוכן פנים־ארגוני"],
  ctaLabel: "כך יכול להיראות הפודקאסט של החברה שלכם",
};

/* One recording → a full content system (§9). */
export const assets = {
  title: "הקלטה אחת. מערכת תוכן שלמה.",
  text: "בהתאם למסלול ולחומר המצולם, כל פרק יכול להפוך למגוון נכסי תוכן לשיווק, גיוס ותקשורת פנים.",
  hubLabel: "פרק אחד",
  spokes: [
    { icon: "video", label: "פרק וידאו", tone: "gold" },
    { icon: "audio", label: "פרק אודיו", tone: "gold" },
    { icon: "instagram", label: "Reels" },
    { icon: "youtube", label: "Shorts" },
    { icon: "social", label: "פוסטים" },
    { icon: "document", label: "כתבה" },
    { icon: "mail", label: "ניוזלטר" },
    { icon: "quote", label: "ציטוטים" },
  ] satisfies AssetSpoke[],
};

/* Why Lihi (§10) — open editorial, no cards. */
export const credibility = {
  title: "לא רק להקליט שיחה. לדעת להוציא ממנה סיפור.",
  lead: "ליהיא שטויאר גלעד, מגישת חדשות לשעבר בערוץ 1 ובכאן 11, משלבת ניסיון בראיונות, כתיבה, מיתוג ותקשורת עם ניהול הפקה מלא. היא בונה את השיחה, מכינה את המשתתפים, מחדדת את המסרים ומובילה את הראיון כך שהתוצאה נשמעת טבעית, מקצועית ומדויקת.",
  portraitCaption: "ליהיא שטויאר גלעד",
  points: [
    "הכנת מנהלים ומרואיינים",
    "בניית שאלות שמייצרות תשובות טובות",
    "זיהוי מסרים וסיפורים",
    "הובלת ההפקה מקצה לקצה",
  ],
};

/* Final CTA + contact form copy (§14). */
export const contact = {
  title: "יש לחברה שלכם ידע, אנשים וסיפורים. בואו נהפוך אותם לערוץ תוכן.",
  text: "בשיחת אפיון קצרה נבין את המטרה, הקהל והמסרים, ונבחן איזה פורמט יכול לעבוד עבור החברה שלכם.",
  submitLabel: "לתיאום שיחת אפיון של 20 דקות",
  microcopy: "ללא התחייבות · הפנייה מגיעה ישירות לליהיא",
  successTitle: "תודה!",
  successText: "הפנייה נשלחה בהצלחה. נחזור אליכם בהקדם לתיאום שיחת אפיון.",
  errorText: "אירעה תקלה בשליחה. אפשר לנסות שוב או לפנות שוב מאוחר יותר.",
  interestLabel: "מה המטרה?",
  interestPlaceholder: "בחרו מטרה",
  interestOptions: [
    "שיווק ומומחיות",
    "מותג מעסיק",
    "תקשורת פנים",
    "סדרת וידאו",
    "פרק פיילוט",
    "עדיין לא בטוחים",
  ],
};

import type {
  AssetSpoke,
  Cta,
  FlowNode,
  IconCard,
  SocialLink,
  UseCase,
} from "@/lib/types";
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
  about:
    "אסטרטגיה, תוכן, ראיונות והפקת פודקאסט אודיו ווידאו לחברות וארגונים — מהרעיון ועד לפרקים ולנכסי התוכן שממשיכים לעבוד אחריהם.",
};

/**
 * TODO_REPLACE — single source of truth for contact details.
 * Leave a field empty and it will NOT be shown on the live site (no dummy
 * data). Fill real values before launch. The contact form still works and
 * delivers to Lihi regardless (see app/api/contact/route.ts).
 */
export const contactDetails = {
  phone: "",
  email: "",
  whatsapp: "",
  linkedin: "",
  instagram: "",
};

function buildSocials(): SocialLink[] {
  const c = contactDetails;
  const list: SocialLink[] = [];
  if (c.phone)
    list.push({
      icon: "phone",
      label: "טלפון",
      value: c.phone,
      href: `tel:${c.phone.replace(/[^\d+]/g, "")}`,
    });
  if (c.whatsapp)
    list.push({
      icon: "phone",
      label: "WhatsApp",
      value: c.whatsapp,
      href: `https://wa.me/${c.whatsapp.replace(/[^\d]/g, "")}`,
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
  href: `#${SECTION.caseStudy}`,
};

export const hero = {
  eyebrow: "פודקאסטים לחברות וארגונים · אסטרטגיה והפקה מקצה לקצה",
  title: "להפוך את הסיפור של החברה שלכם לפודקאסט שאנשים באמת ירצו לשמוע",
  subtitle:
    "אסטרטגיה, תוכן, ראיונות והפקת אודיו ווידאו לחברות וארגונים. מהרעיון הראשון ועד לפרק, הסרטונים והתוכן שממשיכים לעבוד אחריו.",
  microcopy: "שיחת אפיון של 20 דקות · ללא התחייבות",
  trust: [
    "אסטרטגיה ותוכן",
    "אודיו + וידאו",
    "הכנת מרואיינים",
    "עריכה ונכסי תוכן",
    "עברית + אנגלית",
  ],
};

/* Intro — "why a corporate podcast" (§6.3). */
export const whatIs = {
  eyebrow: "למה פודקאסט ארגוני",
  title: "לא עוד ערוץ תוכן. קול ברור לארגון.",
  text: "פודקאסט ארגוני מאפשר לחברה להציג את הידע, האנשים והעשייה שלה בצורה עמוקה, אנושית ואמינה — לבנות מומחיות כלפי חוץ, לחזק את מותג המעסיק ולחבר בין אנשים ומחלקות בתוך הארגון.",
  flowInputs: [
    { icon: "quote", label: "סיפור החברה" },
    { icon: "goals", label: "אסטרטגיה ומטרות" },
    { icon: "mic", label: "פרקי פודקאסט" },
  ] satisfies FlowNode[],
  flowOutputs: [
    { icon: "video", label: "קטעי וידאו" },
    { icon: "social", label: "תוכן לרשתות" },
    { icon: "document", label: "תוכן לאתר" },
    { icon: "internal", label: "תקשורת פנים" },
    { icon: "employer", label: "מותג מעסיק" },
    { icon: "sparkle", label: "נכס שיווקי" },
  ] satisfies FlowNode[],
};

/* Exactly three use cases (§6.3). */
export const useCases = {
  eyebrow: "למי זה מתאים",
  title: "שלושה שימושים, קול אחד",
  lead: "אותו פודקאסט יכול לשרת כמה מטרות — נבחר יחד את הזווית שהכי חשובה לכם.",
  ctaLabel: "לראות דוגמה",
  ctaHref: `#${SECTION.caseStudy}`,
  cards: [
    {
      icon: "expertise",
      title: "שיווק ומומחיות",
      text: "הפיכת ידע מקצועי, מנהלים ומומחים לתוכן שבונה אמון ובידול.",
      example: "פרק לדוגמה: תובנות ומגמות מהתחום מפי מומחה/ית מהחברה.",
    },
    {
      icon: "employer",
      title: "מותג מעסיק",
      text: "הצגת האנשים, התרבות והעשייה באופן שמחבר עובדים ומועמדים.",
      example: "פרק לדוגמה: שיחה עם מנהל/ת על התרבות ועל הצוות.",
    },
    {
      icon: "internal",
      title: "תקשורת פנים",
      text: "הנגשת הנהלה, פרויקטים, ידע וסיפורים בתוך הארגון.",
      example: "פרק לדוגמה: הצגת פרויקט חוצה-מחלקות והאנשים מאחוריו.",
    },
  ] satisfies UseCase[],
};

/* One recording → a full content system (§6.5). */
export const assets = {
  eyebrow: "החזר על ההשקעה",
  title: "הקלטה אחת. מערכת תוכן שלמה.",
  text: "בהתאם למסלול ולחומר המצולם, כל פרק יכול להפוך לפרק וידאו ואודיו, קטעים קצרים, פוסטים, כתבה, ניוזלטר ותוכן לשיווק, לגיוס ולתקשורת פנים.",
  hubLabel: "פרק אחד",
  spokes: [
    { icon: "video", label: "פרק וידאו מלא", tone: "gold" },
    { icon: "audio", label: "פרק אודיו", tone: "gold" },
    { icon: "social", label: "4–10 קטעים קצרים" },
    { icon: "linkedin", label: "פוסטים ל־LinkedIn" },
    { icon: "instagram", label: "Reels" },
    { icon: "youtube", label: "Shorts" },
    { icon: "document", label: "כתבה לאתר" },
    { icon: "internal", label: "ניוזלטר" },
    { icon: "quote", label: "ציטוטים" },
    { icon: "employer", label: "תוכן פנים־ארגוני" },
  ] satisfies AssetSpoke[],
};

/* Why Lihi — commercial differentiation (§6.6). */
export const credibility = {
  eyebrow: "למה ליהיא",
  title: "לא רק להקליט שיחה. לדעת להוציא ממנה סיפור.",
  lead: "ליהיא שטויאר גלעד, מגישת חדשות לשעבר בערוץ 1 ובכאן 11, משלבת ניסיון בראיונות, כתיבה, מיתוג ותקשורת עם ניהול הפקה מלא. היא בונה את השיחה, מכינה את המשתתפים, מחדדת את המסרים ומובילה את הראיון כך שהתוצאה נשמעת טבעית, מקצועית ומדויקת.",
  portraitCaption: "ליהיא שטויאר גלעד",
  points: [
    { icon: "prep", title: "הכנת מנהלים ומרואיינים" },
    { icon: "writing", title: "בניית שאלות שמייצרות תשובות טובות" },
    { icon: "branding", title: "זיהוי מסרים וסיפורים" },
    { icon: "guidance", title: "ניהול השיחה וההפקה מקצה לקצה" },
  ] satisfies IconCard[],
};

/* Final CTA + contact form copy (§6.12 / §7). */
export const contact = {
  eyebrow: "צרו קשר",
  title: "יש לחברה שלכם ידע, אנשים וסיפורים. בואו נהפוך אותם לערוץ תוכן.",
  text: "בשיחת אפיון קצרה נבין את המטרה, הקהל והמסרים, ונבחן איזה פורמט יכול לעבוד עבור החברה שלכם.",
  submitLabel: "לתיאום שיחת אפיון",
  microcopy: "ללא התחייבות · השיחה מגיעה ישירות לליהיא",
  successTitle: "תודה!",
  successText: "הפנייה נשלחה בהצלחה. נחזור אליכם בהקדם לתיאום שיחת אפיון.",
  errorText: "אירעה תקלה בשליחה. אפשר לנסות שוב או לפנות שוב מאוחר יותר.",
  interestLabel: "מה המטרה המרכזית?",
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

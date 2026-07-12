import type { Package } from "@/lib/types";
import { SECTION } from "@/lib/nav";

export const packagesIntro = {
  title: "בוחרים את נקודת ההתחלה הנכונה",
  lead: "אפשר להתחיל בפרק פיילוט, לבנות סדרה או להקים ערוץ תוכן מתמשך.",
  note: "מותאם להיקף ולמספר הפרקים · סבבי תיקונים ודיוק בהתאם למסלול שנבחר.",
};

export const packages: Package[] = [
  {
    icon: "mic",
    name: "פרק פיילוט",
    fitFor: "חברות שרוצות לבדוק פורמט לפני סדרה.",
    includes: [
      "אפיון",
      "קונספט לפרק",
      "הכנת שאלות",
      "הכנת משתתפים",
      "הקלטה ועריכה",
    ],
    ctaLabel: "לבניית פרק פיילוט",
    ctaHref: `#${SECTION.contact}`,
  },
  {
    icon: "video",
    name: "סדרת פודקאסט וידאו",
    fitFor: "שיווק, מומחיות ומותג מעסיק.",
    includes: [
      "אסטרטגיית סדרה",
      "צילום והקלטה",
      "עריכת אודיו ווידאו",
      "קטעים קצרים",
      "טקסטים לפרסום",
    ],
    ctaLabel: "לתכנון סדרה",
    ctaHref: `#${SECTION.contact}`,
    highlight: true,
  },
  {
    icon: "ongoing",
    name: "ערוץ תוכן מתמשך",
    fitFor: "חברות שרוצות תוכן קבוע לאורך זמן.",
    includes: [
      "תוכנית תוכן",
      "תכנון מרואיינים",
      "ימי צילום",
      "בנק תכנים",
      "הפקה שוטפת",
    ],
    ctaLabel: "לבניית ערוץ תוכן",
    ctaHref: `#${SECTION.contact}`,
  },
  {
    icon: "internal",
    name: "פודקאסט פנים־ארגוני",
    fitFor: "תקשורת פנים, הנהלה, הדרכה וחיבור עובדים.",
    includes: [
      "אפיון קהל פנימי",
      "קונספט ותוכן",
      "הכנת משתתפים",
      "הפקה",
      "אפשרות להפצה סגורה",
    ],
    ctaLabel: "לתכנון פודקאסט פנימי",
    ctaHref: `#${SECTION.contact}`,
  },
];

import type {
  AssetSpoke,
  Cta,
  FaqItem,
  FlowNode,
  IconCard,
  Package,
  SocialLink,
  Spotify,
  Step,
  UseCase,
} from "@/lib/types";
import { SECTION } from "@/lib/nav";

/* ============================================================
   All site copy lives here (Hebrew, RTL). Edit text in one place.
   Items marked TODO_REPLACE are placeholders for the site owner.
   ============================================================ */

export const siteConfig = {
  name: "ליהיא שטויאר גלעד",
  firstName: "ליהיא",
  tagline: "הפקת פודקאסטים לחברות וארגונים",
  about:
    "הפקת פודקאסטים מקצועיים לחברות וארגונים — אסטרטגיה, כתיבת תוכן, ראיונות, צילום, עריכה ונכסי תוכן לשיווק, מיתוג ותקשורת פנים.",
};

export const ctaPrimary: Cta = {
  label: "לתיאום שיחת היכרות",
  href: `#${SECTION.contact}`,
};

export const ctaSecondary: Cta = {
  label: "לראות איך זה עובד",
  href: `#${SECTION.process}`,
};

export const hero = {
  eyebrow: "סטוריטלינג ארגוני · הפקה מקצה לקצה",
  title: "להפוך את הסיפור של החברה שלכם לפודקאסט שאנשים באמת ירצו לשמוע",
  subtitle:
    "ליווי מלא — מאסטרטגיה ועד הפצה — להפקת פודקאסט מקצועי וממותג שמחזק שיווק, מיתוג ותקשורת פנים.",
  trust: "מגישת חדשות לשעבר בערוץ 1 ובכאן 11",
  // mock "now-playing" card in the hero visual
  nowPlaying: {
    show: "הפודקאסט של החברה",
    episode: "פרק 04 · הסיפור שמאחורי המוצר",
    elapsed: "12:40",
    total: "32:18",
  },
  stats: [
    { value: "מקצה לקצה", label: "אסטרטגיה עד הפצה" },
    { value: "אודיו + וידאו", label: "הפקה מלאה" },
    { value: "פרק אחד", label: "עשרות נכסי תוכן" },
  ],
};

export const credibility = {
  eyebrow: "מי עומדת מאחורי ההפקה",
  title: "ניסיון תקשורתי שמביא ערך עסקי",
  lead: "ליהיא שטויאר גלעד — מגישת חדשות לשעבר בערוץ 1 ובכאן 11. ניסיון עשיר בתקשורת, שיווק, מיתוג וסטוריטלינג, שמביא לכל הפקה יכולת ראיון, הבנת מסרים והפקה מדויקת.",
  portraitCaption: "ליהיא שטויאר גלעד",
  cards: [
    { icon: "tv", title: "ניסיון טלוויזיוני ועיתונאי" },
    { icon: "branding", title: "הבנה עמוקה של מסרים ומיתוג" },
    { icon: "mic", title: "יכולת ראיון והובלת שיחה" },
    { icon: "writing", title: "כתיבה והפקת תוכן" },
    { icon: "assets", title: "יצירת נכסי תוכן לחברות" },
    { icon: "guidance", title: "ליווי אישי עד התוצאה הסופית" },
  ] satisfies IconCard[],
};

export const whatIs = {
  eyebrow: "מה זה בעצם?",
  title: "פודקאסט לחברה הוא הרבה יותר מערוץ תוכן",
  text: "פודקאסט ארגוני נותן לחברה קול משלה — לחשוף את האנשים שמאחורי העשייה, להציג מומחיות ולבנות אמון עם לקוחות, עובדים ושותפים.",
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

/* External + internal value, merged into one compact two-column section. */
export const benefits = {
  eyebrow: "למה זה עובד",
  title: "ערך כפול — כלפי חוץ וכלפי פנים",
  lead: "פודקאסט ארגוני אחד שמשרת בו-זמנית שיווק ומיתוג כלפי חוץ, ותרבות וגאוות עובדים כלפי פנים.",
  external: {
    title: "כלפי חוץ — שיווק, מיתוג ואמון",
    items: [
      { icon: "expertise", title: "הצגת מומחיות" },
      { icon: "trust", title: "בניית אמון" },
      { icon: "differentiation", title: "בידול מהמתחרים" },
      { icon: "social", title: "תוכן לרשתות החברתיות" },
      { icon: "employer", title: "חיזוק מותג המעסיק" },
      { icon: "longterm", title: "נכס תוכן לאורך זמן" },
    ] satisfies IconCard[],
  },
  internal: {
    title: "כלפי פנים — עובדים, גאווה ותרבות",
    items: [
      { icon: "share", title: "שיתוף העובדים בעשייה" },
      { icon: "belonging", title: "חיזוק תחושת שייכות" },
      { icon: "exposure", title: "חשיפת מחלקות ופרויקטים" },
      { icon: "pride", title: "יצירת גאוות עשייה" },
      { icon: "crossdept", title: "תקשורת בין מחלקות" },
      { icon: "onboarding", title: "חיבור עובדים חדשים" },
    ] satisfies IconCard[],
  },
};

export const process = {
  eyebrow: "תהליך העבודה",
  title: "מהרעיון ועד לפרק מוכן לפרסום",
  lead: "תהליך מסודר ושקוף שמלווה את החברה בכל שלב — תמיד ברור מה קורה ומה השלב הבא.",
  steps: [
    {
      num: "01",
      icon: "needs",
      title: "אפיון צרכים",
      text: "הבנת החברה, הקהל, המטרות והמסרים.",
    },
    {
      num: "02",
      icon: "goals",
      title: "הגדרת מטרות",
      text: "שיווק, גיוס, תקשורת פנים או שילוב.",
    },
    {
      num: "03",
      icon: "concept",
      title: "בניית קונספט",
      text: "שם, פורמט, מבנה, סגנון ומרואיינים.",
    },
    {
      num: "04",
      icon: "writing",
      title: "כתיבת תוכן",
      text: "נושאים, שאלות, תסריטים ומסרים לכל פרק.",
    },
    {
      num: "05",
      icon: "prep",
      title: "הכנת משתתפים",
      text: "ליווי מרואיינים ומנהלים לפני ההקלטה.",
    },
    {
      num: "06",
      icon: "production",
      title: "הפקה וצילום",
      text: "הקלטה, צילום, תאורה וסאונד מקצועיים.",
    },
    {
      num: "07",
      icon: "editing",
      title: "עריכה",
      text: "אודיו, וידאו, גרפיקה, כתוביות וקצב.",
    },
    {
      num: "08",
      icon: "contentPack",
      title: "חבילת תוכן",
      text: "קטעים קצרים, כותרות וציטוטים לרשתות.",
    },
    {
      num: "09",
      icon: "finalize",
      title: "ליווי עד שביעות רצון",
      text: "תיקונים ודיוקים עד תוצר מוכן לפרסום.",
    },
  ] satisfies Step[],
};

export const deliverables = {
  eyebrow: "תוצרים",
  title: "מה החברה מקבלת בפועל?",
  lead: "לא רק פרק מוקלט — מערכת נכסים מוכנה לשיווק, ל-HR ולתקשורת פנים.",
  items: [
    "אסטרטגיה וקונספט מותאמים",
    "כתיבת שאלות ותסריטים",
    "ניהול והובלת ראיונות",
    "הקלטת אודיו וצילום וידאו",
    "עריכת פרקים מלאה",
    "קטעי וידאו קצרים לרשתות",
    "כתוביות וקאברים לפרקים",
    "טקסטים ותיאורי פרקים",
    "ליווי מלא עד תוצר סופי",
  ],
};

export const assets = {
  eyebrow: "החזר על ההשקעה",
  title: "פרק אחד. הרבה נכסים.",
  text: "כל פרק הופך למערכת שלמה של נכסי תוכן — לשיווק, למכירות, ל-HR ולתקשורת פנים. הקלטה אחת שממשיכה לעבוד בעשרות נקודות מגע.",
  hubLabel: "פרק פודקאסט",
  spokes: [
    { icon: "video", label: "פרק וידאו מלא", tone: "gold" },
    { icon: "audio", label: "פרק אודיו", tone: "gold" },
    { icon: "social", label: "קטעים קצרים" },
    { icon: "linkedin", label: "פוסטים ל־LinkedIn" },
    { icon: "instagram", label: "Reels לאינסטגרם" },
    { icon: "youtube", label: "YouTube Shorts" },
    { icon: "internal", label: "ניוזלטר פנים־ארגוני" },
    { icon: "document", label: "כתבה לאתר" },
    { icon: "employer", label: "תוכן לגיוס עובדים" },
    { icon: "sparkle", label: "תוכן מכירה ומיתוג" },
  ] satisfies AssetSpoke[],
};

export const useCases = {
  eyebrow: "התאמה",
  title: "לאיזה סוגי חברות זה מתאים?",
  lead: "הפורמט גמיש ומותאם למטרה — שיווק, גיוס, תקשורת פנים או שילוב.",
  cards: [
    { icon: "tech", title: "חברות טכנולוגיה" },
    { icon: "industry", title: "תעשייה ולוגיסטיקה" },
    { icon: "services", title: "שירותים מקצועיים" },
    { icon: "org", title: "ארגונים גדולים" },
    { icon: "growth", title: "חברות בצמיחה" },
    { icon: "nonprofit", title: "עמותות וארגונים חברתיים" },
  ] satisfies UseCase[],
};

/* Live podcast on Spotify — the player below embeds the real episodes.
   To feature specific episodes as separate players, paste their IDs
   (the code in open.spotify.com/episode/<ID>) into episodeIds. */
export const spotify: Spotify = {
  showId: "3wb0CKuIYFWiSlJgJtVQCD",
  showUrl: "https://open.spotify.com/show/3wb0CKuIYFWiSlJgJtVQCD",
  title: "הפודקאסט בספוטיפיי",
  allEpisodesLabel: "לכל הפרקים בספוטיפיי",
  episodeIds: [],
};

export const portfolio = {
  eyebrow: "דוגמאות",
  title: "האזינו לפרקים — ישירות מהדף",
  lead: "מבחר פרקים מתוך הפקות. נגנו אותם כאן, או עברו לכל הפרקים בספוטיפיי.",
  caseStudy: {
    eyebrow: "מקרה לדוגמה",
    title: "מפודקאסט אחד — לעשרות פריטי תוכן",
    text: "סדרת פרקים שהפכה לקמפיין תוכן מתמשך: קטעי וידאו, פוסטים ממנהלים, חומרי גיוס וכתבות לאתר — מאותן הקלטות.",
    metrics: [
      { value: "1", label: "סדרת פרקים" },
      { value: "10+", label: "נכסי תוכן לפרק" },
      { value: "4", label: "ערוצי הפצה" },
    ],
  },
};

export const beforeAfter = {
  eyebrow: "התמורה",
  title: "מה קורה כשנותנים לעשייה של החברה קול?",
  beforeTitle: "לפני",
  afterTitle: "אחרי",
  before: [
    "ידע מקצועי נשאר בתוך הארגון",
    "עובדים לא מכירים עשייה במחלקות אחרות",
    "סיפורי הצלחה ללא במה",
    "תוכן שיווקי גנרי",
    "קשה לבלוט מול מתחרים",
    "גיוס שנשען רק על מודעות דרושים",
  ],
  after: [
    "מומחיות שמוצגת באופן קבוע",
    "עובדים מחוברים וגאים יותר",
    "סיפורי הצלחה הופכים לתוכן",
    "חשיפה לאנשים שמאחורי החברה",
    "מותג עם קול ברור ואנושי",
    "נכס תוכן מתמשך לשיווק ול-HR",
  ],
};

export const packages = {
  eyebrow: "מסלולים",
  title: "מסלולי עבודה אפשריים",
  lead: "כל מסלול נבנה לפי המטרות, הקהל וההיקף. נבחר יחד את נקודת ההתחלה הנכונה.",
  cta: { label: "בואו נבנה את המסלול שמתאים לכם", href: `#${SECTION.contact}` },
  items: [
    {
      icon: "mic",
      name: "פודקאסט בסיסי לחברה",
      text: "אפיון, קונספט, כתיבת שאלות, הקלטה ועריכת פרקים.",
    },
    {
      icon: "video",
      name: "פודקאסט וידאו מלא",
      text: "אסטרטגיה, צילום, הקלטה, עריכה, כתוביות וחומרי וידאו קצרים.",
      highlight: true,
    },
    {
      icon: "ongoing",
      name: "פודקאסט אסטרטגי מתמשך",
      text: "ליווי חודשי מלא להפיכת הפודקאסט לערוץ תוכן קבוע.",
    },
    {
      icon: "internal",
      name: "פודקאסט פנים־ארגוני",
      text: "מיקוד בתקשורת פנים, עובדים, מנהלים ותרבות ארגונית.",
    },
  ] satisfies Package[],
};

export const faq = {
  eyebrow: "שאלות נפוצות",
  title: "כל מה שחשוב לדעת לפני שמתחילים",
  items: [
    {
      q: "האם פודקאסט מתאים גם לחברה ללא ניסיון בתוכן?",
      a: "כן. השירות כולל ליווי מלא משלב הרעיון — קונספט, כתיבה, הכנת מרואיינים והפקה.",
    },
    {
      q: "האם חייבים לצלם וידאו?",
      a: "לא. אפשר אודיו בלבד, אך וידאו מאפשר להפיק הרבה יותר נכסי תוכן לרשתות ולשיווק.",
    },
    {
      q: "מי משתתף בפרקים?",
      a: "מנהלים, עובדים, לקוחות, שותפים, מומחים — כל דמות שמספרת חלק מהסיפור של החברה.",
    },
    {
      q: "האם הפודקאסט מיועד רק לשיווק?",
      a: "לא. גם לתקשורת פנים, תרבות ארגונית, גיוס עובדים, הדרכה, שימור ידע ומיתוג מעסיק.",
    },
    {
      q: "כמה זמן לוקח להפיק פרק?",
      a: "תלוי בהיקף. תהליך מסודר עם לוח זמנים ברור שנקבע יחד אחרי האפיון.",
    },
    {
      q: "האם מקבלים גם חומרים לרשתות?",
      a: "כן. מכל פרק — קטעי וידאו, טקסטים, כותרות וציטוטים ללינקדאין, אינסטגרם, יוטיוב והאתר.",
    },
    {
      q: "האם השירות כולל תיקונים?",
      a: "כן. ליווי ודיוקים עד שהתוצר מקצועי ומדויק לשביעות רצון החברה.",
    },
  ] satisfies FaqItem[],
};

export const contact = {
  eyebrow: "צרו קשר",
  title: "יש לחברה שלכם סיפור. בואו נהפוך אותו לנכס תקשורתי.",
  text: "נשמח להבין את הצרכים, המטרות והקהל שלכם, ולהציע קונספט ראשוני לפודקאסט.",
  submitLabel: "לתיאום שיחת היכרות",
  successTitle: "תודה!",
  successText: "ההודעה נשלחה בהצלחה. נחזור אליכם בהקדם לתיאום שיחת היכרות.",
  errorText: "אירעה תקלה בשליחה. אפשר לנסות שוב או לפנות ישירות בטלפון/מייל.",
  interestLabel: "מה מעניין אתכם?",
  interestPlaceholder: "בחרו נושא",
  interestOptions: [
    "פודקאסט שיווקי",
    "פודקאסט פנים־ארגוני",
    "פודקאסט וידאו",
    "תוכן לרשתות",
    "עדיין לא בטוחים",
  ],
};

// TODO_REPLACE: עדכנו את פרטי הקשר והקישורים האמיתיים לפני העלייה לאוויר.
export const socials: SocialLink[] = [
  {
    icon: "phone",
    label: "טלפון",
    value: "050-000-0000",
    href: "tel:+972500000000",
  },
  {
    icon: "mail",
    label: "אימייל",
    value: "hello@lihi-gilad.co.il",
    href: "mailto:hello@lihi-gilad.co.il",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "ליהיא שטויאר גלעד",
    href: "https://www.linkedin.com/",
  },
  {
    icon: "instagram",
    label: "Instagram",
    value: "@lihi.podcast",
    href: "https://www.instagram.com/",
  },
];

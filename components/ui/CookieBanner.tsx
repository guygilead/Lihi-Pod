"use client";

import { useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "privacy-notice-v1";

const subscribe = () => () => {};

function readDismissed(): boolean {
  try {
    return Boolean(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    /* storage unavailable (private mode) — don't nag */
    return true;
  }
}

/**
 * Honest cookie/privacy notice: the site itself sets no tracking cookies and
 * bundles no analytics; playing an episode loads Spotify content. Dismissal
 * is remembered locally only (localStorage — never sent anywhere).
 */
export function CookieBanner() {
  // Server snapshot says "dismissed" so nothing renders during SSR; the real
  // localStorage value takes over right after hydration.
  const dismissed = useSyncExternalStore(subscribe, readDismissed, () => true);
  const [closed, setClosed] = useState(false);

  if (dismissed || closed) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* best effort */
    }
    setClosed(true);
  };

  return (
    <div
      role="region"
      aria-label="הודעת פרטיות ועוגיות"
      className="fixed inset-x-3 bottom-3 z-[55] mx-auto max-w-3xl rounded-2xl bg-charcoal p-4 text-cream shadow-[var(--shadow-lift)] ring-1 ring-line-dark md:inset-x-6 md:bottom-6 md:p-5"
    >
      <div className="flex flex-col gap-3.5 md:flex-row md:items-center md:gap-5">
        <p className="flex-1 text-base leading-relaxed text-muted-light">
          האתר אינו עושה שימוש בעוגיות מעקב או בכלי אנליטיקה. הפעלת נגן פרק
          טוענת תוכן מ־Spotify, שעשויה לעשות שימוש בעוגיות.{" "}
          <a
            href="/privacy"
            className="font-semibold text-gold-soft underline underline-offset-4 transition-colors hover:text-cream"
          >
            למדיניות הפרטיות
          </a>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full bg-cream px-6 font-semibold text-ink transition-colors hover:bg-white"
        >
          הבנתי, אישור
        </button>
      </div>
    </div>
  );
}

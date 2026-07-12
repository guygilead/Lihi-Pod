export type AnalyticsEvent =
  | "hero_cta_click"
  | "featured_episode_play"
  | "spotify_open"
  | "case_study_view"
  | "package_cta_click"
  | "faq_open"
  | "form_start"
  | "form_submit"
  | "phone_click"
  | "email_click"
  | "whatsapp_click";

type Params = Record<string, string | number | boolean | undefined>;

/**
 * Lightweight, dependency-free event dispatch.
 *
 * No analytics library is bundled with the site. Events are forwarded to
 * `window.dataLayer` / `gtag` when a tag manager is already present, and are a
 * silent no-op otherwise — so the events are "ready" without shipping a tracker
 * (add one only with the owner's approval).
 */
export function track(event: AnalyticsEvent, params?: Params) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  try {
    w.dataLayer?.push({ event, ...params });
    w.gtag?.("event", event, params ?? {});
  } catch {
    /* analytics must never break the UI */
  }
}

import type { Testimonial } from "@/lib/types";

/**
 * Recommendations. The section is hidden on the live site while this is `false`
 * or the list is empty — do NOT invent testimonials. Flip the flag and add real
 * entries once they exist.
 */
export const testimonialsEnabled = false;

export const testimonialsIntro = {
  eyebrow: "המלצות",
  title: "מה אומרים על העבודה עם ליהיא",
};

// TODO_REPLACE: add real testimonials (quote, name, role, company) and set
// testimonialsEnabled = true.
export const testimonials: Testimonial[] = [];

export type ClassValue = string | number | false | null | undefined;

/** Lightweight className joiner — filters falsy values and joins with spaces. */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}

import { cn } from "@/lib/utils";

/** Line-art studio microphone motif (decorative). */
export function MicGlyph({
  className,
  strokeWidth = 2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 48 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-auto w-full", className)}
      aria-hidden
    >
      <rect x="17" y="6" width="14" height="30" rx="7" />
      <line x1="20.5" y1="14" x2="27.5" y2="14" opacity="0.45" />
      <line x1="20.5" y1="20" x2="27.5" y2="20" opacity="0.45" />
      <line x1="20.5" y1="26" x2="27.5" y2="26" opacity="0.45" />
      <path d="M11 27a13 13 0 0 0 26 0" />
      <line x1="24" y1="40" x2="24" y2="52" />
      <line x1="16" y1="52" x2="32" y2="52" />
    </svg>
  );
}

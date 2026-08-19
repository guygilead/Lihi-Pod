/**
 * Refined studio condenser microphone — thin-line editorial mark for large
 * media panels (the tiny MicGlyph stays for logo-size uses).
 */
export function StudioMic({
  className,
  strokeWidth = 1.6,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 64 96"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* capsule body */}
      <rect x="19" y="4" width="26" height="46" rx="13" />
      {/* grille lines */}
      <path d="M24 14h16M24 21h16M24 28h16M24 35h16" opacity="0.5" />
      {/* diaphragm hint */}
      <circle cx="32" cy="42" r="2.6" opacity="0.75" />
      {/* shock-mount bracket */}
      <path d="M13 30v14c0 10.5 8.5 19 19 19s19-8.5 19-19V30" />
      {/* stem + base */}
      <path d="M32 63v17" />
      <path d="M20 84c3.2-2.6 7.4-4 12-4s8.8 1.4 12 4" />
    </svg>
  );
}

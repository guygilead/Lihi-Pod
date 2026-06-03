import { cn } from "@/lib/utils";

export function Card({
  className,
  interactive = false,
  children,
}: {
  className?: string;
  interactive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-line bg-paper p-6 shadow-soft md:p-7",
        interactive &&
          "transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

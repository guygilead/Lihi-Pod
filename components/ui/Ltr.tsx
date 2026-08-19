import { cn } from "@/lib/utils";

/** Isolates Latin/number/handle runs so they don't reorder inside RTL text. */
export function Ltr({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      dir="ltr"
      className={cn("inline-block [unicode-bidi:isolate]", className)}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Variant = "cream" | "sand" | "paper" | "charcoal";

const variants: Record<Variant, string> = {
  cream: "bg-cream text-ink",
  sand: "bg-sand text-ink",
  paper: "bg-paper text-ink",
  charcoal: "bg-charcoal text-cream",
};

export function Section({
  id,
  variant = "cream",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  variant?: Variant;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 md:py-28",
        variants[variant],
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

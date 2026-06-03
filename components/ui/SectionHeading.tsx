import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "start" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "dark",
  as: Heading = "h2",
  className,
  titleClassName,
}: Props) {
  const isLight = tone === "light";
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered ? "mx-auto text-center" : "text-start",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.02em]",
            isLight ? "text-gold-soft" : "text-gold-deep",
          )}
        >
          <span className="h-px w-7 bg-current opacity-50" aria-hidden />
          {eyebrow}
          {centered && (
            <span className="h-px w-7 bg-current opacity-50" aria-hidden />
          )}
        </span>
      )}
      <Heading
        className={cn(
          "mt-4 text-3xl leading-tight text-balance md:text-4xl lg:text-[2.7rem]",
          isLight ? "text-cream" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </Heading>
      {lead && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-pretty",
            isLight ? "text-muted-light" : "text-muted",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

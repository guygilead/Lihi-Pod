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
          "mt-4 text-[2rem] leading-[1.12] text-balance md:text-[2.75rem] lg:text-[3.25rem]",
          isLight ? "text-cream" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </Heading>
      {lead && (
        <p
          className={cn(
            "mt-5 max-w-[650px] text-lg leading-relaxed text-pretty md:text-xl",
            centered && "mx-auto",
            isLight ? "text-muted-light" : "text-muted",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

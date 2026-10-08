import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2",
            "rounded-full border border-border bg-foreground/5",
            "px-3.5 py-1.5",
            "text-xs font-medium uppercase tracking-widest text-secondary"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "font-display font-bold tracking-tight text-balance",
          "text-3xl sm:text-4xl lg:text-5xl"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "max-w-2xl text-base text-secondary text-pretty sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "glass" | "outline" | "elevated";
  hover?: boolean;
}

const variantStyles = {
  default: "bg-card border border-card-border",
  glass: "glass",
  outline: "bg-transparent border border-border",
  elevated:
    "bg-card border border-card-border shadow-lg shadow-black/5 dark:shadow-black/20",
};

export function Card({
  children,
  className,
  variant = "default",
  hover = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6",
        "transition-all duration-300 ease-out",
        variantStyles[variant],
        hover && [
          "hover:-translate-y-1",
          "hover:border-accent-500/40",
          "hover:shadow-lg hover:shadow-accent-600/5",
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
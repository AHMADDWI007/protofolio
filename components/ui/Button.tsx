"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800 shadow-lg shadow-accent-600/25 hover:shadow-accent-600/40",
  secondary:
    "bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-foreground/5 hover:border-accent-500/50 active:bg-foreground/10",
  ghost:
    "bg-transparent text-foreground hover:bg-foreground/5 active:bg-foreground/10",
  link: "bg-transparent text-accent-500 hover:text-accent-600 underline-offset-4 hover:underline p-0 h-auto",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5 rounded-lg",
  md: "h-11 px-6 text-sm gap-2 rounded-xl",
  lg: "h-13 px-8 text-base gap-2.5 rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium",
          "transition-all duration-300 ease-out",
          "hover:scale-[1.02] active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
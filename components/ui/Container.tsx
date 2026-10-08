import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
} as const;

export function Container({
  children,
  className,
  as: Component = "div",
  size = "lg",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        sizeMap[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
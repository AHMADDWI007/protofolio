"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Direction = "up" | "down" | "left" | "right" | "none";
type Distance = "sm" | "md" | "lg";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  distance?: Distance;
  delay?: number;
  duration?: number;
  blur?: boolean;
  scale?: boolean;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "article" | "li" | "span";
}

const distanceMap: Record<Distance, number> = {
  sm: 12,
  md: 24,
  lg: 48,
};

const directionMap: Record<
  Direction,
  (d: number) => { x?: number; y?: number }
> = {
  up: (d) => ({ y: d }),
  down: (d) => ({ y: -d }),
  left: (d) => ({ x: d }),
  right: (d) => ({ x: -d }),
  none: () => ({}),
};

export function Reveal({
  children,
  direction = "up",
  distance = "md",
  delay = 0,
  duration = 0.6,
  blur = false,
  scale = false,
  className,
  once = true,
  amount = 0.2,
  as = "div",
}: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const offset = directionMap[direction](distanceMap[distance]);

  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...offset,
      ...(blur && { filter: "blur(8px)" }),
      ...(scale && { scale: 0.95 }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
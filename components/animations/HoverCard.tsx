"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function HoverCard({
  children,
  className,
  intensity = 8,
}: HoverCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]));

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
}
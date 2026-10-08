"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
}

const containerVariants = (
  staggerDelay: number,
  delayChildren: number
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  delayChildren = 0,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={containerVariants(staggerDelay, delayChildren)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};
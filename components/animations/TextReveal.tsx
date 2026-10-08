"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "0.4em",
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  as = "h1",
}: TextRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const words = text.split(" ");

  const Tag = motion[as] as typeof motion.h1;

  if (prefersReducedMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{text}</StaticTag>;
  }

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants(stagger, delay)}
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            variants={wordVariants}
            className="inline-block"
            aria-hidden="true"
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span aria-hidden="true">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
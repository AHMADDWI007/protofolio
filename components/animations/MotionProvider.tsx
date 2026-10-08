"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </MotionConfig>
  );
}
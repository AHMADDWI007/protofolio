"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = from + (to - from) * easedProgress;

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
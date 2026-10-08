"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // === Placeholder sebelum mounted (SAMA untuk server & client) ===
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-foreground",
          className
        )}
        disabled
      >
        <span className="h-[18px] w-[18px]" aria-hidden="true" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Aktifkan light mode" : "Aktifkan dark mode"}
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-border bg-card/50 text-foreground",
        "transition-colors duration-300 hover:bg-foreground/5",
        className
      )}
    >
      {/* Ambient glow on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isDark
            ? "radial-gradient(circle at center, rgba(99,102,241,0.2), transparent 70%)"
            : "radial-gradient(circle at center, rgba(250,204,21,0.25), transparent 70%)",
        }}
      />

      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex"
          >
            <Moon className="h-[18px] w-[18px]" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex"
          >
            <Sun className="h-[18px] w-[18px]" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300",
          isScrolled
            ? "glass border-b border-border/50 py-3"
            : "bg-transparent py-5"
        )}
      >
        <Container size="xl">
          <nav className="flex items-center justify-between">
            {/* Logo / Nama */}
            <a
              href="#beranda"
              onClick={(e) => handleNavClick(e, "#beranda")}
              className="group flex items-center gap-2"
              aria-label="Ke Beranda"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-2-500 text-sm font-bold text-white shadow-lg shadow-accent-600/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                A
              </div>
              <span className="font-display text-base font-bold tracking-tight">
                Ahmad Dwi
              </span>
            </a>

            {/* Desktop Menu + Theme Toggle */}
            <div className="hidden items-center gap-2 md:flex">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id} className="relative">
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={cn(
                          "relative rounded-lg px-3.5 py-2 text-sm font-medium",
                          "transition-colors duration-300",
                          isActive
                            ? "text-foreground"
                            : "text-secondary hover:text-foreground"
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute inset-0 rounded-lg bg-foreground/5"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className="relative z-10">{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Desktop Theme Toggle */}
              <div className="ml-2 border-l border-border pl-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile: Theme Toggle + Hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsMobileOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-foreground transition-colors hover:bg-foreground/5"
                aria-label={isMobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative mt-20 px-5"
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={cn(
                          "block rounded-xl border border-border px-4 py-3.5",
                          "font-display text-lg font-semibold",
                          "transition-colors",
                          isActive
                            ? "bg-foreground/5 text-foreground"
                            : "text-secondary hover:bg-foreground/5 hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
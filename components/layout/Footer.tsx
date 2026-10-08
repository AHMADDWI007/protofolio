"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navItems, socialLinks } from "@/data/navigation";
import { personal } from "@/data/personal";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
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
    <footer className="relative mt-24 border-t border-border">
      <Container size="xl" className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-2-500 text-sm font-bold text-white">
                A
              </div>
              <span className="font-display text-base font-bold">
                Ahmad Dwi Kurnia
              </span>
            </div>
            <p className="max-w-xs text-sm text-secondary">
              Fresh Graduate D3 TI Politala — Full Stack Developer dengan IPK{" "}
              {personal.education.gpa}/{personal.education.gpaMax}.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-secondary">
              Navigasi
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-secondary transition-colors hover:text-accent-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-secondary">
              Terhubung
            </h3>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/50 hover:text-accent-500"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-secondary">
            © {currentYear ?? 2026} Ahmad Dwi Kurnia. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/50 hover:text-accent-500"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            Kembali ke atas
          </button>
        </div>
      </Container>
    </footer>
  );
}
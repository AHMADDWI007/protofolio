"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/navigation";
import { TextReveal } from "@/components/animations/TextReveal";
import { cn } from "@/lib/utils";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-16"
    >
      {/* Background decorations */}
      <HeroBackground />

      <Container size="xl" className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Left: Text */}
          <div className="flex flex-col items-start gap-6">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-secondary">
                {personal.availability}
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-sm text-accent-500"
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name + Role with stagger reveal */}
            <div className="flex flex-col gap-2">
              <TextReveal
                as="h1"
                text={personal.name}
                delay={0.2}
                stagger={0.1}
                className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              />
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-display text-2xl font-bold leading-tight tracking-tight text-gradient sm:text-3xl lg:text-4xl xl:text-5xl"
              >
                {personal.role}
              </motion.h2>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl text-base leading-relaxed text-secondary sm:text-lg"
            >
              {personal.tagline}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 text-sm text-secondary"
            >
              <MapPin className="h-4 w-4" />
              <span>{personal.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("project")}
                className="group"
              >
                Lihat Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("kontak")}
              >
                <Mail className="h-4 w-4" />
                Hubungi Saya
              </Button>
              <a
                href={personal.resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button size="lg" variant="ghost" className="group">
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Unduh CV
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3 pt-4"
            >
              <span className="text-xs uppercase tracking-widest text-secondary">
                Terhubung
              </span>
              <div className="h-px w-8 bg-border" />
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
                      className="group flex h-9 w-9 items-center justify-center rounded-lg border border-border text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/50 hover:text-accent-500"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <AvatarWithEffects />
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-secondary"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">
            Scroll
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-border p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ================= BACKGROUND DECORATION ================= */
function HeroBackground() {
  return (
    <>
      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]",
          "bg-[size:64px_64px]",
          "opacity-[0.15]",
          "dark:opacity-[0.08]",
          "[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
        )}
      />

      {/* Blur circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-500/20 blur-[120px] dark:bg-accent-600/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-2-500/20 blur-[120px] dark:bg-accent-2-600/15"
      />
    </>
  );
}

/* ================= AVATAR WITH EFFECTS ================= */
function AvatarWithEffects() {
  return (
    <div className="group relative">
      {/* Glow behind */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent-500/30 to-accent-2-500/30 opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
      />

      {/* Rotating border gradient */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-1 rounded-[2rem] bg-[conic-gradient(from_0deg,transparent_0deg,var(--color-accent-500)_90deg,transparent_180deg)] opacity-40"
      />

      {/* Image container */}
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={personal.avatar}
            alt={`Foto profil ${personal.name}`}
            width={500}
            height={500}
            priority
            className="h-auto w-full object-cover"
          />
        </motion.div>

        {/* Overlay gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
        />
      </div>

      {/* Floating badge: Experience */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-4 top-12 hidden rounded-2xl border border-border bg-card/90 p-3 shadow-lg backdrop-blur-sm sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/10">
            <Sparkles className="h-4 w-4 text-accent-500" />
          </div>
          <div>
            <p className="font-display text-lg font-bold leading-none">
              {personal.stats.yearsExperience}+
            </p>
            <p className="text-[10px] text-secondary">Tahun</p>
          </div>
        </div>
      </motion.div>

      {/* Floating badge: Projects */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 bottom-12 hidden rounded-2xl border border-border bg-card/90 p-3 shadow-lg backdrop-blur-sm sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-2-500/10">
            <Sparkles className="h-4 w-4 text-accent-2-500" />
          </div>
          <div>
            <p className="font-display text-lg font-bold leading-none">
              {personal.stats.projectsCompleted}+
            </p>
            <p className="text-[10px] text-secondary">Project</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
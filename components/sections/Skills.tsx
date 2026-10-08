"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { skillCategories, skillLevels } from "@/data/skills";
import type { Skill } from "@/types";

export function Skills() {
  return (
    <section id="keahlian" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-accent-2-500/8 blur-[100px]"
      />

      <Container size="xl" className="relative">
        <SectionHeading
          eyebrow="Keahlian"
          title="Teknologi yang saya gunakan"
          description="Kumpulan tools dan teknologi yang saya pakai sehari-hari untuk membangun produk digital."
        />

        {/* Grid kategori */}
        <StaggerContainer
          staggerDelay={0.1}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.title} variants={staggerItem}>
                <SkillCategoryCard
                  title={category.title}
                  icon={Icon}
                  skills={category.skills}
                />
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Legend level */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-secondary">
            <span className="font-medium uppercase tracking-widest">
              Level:
            </span>
            {Object.entries(skillLevels).map(([label, level]) => (
              <div key={label} className="flex items-center gap-2">
                <LevelIndicator level={level as 1 | 2 | 3 | 4} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

/* ================= SKILL CATEGORY CARD ================= */
function SkillCategoryCard({
  title,
  icon: Icon,
  skills,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}) {
  return (
    <Card hover className="group relative flex h-full flex-col overflow-hidden">
      {/* Decorative gradient corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-accent-500/8 blur-2xl transition-opacity duration-500 group-hover:bg-accent-500/20"
      />

      <div className="relative flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-5 w-5" />
          </div>
          <span className="rounded-full border border-border bg-foreground/5 px-2.5 py-1 font-mono text-[10px] text-secondary">
            {skills.length} skills
          </span>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-0.5">
          <h3 className="font-display text-lg font-bold tracking-tight">
            {title}
          </h3>
          <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-500 to-accent-2-500" />
        </div>

        {/* Skills list */}
        <ul className="flex flex-col gap-2.5">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="group/skill flex items-center justify-between gap-3"
            >
              <span className="text-sm text-secondary transition-colors group-hover/skill:text-foreground">
                {skill.name}
              </span>
              <LevelIndicator level={skillLevels[skill.level]} />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

/* ================= LEVEL INDICATOR ================= */
function LevelIndicator({ level }: { level: 1 | 2 | 3 | 4 }) {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`Level ${level} dari 4`}
    >
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-all duration-300",
            i <= level
              ? "bg-gradient-to-r from-accent-500 to-accent-2-500"
              : "bg-border"
          )}
        />
      ))}
    </div>
  );
}
"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Briefcase, Calendar, CheckCircle2, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="pengalaman" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-40 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-[100px] dark:bg-accent-600/8"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-40 h-[400px] w-[400px] rounded-full bg-accent-2-500/10 blur-[100px] dark:bg-accent-2-600/8"
      />

      <Container size="lg" className="relative">
        <SectionHeading
          eyebrow="Pengalaman"
          title="Perjalanan karir saya"
          description="Setiap pengalaman mengajarkan saya sesuatu yang baru dan membentuk cara saya membangun produk digital."
        />

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-16">
          {/* Vertical line background */}
          <div
            aria-hidden="true"
            className="absolute left-[27px] top-0 bottom-0 w-px bg-border sm:left-[31px]"
          />

          {/* Progress line with glow */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute left-[27px] top-0 bottom-0 w-px origin-top bg-gradient-to-b from-accent-500 via-accent-500 to-accent-2-500 shadow-[0_0_10px_var(--color-accent-500)] sm:left-[31px]"
          />

          {/* Timeline items */}
          <ul className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} index={index} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* ================= TIMELINE ITEM ================= */
interface TimelineItemProps {
  experience: (typeof experiences)[number];
  index: number;
}

function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <li className="relative">
      <FadeIn direction="up" delay={index * 0.08}>
        <div className="relative pl-20 sm:pl-24">
          {/* Dot - absolutely positioned */}
          <div className="absolute left-0 top-1">
            <TimelineDot experience={experience} index={index} />
          </div>

          {/* Horizontal connector from dot to card */}
          <div
            aria-hidden="true"
            className={cn(
              "absolute left-[52px] top-[26px] h-px w-6 sm:left-[60px] sm:top-[30px] sm:w-8",
              experience.current
                ? "bg-gradient-to-r from-accent-500 via-accent-500/50 to-transparent"
                : "bg-gradient-to-r from-border via-border to-transparent"
            )}
          />

          {/* Card */}
          <TimelineCard experience={experience} />
        </div>
      </FadeIn>
    </li>
  );
}

/* ================= TIMELINE DOT ================= */
function TimelineDot({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) {
  return (
    <div className="relative">
      {/* Outer glow ring for current */}
      {experience.current && (
        <>
          <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-accent-500/20" />
          <span className="absolute inset-0 -m-1.5 rounded-full bg-accent-500/25 blur-md" />
        </>
      )}

      {/* Dot circle */}
      <div
        className={cn(
          "relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 transition-all duration-300 sm:h-16 sm:w-16",
          experience.current
            ? "border-accent-500 bg-gradient-to-br from-accent-500 to-accent-2-500 shadow-lg shadow-accent-600/40"
            : "border-border bg-card shadow-sm"
        )}
      >
        {experience.current ? (
          <Briefcase className="h-5 w-5 text-white sm:h-6 sm:w-6" />
        ) : (
          <span
            className={cn(
              "font-display text-lg font-bold sm:text-xl",
              "bg-gradient-to-br from-foreground to-secondary bg-clip-text text-transparent"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
    </div>
  );
}

/* ================= TIMELINE CARD ================= */
function TimelineCard({
  experience,
}: {
  experience: (typeof experiences)[number];
}) {
  return (
    <Card hover className="group relative overflow-hidden">
      {/* Decorative gradient corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-accent-500/8 blur-2xl transition-opacity duration-500 group-hover:bg-accent-500/20"
      />

      <div className="relative flex flex-col gap-3.5">
        {/* Header: Badge + Position + Company */}
        <div className="flex flex-col gap-1">
          {/* Badge "Saat ini" inline di header */}
          {experience.current && (
            <div className="mb-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Saat ini
              </span>
            </div>
          )}

          <h3 className="font-display text-lg font-bold leading-tight tracking-tight sm:text-xl">
            {experience.position}
          </h3>
          <p className="flex items-center gap-1.5 text-sm font-medium text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            {experience.company}
          </p>
        </div>

        {/* Meta chips */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 px-2.5 py-1 font-mono text-[11px] font-medium text-accent-600 dark:text-accent-400">
            <Calendar className="h-3 w-3" />
            {experience.period}
          </span>
          {experience.duration && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-foreground/5 px-2.5 py-1 font-mono text-[11px] text-secondary">
              <Clock className="h-3 w-3" />
              {experience.duration}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-secondary">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-foreground/5 px-2 py-0.5 font-mono text-[11px] text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:bg-accent-500/5 hover:text-foreground"
            >
              <CheckCircle2 className="h-2.5 w-2.5 text-accent-500" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
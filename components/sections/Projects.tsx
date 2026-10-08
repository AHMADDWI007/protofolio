"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";
import { projects, projectCategories } from "@/data/projects";
import type { Project } from "@/types";

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Semua") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="project" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent-500/8 blur-[120px]"
      />

      <Container size="xl" className="relative">
        <SectionHeading
          eyebrow="Portfolio"
          title="Project yang saya kerjakan"
          description="Kumpulan project dari berbagai bidang — dari web, mobile, backend, IoT, hingga machine learning."
        />

        {/* Filter */}
        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-white"
                      : "text-secondary hover:text-foreground"
                  )}
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategory"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500 to-accent-2-500 shadow-lg shadow-accent-600/25"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Grid */}
        <motion.div
          layout
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
            <Folder className="h-10 w-10 text-secondary" />
            <p className="mt-4 text-sm text-secondary">
              Belum ada project untuk kategori ini.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

/* ================= PROJECT CARD ================= */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-600/5">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-foreground/5">
        <Image
          src={project.image}
          alt={`Preview project ${project.title}`}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Overlay gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="text-[10px] font-medium uppercase tracking-wider text-white">
              Featured
            </span>
          </div>
        )}

        {/* Category chip */}
        <div className="absolute right-3 top-3 inline-flex items-center rounded-full border border-white/20 bg-black/40 px-2.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-medium text-white">
            {project.category}
          </span>
        </div>

        {/* Hover action buttons */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3 opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black transition-transform hover:scale-105"
              aria-label={`Live demo ${project.title}`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md transition-transform hover:scale-105"
              aria-label={`Source code ${project.title}`}
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-bold leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-secondary line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border border-border bg-foreground/5 px-2 py-0.5 font-mono text-[10px] text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
import type { SkillCategory } from "@/types";
import { Code2, Database, Server, Wrench } from "lucide-react";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "Laravel", level: "Intermediate" },
      { name: "REST API", level: "Intermediate" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
      { name: "Firestore", level: "Intermediate" },
      { name: "MongoDB", level: "Beginner" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Figma", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
      { name: "Vercel", level: "Intermediate" },
    ],
  },
];

export const skillLevels = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Expert: 4,
} as const;
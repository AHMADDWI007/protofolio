import type { SkillCategory } from "@/types";
import { Code2, Database, Smartphone, Wrench } from "lucide-react";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "Dart", level: "Intermediate" },
      { name: "PHP", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
    ],
  },
  {
    title: "Web & Mobile",
    icon: Smartphone,
    skills: [
      { name: "Laravel", level: "Advanced" },
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "REST API", level: "Advanced" },
      { name: "Android (Java)", level: "Intermediate" },
      { name: "Flutter", level: "Intermediate" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "Firebase", level: "Intermediate" },
      { name: "Firestore", level: "Intermediate" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Android Studio", level: "Intermediate" },
    ],
  },
];

export const skillLevels = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Expert: 4,
} as const;
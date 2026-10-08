import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export type BrandIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: BrandIconComponent | LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export type ProjectCategory =
  | "Web"
  | "Mobile"
  | "Backend"
  | "IoT"
  | "Machine Learning";

export interface Experience {
  id: string;
  period: string;
  duration?: string;
  position: string;
  company: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}
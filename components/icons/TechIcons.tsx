import type { ComponentType, SVGProps } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiFirebase,
  SiFlutter,
  SiDart,
  SiGithub,
  SiGit,
  SiAndroid,
  SiPostman,
  SiFigma,
  SiVercel,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAndroidstudio,
} from "react-icons/si";
import { Code2, Globe, Coffee } from "lucide-react";

export type TechIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Mapping nama skill (lowercase) ke icon.
 */
export const techIcons: Record<string, TechIconComponent> = {
  // Programming
  java: Coffee,
  dart: SiDart,
  php: SiPhp,
  javascript: SiJavascript,
  typescript: SiTypescript,

  // Web & Mobile
  laravel: SiLaravel,
  html: SiHtml5,
  css: SiCss,
  "rest api": Globe,
  "android (java)": SiAndroid,
  android: SiAndroid,
  flutter: SiFlutter,

  // Frontend
  react: SiReact,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  "tailwind css": SiTailwindcss,
  tailwind: SiTailwindcss,

  // Backend
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,

  // Database
  mysql: SiMysql,
  firebase: SiFirebase,
  firestore: SiFirebase,
  mongodb: SiMongodb,

  // Tools
  git: SiGit,
  github: SiGithub,
  "vs code": Code2,
  figma: SiFigma,
  postman: SiPostman,
  vercel: SiVercel,
  "android studio": SiAndroidstudio,
};

export function getTechIcon(name: string): TechIconComponent | null {
  const normalized = name.toLowerCase().trim();
  return techIcons[normalized] ?? null;
}

/**
 * Mapping warna brand untuk setiap skill.
 * Kalau skill tidak ada di mapping, pakai warna fallback dari komponen.
 */
export const techColors: Record<string, string> = {
  // Programming
  java: "#ED8B00",
  dart: "#0175C2",
  php: "#777BB4",
  javascript: "#F7DF1E",
  typescript: "#3178C6",

  // Web & Mobile
  laravel: "#FF2D20",
  html: "#E34F26",
  css: "#1572B6",
  "rest api": "#009688",
  "android (java)": "#3DDC84",
  android: "#3DDC84",
  flutter: "#02569B",

  // Frontend
  react: "#61DAFB",
  "next.js": "#000000",
  nextjs: "#000000",
  "tailwind css": "#06B6D4",
  tailwind: "#06B6D4",

  // Backend
  "node.js": "#339933",
  nodejs: "#339933",
  express: "#000000",

  // Database
  mysql: "#4479A1",
  firebase: "#FFCA28",
  firestore: "#FFCA28",
  mongodb: "#47A248",

  // Tools
  git: "#F05032",
  github: "#181717",
  "vs code": "#007ACC",
  figma: "#F24E1E",
  postman: "#FF6C37",
  vercel: "#000000",
  "android studio": "#3DDC84",
};

export function getTechColor(name: string): string | null {
  const normalized = name.toLowerCase().trim();
  return techColors[normalized] ?? null;
}
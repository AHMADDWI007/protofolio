import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    period: "2025 — Sekarang",
    duration: "Sedang berjalan",
    position: "Frontend Developer",
    company: "[NAMA PERUSAHAAN 1]",
    description:
      "Mengembangkan dan memelihara dashboard internal menggunakan React dan Next.js. Berkolaborasi dengan tim desain untuk mengimplementasikan UI/UX yang konsisten, serta mengoptimalkan performa aplikasi dengan Code Splitting dan Lazy Loading.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    current: true,
  },
  {
    id: "exp-2",
    period: "2024 — 2025",
    duration: "12 bulan",
    position: "Full Stack Developer",
    company: "[NAMA PERUSAHAAN 2]",
    description:
      "Membangun REST API menggunakan Node.js dan Express untuk aplikasi mobile. Mengintegrasikan payment gateway, authentication, dan real-time notification menggunakan Firebase Cloud Messaging.",
    technologies: ["Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    id: "exp-3",
    period: "2023 — 2024",
    duration: "10 bulan",
    position: "Web Developer",
    company: "[NAMA PERUSAHAAN 3]",
    description:
      "Mengembangkan company profile dan landing page untuk berbagai klien. Fokus pada responsive design, SEO optimization, dan integrasi CMS untuk memudahkan update konten.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
  },
  {
    id: "exp-4",
    period: "2022 — 2023",
    duration: "8 bulan",
    position: "Junior Developer",
    company: "[NAMA PERUSAHAAN 4]",
    description:
      "Memulai karir sebagai junior developer, mengerjakan berbagai project internal mulai dari bug fixing, feature enhancement, hingga maintenance sistem legacy.",
    technologies: ["PHP", "JavaScript", "MySQL", "Git"],
  },
];
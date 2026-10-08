import type { Stat } from "@/types";
import { GraduationCap, Heart, Target } from "lucide-react";

export const aboutStats: Stat[] = [
  { label: "IPK", value: 3.45, suffix: "" },          // ← IPK asli
  { label: "Tahun Belajar", value: 3, suffix: "+" },
  { label: "Project Selesai", value: 10, suffix: "+" },
  { label: "Teknologi Dikuasai", value: 15, suffix: "+" },
  { label: "Sertifikat", value: 5, suffix: "+" },
];

export const aboutCards = [
  {
    icon: GraduationCap,
    title: "Pendidikan",
    description:
      "D3 Teknologi Informasi, Politeknik Negeri Tanah Laut (Politala). IPK 3.45/4.00. Fokus pada pemrograman web, basis data, dan pengembangan aplikasi.",
  },
  {
    icon: Target,
    title: "Fokus Bidang",
    description:
      "Full Stack Web Development dengan spesialisasi di React, Next.js, dan Node.js untuk membangun aplikasi modern yang scalable.",
  },
  {
    icon: Heart,
    title: "Minat",
    description:
      "Open source, clean code, UI/UX design, dan eksplorasi teknologi web terbaru. Aktif belajar dan mengikuti perkembangan industri.",
  },
];

export const aboutContent = {
  eyebrow: "Tentang Saya",
  title:
    "Fresh graduate yang bersemangat membangun produk digital dengan kualitas terbaik.",
  paragraphs: [
    "Saya Ahmad Dwi Kurnia, fresh graduate D3 Teknologi Informasi dari Politeknik Negeri Tanah Laut (Politala). Saya memiliki passion di bidang web development dan senang membangun aplikasi yang tidak hanya berfungsi dengan baik, tetapi juga memberikan pengalaman pengguna yang menyenangkan.",
    "Selama kuliah, saya aktif mengerjakan berbagai project mulai dari tugas akademik, freelance, hingga magang industri. Saya percaya bahwa pembelajaran terbaik datang dari praktik langsung, dan setiap project adalah kesempatan untuk berkembang menjadi developer yang lebih baik.",
  ],
};
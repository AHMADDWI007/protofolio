import type { Stat } from "@/types";
import { GraduationCap, Heart, Target } from "lucide-react";

export const aboutStats: Stat[] = [
  { label: "IPK", value: 3.45, suffix: "" },
  { label: "Tahun Studi", value: 3, suffix: "+" },
  { label: "Project Selesai", value: 5, suffix: "+" },
  { label: "Teknologi Dikuasai", value: 15, suffix: "+" },
];

export const aboutCards = [
  {
    icon: GraduationCap,
    title: "Pendidikan",
    description:
      "D3 Teknologi Informasi, Jurusan Komputer dan Bisnis, Politeknik Negeri Tanah Laut. Lulus dengan IPK 3.45/4.00.",
  },
  {
    icon: Target,
    title: "Fokus Bidang",
    description:
      "Pengembangan aplikasi web dan mobile, sistem informasi, serta integrasi API. Terbiasa dengan Laravel, Flutter, dan Firebase untuk membangun solusi digital yang scalable.",
  },
  {
    icon: Heart,
    title: "Minat",
    description:
      "Web development, mobile app development, IoT, clean code, dan eksplorasi teknologi baru. Aktif mengerjakan project akademik dan freelance.",
  },
];

export const aboutContent = {
  eyebrow: "Tentang Saya",
  title:
    "Fresh graduate yang bersemangat membangun produk digital dengan kualitas terbaik.",
  paragraphs: [
    "Saya Ahmad Dwi Kurnia, lulusan Diploma III Teknologi Informasi dari Politeknik Negeri Tanah Laut. Saya memiliki minat besar pada pengembangan aplikasi web, mobile, dan sistem informasi. Berbekal pengalaman Praktik Kerja Lapangan (PKL) di PT Nusantara Batulicin, saya terbiasa melakukan analisis kebutuhan, pengembangan aplikasi, perancangan database, integrasi API, hingga pengujian dan troubleshooting sistem.",
    "Selama kuliah, saya aktif mengerjakan berbagai project akademik mulai dari sistem informasi berbasis web, aplikasi mobile, hingga implementasi IoT untuk smart aquaculture. Setiap project menjadi kesempatan untuk belajar hal baru dan mengasah kemampuan problem solving. Saya percaya bahwa produk digital yang baik lahir dari pemahaman mendalam tentang kebutuhan pengguna.",
  ],
};
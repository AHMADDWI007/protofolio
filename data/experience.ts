import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    period: "Oktober 2025 — Maret 2026",
    duration: "6 bulan",
    position: "Karyawan Magang (PKL)",
    company: "PT Nusantara Batulicin",
    description:
      "Mengembangkan Sistem Informasi Pengolahan Bokar dan Produksi SIR-20 berbasis web dan mobile untuk mendukung operasional perusahaan. Menganalisis kebutuhan pengguna, merancang alur sistem, mengembangkan dan mengintegrasikan database, serta melakukan pengujian, troubleshooting, dan optimalisasi sistem.",
    technologies: [
      "Laravel",
      "Flutter",
      "MySQL",
      "REST API",
      "Firebase",
    ],
    current: false,
  },
  {
    id: "exp-2",
    period: "Januari 2024 — September 2024",
    duration: "9 bulan",
    position: "Anggota Divisi Badminton",
    company: "Spora Politala",
    description:
      "Berpartisipasi dalam perencanaan dan pelaksanaan kegiatan badminton sebagai bagian dari program kerja organisasi. Berkolaborasi dengan anggota dan pengurus dalam pelaksanaan kegiatan serta mengembangkan kemampuan komunikasi dan kerja sama tim.",
    technologies: ["Komunikasi", "Kerja Tim", "Manajemen Kegiatan"],
    current: false,
  },
];
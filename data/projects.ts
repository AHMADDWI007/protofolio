import type { Project, ProjectCategory } from "@/types";

export const projects: Project[] = [
  {
    id: "sikedai",
    title: "SIKEDAI — Sistem Informasi Kedai Kopi Rudi Tabuti",
    description:
      "Sistem informasi pengelolaan kedai kopi Rudi Tabuti yang terintegrasi dengan WhatsApp untuk pemesanan, konfirmasi pesanan, dan notifikasi ke pelanggan secara real-time.",
    image: "/images/sikedai.png",
    category: "Web",
    technologies: ["Laravel", "MySQL", "WhatsApp API", "Bootstrap"],
    github: "https://github.com/AHMADDWI007",
    demo: "",
    featured: true,
  },
  {
    id: "aquaculture",
    title: "Smart Aquaculture — Monitoring Kualitas Air Kolam",
    description:
      "Penerapan Smart Aquaculture sebagai solusi otomatis untuk pengelolaan kualitas air kolam ikan Rudi Tabuti. Monitoring pH, suhu, dan kekeruhan air secara real-time dengan notifikasi otomatis berbasis mobile.",
    image: "/images/aquaculture.png",
    category: "IoT",
    technologies: ["Flutter", "Firebase", "IoT Sensor", "Node.js"],
    github: "https://github.com/AHMADDWI007",
    demo: "",
    featured: true,
  },
  {
    id: "sigancy",
    title: "SIGANCY — Sistem Informasi Penjualan Gantungan Kunci Akrilik",
    description:
      "Sistem informasi penjualan gantungan kunci akrilik dengan fitur katalog produk, keranjang belanja, manajemen pesanan, dan laporan penjualan untuk pemilik usaha.",
    image: "/images/gancikuy.png",
    category: "Web",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/AHMADDWI007",
    demo: "",
  },
  {
    id: "e-prod",
    title: "E-PROD — Sistem Informasi Pengelolaan Bokar & SIR-20",
    description:
      "Sistem informasi pengelolaan Bokar (Bahan Olah Karet) dan produksi SIR-20 berbasis web dan mobile untuk mendukung operasional PT Nusantara Batulicin. Mencakup pencatatan, monitoring produksi, dan pelaporan.",
    image: "/images/e-produksi.png",
    category: "Web",
    technologies: ["Laravel", "Flutter", "MySQL", "REST API", "Firebase"],
    github: "https://github.com/AHMADDWI007",
    demo: "",
    featured: true,
  },
  {
    id: "sipoinem",
    title: "SIPOINEM — Sistem Pengelolaan Sampah Desa Bumi Jaya",
    description:
      "Sistem informasi pengelolaan sampah warga di Desa Bumi Jaya berbasis poin dan penjemputan terjadwal, terintegrasi dengan WhatsApp API untuk notifikasi jadwal penjemputan dan reward poin ke warga.",
    image: "/images/sipoinem.png",
    category: "Web",
    technologies: ["Laravel", "MySQL", "WhatsApp API", "Bootstrap"],
    github: "https://github.com/AHMADDWI007",
    demo: "",
  },
];

export const projectCategories: Array<"Semua" | ProjectCategory> = [
  "Semua",
  "Web",
  "Mobile",
  "Backend",
  "IoT",
  "Machine Learning",
];
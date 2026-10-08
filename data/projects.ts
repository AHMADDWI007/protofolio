import type { Project, ProjectCategory } from "@/types";

export const projects: Project[] = [
  {
    id: "smart-pool-monitoring",
    title: "Smart Pool Monitoring",
    description:
      "Aplikasi monitoring kolam berbasis Android dengan integrasi sensor IoT untuk memantau kualitas air secara real-time.",
    image: "/images/project-1.svg",
    category: "IoT",
    technologies: ["Android", "Java", "Firebase", "Firestore"],
    github: "[GITHUB_URL]",
    demo: "[DEMO_URL]",
    featured: true,
  },
  {
    id: "e-commerce-dashboard",
    title: "E-Commerce Dashboard",
    description:
      "Dashboard admin untuk mengelola produk, pesanan, dan analitik penjualan dengan visualisasi data interaktif.",
    image: "/images/project-2.svg",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    github: "[GITHUB_URL]",
    demo: "[DEMO_URL]",
    featured: true,
  },
  {
    id: "task-management-api",
    title: "Task Management API",
    description:
      "REST API untuk aplikasi manajemen tugas dengan autentikasi JWT, role-based access, dan real-time notification.",
    image: "/images/project-3.svg",
    category: "Backend",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
    github: "[GITHUB_URL]",
  },
  {
    id: "fitness-tracker-mobile",
    title: "Fitness Tracker Mobile",
    description:
      "Aplikasi mobile untuk tracking aktivitas harian, kalori, dan progress workout dengan UI yang clean.",
    image: "/images/project-4.svg",
    category: "Mobile",
    technologies: ["React Native", "Expo", "Firebase"],
    github: "[GITHUB_URL]",
    demo: "[DEMO_URL]",
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis",
    description:
      "Model machine learning untuk menganalisis sentimen tweet berbahasa Indonesia dengan akurasi 92%.",
    image: "/images/project-5.svg",
    category: "Machine Learning",
    technologies: ["Python", "TensorFlow", "FastAPI", "Streamlit"],
    github: "[GITHUB_URL]",
    demo: "[DEMO_URL]",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Website portfolio modern dengan animasi halus, dark mode, dan performa tinggi menggunakan Next.js 16.",
    image: "/images/project-6.svg",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "Motion", "Tailwind CSS"],
    github: "[GITHUB_URL]",
    demo: "[DEMO_URL]",
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
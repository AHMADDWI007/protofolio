import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ahmad Dwi Kurnia — Full Stack Developer",
    short_name: "Maswi",
    description:
      "Portfolio pribadi Ahmad Dwi Kurnia, Full Stack Developer fresh graduate D3 Teknologi Informasi Politala.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
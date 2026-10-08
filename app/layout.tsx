import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { MotionProvider } from "@/components/animations/MotionProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmad-dwi-kurnia.vercel.app"),
  title: {
    default: "Ahmad Dwi Kurnia — Full Stack Developer",
    template: "%s | Ahmad Dwi Kurnia",
  },
  description:
    "Portfolio pribadi Ahmad Dwi Kurnia, Full Stack Developer fresh graduate D3 Teknologi Informasi Politala yang membangun aplikasi web modern, scalable, dan user-friendly.",
  keywords: [
   "portfolio",
    "Ahmad Dwi Kurnia",
    "full stack developer",
    "web developer",
    "react developer",
    "next.js developer",
    "fresh graduate",
    "Politala",
    "Pelaihari",
    "Kalimantan Selatan",
  ],
  authors: [
    {
      name: "Ahmad Dwi Kurnia",
      url: "https://ahmad-dwi-kurnia.vercel.app",
    },
  ],
  creator: "Ahmad Dwi Kurnia",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ahmad-dwi-kurnia.vercel.app",
    title: "Ahmad Dwi Kurnia — Full Stack Developer",
    description:
      "Portfolio pribadi Ahmad Dwi Kurnia, Full Stack Developer fresh graduate D3 Teknologi Informasi Politala.",
    siteName: "Ahmad Dwi Kurnia Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Dwi Kurnia — Full Stack Developer",
    description: "Portfolio pribadi Ahmad Dwi Kurnia, Full Stack Developer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://ahmad-dwi-kurnia.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <ScrollProgress />
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
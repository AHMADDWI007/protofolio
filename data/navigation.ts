import type { NavItem, SocialLink } from "@/types";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Mail } from "lucide-react";

export const navItems: NavItem[] = [
  { label: "Beranda", href: "#beranda", id: "beranda" },
  { label: "Tentang", href: "#tentang", id: "tentang" },
  { label: "Pengalaman", href: "#pengalaman", id: "pengalaman" },
  { label: "Project", href: "#project", id: "project" },
  { label: "Keahlian", href: "#keahlian", id: "keahlian" },
  { label: "Kontak", href: "#kontak", id: "kontak" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/AHMADDWI007",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmad-dwi-kurnia/",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:dwikurnianew@gmail.com",
    icon: Mail,
  },
];
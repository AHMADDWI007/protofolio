import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan className dengan clsx dan tailwind-merge.
 * Tailwind class yang konflik akan otomatis di-resolve (yang terakhir menang).
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-accent-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * The 'cn' helper merges Tailwind classes and handles conditional logic
 * without style conflicts—a standard in high-end Next.js projects.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
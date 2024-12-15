import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  // Get the navbar height for offset
  const navbar = document.querySelector('nav');
  const navbarHeight = navbar ? navbar.offsetHeight : 0;

  // Use both scrollTo and scrollIntoView for better compatibility
  try {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    // Try scrollTo first
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } catch (error) {
    // Fallback to scrollIntoView
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // Additional offset adjustment
    setTimeout(() => {
      window.scrollBy(0, -navbarHeight);
    }, 0);
  }
};

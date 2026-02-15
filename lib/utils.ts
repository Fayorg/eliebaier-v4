import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function formatBlogPostTitle(title: string): string {
    return title
        .toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll("'", '')
        .replaceAll('?', '')
        .replaceAll('!', '')
        .replaceAll('.', '')
        .replaceAll(',', '');
}
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
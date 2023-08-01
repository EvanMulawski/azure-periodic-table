/* src/lib/utils.ts */

import { type Item } from '@/app/data';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export function handleGoogleTag(item: Item) {
  if (process.env.NODE_ENV !== 'production') return;
  // check if window is valid
  if (typeof window === 'undefined') return;

  // Check if the gtag function is defined
  if (window.gtag) {
    window.gtag('event', 'element_selected', {
      event_category: item.category,
      event_label: 'resource',
      event_value: item.name,
    });
  }
}

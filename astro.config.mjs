// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kamil-elewacje.pl',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});

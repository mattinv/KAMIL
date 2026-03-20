// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kamil-elewacje.pl',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});

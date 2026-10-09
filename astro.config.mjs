// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://christianrijke.de',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !/\/(imprint|privacy)$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

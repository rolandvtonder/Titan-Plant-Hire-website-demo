import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: change the default `site` to the real domain before going live —
// canonical URLs, the sitemap and social share links are all built from it.
//
// SITE_URL / BASE_PATH are only set by the GitHub Pages demo build
// (.github/workflows/deploy.yml), which serves the site from a sub-folder.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.titanplanthire.co.za',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  integrations: [sitemap({filter: (page) => !page.includes('/404')})],
  vite: {plugins: [tailwindcss()]},
});

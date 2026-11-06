import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: change `site` to the real domain before going live — canonical URLs,
// the sitemap and social share links are all built from it.
export default defineConfig({
  site: 'https://www.titanplanthire.co.za',
  trailingSlash: 'always',
  integrations: [sitemap({filter: (page) => !page.includes('/404')})],
  vite: {plugins: [tailwindcss()]},
});

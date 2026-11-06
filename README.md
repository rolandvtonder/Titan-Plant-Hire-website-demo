# Titan Plant Hire website

Static multi-page site built with Astro, Tailwind CSS v4 and Lenis smooth scrolling. Every page is pre-rendered HTML with its own title, description, social card and Google structured data.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the finished site to dist/
```

Upload the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, or cPanel hosting).

## Where to edit

| What | File |
| --- | --- |
| Phone, WhatsApp, email, hours, areas | `src/data/site.ts` |
| Machines (TLB, skid steer, etc.) | `src/data/machines.ts` |
| Sand, stone & grit (prices) | `src/data/materials.ts` |
| Clearing services | `src/data/services.ts` |
| General FAQs | `src/data/faqs.ts` |
| Photos | `src/assets/photos/`, with alt text in `src/data/photos.ts` |
| Colours and fonts | `src/styles/global.css` |

## Before going live

- [ ] Set the real domain in `astro.config.mjs` (`site`) and `public/robots.txt`
- [ ] Add opening hours and an email address in `src/data/site.ts` (if you want them shown)
- [ ] Check the list of suburbs in `src/data/site.ts`
- [ ] Confirm the prices are still current (sand R1100, stone R1350, skid steer R2800/day)
- [ ] Replace the rebuilt logo (`src/components/Logo.astro`) with the original logo file
- [ ] Add race details (driver, class, results) to `src/pages/motorsport.astro` if you want them
- [ ] Register with Google Business Profile and Search Console, then submit `/sitemap-index.xml`

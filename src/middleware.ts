import {defineMiddleware} from 'astro:middleware';

/**
 * Only does anything when the site is built to live in a sub-folder (the
 * GitHub Pages demo). Links in the pages are written as "/plant-hire/" etc.;
 * this adds the sub-folder to every root-relative link and to absolute URLs
 * on the site's own domain (canonical, social cards, structured data).
 * On the real domain (base "/") pages are passed through untouched.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const site = (import.meta.env.SITE ?? '').replace(/\/$/, '');
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const onRequest = defineMiddleware(async (_ctx, next) => {
  const res = await next();
  if (!base || !(res.headers.get('content-type') ?? '').includes('text/html')) return res;

  const folder = esc(base.slice(1));
  let html = await res.text();
  html = html.replace(new RegExp(`((?:href|src|action)=")/(?!/|${folder}/)`, 'g'), `$1${base}/`);
  if (site) html = html.replace(new RegExp(`${esc(site)}/(?!${folder}/)`, 'g'), `${site}${base}/`);
  return new Response(html, {status: res.status, headers: res.headers});
});

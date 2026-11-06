import type {Entry, Faq} from '../data/types';

/** JSON-LD helpers so every page tells Google what it is about. */

const abs = (site: URL, path: string) => new URL(path, site).href;

export function breadcrumbs(site: URL, crumbs: {label: string; href: string}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{label: 'Home', href: '/'}, ...crumbs].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: abs(site, c.href),
    })),
  };
}

export function faqPage(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({'@type': 'Question', name: f.q, acceptedAnswer: {'@type': 'Answer', text: f.a}})),
  };
}

export function service(site: URL, e: Entry, path: string, category: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: e.name,
    serviceType: category,
    description: e.description,
    url: abs(site, path),
    provider: {'@id': `${abs(site, '/')}#business`},
    areaServed: {'@type': 'City', name: 'Port Elizabeth (Gqeberha)'},
    ...(e.price
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: 'ZAR',
            price: e.price.from,
            description: `From R${e.price.from} ${e.price.unit}`,
          },
        }
      : {}),
  };
}

/** Headline lines; `i` lines are set in italic Titan orange. */
export type Line = {t: string; i?: boolean};

export type Section = {
  h: string;
  p?: string[];
  list?: string[];
};

export type Faq = {q: string; a: string};

/** One detail page: a machine, a material or a clearing service. */
export type Entry = {
  slug: string;
  /** Short name used in cards, menus and breadcrumbs */
  name: string;
  /** <title> — keep under ~60 characters */
  title: string;
  /** Meta description — keep under ~155 characters */
  description: string;
  eyebrow: string;
  headline: Line[];
  intro: string;
  /** One-line summary for cards */
  card: string;
  hero: string;
  gallery: string[];
  facts: [string, string][];
  /** Optional "from" price shown on cards and in structured data */
  price?: {from: number; unit: string};
  uses: string[];
  body: Section[];
  faqs: Faq[];
  related: string[];
};

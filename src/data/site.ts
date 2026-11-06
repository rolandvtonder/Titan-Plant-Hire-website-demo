/**
 * Business facts in one place. Anything marked TODO was not available from
 * the Facebook page — fill it in and every page, the footer and the
 * Google structured data update together.
 */
export const site = {
  name: 'Titan Plant Hire',
  shortName: 'Titan',
  tagline: 'Plant hire, sand & stone, site clearing',
  phone: '072 244 1916',
  phoneHref: 'tel:+27722441916',
  phoneIntl: '+27722441916',
  /** wa.me format: country code, no plus, no leading zero */
  whatsapp: '27722441916',
  whatsappHref: 'https://wa.me/27722441916',
  facebook: 'https://www.facebook.com/p/Titan-Plant-Hire-100075014383812/',
  email: '', // TODO: add an email address if you want one shown
  city: 'Port Elizabeth',
  cityAlt: 'Gqeberha',
  metro: 'Nelson Mandela Bay',
  region: 'Eastern Cape',
  country: 'ZA',
  /**
   * TODO: add your opening hours, e.g. {days: 'Monday – Friday', time: '07:00 – 17:00'}.
   * Left empty, the site says "call or WhatsApp" instead of showing hours.
   */
  hours: [] as {days: string; time: string}[],
  /** Same hours in schema.org format for Google, e.g. 'Mo-Fr 07:00-17:00' */
  hoursSchema: [] as string[],
  /** Rough centre of Port Elizabeth for the map pin in structured data */
  geo: {lat: -33.9608, lng: 25.6022},
};

export const nav = [
  {label: 'Home', href: '/'},
  {label: 'Plant hire', href: '/plant-hire/'},
  {label: 'Sand & stone', href: '/sand-and-stone/'},
  {label: 'Site clearing', href: '/site-clearing/'},
  {label: 'Gallery', href: '/gallery/'},
  {label: 'Motorsport', href: '/motorsport/'},
  {label: 'About', href: '/about/'},
  {label: 'Contact', href: '/contact/'},
];

/** Suburbs and towns around Nelson Mandela Bay. TODO: trim to where you actually go. */
export const areas = [
  'Walmer', 'Summerstrand', 'Humewood', 'Central', 'Newton Park', 'Mill Park', 'Greenacres',
  'Lorraine', 'Kabega Park', 'Westering', 'Framesby', 'Sunridge Park', 'Theescombe',
  'Fairview', 'Charlo', 'Mount Pleasant', 'Lovemore Heights', 'Parsons Hill',
  'Sherwood', 'Rowallan Park', 'Greenbushes', 'Kragga Kamma', 'Seaview', 'Schoenmakerskop',
  'Bluewater Bay', 'Amsterdamhoek', 'North End', 'Korsten', 'Motherwell',
  'Despatch', 'Kariega (Uitenhage)', 'Colchester', 'Coega',
];

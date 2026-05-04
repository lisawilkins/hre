import { PHONE_TEL, TESTIMONIALS } from './content';

export const SITE_URL = 'https://homerunelectricllc.com';

const BUSINESS_ID = `${SITE_URL}/#business`;

export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ElectricalContractor',
  '@id': BUSINESS_ID,
  name: 'Home Run Electric',
  url: SITE_URL,
  telephone: PHONE_TEL,
  foundingDate: '2003',
  description:
    'Licensed, bonded, and insured electrical contractor serving Western Washington since 2003. Residential and commercial electrical services including panel upgrades, EV chargers, generators, and smart home wiring.',
  hasCredential: 'Washington State Electrical Contractor License HOMERRE974K2',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '21118 66th Avenue W.',
    addressLocality: 'Lynnwood',
    addressRegion: 'WA',
    postalCode: '98036',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Snohomish County, WA' },
    { '@type': 'AdministrativeArea', name: 'King County, WA' },
    { '@type': 'AdministrativeArea', name: 'Pierce County, WA' },
    { '@type': 'AdministrativeArea', name: 'Thurston County, WA' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '07:00',
    closes: '18:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: String(TESTIMONIALS.length),
    bestRating: '5',
    worstRating: '1',
  },
  review: TESTIMONIALS.map(t => ({
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(t.rating),
      bestRating: '5',
    },
    author: { '@type': 'Person', name: t.name },
    reviewBody: t.quote,
    ...(t.source && { publisher: { '@type': 'Organization', name: t.source } }),
  })),
});

// Parses "$2,600" → 2600, returns null for non-numeric strings
const parsePrice = str => {
  if (!str) return null;
  const n = parseFloat(str.replace(/[^0-9.]/g, ''));
  return isNaN(n) ? null : n;
};

export const serviceSchema = ({ name, description, path, fromPrice }) => {
  const price = parsePrice(fromPrice);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { '@type': 'ElectricalContractor', '@id': BUSINESS_ID },
    areaServed: 'Western Washington',
    serviceType: 'Electrical Services',
  };
  if (price) {
    schema.offers = {
      '@type': 'Offer',
      price: String(price),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: String(price),
        priceCurrency: 'USD',
        description: 'Starting price',
      },
    };
  }
  return schema;
};

export const breadcrumbSchema = crumbs => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${SITE_URL}${c.path}`,
  })),
});

export const faqSchema = items => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

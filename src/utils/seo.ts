import { AppConfig } from './AppConfig';

/**
 * Shared schema.org / JSON-LD helpers.
 *
 * All entities reuse stable @id anchors so search engines merge the Person
 * across the home page, /about, posts, projects, consulting, and meishi into a
 * single knowledge-graph node.
 */

export const SITE_URL = AppConfig.url; // 'https://hewig.dev'
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Absolute URL for a root-relative path (or pass-through if already absolute). */
export const abs = (path: string): string => new URL(path, `${SITE_URL}/`).href;

/** The canonical Person node for Tao Xu (hewig). Reuse via { '@id': PERSON_ID }. */
export const personNode = () => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: AppConfig.name,
  alternateName: AppConfig.author,
  url: `${SITE_URL}/`,
  jobTitle: AppConfig.jobTitle,
  image: abs('/assets/images/avatar.png'),
  description:
    'Tokyo-based software engineer and blockchain developer; former founding engineer at Trust Wallet.',
  knowsAbout: [
    'Blockchain',
    'Cryptocurrency wallets',
    'Rust',
    'Swift',
    'macOS development',
    'Smart contracts',
  ],
  sameAs: [
    AppConfig.social.github,
    AppConfig.social.twitter,
    AppConfig.social.youtube,
    AppConfig.social.telegram,
    AppConfig.social.farcaster,
  ],
});

/** The site-level WebSite node, published by the Person. */
export const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: AppConfig.title,
  url: `${SITE_URL}/`,
  description: AppConfig.description,
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
});

/** A BreadcrumbList from an ordered list of { name, path } crumbs. */
export const breadcrumbNode = (crumbs: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

export type SoftwareAppInput = {
  name: string;
  description: string;
  url: string;
  operatingSystem: string;
  applicationCategory?: string;
  downloadUrl?: string;
  sameAs?: string[];
  price?: string;
};

/** A SoftwareApplication node for an app/tool landing page. */
export const softwareAppNode = (a: SoftwareAppInput) => ({
  '@type': 'SoftwareApplication',
  name: a.name,
  description: a.description,
  url: a.url,
  operatingSystem: a.operatingSystem,
  applicationCategory: a.applicationCategory ?? 'DeveloperApplication',
  ...(a.downloadUrl ? { downloadUrl: a.downloadUrl } : {}),
  offers: {
    '@type': 'Offer',
    price: a.price ?? '0',
    priceCurrency: 'USD',
  },
  author: { '@id': PERSON_ID },
  ...(a.sameAs && a.sameAs.length ? { sameAs: a.sameAs } : {}),
});

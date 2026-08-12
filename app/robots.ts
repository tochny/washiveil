import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

// /design/ pages are de-indexed with a noindex meta tag, not a Disallow.
// A Disallow would prevent crawlers from reading the noindex tag at all.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://washiveil.alexchih.com/sitemap.xml',
  };
}

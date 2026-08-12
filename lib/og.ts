import type { Metadata } from 'next';

const BASE = 'https://washiveil.alexchih.com';

type OgLocale = 'en_US' | 'zh_TW' | 'ja_JP';

/**
 * Per-locale base OpenGraph object. Spread into every metadata export that
 * defines its own `openGraph` — Next 15 replaces the parent's openGraph
 * wholesale rather than merging field-by-field, so pages that override any
 * OG field must carry the full set or they lose images/type/siteName/locale.
 */
export function baseOg(
  locale: OgLocale,
  opts: { title: string; description: string; url: string }
): NonNullable<Metadata['openGraph']> {
  const image = locale === 'en_US' ? 'en' : locale === 'zh_TW' ? 'zh-tw' : 'ja';
  return {
    title: opts.title,
    description: opts.description,
    url: opts.url,
    siteName: 'washiveil',
    locale,
    type: 'website',
    images: [{ url: `/og/${image}.png`, width: 1200, height: 630, alt: opts.title }],
  };
}

export { BASE };

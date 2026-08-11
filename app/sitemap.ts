import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://washiveil.alexchih.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: `${BASE}/`, 'zh-Hant': `${BASE}/zh-tw/`, ja: `${BASE}/ja/` };
  return [
    { url: `${BASE}/`, alternates: { languages } },
    { url: `${BASE}/zh-tw/`, alternates: { languages } },
    { url: `${BASE}/ja/`, alternates: { languages } },
  ];
}

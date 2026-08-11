import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://washiveil.alexchih.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: `${BASE}/`, 'zh-Hant': `${BASE}/zh-tw/`, ja: `${BASE}/ja/` };
  const a11yLanguages = {
    en: `${BASE}/accessibility/`,
    'zh-Hant': `${BASE}/zh-tw/accessibility/`,
    ja: `${BASE}/ja/accessibility/`,
  };
  return [
    { url: `${BASE}/`, alternates: { languages } },
    { url: `${BASE}/zh-tw/`, alternates: { languages } },
    { url: `${BASE}/ja/`, alternates: { languages } },
    { url: `${BASE}/accessibility/`, alternates: { languages: a11yLanguages } },
    { url: `${BASE}/zh-tw/accessibility/`, alternates: { languages: a11yLanguages } },
    { url: `${BASE}/ja/accessibility/`, alternates: { languages: a11yLanguages } },
  ];
}

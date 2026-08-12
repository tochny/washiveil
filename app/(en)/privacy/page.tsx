import type { Metadata } from 'next';

import { PrivacyStatement } from '@/components/privacy-statement';
import { BASE, baseOg } from '@/lib/og';

export const metadata: Metadata = {
  title: 'washiveil — Privacy',
  description:
    'What this site collects via Google Analytics 4, what is deliberately switched off, and how local storage is used.',
  alternates: {
    canonical: `${BASE}/privacy/`,
    languages: {
      en: `${BASE}/privacy/`,
      'zh-Hant': `${BASE}/zh-tw/privacy/`,
      ja: `${BASE}/ja/privacy/`,
      'x-default': `${BASE}/privacy/`,
    },
  },
  openGraph: baseOg('en_US', {
    title: 'washiveil — Privacy',
    description:
      'What this site collects via Google Analytics 4, what is deliberately switched off, and how local storage is used.',
    url: `${BASE}/privacy/`,
  }),
};

export default function PrivacyPage() {
  return <PrivacyStatement locale="en" />;
}

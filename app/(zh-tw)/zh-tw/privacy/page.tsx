import type { Metadata } from 'next';

import { PrivacyStatement } from '@/components/privacy-statement';
import { BASE, baseOg } from '@/lib/og';

export const metadata: Metadata = {
  title: 'washiveil — 隱私聲明',
  description:
    '本站透過 Google Analytics 4 收集的資料、刻意關閉的功能，以及本機儲存的使用方式。',
  alternates: {
    canonical: `${BASE}/zh-tw/privacy/`,
    languages: {
      en: `${BASE}/privacy/`,
      'zh-Hant': `${BASE}/zh-tw/privacy/`,
      ja: `${BASE}/ja/privacy/`,
      'x-default': `${BASE}/privacy/`,
    },
  },
  openGraph: baseOg('zh_TW', {
    title: 'washiveil — 隱私聲明',
    description:
      '本站透過 Google Analytics 4 收集的資料、刻意關閉的功能，以及本機儲存的使用方式。',
    url: `${BASE}/zh-tw/privacy/`,
  }),
};

export default function ZhTwPrivacyPage() {
  return <PrivacyStatement locale="zh-tw" />;
}

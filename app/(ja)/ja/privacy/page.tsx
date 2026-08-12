import type { Metadata } from 'next';

import { PrivacyStatement } from '@/components/privacy-statement';
import { BASE, baseOg } from '@/lib/og';

export const metadata: Metadata = {
  title: 'washiveil — プライバシー',
  description:
    '本サイトが Google Analytics 4 で収集するデータ、意図的に無効化している機能、ローカルストレージの使用について。',
  alternates: {
    canonical: `${BASE}/ja/privacy/`,
    languages: {
      en: `${BASE}/privacy/`,
      'zh-Hant': `${BASE}/zh-tw/privacy/`,
      ja: `${BASE}/ja/privacy/`,
      'x-default': `${BASE}/privacy/`,
    },
  },
  openGraph: baseOg('ja_JP', {
    title: 'washiveil — プライバシー',
    description:
      '本サイトが Google Analytics 4 で収集するデータ、意図的に無効化している機能、ローカルストレージの使用について。',
    url: `${BASE}/ja/privacy/`,
  }),
};

export default function JaPrivacyPage() {
  return <PrivacyStatement locale="ja" />;
}

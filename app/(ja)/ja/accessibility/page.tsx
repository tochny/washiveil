import type { Metadata } from 'next';

import { A11yStatement } from '@/components/a11y-statement';
import { BASE, baseOg } from '@/lib/og';

export const metadata: Metadata = {
  title: 'washiveil — アクセシビリティ方針',
  description:
    'washiveil は、このデモサイトと配布コンポーネントの初期値で WCAG 2.2 Level AA を目標としています。アクセシビリティ上の問題はバグとして扱います。',
  alternates: {
    canonical: `${BASE}/ja/accessibility/`,
    languages: {
      en: `${BASE}/accessibility/`,
      'zh-Hant': `${BASE}/zh-tw/accessibility/`,
      ja: `${BASE}/ja/accessibility/`,
      'x-default': `${BASE}/accessibility/`,
    },
  },
  openGraph: baseOg('ja_JP', {
    title: 'washiveil — アクセシビリティ方針',
    description:
      'washiveil は、このデモサイトと配布コンポーネントの初期値で WCAG 2.2 Level AA を目標としています。アクセシビリティ上の問題はバグとして扱います。',
    url: `${BASE}/ja/accessibility/`,
  }),
};

export default function JaAccessibilityPage() {
  return <A11yStatement locale="ja" />;
}

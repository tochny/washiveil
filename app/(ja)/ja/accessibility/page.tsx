import type { Metadata } from 'next';

import { A11yStatement } from '@/components/a11y-statement';

export const metadata: Metadata = {
  title: 'washiveil — アクセシビリティ方針',
  description:
    'washiveil は、このデモサイトと配布コンポーネントの初期値で WCAG 2.2 Level AA を目標としています。アクセシビリティ上の問題はバグとして扱います。',
  alternates: {
    canonical: 'https://washiveil.alexchih.com/ja/accessibility/',
    languages: {
      en: 'https://washiveil.alexchih.com/accessibility/',
      'zh-Hant': 'https://washiveil.alexchih.com/zh-tw/accessibility/',
      ja: 'https://washiveil.alexchih.com/ja/accessibility/',
    },
  },
  openGraph: {
    title: 'washiveil — アクセシビリティ方針',
    description:
      'washiveil は、このデモサイトと配布コンポーネントの初期値で WCAG 2.2 Level AA を目標としています。アクセシビリティ上の問題はバグとして扱います。',
    url: 'https://washiveil.alexchih.com/ja/accessibility/',
  },
};

export default function JaAccessibilityPage() {
  return <A11yStatement locale="ja" />;
}

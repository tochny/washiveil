import type { Metadata } from 'next';

import { A11yStatement } from '@/components/a11y-statement';

export const metadata: Metadata = {
  title: 'washiveil — アクセシビリティ方針',
  description:
    'washiveil は WCAG 2.2 Level AA を目標としています——このデモサイトでも、出荷されるコンポーネントの初期値でも同様です。アクセシビリティの修正はバグとして扱い、機能追加としては扱いません。',
  alternates: {
    canonical: 'https://washiveil.alexchih.com/ja/accessibility/',
    languages: {
      en: 'https://washiveil.alexchih.com/accessibility/',
      'zh-Hant': 'https://washiveil.alexchih.com/zh-tw/accessibility/',
      ja: 'https://washiveil.alexchih.com/ja/accessibility/',
    },
  },
};

export default function JaAccessibilityPage() {
  return <A11yStatement locale="ja" />;
}

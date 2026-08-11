import type { Metadata } from 'next';

import { A11yStatement } from '@/components/a11y-statement';

export const metadata: Metadata = {
  title: 'washiveil — 無障礙聲明',
  description:
    'washiveil 以 WCAG 2.2 Level AA 為目標——無論是這個展示網站或元件預設值皆然。無障礙修正被視為錯誤修復，而非功能增強。',
  alternates: {
    canonical: 'https://washiveil.alexchih.com/zh-tw/accessibility/',
    languages: {
      en: 'https://washiveil.alexchih.com/accessibility/',
      'zh-Hant': 'https://washiveil.alexchih.com/zh-tw/accessibility/',
      ja: 'https://washiveil.alexchih.com/ja/accessibility/',
    },
  },
};

export default function ZhTwAccessibilityPage() {
  return <A11yStatement locale="zh-tw" />;
}

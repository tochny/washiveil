import type { Metadata } from 'next';

import { A11yStatement } from '@/components/a11y-statement';
import { BASE, baseOg } from '@/lib/og';

export const metadata: Metadata = {
  title: 'washiveil — 無障礙聲明',
  description:
    'washiveil 的這個展示網站與元件預設值，皆以 WCAG 2.2 Level AA 為目標。無障礙問題一律視為錯誤處理。',
  alternates: {
    canonical: `${BASE}/zh-tw/accessibility/`,
    languages: {
      en: `${BASE}/accessibility/`,
      'zh-Hant': `${BASE}/zh-tw/accessibility/`,
      ja: `${BASE}/ja/accessibility/`,
      'x-default': `${BASE}/accessibility/`,
    },
  },
  openGraph: baseOg('zh_TW', {
    title: 'washiveil — 無障礙聲明',
    description:
      'washiveil 的這個展示網站與元件預設值，皆以 WCAG 2.2 Level AA 為目標。無障礙問題一律視為錯誤處理。',
    url: `${BASE}/zh-tw/accessibility/`,
  }),
};

export default function ZhTwAccessibilityPage() {
  return <A11yStatement locale="zh-tw" />;
}

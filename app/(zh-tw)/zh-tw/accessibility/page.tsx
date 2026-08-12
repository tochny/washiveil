import type { Metadata } from 'next';

import { A11yStatement } from '@/components/a11y-statement';

export const metadata: Metadata = {
  title: 'washiveil — 無障礙聲明',
  description:
    'washiveil 的這個展示網站與元件預設值，皆以 WCAG 2.2 Level AA 為目標。無障礙問題一律視為錯誤處理。',
  alternates: {
    canonical: 'https://washiveil.alexchih.com/zh-tw/accessibility/',
    languages: {
      en: 'https://washiveil.alexchih.com/accessibility/',
      'zh-Hant': 'https://washiveil.alexchih.com/zh-tw/accessibility/',
      ja: 'https://washiveil.alexchih.com/ja/accessibility/',
      'x-default': 'https://washiveil.alexchih.com/accessibility/',
    },
  },
  openGraph: {
    title: 'washiveil — 無障礙聲明',
    description:
      'washiveil 的這個展示網站與元件預設值，皆以 WCAG 2.2 Level AA 為目標。無障礙問題一律視為錯誤處理。',
    url: 'https://washiveil.alexchih.com/zh-tw/accessibility/',
  },
};

export default function ZhTwAccessibilityPage() {
  return <A11yStatement locale="zh-tw" />;
}

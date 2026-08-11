import type { Metadata } from 'next';

import { A11yStatement } from '@/components/a11y-statement';

export const metadata: Metadata = {
  title: 'washiveil — Accessibility statement',
  description:
    'washiveil aims for WCAG 2.2 Level AA — on this demo site and in the shipped component defaults. Accessibility fixes are treated as bugs, not enhancements.',
  alternates: {
    canonical: 'https://washiveil.alexchih.com/accessibility/',
    languages: {
      en: 'https://washiveil.alexchih.com/accessibility/',
      'zh-Hant': 'https://washiveil.alexchih.com/zh-tw/accessibility/',
      ja: 'https://washiveil.alexchih.com/ja/accessibility/',
    },
  },
};

export default function AccessibilityPage() {
  return <A11yStatement locale="en" />;
}

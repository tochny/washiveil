import type { Metadata } from 'next';

import { A11yStatement } from '@/components/a11y-statement';

export const metadata: Metadata = {
  title: 'washiveil — Accessibility statement',
  description:
    'washiveil aims for WCAG 2.2 Level AA across this demo site and the shipped component defaults. Accessibility fixes are treated as bugs.',
  alternates: {
    canonical: 'https://washiveil.alexchih.com/accessibility/',
    languages: {
      en: 'https://washiveil.alexchih.com/accessibility/',
      'zh-Hant': 'https://washiveil.alexchih.com/zh-tw/accessibility/',
      ja: 'https://washiveil.alexchih.com/ja/accessibility/',
    },
  },
  openGraph: {
    title: 'washiveil — Accessibility statement',
    description:
      'washiveil aims for WCAG 2.2 Level AA across this demo site and the shipped component defaults. Accessibility fixes are treated as bugs.',
    url: 'https://washiveil.alexchih.com/accessibility/',
  },
};

export default function AccessibilityPage() {
  return <A11yStatement locale="en" />;
}

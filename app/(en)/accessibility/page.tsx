import type { Metadata } from 'next';

import { A11yStatement } from '@/components/a11y-statement';
import { BASE, baseOg } from '@/lib/og';

export const metadata: Metadata = {
  title: 'washiveil — Accessibility statement',
  description:
    'washiveil aims for WCAG 2.2 Level AA across this demo site and the shipped component defaults. Accessibility fixes are treated as bugs.',
  alternates: {
    canonical: `${BASE}/accessibility/`,
    languages: {
      en: `${BASE}/accessibility/`,
      'zh-Hant': `${BASE}/zh-tw/accessibility/`,
      ja: `${BASE}/ja/accessibility/`,
      'x-default': `${BASE}/accessibility/`,
    },
  },
  openGraph: baseOg('en_US', {
    title: 'washiveil — Accessibility statement',
    description:
      'washiveil aims for WCAG 2.2 Level AA across this demo site and the shipped component defaults. Accessibility fixes are treated as bugs.',
    url: `${BASE}/accessibility/`,
  }),
};

export default function AccessibilityPage() {
  return <A11yStatement locale="en" />;
}

import type { Metadata } from 'next';
import { RootShell } from '@/components/root-shell';
import { BASE, baseOg } from '@/lib/og';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'washiveil — warm paper, translucent veils',
  description:
    'A shadcn registry: washi ground, glass veils, the ruri/korozen/sumire tri-color, and first-class Chinese & Japanese typography.',
  alternates: {
    canonical: `${BASE}/`,
    languages: {
      en: `${BASE}/`,
      'zh-Hant': `${BASE}/zh-tw/`,
      ja: `${BASE}/ja/`,
      'x-default': `${BASE}/`,
    },
  },
  openGraph: baseOg('en_US', {
    title: 'washiveil — warm paper, translucent veils',
    description:
      'A shadcn registry: washi ground, glass veils, the ruri/korozen/sumire tri-color, and first-class Chinese & Japanese typography.',
    url: `${BASE}/`,
  }),
  twitter: {
    card: 'summary_large_image',
  },
};

export default function EnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="en">{children}</RootShell>;
}

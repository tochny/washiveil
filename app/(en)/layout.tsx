import type { Metadata } from 'next';
import { RootShell } from '@/components/root-shell';

const BASE = 'https://washiveil.alexchih.com';

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
  openGraph: {
    title: 'washiveil — warm paper, translucent veils',
    description:
      'A shadcn registry: washi ground, glass veils, the ruri/korozen/sumire tri-color, and first-class Chinese & Japanese typography.',
    url: `${BASE}/`,
    siteName: 'washiveil',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og/en.png', width: 1200, height: 630, alt: 'washiveil — warm paper, translucent veils' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function EnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="en">{children}</RootShell>;
}

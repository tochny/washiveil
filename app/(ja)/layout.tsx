import type { Metadata } from 'next';
import { RootShell } from '@/components/root-shell';
import { COPY } from '@/components/copy';

const BASE = 'https://washiveil.alexchih.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'washiveil — 温かい紙、透ける紗',
  description: COPY.ja.hero.lede,
  alternates: {
    canonical: `${BASE}/ja/`,
  },
  openGraph: {
    title: 'washiveil — 温かい紙、透ける紗',
    description: COPY.ja.hero.lede,
    url: `${BASE}/ja/`,
    siteName: 'washiveil',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: '/og/ja.png', width: 1200, height: 630, alt: 'washiveil — 温かい紙、透ける紗' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function JaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="ja">{children}</RootShell>;
}

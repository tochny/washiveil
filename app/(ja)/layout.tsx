import type { Metadata } from 'next';
import { RootShell } from '@/components/root-shell';
import { COPY } from '@/components/copy';
import { BASE, baseOg } from '@/lib/og';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'washiveil — 温かい紙、透ける紗',
  description: COPY.ja.hero.lede,
  alternates: {
    canonical: `${BASE}/ja/`,
    languages: {
      en: `${BASE}/`,
      'zh-Hant': `${BASE}/zh-tw/`,
      ja: `${BASE}/ja/`,
      'x-default': `${BASE}/`,
    },
  },
  openGraph: baseOg('ja_JP', {
    title: 'washiveil — 温かい紙、透ける紗',
    description: COPY.ja.hero.lede,
    url: `${BASE}/ja/`,
  }),
  twitter: {
    card: 'summary_large_image',
  },
};

export default function JaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="ja">{children}</RootShell>;
}

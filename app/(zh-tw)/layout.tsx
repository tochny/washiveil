import type { Metadata } from 'next';
import { RootShell } from '@/components/root-shell';
import { COPY } from '@/components/copy';
import { BASE, baseOg } from '@/lib/og';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'washiveil — 暖紙為底，透紗為層',
  description: COPY['zh-tw'].hero.lede,
  alternates: {
    canonical: `${BASE}/zh-tw/`,
    languages: {
      en: `${BASE}/`,
      'zh-Hant': `${BASE}/zh-tw/`,
      ja: `${BASE}/ja/`,
      'x-default': `${BASE}/`,
    },
  },
  openGraph: baseOg('zh_TW', {
    title: 'washiveil — 暖紙為底，透紗為層',
    description: COPY['zh-tw'].hero.lede,
    url: `${BASE}/zh-tw/`,
  }),
  twitter: {
    card: 'summary_large_image',
  },
};

export default function ZhTwLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="zh-Hant">{children}</RootShell>;
}

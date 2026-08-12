import type { Metadata } from 'next';
import { RootShell } from '@/components/root-shell';
import { COPY } from '@/components/copy';

const BASE = 'https://washiveil.alexchih.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'washiveil — 暖紙為底，透紗為層',
  description: COPY['zh-tw'].hero.lede,
  alternates: {
    canonical: `${BASE}/zh-tw/`,
  },
  openGraph: {
    title: 'washiveil — 暖紙為底，透紗為層',
    description: COPY['zh-tw'].hero.lede,
    url: `${BASE}/zh-tw/`,
    siteName: 'washiveil',
    locale: 'zh_TW',
    type: 'website',
    images: [{ url: '/og/zh-tw.png', width: 1200, height: 630, alt: 'washiveil — 暖紙為底，透紗為層' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function ZhTwLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="zh-Hant">{children}</RootShell>;
}

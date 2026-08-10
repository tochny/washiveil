import type { Metadata } from 'next';

import { COPY } from '@/components/copy';
import { DemoPage } from '@/components/demo-page';

export const metadata: Metadata = {
  title: 'washiveil — 温かい紙、透ける紗',
  description: COPY.ja.hero.lede,
};

export default function JaPage() {
  return <DemoPage locale="ja" />;
}

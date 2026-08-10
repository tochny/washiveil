import type { Metadata } from 'next';

import { COPY } from '@/components/copy';
import { DemoPage } from '@/components/demo-page';

export const metadata: Metadata = {
  title: 'washiveil — 暖紙為底，透紗為層',
  description: COPY['zh-tw'].hero.lede,
};

export default function ZhTwPage() {
  return <DemoPage locale="zh-tw" />;
}

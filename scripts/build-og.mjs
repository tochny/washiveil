/**
 * Pre-build OG image generator.
 *
 * Renders per-locale OG cards into public/og/ so the static export picks
 * them up. Uses satori + @resvg/resvg-js (same stack as the author's
 * alexchih.com OG cards).
 *
 * ImageResponse from next/og is incompatible with output:'export' in
 * Next 15.5.9 — webpack cannot handle the dynamic require.resolve for
 * @fontsource woff files inside opengraph-image.tsx. This script runs
 * before `next build` as a workaround.
 */
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'public', 'og');

const require = createRequire(import.meta.url);
const font = (pkg, file) => readFileSync(require.resolve(`@fontsource/${pkg}/files/${file}`));

// Distinct family names per subset — satori dedupes same-name fonts, so the
// fallback chain must live in the fontFamily list, not in duplicate names.
const baseFonts = [
  { name: 'Noto Latin', weight: 700, style: 'normal', data: font('noto-sans-tc', 'noto-sans-tc-latin-700-normal.woff') },
  { name: 'Noto Latin', weight: 400, style: 'normal', data: font('noto-sans-tc', 'noto-sans-tc-latin-400-normal.woff') },
  { name: 'Noto TC', weight: 700, style: 'normal', data: font('noto-sans-tc', 'noto-sans-tc-chinese-traditional-700-normal.woff') },
  { name: 'Noto TC', weight: 400, style: 'normal', data: font('noto-sans-tc', 'noto-sans-tc-chinese-traditional-400-normal.woff') },
  { name: 'Noto JP', weight: 700, style: 'normal', data: font('noto-sans-jp', 'noto-sans-jp-japanese-700-normal.woff') },
  { name: 'Noto JP', weight: 400, style: 'normal', data: font('noto-sans-jp', 'noto-sans-jp-japanese-400-normal.woff') },
];

const dot = (color) => ({
  type: 'div',
  props: { style: { width: 14, height: 14, borderRadius: 7, backgroundColor: color } },
});

const cards = [
  {
    file: 'en.png',
    // TC first for Latin + zh fallback
    family: "'Noto Latin', 'Noto TC', 'Noto JP'",
    title: 'Warm paper. Translucent veils.',
    meta: ['shadcn registry', 'Chinese & Japanese typography'],
  },
  {
    file: 'zh-tw.png',
    family: "'Noto Latin', 'Noto TC', 'Noto JP'",
    title: '暖紙為底，透紗為層。',
    meta: ['shadcn registry', '中日文排版，從設計開始就是正事'],
  },
  {
    file: 'ja.png',
    // JP first for Japanese glyph forms (Han unification)
    family: "'Noto Latin', 'Noto JP', 'Noto TC'",
    title: '温かい紙、透ける紗。',
    meta: ['shadcn registry', '中国語・日本語の組版は、設計の最初から'],
  },
];

mkdirSync(OUT, { recursive: true });

for (const card of cards) {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          backgroundColor: '#F7F3EC',
          fontFamily: card.family,
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: 10 },
              children: [
                dot('#2E63B8'),
                dot('#D0722E'),
                dot('#7B68C8'),
                {
                  type: 'div',
                  props: { style: { marginLeft: 14, fontSize: 26, color: '#6E6659' }, children: 'washiveil.alexchih.com' },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { fontSize: 60, fontWeight: 700, color: '#1C1914', lineHeight: 1.32, maxWidth: 1020 },
              children: card.title,
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: 18, fontSize: 26, color: '#2E63B8' },
              children: [
                { type: 'div', props: { children: card.meta[0] } },
                { type: 'div', props: { style: { color: '#9A9184' }, children: '·' } },
                { type: 'div', props: { style: { color: '#6E6659' }, children: card.meta[1] } },
              ],
            },
          },
        ],
      },
    },
    { width: 1200, height: 630, fonts: baseFonts }
  );

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  const out = join(OUT, card.file);
  writeFileSync(out, png);
  console.log(`  og: ${out}`);
}

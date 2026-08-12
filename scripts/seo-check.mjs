/**
 * SEO acceptance checks against the static export in out/.
 *
 * Written at spec time; the implementer may not edit this file. Run after
 * `pnpm build`:  node scripts/seo-check.mjs
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'out';
const ORIGIN = 'https://washiveil.alexchih.com';

const LOCALES = [
  { dir: '', lang: 'en', ogLocale: 'en_US', canonical: `${ORIGIN}/` },
  { dir: 'zh-tw', lang: 'zh-Hant', ogLocale: 'zh_TW', canonical: `${ORIGIN}/zh-tw/` },
  { dir: 'ja', lang: 'ja', ogLocale: 'ja_JP', canonical: `${ORIGIN}/ja/` },
];

let failures = 0;
const fail = (msg) => {
  failures++;
  console.error(`FAIL  ${msg}`);
};
const pass = (msg) => console.log(`ok    ${msg}`);
const check = (cond, msg) => (cond ? pass(msg) : fail(msg));

const html = (...parts) => {
  const p = join(OUT, ...parts, 'index.html');
  if (!existsSync(p)) {
    fail(`missing file ${p}`);
    return null;
  }
  return readFileSync(p, 'utf8');
};

const head = (doc) => doc.split('</head>')[0];
const meta = (doc, key) => {
  const re = new RegExp(`<meta[^>]*(?:property|name)="${key}"[^>]*content="([^"]*)"`, 'i');
  const alt = new RegExp(`<meta[^>]*content="([^"]*)"[^>]*(?:property|name)="${key}"`, 'i');
  return (head(doc).match(re) ?? head(doc).match(alt))?.[1] ?? null;
};
const link = (doc, rel) =>
  head(doc).match(new RegExp(`<link[^>]*rel="${rel}"[^>]*href="([^"]*)"`, 'i'))?.[1] ?? null;

console.log('--- 1. <html lang> per locale ---');
for (const l of LOCALES) {
  const doc = html(l.dir);
  if (!doc) continue;
  const got = doc.match(/<html[^>]*\slang="([^"]*)"/i)?.[1] ?? '(none)';
  check(got === l.lang, `/${l.dir}${l.dir ? '/' : ''} html lang="${l.lang}" (got "${got}")`);
}

console.log('--- 2. robots.txt ---');
const robotsPath = join(OUT, 'robots.txt');
if (!existsSync(robotsPath)) {
  fail('out/robots.txt exists');
} else {
  const r = readFileSync(robotsPath, 'utf8');
  pass('out/robots.txt exists');
  check(r.includes(`Sitemap: ${ORIGIN}/sitemap.xml`), 'robots.txt points at the absolute sitemap URL');
  // /design/ is de-indexed via a noindex meta tag; a Disallow would block the
  // crawler from ever reading that tag, which defeats the purpose.
  check(!/Disallow:\s*\/design/i.test(r), 'robots.txt does NOT Disallow /design/ (noindex needs crawl access)');
}

console.log('--- 3. OpenGraph + Twitter on every locale home ---');
for (const l of LOCALES) {
  const doc = html(l.dir);
  if (!doc) continue;
  const tag = `/${l.dir}${l.dir ? '/' : ''}`;
  for (const k of ['og:title', 'og:description', 'og:type', 'og:url', 'og:site_name', 'og:image']) {
    check(!!meta(doc, k), `${tag} has ${k}`);
  }
  check(meta(doc, 'og:locale') === l.ogLocale, `${tag} og:locale is ${l.ogLocale} (got ${meta(doc, 'og:locale')})`);
  check(meta(doc, 'twitter:card') === 'summary_large_image', `${tag} twitter:card is summary_large_image`);

  const img = meta(doc, 'og:image');
  if (img) {
    check(img.startsWith(ORIGIN), `${tag} og:image is absolute (got ${img})`);
    const rel = img.replace(ORIGIN, '').split('?')[0];
    check(existsSync(join(OUT, rel)), `${tag} og:image file exists in out/ (${rel})`);
  }
}

console.log('--- 4. canonical on all six public routes ---');
const ROUTES = [
  ['', `${ORIGIN}/`],
  ['zh-tw', `${ORIGIN}/zh-tw/`],
  ['ja', `${ORIGIN}/ja/`],
  ['accessibility', `${ORIGIN}/accessibility/`],
  ['zh-tw/accessibility', `${ORIGIN}/zh-tw/accessibility/`],
  ['ja/accessibility', `${ORIGIN}/ja/accessibility/`],
];
for (const [dir, want] of ROUTES) {
  const doc = html(...dir.split('/').filter(Boolean));
  if (!doc) continue;
  const got = link(doc, 'canonical');
  check(got === want, `/${dir} canonical is ${want} (got ${got})`);
}

console.log('--- 5. /design/* carries noindex ---');
for (const d of ['design/aa', 'design/variants']) {
  const doc = html(...d.split('/'));
  if (!doc) continue;
  const robots = meta(doc, 'robots') ?? '';
  check(/noindex/i.test(robots), `/${d}/ has robots noindex (got "${robots}")`);
}

console.log('--- 6. exactly one <h1> per public page ---');
for (const [dir] of ROUTES) {
  const doc = html(...dir.split('/').filter(Boolean));
  if (!doc) continue;
  const n = (doc.match(/<h1[\s>]/gi) ?? []).length;
  check(n === 1, `/${dir} has exactly one <h1> (got ${n})`);
}

console.log('--- 7. hreflang clusters are correct and non-conflicting ---');
// HTML attribute names are case-insensitive, so React's camelCase `hrefLang`
// is equivalent to `hreflang` — match either. What actually matters is that a
// page's alternates point at ITS OWN locale variants, and that a page never
// emits two different targets for the same hreflang code.
const CLUSTERS = [
  {
    pages: ['', 'zh-tw', 'ja'],
    want: { en: `${ORIGIN}/`, 'zh-Hant': `${ORIGIN}/zh-tw/`, ja: `${ORIGIN}/ja/`, 'x-default': `${ORIGIN}/` },
  },
  {
    pages: ['accessibility', 'zh-tw/accessibility', 'ja/accessibility'],
    want: {
      en: `${ORIGIN}/accessibility/`,
      'zh-Hant': `${ORIGIN}/zh-tw/accessibility/`,
      ja: `${ORIGIN}/ja/accessibility/`,
      'x-default': `${ORIGIN}/accessibility/`,
    },
  },
];

for (const { pages: group, want } of CLUSTERS) {
  for (const dir of group) {
    const doc = html(...dir.split('/').filter(Boolean));
    if (!doc) continue;
    const label = `/${dir}${dir ? '/' : ''}`;
    const found = [...head(doc).matchAll(/<link[^>]*rel="alternate"[^>]*>/gi)]
      .map((m) => m[0])
      .filter((tag) => /hreflang=/i.test(tag))
      .map((tag) => ({
        lang: tag.match(/hreflang="([^"]*)"/i)?.[1],
        href: tag.match(/href="([^"]*)"/i)?.[1],
      }));

    check(
      found.length === Object.keys(want).length,
      `${label} emits exactly ${Object.keys(want).length} hreflang links (got ${found.length})`
    );

    for (const [lang, href] of Object.entries(want)) {
      const hits = found.filter((f) => f.lang === lang);
      check(hits.length === 1, `${label} declares hreflang="${lang}" exactly once (got ${hits.length})`);
      if (hits.length) check(hits[0].href === href, `${label} hreflang="${lang}" -> ${href} (got ${hits[0].href})`);
    }

    // Self-reference: the page must appear among its own alternates.
    const self = `${ORIGIN}/${dir}${dir ? '/' : ''}`;
    check(found.some((f) => f.href === self), `${label} lists itself among its alternates`);
  }
}

console.log(failures === 0 ? '\nALL CHECKS PASSED' : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);

/**
 * Prose punctuation check. Not wired into the build — run on demand:
 *   node scripts/prose-check.mjs
 *
 * Two rules:
 *
 * 1. A bare em dash (U+2014) next to a CJK character is wrong typography. The
 *    Chinese dash is two em dashes wide (——); Japanese prose rarely wants one
 *    at all. This repo's whole pitch is CJK typography, so its own copy has to
 *    hold up as a specimen of the claim.
 *
 * 2. Em dashes in English copy are capped. Not forbidden — one in the right
 *    place is good writing — but density is the most recognisable tell of
 *    machine-written prose, and this is a public, professional surface.
 *
 * Copy in this repo lives inside .tsx/.ts modules, so the check scans the
 * whole file and cannot distinguish a dash in a string from one in a comment.
 * That is deliberate: comments are read by anyone browsing the registry.
 */
import { readFileSync } from 'node:fs';

const EM = '—';
const CJK = /[　-〿぀-ヿ㐀-䶿一-鿿＀-￯]/;
const EN_BUDGET = 6;

const FILES = [
  'components/copy.ts',
  'components/a11y-statement.tsx',
  'components/privacy-statement.tsx',
  'components/demo-page.tsx',
  'components/prose-specimen.tsx',
];

let failures = 0;
const fail = (m) => {
  failures++;
  console.error(`FAIL  ${m}`);
};

let enTotal = 0;
const cjkHits = [];

for (const f of FILES) {
  let text;
  try {
    text = readFileSync(f, 'utf8');
  } catch {
    continue;
  }
  text.split('\n').forEach((line, i) => {
    for (let c = 0; c < line.length; c++) {
      if (line[c] !== EM) continue;
      const prev = line[c - 1] ?? '';
      const next = line[c + 1] ?? '';
      if (prev === EM || next === EM) continue; // —— is the correct Chinese dash
      if (CJK.test(prev) || CJK.test(next)) {
        cjkHits.push(`${f}:${i + 1}  …${line.slice(Math.max(0, c - 12), c + 13)}…`);
      } else {
        enTotal++;
      }
    }
  });
}

console.log('--- 1. no bare em dash adjacent to CJK ---');
if (cjkHits.length === 0) console.log('ok    none found');
else cjkHits.forEach((h) => fail(h));

console.log(`--- 2. English em dash budget (${EN_BUDGET}) ---`);
if (enTotal <= EN_BUDGET) console.log(`ok    ${enTotal} in English copy`);
else fail(`${enTotal} em dashes in English copy, budget is ${EN_BUDGET}`);

console.log(failures === 0 ? '\nPROSE OK' : `\n${failures} PROSE ISSUE(S)`);
process.exit(failures === 0 ? 0 : 1);

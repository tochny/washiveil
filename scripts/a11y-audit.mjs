#!/usr/bin/env node

/**
 * a11y-audit.mjs — Automated axe-core WCAG 2.x A+AA audit for washiveil.
 *
 * For each route (/, /zh-tw/, /ja/) x each mode (light, dark, contrast-more):
 *   1. Load the page on the static-serve port
 *   2. Set the mode (add/remove dark class, add contrast-more)
 *   3. Run AxeBuilder with WCAG 2.x A+AA tags
 *   4. Collect violations
 *
 * Also runs one overlay pass: opens the Dialog trigger on / and re-audits.
 *
 * Usage:  node scripts/a11y-audit.mjs [port]
 *         Default port: 4599
 */

import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const PORT = process.argv[2] || '4599';
const BASE = `http://localhost:${PORT}`;

const ROUTES = ['/', '/zh-tw/', '/ja/'];
const MODES = [
  { name: 'light', setup: 'document.documentElement.classList.remove("dark"); document.documentElement.classList.remove("contrast-more");' },
  { name: 'dark', setup: 'document.documentElement.classList.add("dark"); document.documentElement.classList.remove("contrast-more");' },
  { name: 'contrast-more', setup: 'document.documentElement.classList.remove("dark"); document.documentElement.classList.add("contrast-more");' },
];

/** Summarize axe violations into a compact format. */
function summarize(violations) {
  return violations.map((v) => ({
    id: v.id,
    impact: v.impact,
    nodes: v.nodes.length,
    sample: v.nodes[0]?.target?.[0] || '(no selector)',
    description: v.description,
  }));
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const results = {};

  try {
    for (const route of ROUTES) {
      for (const mode of MODES) {
        const key = `${route} [${mode.name}]`;
        console.log(`Auditing: ${key}`);

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' });

        // Set mode
        await page.evaluate(mode.setup);
        // Wait for any transitions
        await page.waitForTimeout(500);

        const axe = new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']);

        const result = await axe.analyze();
        results[key] = {
          violations: summarize(result.violations),
          passes: result.passes.length,
          incomplete: result.incomplete.length,
        };

        await context.close();
      }
    }

    // Overlay pass: open dialog on /
    console.log('Auditing: / [light + dialog open]');
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
    await page.evaluate('document.documentElement.classList.remove("dark");');

    // Find and click the Dialog trigger button
    const dialogTrigger = page.locator('button:has-text("Dialog"), button:has-text("對話框"), button:has-text("ダイアログ")').first();
    if (await dialogTrigger.isVisible()) {
      await dialogTrigger.click();
      await page.waitForTimeout(500);

      const axe = new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']);
      const result = await axe.analyze();
      results['/ [light + dialog open]'] = {
        violations: summarize(result.violations),
        passes: result.passes.length,
        incomplete: result.incomplete.length,
      };
    } else {
      console.log('  Dialog trigger not found, skipping overlay pass');
    }

    await ctx.close();

  } finally {
    await browser.close();
  }

  // Output
  console.log('\n' + '='.repeat(72));
  console.log('AXE AUDIT RESULTS');
  console.log('='.repeat(72));

  const allViolations = new Map();

  for (const [key, data] of Object.entries(results)) {
    console.log(`\n--- ${key} ---`);
    console.log(`  Passes: ${data.passes} | Incomplete: ${data.incomplete} | Violations: ${data.violations.length}`);
    if (data.violations.length > 0) {
      for (const v of data.violations) {
        console.log(`  [${v.impact?.toUpperCase()}] ${v.id}: ${v.nodes} node(s) — ${v.sample}`);
        // Aggregate
        const existing = allViolations.get(v.id);
        if (existing) {
          existing.count += v.nodes;
          existing.routes.add(key);
        } else {
          allViolations.set(v.id, {
            impact: v.impact,
            description: v.description,
            count: v.nodes,
            routes: new Set([key]),
          });
        }
      }
    } else {
      console.log('  No violations.');
    }
  }

  console.log('\n' + '='.repeat(72));
  console.log('AGGREGATE VIOLATIONS');
  console.log('='.repeat(72));

  if (allViolations.size === 0) {
    console.log('\nZero violations across all routes and modes.');
  } else {
    const sorted = [...allViolations.entries()].sort((a, b) => {
      const impactOrder = { critical: 0, serious: 1, moderate: 2, minor: 3 };
      return (impactOrder[a[1].impact] ?? 4) - (impactOrder[b[1].impact] ?? 4);
    });
    for (const [id, data] of sorted) {
      console.log(`\n[${data.impact?.toUpperCase()}] ${id}`);
      console.log(`  ${data.description}`);
      console.log(`  Total affected nodes: ${data.count}`);
      console.log(`  Routes: ${[...data.routes].join(', ')}`);
    }
  }

  // JSON output
  const jsonPath = new URL('./a11y-results.json', import.meta.url).pathname;
  const { writeFileSync } = await import('fs');
  writeFileSync(jsonPath, JSON.stringify(results, null, 2));
  console.log(`\nFull JSON written to: ${jsonPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

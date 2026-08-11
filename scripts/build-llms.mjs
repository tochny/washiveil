/**
 * Reads registry.json and writes public/llms.txt in the llms.txt convention.
 * Deterministic output — no timestamps.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const registry = JSON.parse(readFileSync(resolve(root, 'registry.json'), 'utf8'));
const outPath = resolve(root, 'public', 'llms.txt');

mkdirSync(dirname(outPath), { recursive: true });

const BASE = 'https://washiveil.alexchih.com';

const lines = [];

lines.push('# washiveil');
lines.push('');
lines.push('> Warm washi ground, glass veils, tri-color, Chinese & Japanese typography first-class.');
lines.push('');

lines.push('## Install');
lines.push('');
lines.push(`\`\`\``);
lines.push(`npx shadcn@latest add ${BASE}/r/<item>.json`);
lines.push(`\`\`\``);
lines.push('');

lines.push('## Items');
lines.push('');
for (const item of registry.items) {
  lines.push(`- [${item.name}](${BASE}/r/${item.name}.json): ${item.description}`);
}
lines.push('');

lines.push('## Docs');
lines.push('');
lines.push(`- [Homepage](${BASE})`);
lines.push('- [GitHub](https://github.com/tochny/washiveil)');
lines.push('');

writeFileSync(outPath, lines.join('\n'));

console.log(`Wrote ${outPath} (${registry.items.length} items)`);

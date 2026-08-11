#!/usr/bin/env node

/**
 * contrast-matrix.mjs — WCAG 2.2 contrast-ratio matrix for washiveil tokens.
 *
 * Pure Node, no browser: parses hex/rgba values, composites semi-transparent
 * colors over an opaque base, computes WCAG relative luminance and contrast
 * ratios. Outputs a markdown table with PASS/FAIL verdicts.
 *
 * Usage:  node scripts/contrast-matrix.mjs
 */

// ─── Token palette ──────────────────────────────────────────────────────────

const LIGHT = {
  background:           '#f7f3ec',
  foreground:           '#1c1914',
  body:                 '#4a443c',
  faint:                '#9a9184',
  'muted-foreground':   '#6e6659',
  primary:              '#b64f1b',   // korozen-deep
  'primary-foreground': '#ffffff',
  'accent-foreground':  '#2e63b8',   // ruri
  destructive:          '#b0452f',
  'destructive-fg':     '#ffffff',

  glass:           'rgba(255,255,255,0.45)',
  'glass-edge':    'rgba(255,255,255,0.50)',
  'glass-strong':  'rgba(255,255,255,0.75)',
  'glass-stronger':'rgba(255,255,255,0.85)',
  border:          'rgba(28,25,20,0.15)',
  input:           'rgba(28,25,20,0.15)',

  ruri:            '#2e63b8',
  'ruri-soft':     '#82b4f0',
  'ruri-pale':     '#b7d3f8',
  korozen:         '#d0722e',
  'korozen-soft':  '#f2a36b',
  'korozen-deep':  '#b64f1b',
  sumire:          '#7b68c8',
  'sumire-soft':   '#a99bea',
  'sumire-deep':   '#6a58c0',
  deep:            '#112441',

  'code-cream':    '#f0ebe1',
  'code-panel':    '#16181a',
  'code-ink':      '#d8dee4',

  // contrast-more overrides
  'cm-border':     '#8a8072',
  'cm-input':      '#8a8072',
  'cm-glass-edge': 'rgba(135,125,111,0.9)',
};

const DARK = {
  background:           '#12130f',
  foreground:           '#e9e5dc',
  body:                 '#b5afa2',
  faint:                '#7e7869',
  'muted-foreground':   '#a8a193',
  primary:              '#f2a36b',   // korozen-soft
  'primary-foreground': '#112441',   // deep
  'accent-foreground':  '#82b4f0',   // ruri-soft
  destructive:          '#e08b74',
  'destructive-fg':     '#12130f',

  glass:           'rgba(255,255,255,0.07)',
  'glass-edge':    'rgba(255,255,255,0.06)',
  'glass-strong':  'rgba(31,32,26,0.85)',
  'glass-stronger':'rgba(31,32,26,0.92)',
  border:          'rgba(255,255,255,0.15)',
  input:           'rgba(255,255,255,0.15)',

  ruri:            '#2e63b8',
  'ruri-soft':     '#82b4f0',
  'ruri-pale':     '#b7d3f8',
  korozen:         '#d0722e',
  'korozen-soft':  '#f2a36b',
  'korozen-deep':  '#b64f1b',
  sumire:          '#7b68c8',
  'sumire-soft':   '#a99bea',
  'sumire-deep':   '#6a58c0',
  deep:            '#112441',

  'code-cream':    '#f0ebe1',
  'code-panel':    '#16181a',
  'code-ink':      '#d8dee4',

  // contrast-more overrides
  'cm-border':     '#6e6e68',
  'cm-input':      '#6e6e68',
  'cm-glass-edge': 'rgba(120,120,114,0.9)',
};

// ─── Color math ─────────────────────────────────────────────────────────────

/** Parse hex (#rrggbb) or rgba(r,g,b,a) to [r,g,b,a] where r/g/b 0-255, a 0-1. */
function parseColor(str) {
  str = str.trim();
  if (str.startsWith('#')) {
    const n = parseInt(str.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255, 1.0];
  }
  const m = str.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/);
  if (!m) throw new Error(`Cannot parse color: ${str}`);
  return [+m[1], +m[2], +m[3], m[4] !== undefined ? +m[4] : 1.0];
}

/** Composite a semi-transparent RGBA color over an opaque RGB base. Returns opaque [r,g,b,1]. */
function composite(fgRGBA, bgRGBA) {
  const [fr, fg, fb, fa] = fgRGBA;
  const [br, bg_, bb] = bgRGBA;
  return [
    Math.round(fr * fa + br * (1 - fa)),
    Math.round(fg * fa + bg_ * (1 - fa)),
    Math.round(fb * fa + bb * (1 - fa)),
    1.0,
  ];
}

/** WCAG 2.x relative luminance. */
function luminance([r, g, b]) {
  const srgb = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

/** WCAG contrast ratio between two colors (each [r,g,b] or [r,g,b,a]). */
function contrastRatio(c1, c2) {
  const l1 = luminance(c1);
  const l2 = luminance(c2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/** Resolve a token: if rgba, composite over given base. */
function resolve(tokenVal, baseRGBA) {
  const parsed = parseColor(tokenVal);
  if (parsed[3] < 1.0) {
    return composite(parsed, baseRGBA);
  }
  return parsed;
}

// ─── Build the matrix ───────────────────────────────────────────────────────

function buildMatrix(palette, modeName) {
  const bg = parseColor(palette.background);

  // Helper: resolve a token to an opaque color over the ground
  const r = (name) => resolve(palette[name], bg);

  // Glass composite: glass over ground
  const glassOnGround = resolve(palette.glass, bg);
  // Glass-strong composite
  const glassStrongOnGround = resolve(palette['glass-strong'], bg);
  // Glass-stronger composite
  const glassStrongerOnGround = resolve(palette['glass-stronger'], bg);

  // Chip tints composite over the glass surface (chips sit on glass-card),
  // not the raw ground. Use glass-over-ground as the base.
  const chipBase = glassOnGround;

  // Ruri chip tint: ruri/10 over glass (light) or ruri-soft/10 over glass (dark)
  const ruriTint = modeName === 'light'
    ? composite([...parseColor(palette.ruri).slice(0, 3), 0.10], chipBase)
    : composite([...parseColor(palette['ruri-soft']).slice(0, 3), 0.10], chipBase);

  // Korozen tint: korozen/5 over glass (light) or korozen-soft/10 over glass (dark)
  const korozenTint = modeName === 'light'
    ? composite([...parseColor(palette.korozen).slice(0, 3), 0.05], chipBase)
    : composite([...parseColor(palette['korozen-soft']).slice(0, 3), 0.10], chipBase);

  // Sumire tint: sumire/5 over glass (light) or sumire-soft/10 over glass (dark)
  const sumireTint = modeName === 'light'
    ? composite([...parseColor(palette.sumire).slice(0, 3), 0.05], chipBase)
    : composite([...parseColor(palette['sumire-soft']).slice(0, 3), 0.10], chipBase);

  // Accent: ruri/10 over ground (light) or ruri-soft/10 over ground (dark)
  const accentBg = modeName === 'light'
    ? composite([...parseColor(palette.ruri).slice(0, 3), 0.10], bg)
    : composite([...parseColor(palette['ruri-soft']).slice(0, 3), 0.10], bg);

  // Dark glass composite for code panel
  const darkGlassComp = modeName === 'dark'
    ? resolve(palette.glass, bg)
    : resolve(palette.glass, bg); // same resolve, just showing

  // For non-text: contrast-more borders
  const cmBorder = parseColor(palette['cm-border']);
  const cmGlassEdgeOnGround = resolve(palette['cm-glass-edge'], bg);
  const cmGlassEdgeOnGlass = resolve(palette['cm-glass-edge'], glassOnGround);

  // Switch unchecked track: --input over ground
  const inputTrack = resolve(palette.input, bg);

  // Progress track: glass-edge border + glass bg
  const glassEdgeOnGround = resolve(palette['glass-edge'], bg);

  // Ruri-soft on dark ground (for pills, chip text)
  const ruriSoftColor = parseColor(palette['ruri-soft']);
  const deepColor = parseColor(palette.deep);

  // ── Text pairings ───────────────────────────────────────────────────────
  const textPairs = [
    // body/ground
    { label: 'body / ground', fg: r('body'), bg: bg, threshold: 4.5, type: 'text' },
    // body/glass-composite
    { label: 'body / glass', fg: r('body'), bg: glassOnGround, threshold: 4.5, type: 'text' },
    // foreground/ground
    { label: 'foreground / ground', fg: r('foreground'), bg: bg, threshold: 4.5, type: 'text' },
    // muted-foreground/ground
    { label: 'muted-fg / ground', fg: r('muted-foreground'), bg: bg, threshold: 4.5, type: 'text' },
    // muted-foreground/glass
    { label: 'muted-fg / glass', fg: r('muted-foreground'), bg: glassOnGround, threshold: 4.5, type: 'text' },
    // primary-foreground/primary
    { label: 'primary-fg / primary', fg: r('primary-foreground'), bg: r('primary'), threshold: 4.5, type: 'text' },
    // ruri link / ground
    { label: 'ruri / ground', fg: r('ruri'), bg: bg, threshold: 4.5, type: 'text' },
    // ruri link / glass
    { label: 'ruri / glass', fg: r('ruri'), bg: glassOnGround, threshold: 4.5, type: 'text' },
  ];

  // Mode-specific ruri link color
  if (modeName === 'dark') {
    // ruri-soft in dark
    textPairs.push(
      { label: 'ruri-soft / ground', fg: ruriSoftColor, bg: bg, threshold: 4.5, type: 'text' },
      { label: 'ruri-soft / glass', fg: ruriSoftColor, bg: glassOnGround, threshold: 4.5, type: 'text' },
    );
    // ruri-pale hover in dark
    textPairs.push(
      { label: 'ruri-pale / ground [hover]', fg: parseColor(palette['ruri-pale']), bg: bg, threshold: 3.0, type: 'large-text/decorative' },
    );
  }

  textPairs.push(
    // korozen-deep text / korozen tint
    { label: `${modeName === 'dark' ? 'korozen-soft' : 'korozen-deep'} / korozen-tint`, fg: modeName === 'dark' ? parseColor(palette['korozen-soft']) : parseColor(palette['korozen-deep']), bg: korozenTint, threshold: 4.5, type: 'text' },
    // sumire-deep / sumire-tint
    { label: `${modeName === 'dark' ? 'sumire-soft' : 'sumire-deep'} / sumire-tint`, fg: modeName === 'dark' ? parseColor(palette['sumire-soft']) : parseColor(palette['sumire-deep']), bg: sumireTint, threshold: 4.5, type: 'text' },
    // ruri chip text / ruri-tint
    { label: `${modeName === 'dark' ? 'ruri-soft' : 'ruri'} / ruri-tint`, fg: modeName === 'dark' ? ruriSoftColor : parseColor(palette.ruri), bg: ruriTint, threshold: 4.5, type: 'text' },
    // accent-foreground/accent-over-glass
    { label: 'accent-fg / accent', fg: r('accent-foreground'), bg: accentBg, threshold: 4.5, type: 'text' },
    // destructive-fg/destructive
    { label: 'destructive-fg / destructive', fg: r('destructive-fg'), bg: r('destructive'), threshold: 4.5, type: 'text' },
    // deep / ruri-soft (dark fills)
    { label: 'deep / ruri-soft [dark fills]', fg: deepColor, bg: ruriSoftColor, threshold: 4.5, type: 'text' },
    // deep / korozen-soft (dark fills)
    { label: 'deep / korozen-soft [dark fills]', fg: deepColor, bg: parseColor(palette['korozen-soft']), threshold: 4.5, type: 'text' },
    // code-ink / dark-glass-composite
    { label: 'code-ink / code-panel', fg: parseColor(palette['code-ink']), bg: parseColor(palette['code-panel']), threshold: 4.5, type: 'text' },
    // white / ruri (active pills)
    { label: 'white / ruri [active pills]', fg: [255, 255, 255, 1], bg: parseColor(palette.ruri), threshold: 4.5, type: 'text' },
    // white / ruri-soft (dark active pills)
    { label: 'deep / ruri-soft [dark pills]', fg: deepColor, bg: ruriSoftColor, threshold: 4.5, type: 'text' },
  );

  // ── Non-text pairings (3:1) ─────────────────────────────────────────────
  const nonTextPairs = [
    // ring-ruri / ground
    { label: 'ring ruri / ground', fg: parseColor(palette.ruri), bg: bg, threshold: 3.0, type: 'non-text' },
    // ring-ruri / glass
    { label: 'ring ruri / glass', fg: parseColor(palette.ruri), bg: glassOnGround, threshold: 3.0, type: 'non-text' },
    // ring-ruri-soft / dark ground
    { label: 'ring ruri-soft / ground', fg: ruriSoftColor, bg: bg, threshold: 3.0, type: 'non-text' },
    // focus inset ring / glass-stronger
    { label: 'focus ring / glass-stronger', fg: modeName === 'dark' ? ruriSoftColor : parseColor(palette.ruri), bg: glassStrongerOnGround, threshold: 3.0, type: 'non-text' },
    // switch checked ruri vs unchecked track
    { label: 'switch ruri / input-track', fg: modeName === 'dark' ? ruriSoftColor : parseColor(palette.ruri), bg: inputTrack, threshold: 3.0, type: 'non-text' },
    // progress indicator/track
    { label: 'progress ruri / glass', fg: modeName === 'dark' ? ruriSoftColor : parseColor(palette.ruri), bg: glassOnGround, threshold: 3.0, type: 'non-text' },
    // input border / ground (the known FAIL)
    { label: 'input border / ground', fg: resolve(palette.border, bg), bg: bg, threshold: 3.0, type: 'non-text' },
    // input border / glass
    { label: 'input border / glass', fg: resolve(palette.border, bg), bg: glassOnGround, threshold: 3.0, type: 'non-text' },
  ];

  // ── Contrast-more border set ─────────────────────────────────────────────
  const cmPairs = [
    { label: 'cm-border / ground', fg: cmBorder, bg: bg, threshold: 3.0, type: 'non-text (contrast-more)' },
    { label: 'cm-border / glass', fg: cmBorder, bg: glassOnGround, threshold: 3.0, type: 'non-text (contrast-more)' },
    { label: 'cm-glass-edge / ground', fg: cmGlassEdgeOnGround, bg: bg, threshold: 3.0, type: 'non-text (contrast-more)' },
    { label: 'cm-glass-edge / glass', fg: cmGlassEdgeOnGlass, bg: glassOnGround, threshold: 3.0, type: 'non-text (contrast-more)' },
  ];

  return [...textPairs, ...nonTextPairs, ...cmPairs];
}

function formatRatio(ratio) {
  return ratio.toFixed(2) + ':1';
}

function verdict(ratio, threshold) {
  return ratio >= threshold ? 'PASS' : 'FAIL';
}

// ─── Main ───────────────────────────────────────────────────────────────────

console.log('# Washiveil Contrast Matrix\n');

for (const [mode, palette] of [['light', LIGHT], ['dark', DARK]]) {
  console.log(`## ${mode.charAt(0).toUpperCase() + mode.slice(1)} mode\n`);
  console.log('| Pairing | Type | Ratio | Threshold | Verdict |');
  console.log('|---------|------|-------|-----------|---------|');

  const pairs = buildMatrix(palette, mode);
  for (const p of pairs) {
    const ratio = contrastRatio(p.fg, p.bg);
    const v = verdict(ratio, p.threshold);
    console.log(`| ${p.label} | ${p.type} | ${formatRatio(ratio)} | ${p.threshold}:1 | ${v} |`);
  }
  console.log('');
}

console.log('## Notes\n');
console.log('- Glass composites are computed as rgba over the mode\'s --background.');
console.log('- Chip tints: ruri/10, korozen/5, sumire/5 over glass-over-ground (chips sit on glass-card).');
console.log('- "DECORATIVE" items (ruri-pale hover) use 3:1 threshold but are noted for context.');
console.log('- Input border / ground is the known 1.4.11 non-text contrast gap (matches stock shadcn).');
console.log('- contrast-more border set shows the values used when prefers-contrast:more or .contrast-more is active.');

# Design decisions

Settled rulings with enough context to reopen them later without re-deriving
the measurements. Newest first.

## Tri-color control-fill grammar — keep ruri (2026-08-11)

**Ruling:** the baseline keeps ruri 瑠璃 as the control-fill accent (tabs
active, switch/checkbox checked, calendar selected, slider range). The
korozen-fill grammar ("variant D") is **not** shipped, but is preserved as a
working override recipe so it can be promoted later without redesign.

**Why not now:** korozen 黄櫨染 already owns emphasis — the primary button,
quote borders, inline-code accents. Making it also the control-fill color
flattens the hierarchy; ruri fills keep "selected state" and "call to action"
as two distinguishable registers.

**Where D lives:** `app/design/variants/page.tsx` (internal, stripped from
deploys) renders both grammars side by side and carries the full override
class strings per component. The contrast budget is already measured:

| token | hex | use | ratio |
|---|---|---|---|
| korozen-deep | `#b64f1b` | fills carrying white labels | 5.09:1 |
| korozen | `#d0722e` | small UI marks, no text | 3.43:1 (≥3:1) |
| korozen-soft | `#f2a36b` | dark-mode fills, deep text | 7.56:1 |

**Promotion path if reopened:** ship D as a documented override snippet (or a
`registry:item` style pack), not as component forks. Every component appends
consumer `className` after its own classes via `cn()`, so tailwind-merge
resolves conflicts in the consumer's favor; internal children (radio dot,
slider range) are reachable with descendant selectors, and `GlassCalendar`
takes per-key `classNames`. No component source changes required.

## Decorative faint text below 4.5:1 — accepted (2026-08-11)

The `.text-faint` 0.75rem micro-labels (section eyebrows, specimen captions)
intentionally sit below the WCAG 1.4.3 text ratio. They are decorative; the
information they echo is always present in conforming text nearby. This is
the only remaining axe color-contrast family across all routes and modes.

## 1px control boundaries below 3:1 — mitigated, not fixed (2026-08-11)

The default veil aesthetic's control borders fail WCAG 1.4.11 (non-text
3:1), as does nearly all glassmorphism. Ruling: don't harden the default —
the high-contrast layer (`prefers-contrast: more` auto, `.contrast-more`
manual) raises every boundary to ≥3:1 and is the supported path. Measured
values live in `app/design/aa/page.tsx` and the theme's contrast-more block.

## Primary button ships korozen-deep (F2b, 2026-08-10)

`--primary` is `#b64f1b` (korozen-deep), not display korozen `#d0722e` —
white labels need 4.5:1 and bright korozen only reaches ~3.4:1. Display
korozen remains the accent for borders, glows, and non-text marks.

# Design decisions

Settled rulings with enough context to reopen them later without re-deriving
the measurements. Newest first.

## Absent storage key = follow the system; no third control (2026-08-12)

**Ruling:** dark mode has three states — pinned light, pinned dark, and
following the system — expressed through two controls. The `theme` key in
`localStorage` is the pin; its **absence** means follow. Toggling to whatever
the system currently says clears the key instead of writing an agreeing value,
so the way back to system-follow is the toggle itself.

**Why not a third control.** The obvious alternative is GitHub's explicit
light / dark / system picker. That earns its place on a site with an account
and cross-device sync; on a component registry it spends a control slot to
name a state users reach anyway by toggling back.

**What was broken.** `ThemeScript` read `matches` once at boot and never
subscribed, so changing the OS appearance with the tab open did nothing until
a reload. Worse, the toggle wrote the key unconditionally, making the first
click a one-way door: after it, the system setting was ignored forever. Both
halves had to change — a listener alone still strands anyone who has ever
touched the toggle.

**Not affected:** the high-contrast layer. `prefers-contrast: more` is a plain
CSS media query with no JS mirror, so the browser re-evaluates it live already.
That is the argument for keeping mode logic as thin as it can be — the color
scheme only needs JS because a user override has to survive navigation.

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

## Primary fill stays display korozen; deep is the contrast-more step (F2b, 2026-08-11)

**Ruling (Alex):** normal view keeps display korozen `#d0722e` as
`--primary` — the brand color is design vocabulary, same category as the
1px borders above. Its white label measures 3.43:1 and is a documented
known exception in the accessibility statement. The AA step `#b64f1b`
(korozen-deep, 5.09:1) lives in the high-contrast layer only
(`prefers-contrast: more` / `.contrast-more`). Dark mode ships
korozen-soft `#f2a36b` with deep text (7.56:1) and passes in both layers.

History: the WCAG sweep briefly shipped korozen-deep as the baseline
without a ruling; reverted 2026-08-11 when Alex caught it. The dividing
line this settled: AA fixes with no design cost (names, targets, motion
gate, subtle text lightness steps) go in the baseline; anything that
reads as design vocabulary hardens only in the contrast-more layer.

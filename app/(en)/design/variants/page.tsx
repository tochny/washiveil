'use client'

import { useState } from 'react'
import { AmbientField } from '@/registry/washiveil/ui/ambient-field'
import { ThemeToggle } from '@/registry/washiveil/ui/theme-toggle'
import { GlassButton } from '@/registry/washiveil/ui/glass-button'
import { GlassCalendar } from '@/registry/washiveil/ui/glass-calendar'
import { GlassCard } from '@/registry/washiveil/ui/glass-card'
import { GlassCheckbox } from '@/registry/washiveil/ui/glass-checkbox'
import {
  GlassPagination,
  GlassPaginationContent,
  GlassPaginationItem,
  GlassPaginationLink,
  GlassPaginationNext,
  GlassPaginationPrevious,
} from '@/registry/washiveil/ui/glass-pagination'
import { GlassRadioGroup, GlassRadioGroupItem } from '@/registry/washiveil/ui/glass-radio-group'
import { GlassSlider } from '@/registry/washiveil/ui/glass-slider'
import { GlassSwitch } from '@/registry/washiveil/ui/glass-switch'
import { GlassTabs, GlassTabsList, GlassTabsTrigger } from '@/registry/washiveil/ui/glass-tabs'
import { GlassToggleGroup, GlassToggleGroupItem } from '@/registry/washiveil/ui/glass-toggle-group'

/* ── korozen override class strings ─────────────────────────────────────────
 *
 * Contrast budget (measured on #f7f3ec light / #12130f dark ground):
 *   korozen-deep  #b64f1b  on white text  →  5.09 : 1  (fills with labels)
 *   korozen       #d0722e  on white glyph →  3.43 : 1  (small UI marks ≥ 3.0)
 *   korozen-soft  #f2a36b  on deep text   →  7.56 : 1  (dark-mode fills)
 *
 * Override strategy: cn() in every component appends `className` AFTER the
 * built-in classes, so tailwind-merge resolves conflicts in our favour.
 * For internal children (radio dot, slider range) we use descendant selectors
 * whose specificity (0,1,2) beats the child's direct utility (0,1,0).
 * For GlassCalendar, the `classNames` prop spreads over defaults per-key —
 * we copy the default string and swap ruri → korozen-deep / korozen-soft.
 */

// ── calendar selected key (replaces the default wholesale) ─────────────────
const calendarSelectedKorozen =
  'bg-korozen-deep text-white dark:bg-korozen-soft dark:text-deep hover:bg-korozen-deep hover:text-white dark:hover:bg-korozen-soft dark:hover:text-deep'

// ── tabs active (white label → needs korozen-deep 5.09:1) ──────────────────
const tabsActiveKorozen =
  'data-[state=active]:bg-korozen-deep dark:data-[state=active]:bg-korozen-soft'

// ── checkbox checked (small mark → korozen 3.43:1 OK) ──────────────────────
const checkboxKorozen =
  'data-[state=checked]:bg-korozen data-[state=checked]:border-korozen dark:data-[state=checked]:bg-korozen-soft dark:data-[state=checked]:border-korozen-soft dark:data-[state=checked]:text-deep'

// ── switch checked (track fill, no text → korozen 3.43:1) ──────────────────
const switchKorozen =
  'data-[state=checked]:bg-korozen dark:data-[state=checked]:bg-korozen-soft'

// ── radio dot (descendant selector targets the inner <span> dot) ───────────
const radioKorozen = '[&_span_span]:bg-korozen dark:[&_span_span]:bg-korozen-soft'

// ── slider range (grandchild span inside track span) ───────────────────────
const sliderKorozen = '[&_span_span]:bg-korozen dark:[&_span_span]:bg-korozen-soft'

// ── toggle-group on (pill mark → korozen 3.43:1) ───────────────────────────
const toggleOnKorozen =
  'data-[state=on]:bg-korozen dark:data-[state=on]:bg-korozen-soft'

// ── pagination active (white page number → korozen-deep 5.09:1) ────────────
const paginationActiveKorozen = 'bg-korozen-deep dark:bg-korozen-soft'

// ── shared initial date (August 15, visible alongside today ring on the 11th)
const INITIAL_DATE = new Date(2026, 7, 15)

function ContrastFootnote() {
  return (
    <p className="mt-3 font-mono text-[0.6875rem] text-faint">
      5.09 : 1 deep fills &middot; 3.43 : 1 marks &middot; 7.56 : 1 dark soft/deep
    </p>
  )
}

export default function VariantsPage() {
  const [dateB, setDateB] = useState<Date | undefined>(INITIAL_DATE)
  const [dateD, setDateD] = useState<Date | undefined>(INITIAL_DATE)

  return (
    <>
      <AmbientField />
      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
        {/* ── header ──────────────────────────────────────────────────── */}
        <header className="mt-20 flex items-start justify-between gap-4 sm:mt-28">
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Tri-color grammar — B vs D
            </h1>
            <p className="mt-1 max-w-prose text-sm text-muted-foreground">
              Korozen replaces ruri in selected states. Two scoping strategies, same contrast budget.
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* ── reference strip ─────────────────────────────────────────── */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-medium">Current — ruri owns everything</h2>
          <GlassCard className="mt-4">
            <div className="flex flex-wrap items-center gap-6">
              <GlassTabs defaultValue="a">
                <GlassTabsList>
                  <GlassTabsTrigger value="a">Tab 1</GlassTabsTrigger>
                  <GlassTabsTrigger value="b">Tab 2</GlassTabsTrigger>
                </GlassTabsList>
              </GlassTabs>

              <GlassSwitch defaultChecked />
              <GlassCheckbox defaultChecked />

              <GlassPagination className="w-auto">
                <GlassPaginationContent>
                  <GlassPaginationItem>
                    <GlassPaginationPrevious href="#" />
                  </GlassPaginationItem>
                  <GlassPaginationItem>
                    <GlassPaginationLink href="#">1</GlassPaginationLink>
                  </GlassPaginationItem>
                  <GlassPaginationItem>
                    <GlassPaginationLink href="#" isActive>
                      2
                    </GlassPaginationLink>
                  </GlassPaginationItem>
                  <GlassPaginationItem>
                    <GlassPaginationLink href="#">3</GlassPaginationLink>
                  </GlassPaginationItem>
                  <GlassPaginationItem>
                    <GlassPaginationNext href="#" />
                  </GlassPaginationItem>
                </GlassPaginationContent>
              </GlassPagination>
            </div>
          </GlassCard>
        </section>

        {/* ── variant columns ─────────────────────────────────────────── */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* ── column B: every selection → korozen ────────────────── */}
          <section>
            <h2 className="font-display text-lg font-medium">B — every selection is korozen</h2>
            <p className="mt-1 text-sm text-muted-foreground">橙接管所有選定態</p>
            <div className="mt-4 space-y-4">
              <GlassCard>
                <GlassCalendar
                  mode="single"
                  selected={dateB}
                  onSelect={setDateB}
                  defaultMonth={new Date(2026, 7, 1)}
                  classNames={{
                    selected: calendarSelectedKorozen,
                  }}
                />
              </GlassCard>

              <GlassCard>
                <GlassTabs defaultValue="a">
                  <GlassTabsList>
                    <GlassTabsTrigger value="a" className={tabsActiveKorozen}>
                      Tab 1
                    </GlassTabsTrigger>
                    <GlassTabsTrigger value="b" className={tabsActiveKorozen}>
                      Tab 2
                    </GlassTabsTrigger>
                    <GlassTabsTrigger value="c" className={tabsActiveKorozen}>
                      Tab 3
                    </GlassTabsTrigger>
                  </GlassTabsList>
                </GlassTabs>
              </GlassCard>

              <GlassCard>
                <div className="flex items-center gap-6">
                  <GlassSwitch defaultChecked className={switchKorozen} />
                  <GlassCheckbox defaultChecked className={checkboxKorozen} />
                  <GlassRadioGroup defaultValue="a" className="flex flex-row gap-3">
                    <GlassRadioGroupItem value="a" className={radioKorozen} />
                    <GlassRadioGroupItem value="b" className={radioKorozen} />
                    <GlassRadioGroupItem value="c" className={radioKorozen} />
                  </GlassRadioGroup>
                </div>
              </GlassCard>

              <GlassCard>
                <GlassSlider defaultValue={[62]} className={sliderKorozen} />
              </GlassCard>

              <GlassCard>
                <GlassToggleGroup type="single" defaultValue="one">
                  <GlassToggleGroupItem value="one" className={toggleOnKorozen}>
                    One
                  </GlassToggleGroupItem>
                  <GlassToggleGroupItem value="two" className={toggleOnKorozen}>
                    Two
                  </GlassToggleGroupItem>
                  <GlassToggleGroupItem value="three" className={toggleOnKorozen}>
                    Three
                  </GlassToggleGroupItem>
                </GlassToggleGroup>
              </GlassCard>

              <GlassCard>
                <GlassPagination className="w-auto">
                  <GlassPaginationContent>
                    <GlassPaginationItem>
                      <GlassPaginationPrevious href="#" />
                    </GlassPaginationItem>
                    <GlassPaginationItem>
                      <GlassPaginationLink href="#">1</GlassPaginationLink>
                    </GlassPaginationItem>
                    <GlassPaginationItem>
                      <GlassPaginationLink href="#" isActive className={paginationActiveKorozen}>
                        2
                      </GlassPaginationLink>
                    </GlassPaginationItem>
                    <GlassPaginationItem>
                      <GlassPaginationLink href="#">3</GlassPaginationLink>
                    </GlassPaginationItem>
                    <GlassPaginationItem>
                      <GlassPaginationNext href="#" />
                    </GlassPaginationItem>
                  </GlassPaginationContent>
                </GlassPagination>
              </GlassCard>

              <GlassCard>
                <div className="flex items-center gap-3">
                  <GlassButton size="sm">Send</GlassButton>
                  <GlassButton variant="secondary" size="sm">
                    Cancel
                  </GlassButton>
                </div>
              </GlassCard>
            </div>
            <ContrastFootnote />
          </section>

          {/* ── column D: values → korozen, wayfinding → ruri ─────── */}
          <section>
            <h2 className="font-display text-lg font-medium">D — values korozen, wayfinding ruri</h2>
            <p className="mt-1 text-sm text-muted-foreground">值=橙、路=藍</p>
            <div className="mt-4 space-y-4">
              <GlassCard>
                <GlassCalendar
                  mode="single"
                  selected={dateD}
                  onSelect={setDateD}
                  defaultMonth={new Date(2026, 7, 1)}
                  classNames={{
                    selected: calendarSelectedKorozen,
                  }}
                />
              </GlassCard>

              {/* tabs: wayfinding → stays ruri (no override) */}
              <GlassCard>
                <GlassTabs defaultValue="a">
                  <GlassTabsList>
                    <GlassTabsTrigger value="a">Tab 1</GlassTabsTrigger>
                    <GlassTabsTrigger value="b">Tab 2</GlassTabsTrigger>
                    <GlassTabsTrigger value="c">Tab 3</GlassTabsTrigger>
                  </GlassTabsList>
                </GlassTabs>
              </GlassCard>

              <GlassCard>
                <div className="flex items-center gap-6">
                  <GlassSwitch defaultChecked className={switchKorozen} />
                  <GlassCheckbox defaultChecked className={checkboxKorozen} />
                  <GlassRadioGroup defaultValue="a" className="flex flex-row gap-3">
                    <GlassRadioGroupItem value="a" className={radioKorozen} />
                    <GlassRadioGroupItem value="b" className={radioKorozen} />
                    <GlassRadioGroupItem value="c" className={radioKorozen} />
                  </GlassRadioGroup>
                </div>
              </GlassCard>

              <GlassCard>
                <GlassSlider defaultValue={[62]} className={sliderKorozen} />
              </GlassCard>

              <GlassCard>
                <GlassToggleGroup type="single" defaultValue="one">
                  <GlassToggleGroupItem value="one" className={toggleOnKorozen}>
                    One
                  </GlassToggleGroupItem>
                  <GlassToggleGroupItem value="two" className={toggleOnKorozen}>
                    Two
                  </GlassToggleGroupItem>
                  <GlassToggleGroupItem value="three" className={toggleOnKorozen}>
                    Three
                  </GlassToggleGroupItem>
                </GlassToggleGroup>
              </GlassCard>

              {/* pagination: wayfinding → stays ruri (no override) */}
              <GlassCard>
                <GlassPagination className="w-auto">
                  <GlassPaginationContent>
                    <GlassPaginationItem>
                      <GlassPaginationPrevious href="#" />
                    </GlassPaginationItem>
                    <GlassPaginationItem>
                      <GlassPaginationLink href="#">1</GlassPaginationLink>
                    </GlassPaginationItem>
                    <GlassPaginationItem>
                      <GlassPaginationLink href="#" isActive>
                        2
                      </GlassPaginationLink>
                    </GlassPaginationItem>
                    <GlassPaginationItem>
                      <GlassPaginationLink href="#">3</GlassPaginationLink>
                    </GlassPaginationItem>
                    <GlassPaginationItem>
                      <GlassPaginationNext href="#" />
                    </GlassPaginationItem>
                  </GlassPaginationContent>
                </GlassPagination>
              </GlassCard>

              <GlassCard>
                <div className="flex items-center gap-3">
                  <GlassButton size="sm">Send</GlassButton>
                  <GlassButton variant="secondary" size="sm">
                    Cancel
                  </GlassButton>
                </div>
              </GlassCard>
            </div>
            <ContrastFootnote />
          </section>
        </div>
      </div>
    </>
  )
}

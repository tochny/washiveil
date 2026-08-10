import { AmbientField } from '@/registry/washiveil/ui/ambient-field';
import { Chip } from '@/registry/washiveil/ui/chip';
import { CodeBadge } from '@/registry/washiveil/ui/code-badge';
import { GlassButton } from '@/registry/washiveil/ui/glass-button';
import { GlassCard } from '@/registry/washiveil/ui/glass-card';
import {
  GlassDialog,
  GlassDialogContent,
  GlassDialogDescription,
  GlassDialogFooter,
  GlassDialogHeader,
  GlassDialogTitle,
  GlassDialogTrigger,
} from '@/registry/washiveil/ui/glass-dialog';
import { GlassInput } from '@/registry/washiveil/ui/glass-input';
import { GlassNav } from '@/registry/washiveil/ui/glass-nav';
import { GlassTextarea } from '@/registry/washiveil/ui/glass-textarea';
import { GlassTOC } from '@/registry/washiveil/ui/glass-toc';
import {
  GlassTooltip,
  GlassTooltipContent,
  GlassTooltipProvider,
  GlassTooltipTrigger,
} from '@/registry/washiveil/ui/glass-tooltip';
import { ShareRow } from '@/registry/washiveil/ui/share-row';
import { StatStrip } from '@/registry/washiveil/ui/stat-strip';
import { StatusBadge } from '@/registry/washiveil/ui/status-badge';
import { ThemeToggle } from '@/registry/washiveil/ui/theme-toggle';

const NAV_LINKS = [
  { label: 'Surfaces', href: '#surfaces' },
  { label: 'Forms', href: '#forms' },
  { label: 'Overlays', href: '#overlays' },
  { label: 'Typography', href: '#typography' },
];

function Section({ id, title, lede, children }: { id: string; title: string; lede: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display text-2xl font-medium">{title}</h2>
      <p className="mt-1 max-w-prose text-sm text-muted-foreground">{lede}</p>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <AmbientField />
      <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <GlassNav
          brand={<span className="font-display text-xl font-semibold">washiveil</span>}
          links={NAV_LINKS}
          cta={{ label: 'GitHub', href: 'https://github.com/tochny' }}
        >
          <ThemeToggle />
        </GlassNav>

        {/* Hero */}
        <header className="mt-20 sm:mt-28">
          <StatusBadge>phase 1 — 16 items</StatusBadge>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Warm paper. Translucent veils.
          </h1>
          <p className="mt-4 max-w-[38rem] text-lg leading-relaxed text-body">
            A shadcn registry that is not glassmorphism: the ground is washi, every layer above it is a veil, and three
            lights move beneath everything. Chinese &amp; Japanese typography is first-class, not an afterthought.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <GlassButton asChild>
              <a href="#install">Install</a>
            </GlassButton>
            <GlassButton variant="secondary" asChild>
              <a href="#surfaces">Browse components</a>
            </GlassButton>
          </div>
          <StatStrip
            className="mt-12"
            items={[
              { value: '16', label: 'registry items' },
              { value: '3', label: 'lights on paper' },
              { value: 'MIT', label: 'licensed' },
            ]}
          />
        </header>

        <main className="mt-20 space-y-20">
          <Section
            id="surfaces"
            title="Surfaces & marks"
            lede="Cards, pills, and badges on the glass registers — semantic tokens switch themes with a single class."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard>
                <p className="font-mono text-[0.75rem] tracking-[0.2em] text-faint uppercase">glass-card</p>
                <p className="mt-2 text-sm text-body">
                  The base veil. White over washi in light; a lifted warm dark — never a white haze — in dark.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip hue="ruri">ruri 瑠璃</Chip>
                  <Chip hue="korozen">korozen 黄櫨染</Chip>
                  <Chip hue="sumire">sumire 菫</Chip>
                  <Chip hue="neutral">neutral</Chip>
                </div>
              </GlassCard>
              <GlassCard>
                <p className="font-mono text-[0.75rem] tracking-[0.2em] text-faint uppercase">buttons & badges</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <GlassButton>Primary</GlassButton>
                  <GlassButton variant="secondary">Secondary</GlassButton>
                  <GlassButton variant="tinted">Tinted</GlassButton>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <CodeBadge>WV-101</CodeBadge>
                  <CodeBadge>v0.1.0</CodeBadge>
                  <StatusBadge>live</StatusBadge>
                </div>
              </GlassCard>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_16rem]">
              <GlassCard>
                <p className="font-mono text-[0.75rem] tracking-[0.2em] text-faint uppercase">share-row</p>
                <ShareRow className="mt-3" url="https://washiveil.alexchih.com" title="washiveil — warm paper, translucent veils" />
              </GlassCard>
              <GlassTOC
                items={[
                  { label: 'Surfaces & marks', href: '#surfaces', active: true },
                  { label: 'Forms on glass', href: '#forms' },
                  { label: 'Overlays', href: '#overlays' },
                  { label: 'Typography', href: '#typography' },
                ]}
              />
            </div>
          </Section>

          <Section id="forms" title="Forms on glass" lede="Fields sit on the veil; focus is a ruri ring on every register.">
            <GlassCard className="max-w-xl">
              <form className="grid gap-3">
                <GlassInput placeholder="Name" aria-label="Name" />
                <GlassInput type="email" placeholder="Email" aria-label="Email" />
                <GlassTextarea placeholder="Say something…" aria-label="Message" />
                <div>
                  <GlassButton size="sm">Send</GlassButton>
                </div>
              </form>
            </GlassCard>
          </Section>

          <Section
            id="overlays"
            title="Overlays"
            lede="Radix underneath, veils on top — the dialog is a stronger glass over a soft deep scrim."
          >
            <GlassCard className="flex flex-wrap items-center gap-4">
              <GlassDialog>
                <GlassDialogTrigger asChild>
                  <GlassButton variant="tinted">Open dialog</GlassButton>
                </GlassDialogTrigger>
                <GlassDialogContent>
                  <GlassDialogHeader>
                    <GlassDialogTitle>A veil, not a wall</GlassDialogTitle>
                    <GlassDialogDescription>
                      The ambient field stays visible through the scrim — the dialog belongs to the same room.
                    </GlassDialogDescription>
                  </GlassDialogHeader>
                  <GlassDialogFooter>
                    <GlassButton size="sm">Continue</GlassButton>
                  </GlassDialogFooter>
                </GlassDialogContent>
              </GlassDialog>
              <GlassTooltipProvider>
                <GlassTooltip>
                  <GlassTooltipTrigger asChild>
                    <GlassButton variant="secondary">Hover for tooltip</GlassButton>
                  </GlassTooltipTrigger>
                  <GlassTooltipContent>Strong glass, small words</GlassTooltipContent>
                </GlassTooltip>
              </GlassTooltipProvider>
            </GlassCard>
          </Section>

          <Section
            id="typography"
            title="Chinese & Japanese, first-class"
            lede="Noto CJK unifies zh/ja glyph forms; display text balances; Japanese headings break at phrase boundaries."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard>
                <p className="font-mono text-[0.75rem] tracking-[0.2em] text-faint uppercase">zh-TW 中文</p>
                <h3 className="mt-2 font-display text-xl font-medium">紙為底，紗為層，三色為光</h3>
                <p className="mt-2 text-sm leading-[1.85] text-body">
                  暖紙質感的介面系統——全形標點與中日字形在各平台保持一致，排版不是事後補丁。
                </p>
              </GlassCard>
              <GlassCard lang="ja">
                <p className="font-mono text-[0.75rem] tracking-[0.2em] text-faint uppercase">ja 日本語</p>
                <h3 className="mt-2 font-display text-xl font-medium">紙の上に、三つの灯り</h3>
                <p className="mt-2 text-sm leading-[1.85] text-body">
                  和紙の温もりを基調に、語節単位の改行と統一された字形で、日本語の組版を最初から考慮した設計です。
                </p>
              </GlassCard>
            </div>
          </Section>

          <Section id="install" title="Install" lede="Every component pulls the theme token layer automatically.">
            <GlassCard className="overflow-x-auto">
              <pre className="font-mono text-[0.8125rem] leading-relaxed">
                <code>npx shadcn@latest add https://washiveil.alexchih.com/r/glass-card.json</code>
              </pre>
            </GlassCard>
          </Section>
        </main>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-sm text-muted-foreground">
          <p>
            MIT ©{' '}
            <a className="text-ruri hover:text-deep dark:text-ruri-soft dark:hover:text-ruri-pale" href="https://alexchih.com">
              Alex Chih
            </a>
          </p>
          <p className="font-mono text-[0.75rem] tracking-[0.2em] uppercase">washiveil — paper · veil · three lights</p>
        </footer>
      </div>
    </>
  );
}

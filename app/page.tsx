import { PickerDemo } from '@/components/picker-demo';
import { ToastDemo } from '@/components/toast-demo';
import {
  GlassDrawer,
  GlassDrawerContent,
  GlassDrawerDescription,
  GlassDrawerHeader,
  GlassDrawerTitle,
  GlassDrawerTrigger,
} from '@/registry/washiveil/ui/glass-drawer';
import { GlassEmpty, GlassEmptyDescription, GlassEmptyIcon, GlassEmptyTitle } from '@/registry/washiveil/ui/glass-empty';
import { GlassInputOTP, GlassInputOTPGroup, GlassInputOTPSlot } from '@/registry/washiveil/ui/glass-input-otp';
import { GlassKbd } from '@/registry/washiveil/ui/glass-kbd';
import { GlassSpinner } from '@/registry/washiveil/ui/glass-spinner';
import { GlassToggleGroup, GlassToggleGroupItem } from '@/registry/washiveil/ui/glass-toggle-group';
import { AmbientField } from '@/registry/washiveil/ui/ambient-field';
import { Chip } from '@/registry/washiveil/ui/chip';
import { CodeBadge } from '@/registry/washiveil/ui/code-badge';
import {
  GlassAccordion,
  GlassAccordionContent,
  GlassAccordionItem,
  GlassAccordionTrigger,
} from '@/registry/washiveil/ui/glass-accordion';
import { GlassAlert, GlassAlertDescription, GlassAlertTitle } from '@/registry/washiveil/ui/glass-alert';
import {
  GlassAlertDialog,
  GlassAlertDialogAction,
  GlassAlertDialogCancel,
  GlassAlertDialogContent,
  GlassAlertDialogDescription,
  GlassAlertDialogFooter,
  GlassAlertDialogHeader,
  GlassAlertDialogTitle,
  GlassAlertDialogTrigger,
} from '@/registry/washiveil/ui/glass-alert-dialog';
import { GlassAvatar, GlassAvatarFallback } from '@/registry/washiveil/ui/glass-avatar';
import {
  GlassBreadcrumb,
  GlassBreadcrumbItem,
  GlassBreadcrumbLink,
  GlassBreadcrumbList,
  GlassBreadcrumbPage,
  GlassBreadcrumbSeparator,
} from '@/registry/washiveil/ui/glass-breadcrumb';
import { GlassButton } from '@/registry/washiveil/ui/glass-button';
import { GlassCard } from '@/registry/washiveil/ui/glass-card';
import { GlassCheckbox } from '@/registry/washiveil/ui/glass-checkbox';
import {
  GlassDialog,
  GlassDialogContent,
  GlassDialogDescription,
  GlassDialogFooter,
  GlassDialogHeader,
  GlassDialogTitle,
  GlassDialogTrigger,
} from '@/registry/washiveil/ui/glass-dialog';
import {
  GlassDropdownMenu,
  GlassDropdownMenuContent,
  GlassDropdownMenuItem,
  GlassDropdownMenuLabel,
  GlassDropdownMenuSeparator,
  GlassDropdownMenuShortcut,
  GlassDropdownMenuTrigger,
} from '@/registry/washiveil/ui/glass-dropdown-menu';
import { GlassInput } from '@/registry/washiveil/ui/glass-input';
import { GlassLabel } from '@/registry/washiveil/ui/glass-label';
import { GlassNav } from '@/registry/washiveil/ui/glass-nav';
import {
  GlassPagination,
  GlassPaginationContent,
  GlassPaginationItem,
  GlassPaginationLink,
  GlassPaginationNext,
  GlassPaginationPrevious,
} from '@/registry/washiveil/ui/glass-pagination';
import { GlassProgress } from '@/registry/washiveil/ui/glass-progress';
import { GlassRadioGroup, GlassRadioGroupItem } from '@/registry/washiveil/ui/glass-radio-group';
import {
  GlassSelect,
  GlassSelectContent,
  GlassSelectItem,
  GlassSelectTrigger,
  GlassSelectValue,
} from '@/registry/washiveil/ui/glass-select';
import { GlassSeparator } from '@/registry/washiveil/ui/glass-separator';
import {
  GlassSheet,
  GlassSheetContent,
  GlassSheetDescription,
  GlassSheetHeader,
  GlassSheetTitle,
  GlassSheetTrigger,
} from '@/registry/washiveil/ui/glass-sheet';
import { GlassSkeleton } from '@/registry/washiveil/ui/glass-skeleton';
import { GlassSlider } from '@/registry/washiveil/ui/glass-slider';
import { GlassToaster } from '@/registry/washiveil/ui/glass-sonner';
import { GlassSwitch } from '@/registry/washiveil/ui/glass-switch';
import { GlassTextarea } from '@/registry/washiveil/ui/glass-textarea';
import { GlassTOC } from '@/registry/washiveil/ui/glass-toc';
import {
  GlassTable,
  GlassTableBody,
  GlassTableCell,
  GlassTableHead,
  GlassTableHeader,
  GlassTableRow,
} from '@/registry/washiveil/ui/glass-table';
import { GlassTabs, GlassTabsContent, GlassTabsList, GlassTabsTrigger } from '@/registry/washiveil/ui/glass-tabs';
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
  { label: 'Controls', href: '#controls' },
  { label: 'Overlays', href: '#overlays' },
  { label: 'Structure', href: '#structure' },
];

const TOC_ITEMS = [
  { label: 'Surfaces & marks', href: '#surfaces', active: true },
  { label: 'Forms & controls', href: '#controls' },
  { label: 'Overlays', href: '#overlays' },
  { label: 'Structure', href: '#structure' },
  { label: 'Indicators', href: '#indicators' },
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

function Tag({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[0.75rem] tracking-[0.2em] text-faint uppercase">{children}</p>;
}

export default function Home() {
  return (
    <>
      <AmbientField />
      <GlassToaster />
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
          <StatusBadge>56 registry items</StatusBadge>
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
              { value: '56', label: 'registry items' },
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
                <Tag>glass-card</Tag>
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
                <Tag>buttons &amp; badges</Tag>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <GlassButton>Primary</GlassButton>
                  <GlassButton variant="secondary">Secondary</GlassButton>
                  <GlassButton variant="tinted">Tinted</GlassButton>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <CodeBadge>WV-101</CodeBadge>
                  <CodeBadge>v0.2.0</CodeBadge>
                  <StatusBadge>live</StatusBadge>
                </div>
              </GlassCard>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_16rem]">
              <GlassCard>
                <Tag>share-row</Tag>
                <ShareRow
                  className="mt-3"
                  url="https://washiveil.alexchih.com"
                  title="washiveil — warm paper, translucent veils"
                />
              </GlassCard>
              <GlassTOC items={TOC_ITEMS} />
            </div>
          </Section>

          <Section
            id="controls"
            title="Forms & controls"
            lede="The full control set on the glass field register — every focus is a ruri ring."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard>
                <form className="grid gap-3">
                  <div className="grid gap-1.5">
                    <GlassLabel htmlFor="demo-name">Name</GlassLabel>
                    <GlassInput id="demo-name" placeholder="Kaguya" />
                  </div>
                  <div className="grid gap-1.5">
                    <GlassLabel htmlFor="demo-topic">Topic</GlassLabel>
                    <GlassSelect>
                      <GlassSelectTrigger id="demo-topic" className="w-full">
                        <GlassSelectValue placeholder="Choose a topic" />
                      </GlassSelectTrigger>
                      <GlassSelectContent>
                        <GlassSelectItem value="paper">Paper</GlassSelectItem>
                        <GlassSelectItem value="veil">Veil</GlassSelectItem>
                        <GlassSelectItem value="light">Three lights</GlassSelectItem>
                      </GlassSelectContent>
                    </GlassSelect>
                  </div>
                  <div className="grid gap-1.5">
                    <GlassLabel htmlFor="demo-msg">Message</GlassLabel>
                    <GlassTextarea id="demo-msg" placeholder="Say something…" />
                  </div>
                  <div>
                    <GlassButton size="sm">Send</GlassButton>
                  </div>
                </form>
              </GlassCard>
              <GlassCard className="grid content-start gap-5">
                <div className="flex items-center gap-3">
                  <GlassSwitch id="demo-switch" defaultChecked />
                  <GlassLabel htmlFor="demo-switch">Ambient motion</GlassLabel>
                </div>
                <div className="flex items-center gap-3">
                  <GlassCheckbox id="demo-check" defaultChecked />
                  <GlassLabel htmlFor="demo-check">Ship with grain</GlassLabel>
                </div>
                <GlassRadioGroup defaultValue="ruri" className="flex gap-5">
                  <div className="flex items-center gap-2">
                    <GlassRadioGroupItem value="ruri" id="demo-r1" />
                    <GlassLabel htmlFor="demo-r1">Ruri</GlassLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <GlassRadioGroupItem value="korozen" id="demo-r2" />
                    <GlassLabel htmlFor="demo-r2">Korozen</GlassLabel>
                  </div>
                </GlassRadioGroup>
                <GlassSlider defaultValue={[62]} max={100} step={1} />
                <GlassProgress value={62} />
              </GlassCard>
            </div>
          </Section>

          <Section
            id="overlays"
            title="Overlays"
            lede="Radix underneath, veils on top — panels float on strong glass over a soft deep scrim."
          >
            <GlassCard className="flex flex-wrap items-center gap-3">
              <GlassDialog>
                <GlassDialogTrigger asChild>
                  <GlassButton variant="tinted" size="sm">
                    Dialog
                  </GlassButton>
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
              <GlassSheet>
                <GlassSheetTrigger asChild>
                  <GlassButton variant="secondary" size="sm">
                    Sheet
                  </GlassButton>
                </GlassSheetTrigger>
                <GlassSheetContent>
                  <GlassSheetHeader>
                    <GlassSheetTitle>A floating veil</GlassSheetTitle>
                    <GlassSheetDescription>Inset from the edge, rounded like every other surface.</GlassSheetDescription>
                  </GlassSheetHeader>
                </GlassSheetContent>
              </GlassSheet>
              <GlassAlertDialog>
                <GlassAlertDialogTrigger asChild>
                  <GlassButton variant="secondary" size="sm">
                    Alert dialog
                  </GlassButton>
                </GlassAlertDialogTrigger>
                <GlassAlertDialogContent>
                  <GlassAlertDialogHeader>
                    <GlassAlertDialogTitle>Tear this page?</GlassAlertDialogTitle>
                    <GlassAlertDialogDescription>Washi does not mend. This cannot be undone.</GlassAlertDialogDescription>
                  </GlassAlertDialogHeader>
                  <GlassAlertDialogFooter>
                    <GlassAlertDialogCancel>Keep it</GlassAlertDialogCancel>
                    <GlassAlertDialogAction>Tear</GlassAlertDialogAction>
                  </GlassAlertDialogFooter>
                </GlassAlertDialogContent>
              </GlassAlertDialog>
              <GlassDropdownMenu>
                <GlassDropdownMenuTrigger asChild>
                  <GlassButton variant="secondary" size="sm">
                    Menu
                  </GlassButton>
                </GlassDropdownMenuTrigger>
                <GlassDropdownMenuContent>
                  <GlassDropdownMenuLabel>Paper</GlassDropdownMenuLabel>
                  <GlassDropdownMenuItem>
                    New sheet
                    <GlassDropdownMenuShortcut>⌘N</GlassDropdownMenuShortcut>
                  </GlassDropdownMenuItem>
                  <GlassDropdownMenuItem>Fold</GlassDropdownMenuItem>
                  <GlassDropdownMenuSeparator />
                  <GlassDropdownMenuItem>Hold to light</GlassDropdownMenuItem>
                </GlassDropdownMenuContent>
              </GlassDropdownMenu>
              <GlassTooltipProvider>
                <GlassTooltip>
                  <GlassTooltipTrigger asChild>
                    <GlassButton variant="secondary" size="sm">
                      Tooltip
                    </GlassButton>
                  </GlassTooltipTrigger>
                  <GlassTooltipContent>Strong glass, small words</GlassTooltipContent>
                </GlassTooltip>
              </GlassTooltipProvider>
              <ToastDemo />
            </GlassCard>
          </Section>

          <Section id="structure" title="Structure" lede="Tabs, accordion, and tables in the washi editorial register.">
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard>
                <GlassTabs defaultValue="paper">
                  <GlassTabsList>
                    <GlassTabsTrigger value="paper">Paper</GlassTabsTrigger>
                    <GlassTabsTrigger value="veil">Veil</GlassTabsTrigger>
                    <GlassTabsTrigger value="light">Light</GlassTabsTrigger>
                  </GlassTabsList>
                  <GlassTabsContent value="paper" className="text-sm text-body">
                    The ground is warm and grained — never pure white.
                  </GlassTabsContent>
                  <GlassTabsContent value="veil" className="text-sm text-body">
                    Layers are translucent and soft, letting the ground through.
                  </GlassTabsContent>
                  <GlassTabsContent value="light" className="text-sm text-body">
                    Three lights hold fixed positions beneath everything.
                  </GlassTabsContent>
                </GlassTabs>
                <GlassSeparator className="my-5" />
                <GlassAccordion type="single" collapsible>
                  <GlassAccordionItem value="a">
                    <GlassAccordionTrigger>Why not glassmorphism?</GlassAccordionTrigger>
                    <GlassAccordionContent>
                      Glass is hard and cold. A veil is soft — it belongs on paper.
                    </GlassAccordionContent>
                  </GlassAccordionItem>
                  <GlassAccordionItem value="b">
                    <GlassAccordionTrigger>Why three lights?</GlassAccordionTrigger>
                    <GlassAccordionContent>That story lives on the author&apos;s site — go read it.</GlassAccordionContent>
                  </GlassAccordionItem>
                </GlassAccordion>
              </GlassCard>
              <GlassCard>
                <GlassAlert variant="info" className="mb-4">
                  <GlassAlertTitle>Semantic tokens switch alone</GlassAlertTitle>
                  <GlassAlertDescription>One class covers both themes; only the tri-color opts in.</GlassAlertDescription>
                </GlassAlert>
                <GlassTable>
                  <GlassTableHeader>
                    <GlassTableRow>
                      <GlassTableHead>Token</GlassTableHead>
                      <GlassTableHead>Named after</GlassTableHead>
                      <GlassTableHead>ΔE</GlassTableHead>
                    </GlassTableRow>
                  </GlassTableHeader>
                  <GlassTableBody>
                    <GlassTableRow>
                      <GlassTableCell>ruri</GlassTableCell>
                      <GlassTableCell>瑠璃 — lapis blue</GlassTableCell>
                      <GlassTableCell>7.8</GlassTableCell>
                    </GlassTableRow>
                    <GlassTableRow>
                      <GlassTableCell>korozen</GlassTableCell>
                      <GlassTableCell>黄櫨染 — imperial amber</GlassTableCell>
                      <GlassTableCell>7.8</GlassTableCell>
                    </GlassTableRow>
                    <GlassTableRow>
                      <GlassTableCell>sumire</GlassTableCell>
                      <GlassTableCell>菫 — violet</GlassTableCell>
                      <GlassTableCell>13.0</GlassTableCell>
                    </GlassTableRow>
                  </GlassTableBody>
                </GlassTable>
              </GlassCard>
            </div>
          </Section>

          <Section id="indicators" title="Indicators & wayfinding" lede="Quiet states and quiet navigation.">
            <GlassCard className="grid gap-6">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <GlassAvatar>
                    <GlassAvatarFallback>AC</GlassAvatarFallback>
                  </GlassAvatar>
                  <div className="grid gap-1.5">
                    <GlassSkeleton className="h-3 w-32" />
                    <GlassSkeleton className="h-3 w-20" />
                  </div>
                </div>
                <GlassBreadcrumb>
                  <GlassBreadcrumbList>
                    <GlassBreadcrumbItem>
                      <GlassBreadcrumbLink href="#">Paper</GlassBreadcrumbLink>
                    </GlassBreadcrumbItem>
                    <GlassBreadcrumbSeparator />
                    <GlassBreadcrumbItem>
                      <GlassBreadcrumbLink href="#">Veil</GlassBreadcrumbLink>
                    </GlassBreadcrumbItem>
                    <GlassBreadcrumbSeparator />
                    <GlassBreadcrumbItem>
                      <GlassBreadcrumbPage>Light</GlassBreadcrumbPage>
                    </GlassBreadcrumbItem>
                  </GlassBreadcrumbList>
                </GlassBreadcrumb>
              </div>
              <GlassPagination>
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
          </Section>

          <Section id="pickers" title="Pickers & input" lede="cmdk, day-picker, vaul, and OTP — all wearing the same veil.">
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard className="grid content-start gap-4">
                <PickerDemo />
                <GlassInputOTP maxLength={6}>
                  <GlassInputOTPGroup>
                    <GlassInputOTPSlot index={0} />
                    <GlassInputOTPSlot index={1} />
                    <GlassInputOTPSlot index={2} />
                    <GlassInputOTPSlot index={3} />
                    <GlassInputOTPSlot index={4} />
                    <GlassInputOTPSlot index={5} />
                  </GlassInputOTPGroup>
                </GlassInputOTP>
                <div className="flex flex-wrap items-center gap-3">
                  <GlassToggleGroup type="single" defaultValue="veil" variant="outline">
                    <GlassToggleGroupItem value="washi">Washi</GlassToggleGroupItem>
                    <GlassToggleGroupItem value="veil">Veil</GlassToggleGroupItem>
                    <GlassToggleGroupItem value="light">Light</GlassToggleGroupItem>
                  </GlassToggleGroup>
                  <GlassDrawer>
                    <GlassDrawerTrigger asChild>
                      <GlassButton variant="secondary" size="sm">
                        Drawer
                      </GlassButton>
                    </GlassDrawerTrigger>
                    <GlassDrawerContent>
                      <GlassDrawerHeader>
                        <GlassDrawerTitle>A rising veil</GlassDrawerTitle>
                        <GlassDrawerDescription>Drag the handle. It floats, inset like the sheet.</GlassDrawerDescription>
                      </GlassDrawerHeader>
                    </GlassDrawerContent>
                  </GlassDrawer>
                </div>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GlassSpinner /> Loading with <GlassKbd>⌘</GlassKbd>
                  <GlassKbd>K</GlassKbd> nearby
                </p>
              </GlassCard>
              <GlassEmpty>
                <GlassEmptyIcon>
                  <GlassSpinner aria-hidden="true" />
                </GlassEmptyIcon>
                <GlassEmptyTitle>Nothing here yet</GlassEmptyTitle>
                <GlassEmptyDescription>
                  The empty state is a dashed washi ground — quiet, not apologetic.
                </GlassEmptyDescription>
              </GlassEmpty>
            </div>
          </Section>

          <Section
            id="typography"
            title="Chinese & Japanese, first-class"
            lede="Noto CJK unifies zh/ja glyph forms; display text balances; Japanese headings break at phrase boundaries."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard>
                <Tag>zh-TW 中文</Tag>
                <h3 className="mt-2 font-display text-xl font-medium">紙為底，紗為層，三色為光</h3>
                <p className="mt-2 text-sm leading-[1.85] text-body">
                  暖紙質感的介面系統——全形標點與中日字形在各平台保持一致，排版不是事後補丁。
                </p>
              </GlassCard>
              <GlassCard lang="ja">
                <Tag>ja 日本語</Tag>
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
            <a
              className="text-ruri hover:text-deep dark:text-ruri-soft dark:hover:text-ruri-pale"
              href="https://alexchih.com"
            >
              Alex Chih
            </a>
          </p>
          <p className="font-mono text-[0.75rem] tracking-[0.2em] uppercase">washiveil — paper · veil · three lights</p>
        </footer>
      </div>
    </>
  );
}

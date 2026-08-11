import { InstallCommand } from '@/components/install-command';
import { PickerDemo } from '@/components/picker-demo';
import { ProseSpecimen } from '@/components/prose-specimen';
import { SiteNav } from '@/components/site-nav';
import { ToastDemo } from '@/components/toast-demo';
import { VeilProof } from '@/components/veil-proof';
import { COPY, LOCALE_PATHS, LOCALE_TAGS, type Locale } from '@/components/copy';
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
  return <p className="font-mono text-[0.75rem] tracking-[0.2em] text-muted-foreground uppercase">{children}</p>;
}

export function DemoPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  const tocItems = [
    { label: t.veil.title, href: '#veil', active: true },
    { label: t.surfaces.title, href: '#surfaces' },
    { label: t.controls.title, href: '#controls' },
    { label: t.overlays.title, href: '#overlays' },
    { label: t.structure.title, href: '#structure' },
    { label: t.indicators.title, href: '#indicators' },
    { label: t.typography.title, href: '#typography' },
    { label: t.prose.title, href: '#prose' },
  ];

  return (
    <>
      <AmbientField />
      <GlassToaster />
      <div
        className="mx-auto max-w-4xl px-4 pb-24 sm:px-6"
        lang={locale !== 'en' ? LOCALE_TAGS[locale] : undefined}
      >
        <SiteNav locale={locale} />

        {/* Hero */}
        <header className="mt-20 sm:mt-28">
          <StatusBadge>{t.hero.badge}</StatusBadge>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{t.hero.title}</h1>
          <p className="mt-4 max-w-[38rem] text-lg leading-relaxed text-body">{t.hero.lede}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <GlassButton asChild>
              <a href="#install">{t.hero.install}</a>
            </GlassButton>
            <GlassButton variant="secondary" asChild>
              <a href="#surfaces">{t.hero.browse}</a>
            </GlassButton>
          </div>
          <StatStrip
            className="mt-12"
            items={[
              { value: '58', label: t.hero.statItems },
              { value: '3', label: t.hero.statLights },
              { value: 'MIT', label: t.hero.statLicense },
            ]}
          />
        </header>

        <main className="mt-20 space-y-20">
          <Section id="veil" title={t.veil.title} lede={t.veil.lede}>
            <VeilProof />
          </Section>

          <Section id="surfaces" title={t.surfaces.title} lede={t.surfaces.lede}>
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard>
                <Tag>{t.surfaces.cardTag}</Tag>
                <p className="mt-2 text-sm text-body">{t.surfaces.cardBody}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip hue="ruri">ruri 瑠璃</Chip>
                  <Chip hue="korozen">korozen 黄櫨染</Chip>
                  <Chip hue="sumire">sumire 菫</Chip>
                  <Chip hue="neutral">neutral</Chip>
                </div>
              </GlassCard>
              <GlassCard>
                <Tag>{t.surfaces.buttonsTag}</Tag>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <GlassButton>{t.surfaces.primary}</GlassButton>
                  <GlassButton variant="secondary">{t.surfaces.secondary}</GlassButton>
                  <GlassButton variant="tinted">{t.surfaces.tinted}</GlassButton>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <CodeBadge>WV-101</CodeBadge>
                  <CodeBadge>v0.2.0</CodeBadge>
                  <StatusBadge>{t.surfaces.live}</StatusBadge>
                </div>
              </GlassCard>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_16rem]">
              <GlassCard>
                <Tag>{t.surfaces.shareTag}</Tag>
                <ShareRow
                  className="mt-3"
                  url="https://washiveil.alexchih.com"
                  title="washiveil — warm paper, translucent veils"
                />
              </GlassCard>
              <GlassTOC items={tocItems} />
            </div>
            <InstallCommand item="glass-card" copyLabel={t.installCmd.copy} copiedLabel={t.installCmd.copied} className="mt-4" />
          </Section>

          <Section id="controls" title={t.controls.title} lede={t.controls.lede}>
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard>
                <form className="grid gap-3">
                  <div className="grid gap-1.5">
                    <GlassLabel htmlFor="demo-name">{t.controls.name}</GlassLabel>
                    <GlassInput id="demo-name" placeholder={t.controls.namePh} />
                  </div>
                  <div className="grid gap-1.5">
                    <GlassLabel htmlFor="demo-topic">{t.controls.topic}</GlassLabel>
                    <GlassSelect>
                      <GlassSelectTrigger id="demo-topic" className="w-full">
                        <GlassSelectValue placeholder={t.controls.topicPh} />
                      </GlassSelectTrigger>
                      <GlassSelectContent>
                        <GlassSelectItem value="paper">{t.controls.topicPaper}</GlassSelectItem>
                        <GlassSelectItem value="veil">{t.controls.topicVeil}</GlassSelectItem>
                        <GlassSelectItem value="light">{t.controls.topicLight}</GlassSelectItem>
                      </GlassSelectContent>
                    </GlassSelect>
                  </div>
                  <div className="grid gap-1.5">
                    <GlassLabel htmlFor="demo-msg">{t.controls.message}</GlassLabel>
                    <GlassTextarea id="demo-msg" placeholder={t.controls.messagePh} />
                  </div>
                  <div>
                    <GlassButton size="sm">{t.controls.send}</GlassButton>
                  </div>
                </form>
              </GlassCard>
              <GlassCard className="grid content-start gap-5">
                <div className="flex items-center gap-3">
                  <GlassSwitch id="demo-switch" defaultChecked />
                  <GlassLabel htmlFor="demo-switch">{t.controls.ambient}</GlassLabel>
                </div>
                <div className="flex items-center gap-3">
                  <GlassCheckbox id="demo-check" defaultChecked />
                  <GlassLabel htmlFor="demo-check">{t.controls.grain}</GlassLabel>
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
                <GlassSlider defaultValue={[62]} max={100} step={1} aria-label={t.controls.sliderLabel} />
                <GlassProgress value={62} aria-label={t.controls.progressLabel} />
              </GlassCard>
            </div>
            <InstallCommand item="glass-select" copyLabel={t.installCmd.copy} copiedLabel={t.installCmd.copied} className="mt-4" />
          </Section>

          <Section id="overlays" title={t.overlays.title} lede={t.overlays.lede}>
            <GlassCard className="flex flex-wrap items-center gap-3">
              <GlassDialog>
                <GlassDialogTrigger asChild>
                  <GlassButton variant="tinted" size="sm">
                    {t.overlays.dialog}
                  </GlassButton>
                </GlassDialogTrigger>
                <GlassDialogContent>
                  <GlassDialogHeader>
                    <GlassDialogTitle>{t.overlays.dialogTitle}</GlassDialogTitle>
                    <GlassDialogDescription>{t.overlays.dialogBody}</GlassDialogDescription>
                  </GlassDialogHeader>
                  <GlassDialogFooter>
                    <GlassButton size="sm">{t.overlays.continue}</GlassButton>
                  </GlassDialogFooter>
                </GlassDialogContent>
              </GlassDialog>
              <GlassSheet>
                <GlassSheetTrigger asChild>
                  <GlassButton variant="secondary" size="sm">
                    {t.overlays.sheet}
                  </GlassButton>
                </GlassSheetTrigger>
                <GlassSheetContent>
                  <GlassSheetHeader>
                    <GlassSheetTitle>{t.overlays.sheetTitle}</GlassSheetTitle>
                    <GlassSheetDescription>{t.overlays.sheetBody}</GlassSheetDescription>
                  </GlassSheetHeader>
                </GlassSheetContent>
              </GlassSheet>
              <GlassAlertDialog>
                <GlassAlertDialogTrigger asChild>
                  <GlassButton variant="secondary" size="sm">
                    {t.overlays.alertDialog}
                  </GlassButton>
                </GlassAlertDialogTrigger>
                <GlassAlertDialogContent>
                  <GlassAlertDialogHeader>
                    <GlassAlertDialogTitle>{t.overlays.alertTitle}</GlassAlertDialogTitle>
                    <GlassAlertDialogDescription>{t.overlays.alertBody}</GlassAlertDialogDescription>
                  </GlassAlertDialogHeader>
                  <GlassAlertDialogFooter>
                    <GlassAlertDialogCancel>{t.overlays.keep}</GlassAlertDialogCancel>
                    <GlassAlertDialogAction>{t.overlays.tear}</GlassAlertDialogAction>
                  </GlassAlertDialogFooter>
                </GlassAlertDialogContent>
              </GlassAlertDialog>
              <GlassDropdownMenu>
                <GlassDropdownMenuTrigger asChild>
                  <GlassButton variant="secondary" size="sm">
                    {t.overlays.menu}
                  </GlassButton>
                </GlassDropdownMenuTrigger>
                <GlassDropdownMenuContent>
                  <GlassDropdownMenuLabel>{t.overlays.menuLabel}</GlassDropdownMenuLabel>
                  <GlassDropdownMenuItem>
                    {t.overlays.menuNew}
                    <GlassDropdownMenuShortcut>⌘N</GlassDropdownMenuShortcut>
                  </GlassDropdownMenuItem>
                  <GlassDropdownMenuItem>{t.overlays.menuFold}</GlassDropdownMenuItem>
                  <GlassDropdownMenuSeparator />
                  <GlassDropdownMenuItem>{t.overlays.menuHold}</GlassDropdownMenuItem>
                </GlassDropdownMenuContent>
              </GlassDropdownMenu>
              <GlassTooltipProvider>
                <GlassTooltip>
                  <GlassTooltipTrigger asChild>
                    <GlassButton variant="secondary" size="sm">
                      {t.overlays.tooltip}
                    </GlassButton>
                  </GlassTooltipTrigger>
                  <GlassTooltipContent>{t.overlays.tooltipBody}</GlassTooltipContent>
                </GlassTooltip>
              </GlassTooltipProvider>
              <ToastDemo label={t.overlays.toast} title={t.overlays.toastTitle} description={t.overlays.toastBody} />
            </GlassCard>
            <InstallCommand item="glass-dialog" copyLabel={t.installCmd.copy} copiedLabel={t.installCmd.copied} className="mt-4" />
          </Section>

          <Section id="structure" title={t.structure.title} lede={t.structure.lede}>
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard>
                <GlassTabs defaultValue="paper">
                  <GlassTabsList>
                    <GlassTabsTrigger value="paper">{t.structure.tabPaper}</GlassTabsTrigger>
                    <GlassTabsTrigger value="veil">{t.structure.tabVeil}</GlassTabsTrigger>
                    <GlassTabsTrigger value="light">{t.structure.tabLight}</GlassTabsTrigger>
                  </GlassTabsList>
                  <GlassTabsContent value="paper" className="text-sm text-body">
                    {t.structure.tabPaperBody}
                  </GlassTabsContent>
                  <GlassTabsContent value="veil" className="text-sm text-body">
                    {t.structure.tabVeilBody}
                  </GlassTabsContent>
                  <GlassTabsContent value="light" className="text-sm text-body">
                    {t.structure.tabLightBody}
                  </GlassTabsContent>
                </GlassTabs>
                <GlassSeparator className="my-5" />
                <GlassAccordion type="single" collapsible>
                  <GlassAccordionItem value="a">
                    <GlassAccordionTrigger>{t.structure.accWhyGlass}</GlassAccordionTrigger>
                    <GlassAccordionContent>{t.structure.accWhyGlassBody}</GlassAccordionContent>
                  </GlassAccordionItem>
                  <GlassAccordionItem value="b">
                    <GlassAccordionTrigger>{t.structure.accWhyThree}</GlassAccordionTrigger>
                    <GlassAccordionContent>{t.structure.accWhyThreeBody}</GlassAccordionContent>
                  </GlassAccordionItem>
                </GlassAccordion>
              </GlassCard>
              <GlassCard>
                <GlassAlert variant="info" className="mb-4">
                  <GlassAlertTitle>{t.structure.alertTitle}</GlassAlertTitle>
                  <GlassAlertDescription>{t.structure.alertBody}</GlassAlertDescription>
                </GlassAlert>
                <GlassTable>
                  <GlassTableHeader>
                    <GlassTableRow>
                      <GlassTableHead>{t.structure.thToken}</GlassTableHead>
                      <GlassTableHead>{t.structure.thNamed}</GlassTableHead>
                      <GlassTableHead>ΔE</GlassTableHead>
                    </GlassTableRow>
                  </GlassTableHeader>
                  <GlassTableBody>
                    <GlassTableRow>
                      <GlassTableCell>ruri</GlassTableCell>
                      <GlassTableCell>{t.structure.ruriNamed}</GlassTableCell>
                      <GlassTableCell>7.8</GlassTableCell>
                    </GlassTableRow>
                    <GlassTableRow>
                      <GlassTableCell>korozen</GlassTableCell>
                      <GlassTableCell>{t.structure.korozenNamed}</GlassTableCell>
                      <GlassTableCell>7.8</GlassTableCell>
                    </GlassTableRow>
                    <GlassTableRow>
                      <GlassTableCell>sumire</GlassTableCell>
                      <GlassTableCell>{t.structure.sumireNamed}</GlassTableCell>
                      <GlassTableCell>13.0</GlassTableCell>
                    </GlassTableRow>
                  </GlassTableBody>
                </GlassTable>
              </GlassCard>
            </div>
            <InstallCommand item="glass-tabs" copyLabel={t.installCmd.copy} copiedLabel={t.installCmd.copied} className="mt-4" />
          </Section>

          <Section id="indicators" title={t.indicators.title} lede={t.indicators.lede}>
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
                      <GlassBreadcrumbLink href="#">{t.indicators.breadPaper}</GlassBreadcrumbLink>
                    </GlassBreadcrumbItem>
                    <GlassBreadcrumbSeparator />
                    <GlassBreadcrumbItem>
                      <GlassBreadcrumbLink href="#">{t.indicators.breadVeil}</GlassBreadcrumbLink>
                    </GlassBreadcrumbItem>
                    <GlassBreadcrumbSeparator />
                    <GlassBreadcrumbItem>
                      <GlassBreadcrumbPage>{t.indicators.breadLight}</GlassBreadcrumbPage>
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
            <InstallCommand item="glass-pagination" copyLabel={t.installCmd.copy} copiedLabel={t.installCmd.copied} className="mt-4" />
          </Section>

          <Section id="pickers" title={t.pickers.title} lede={t.pickers.lede}>
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard className="grid content-start gap-4">
                <PickerDemo comboboxPlaceholder={t.pickers.comboboxPh} comboboxEmpty={t.pickers.comboboxEmpty} datePlaceholder={t.pickers.datePh} />
                <GlassInputOTP maxLength={6} aria-label={t.pickers.otpLabel}>
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
                    <GlassToggleGroupItem value="washi">{t.pickers.togglePaper}</GlassToggleGroupItem>
                    <GlassToggleGroupItem value="veil">{t.pickers.toggleVeil}</GlassToggleGroupItem>
                    <GlassToggleGroupItem value="light">{t.pickers.toggleLight}</GlassToggleGroupItem>
                  </GlassToggleGroup>
                  <GlassDrawer>
                    <GlassDrawerTrigger asChild>
                      <GlassButton variant="secondary" size="sm">
                        {t.pickers.drawer}
                      </GlassButton>
                    </GlassDrawerTrigger>
                    <GlassDrawerContent>
                      <GlassDrawerHeader>
                        <GlassDrawerTitle>{t.pickers.drawerTitle}</GlassDrawerTitle>
                        <GlassDrawerDescription>{t.pickers.drawerBody}</GlassDrawerDescription>
                      </GlassDrawerHeader>
                    </GlassDrawerContent>
                  </GlassDrawer>
                </div>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GlassSpinner /> {t.pickers.loading} <GlassKbd>⌘</GlassKbd>
                  <GlassKbd>K</GlassKbd>
                </p>
              </GlassCard>
              <GlassEmpty>
                <GlassEmptyIcon>
                  <GlassSpinner aria-hidden="true" />
                </GlassEmptyIcon>
                <GlassEmptyTitle>{t.pickers.emptyTitle}</GlassEmptyTitle>
                <GlassEmptyDescription>{t.pickers.emptyBody}</GlassEmptyDescription>
              </GlassEmpty>
            </div>
            <InstallCommand item="glass-command" copyLabel={t.installCmd.copy} copiedLabel={t.installCmd.copied} className="mt-4" />
          </Section>

          <Section id="typography" title={t.typography.title} lede={t.typography.lede}>
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard lang="zh-Hant">
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
            <InstallCommand item="theme" copyLabel={t.installCmd.copy} copiedLabel={t.installCmd.copied} className="mt-4" />
          </Section>

          <Section id="prose" title={t.prose.title} lede={t.prose.lede}>
            <ProseSpecimen h1={t.prose.h1} h2={t.prose.h2} h3={t.prose.h3} />
            <InstallCommand item="prose" copyLabel={t.installCmd.copy} copiedLabel={t.installCmd.copied} className="mt-4" />
          </Section>

          <Section id="install" title={t.install.title} lede={t.install.lede}>
            <InstallCommand item="glass-card" copyLabel={t.installCmd.copy} copiedLabel={t.installCmd.copied} />
          </Section>
        </main>

        <footer className="mt-24 grid gap-6 border-t border-foreground/10 pt-8 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>
              MIT ©{' '}
              <a
                className="text-ruri hover:text-deep dark:text-ruri-soft dark:hover:text-ruri-pale"
                href="https://alexchih.com"
              >
                Alex Chih
              </a>
            </p>
            <a
              href={locale === 'en' ? '/accessibility/' : `${LOCALE_PATHS[locale]}/accessibility/`}
              className="text-ruri hover:text-deep dark:text-ruri-soft dark:hover:text-ruri-pale"
            >
              {t.footer.a11y}
            </a>
          </div>
          <p className="text-center font-mono text-[0.75rem] tracking-[0.2em] uppercase">{t.footer.tagline}</p>
        </footer>
      </div>
    </>
  );
}

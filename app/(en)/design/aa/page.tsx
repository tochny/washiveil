'use client';

// Internal decision page — what FULL WCAG AA compliance looks like, including
// the 3:1 non-text control-boundary rule nobody in the industry meets.
// Current column = shipped values; AA column = measured passing values.
// Never linked from nav; shipped but noindexed via the /design layout.

import { AmbientField } from '@/registry/washiveil/ui/ambient-field';
import { Chip } from '@/registry/washiveil/ui/chip';
import { GlassButton } from '@/registry/washiveil/ui/glass-button';
import { GlassCard } from '@/registry/washiveil/ui/glass-card';
import { GlassCheckbox } from '@/registry/washiveil/ui/glass-checkbox';
import { GlassInput } from '@/registry/washiveil/ui/glass-input';
import { GlassSwitch } from '@/registry/washiveil/ui/glass-switch';
import { ThemeToggle } from '@/registry/washiveil/ui/theme-toggle';

function Row({ label, note, children }: { label: string; note: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <p className="font-mono text-[0.75rem] tracking-[0.2em] text-muted-foreground uppercase">{label}</p>
      {children}
      <p className="text-xs text-muted-foreground">{note}</p>
    </div>
  );
}

export default function AAComparePage() {
  return (
    <>
      <AmbientField />
      <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <header className="flex items-center justify-between pt-10">
          <div>
            <h1 className="font-display text-2xl font-medium">Full WCAG AA — what it costs</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              左＝現行；右＝全合規（含業界無人達標的 3:1 控件邊界）。切 dark 各看一輪。
            </p>
          </div>
          <ThemeToggle />
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Current */}
          <GlassCard className="space-y-8">
            <p className="font-display text-lg font-medium">現行</p>
            <Row label="#3 primary button [RULED: keep korozen]" note="baseline ships korozen #d0722e — 白字 3.43:1（已知例外；contrast-more 換 #b64f1b）">
              <div>
                <GlassButton>送出 Send</GlassButton>
              </div>
            </Row>
            <Row label="#5 sumire chip [RESOLVED]" note="baseline ships sumire-deep #6a58c0 — 4.69:1（及格）">
              <div>
                <Chip hue="sumire">sumire 菫</Chip>
              </div>
            </Row>
            <Row label="#4 控件邊界" note="墨 15% 邊 ≈ 1.25:1（3:1 條款不及格——shadcn 原版同樣不及格）">
              <div className="grid gap-3">
                <GlassInput placeholder="輸入框 input" />
                <div className="flex items-center gap-4">
                  <GlassCheckbox />
                  <GlassSwitch />
                </div>
              </div>
            </Row>
          </GlassCard>

          {/* Full AA */}
          <GlassCard className="space-y-8">
            <p className="font-display text-lg font-medium">全合規 AA</p>
            <Row label="#3 primary button" note="白字 on korozen-deep #b64f1b = 5.09:1（及格）">
              <div>
                <GlassButton className="bg-[#b64f1b] hover:bg-[#9d4416] dark:bg-korozen-soft dark:hover:bg-[#F7B888]">
                  送出 Send
                </GlassButton>
              </div>
            </Row>
            <Row label="#5 sumire chip" note="sumire-deep #6a58c0 字 = 4.69:1（及格,色相不變）">
              <div>
                <Chip hue="sumire" className="text-[#6a58c0] dark:text-sumire-soft">
                  sumire 菫
                </Chip>
              </div>
            </Row>
            <Row label="#4 控件邊界" note="邊框 #8a8072（3.5:1）/ dark #666660（3.2:1）——及格,但線條變硬">
              <div className="grid gap-3">
                <GlassInput placeholder="輸入框 input" className="border-[#8a8072] dark:border-[#666660]" />
                <div className="flex items-center gap-4">
                  <GlassCheckbox className="border-[#8a8072] dark:border-[#666660]" />
                  <GlassSwitch className="border-[#8a8072] dark:border-[#666660]" />
                </div>
              </div>
            </Row>
          </GlassCard>
        </div>

        <p className="mt-8 max-w-prose text-sm text-muted-foreground">
          判讀提示：#3 和 #5 是文字對比——右邊沉一階但仍是同色相，代價小。#4
          是非文字邊界——右邊的灰線壓過了紗的輕盈，這就是全業界都選擇不合規的原因。
        </p>
      </div>
    </>
  );
}

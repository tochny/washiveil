import { AmbientField } from '@/registry/washiveil/ui/ambient-field';
import { GlassCard } from '@/registry/washiveil/ui/glass-card';
import { ThemeToggle } from '@/registry/washiveil/ui/theme-toggle';
import { LOCALE_PATHS, LOCALE_TAGS, type Locale } from '@/components/copy';

interface A11yDict {
  title: string;
  back: string;
  intro: string;
  conformanceTitle: string;
  conformance: string;
  jisNote: string | null;
  doesTitle: string;
  doesItems: string[];
  exceptionsTitle: string;
  exceptions: string[];
  feedbackTitle: string;
  feedbackParts: [string, string, string];
}

const DICT: Record<Locale, A11yDict> = {
  en: {
    title: 'Accessibility statement',
    back: 'Home',
    intro:
      'washiveil aims for WCAG 2.2 Level AA across this demo site and the shipped component defaults. Accessibility fixes are treated as bugs.',
    conformanceTitle: 'Conformance status',
    conformance:
      'Partially conformant with WCAG 2.2 Level AA, self-assessed. Last assessed: 2026-08-11. Methods: automated axe-core audit across all three locales in light, dark, and high-contrast modes plus an open-dialog pass; a hand-computed contrast matrix (WCAG relative luminance) over every token pairing the system ships; keyboard walkthroughs of every interactive component (built on Radix primitives).',
    jisNote: null,
    doesTitle: 'What the system does',
    doesItems: [
      'Visible focus rings on every interactive element.',
      'Pointer targets of at least 24 CSS pixels (WCAG 2.5.8).',
      'When prefers-reduced-motion is enabled, the ambient field drift and all entrance animations are disabled (WCAG 2.3.3).',
      'A high-contrast layer: activates automatically via prefers-contrast: more, or manually by adding the .contrast-more class to the root element.',
      'Accessible names on every control, in all three languages.',
      'Language-of-parts tagging for mixed Chinese, Japanese, and English text (WCAG 3.1.2).',
    ],
    exceptionsTitle: 'Known exceptions',
    exceptions: [
      'Decorative micro-labels: the faint 0.75rem meta text (section eyebrows, specimen captions) sits below the 4.5:1 text ratio by design. It is decorative; the same information is always available in conforming text nearby.',
      'Control boundaries: the 1px borders of the default veil aesthetic sit below the 3:1 non-text ratio (WCAG 1.4.11), as does nearly all glassmorphism. The high-contrast layer raises every control boundary to 3:1 or better. That layer is the supported path for users who need it.',
      'Primary fill: primary-filled actions (the solid button, dialog actions, the nav call-to-action) ship display korozen (#d0722e), whose white label measures 3.43:1, below the 4.5:1 text ratio. This is a deliberate brand-color decision; the high-contrast layer swaps the fill for korozen-deep (#b64f1b, 5.09:1). Dark mode passes in both layers.',
    ],
    feedbackTitle: 'Feedback',
    feedbackParts: [
      'Found something this statement missed? Open an issue at ',
      ' or reach me via ',
      '.',
    ],
  },
  'zh-tw': {
    title: '無障礙聲明',
    back: '首頁',
    intro:
      'washiveil 的這個展示網站與元件預設值，皆以 WCAG 2.2 Level AA 為目標。無障礙問題一律視為錯誤處理。',
    conformanceTitle: '符合性狀態',
    conformance:
      '自我評估為部分符合 WCAG 2.2 Level AA。最近一次評估：2026-08-11。方法：在三語、亮色、暗色與高對比模式下，以 axe-core 進行自動化稽核並涵蓋開啟對話框的情境；針對系統所有 token 配對手動計算對比矩陣（WCAG 相對亮度）；逐一以鍵盤操作每個互動元件（皆建構於 Radix 基元之上）。',
    jisNote: null,
    doesTitle: '系統具備的功能',
    doesItems: [
      '每個互動元素都有可見的焦點環。',
      '指標目標至少為 24 CSS 像素（WCAG 2.5.8）。',
      '偵測到 prefers-reduced-motion 時，會停用環境光漂移與所有進場動畫（WCAG 2.3.3）。',
      '高對比層：透過 prefers-contrast: more 自動啟用，或手動在根元素加上 .contrast-more class。',
      '所有控制項在三種語言下皆有無障礙名稱。',
      '混合中文、日文與英文文字時標記語言片段（WCAG 3.1.2）。',
    ],
    exceptionsTitle: '已知例外',
    exceptions: [
      '裝飾性微標籤：0.75rem 淡色輔助文字（區段眉標、樣本說明）的文字對比低於 4.5:1，屬於刻意的設計選擇。這些文字僅供裝飾；相同資訊一律會在鄰近且符合標準的文字中呈現。',
      '控制項邊界：預設紗面風格的 1px 邊框未達 3:1 非文字對比標準（WCAG 1.4.11）；多數毛玻璃風格也有同樣情況。高對比層會將所有控制項邊界提高至 3:1 以上，並作為有此需求使用者的正式支援方案。',
      '主要填色：實心按鈕、對話框動作與導覽列 CTA 等主要動作，預設採用亮橘 korozen（#d0722e）；白色標籤對比為 3.43:1，未達 4.5:1 文字標準。這是刻意保留的品牌色；高對比層會改用 korozen-deep（#b64f1b，5.09:1）。深色模式在兩層皆符合標準。',
    ],
    feedbackTitle: '回饋',
    feedbackParts: [
      '發現這份聲明遺漏了什麼嗎？請在 ',
      ' 提出 issue，或透過 ',
      ' 聯繫我。',
    ],
  },
  ja: {
    title: 'アクセシビリティ方針',
    back: 'ホーム',
    intro:
      'washiveil は、このデモサイトと配布コンポーネントの初期値で WCAG 2.2 Level AA を目標としています。アクセシビリティ上の問題はバグとして扱います。',
    conformanceTitle: '適合性の状況',
    conformance:
      'WCAG 2.2 Level AA に部分的に適合しています（自己評価）。最終評価日：2026-08-11。方法：3言語・ライト・ダーク・ハイコントラストの各モードで axe-core による自動監査（ダイアログを開いた状態を含む）、システムが出荷するすべてのトークンの組み合わせに対する手動コントラスト計算（WCAG 相対輝度）、すべてのインタラクティブコンポーネント（Radix プリミティブ上に構築）のキーボード操作確認。',
    jisNote:
      'JIS X 8341-3:2016 は WCAG 2.0（ISO/IEC 40500:2012）と一致しているため、本評価は JIS X 8341-3 の達成基準にもそのまま対応します。',
    doesTitle: 'システムが提供するもの',
    doesItems: [
      'すべてのインタラクティブ要素に可視のフォーカスリングを表示します。',
      'ポインターターゲットは 24 CSS ピクセル以上です（WCAG 2.5.8）。',
      'prefers-reduced-motion が有効な場合、アンビエントフィールドの揺らぎと表示時のアニメーションをすべて停止します（WCAG 2.3.3）。',
      'ハイコントラストレイヤー：prefers-contrast: more で自動的に有効化されるか、ルート要素に .contrast-more クラスを手動で追加して有効化できます。',
      'すべてのコントロールに3言語でアクセシブルネームを付与しています。',
      '中国語・日本語・英語が混在するテキストに言語パーツタグを付与しています（WCAG 3.1.2）。',
    ],
    exceptionsTitle: '既知の例外',
    exceptions: [
      '装飾的なマイクロラベル：淡い 0.75rem の補助テキスト（セクション上部のラベル、見本キャプション）は、コントラスト比 4.5:1 を意図的に下回っています。装飾目的のため、同じ情報は必ず近くの適合するテキストで確認できます。',
      'コントロール境界：デフォルトのヴェール表現に使う 1px ボーダーは、非テキストのコントラスト比 3:1（WCAG 1.4.11）を下回ります。これはほぼすべてのグラスモーフィズムに共通します。ハイコントラストレイヤーでは、すべての境界を 3:1 以上に引き上げ、必要なユーザーへの正式な対応手段として提供します。',
      'プライマリー塗り：ソリッドボタン、ダイアログ操作、ナビゲーションの CTA には、表示用の korozen（#d0722e）を採用しています。白いラベルとのコントラスト比は 3.43:1 で、基準の 4.5:1 を下回ります。これはブランドカラーを優先した意図的な選択です。ハイコントラストレイヤーでは korozen-deep（#b64f1b、5.09:1）に置き換わり、ダークモードは両レイヤーで基準を満たします。',
    ],
    feedbackTitle: 'フィードバック',
    feedbackParts: [
      'この方針が見落としている点を見つけましたか？',
      ' で issue を作成するか、',
      ' からご連絡ください。',
    ],
  },
};

export function A11yStatement({ locale }: { locale: 'en' | 'zh-tw' | 'ja' }) {
  const d = DICT[locale];
  const homeHref = LOCALE_PATHS[locale] === '/' ? '/' : `${LOCALE_PATHS[locale]}/`;

  return (
    <>
      <AmbientField />
      <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-6" lang={LOCALE_TAGS[locale]}>
        <header className="flex items-center justify-between pt-10">
          <div>
            <p className="text-sm text-muted-foreground">
              <a href={homeHref} className="text-ruri hover:text-deep dark:text-ruri-soft dark:hover:text-ruri-pale">
                {d.back}
              </a>
            </p>
            <h1 className="mt-2 font-display text-2xl font-medium">{d.title}</h1>
          </div>
          <ThemeToggle />
        </header>

        <p className="mt-6 max-w-prose text-body">{d.intro}</p>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">{d.conformanceTitle}</h2>
          <p className="mt-3 text-sm text-body">{d.conformance}</p>
          {d.jisNote && <p className="mt-3 text-sm text-body">{d.jisNote}</p>}
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">{d.doesTitle}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-body">
            {d.doesItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 font-display text-xl font-medium">{d.exceptionsTitle}</h2>
          <GlassCard>
            <ul className="list-disc space-y-3 pl-5 text-sm text-body">
              {d.exceptions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </GlassCard>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">{d.feedbackTitle}</h2>
          <p className="mt-3 text-sm text-body">
            {d.feedbackParts[0]}
            <a
              href="https://github.com/tochny/washiveil"
              className="text-ruri underline decoration-1 underline-offset-4 hover:text-deep dark:text-ruri-soft dark:hover:text-ruri-pale"
            >
              github.com/tochny/washiveil
            </a>
            {d.feedbackParts[1]}
            <a
              href="https://alexchih.com"
              className="text-ruri underline decoration-1 underline-offset-4 hover:text-deep dark:text-ruri-soft dark:hover:text-ruri-pale"
            >
              alexchih.com
            </a>
            {d.feedbackParts[2]}
          </p>
        </section>
      </div>
    </>
  );
}

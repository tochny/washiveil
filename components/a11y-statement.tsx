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
      'washiveil aims for WCAG 2.2 Level AA — on this demo site and in the shipped component defaults. Accessibility fixes are treated as bugs, not enhancements.',
    conformanceTitle: 'Conformance status',
    conformance:
      'Partially conformant with WCAG 2.2 Level AA, self-assessed. Last assessed: 2026-08-11. Methods: automated axe-core audit across all three locales in light, dark, and high-contrast modes plus an open-dialog pass; a hand-computed contrast matrix (WCAG relative luminance) over every token pairing the system ships; keyboard walkthroughs of every interactive component (built on Radix primitives).',
    jisNote: null,
    doesTitle: 'What the system does',
    doesItems: [
      'Visible focus rings on every interactive element.',
      'Pointer targets of at least 24 CSS pixels (WCAG 2.5.8).',
      'A blanket reduced-motion gate: prefers-reduced-motion disables the ambient field drift and all entrance animations (WCAG 2.3.3).',
      'A high-contrast layer: activates automatically via prefers-contrast: more, or manually by adding the .contrast-more class to the root element.',
      'Accessible names on every control, in all three languages.',
      'Language-of-parts tagging for mixed Chinese, Japanese, and English text (WCAG 3.1.2).',
    ],
    exceptionsTitle: 'Known exceptions',
    exceptions: [
      'Decorative micro-labels: the faint 0.75rem meta text (section eyebrows, specimen captions) sits below the 4.5:1 text ratio by design. It is decorative; the same information is always available in conforming text nearby.',
      'Control boundaries: the 1px borders of the default veil aesthetic sit below the 3:1 non-text ratio (WCAG 1.4.11), as does nearly all glassmorphism. The high-contrast layer raises every control boundary to 3:1 or better — that layer is the supported path for users who need it.',
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
      'washiveil 以 WCAG 2.2 Level AA 為目標——無論是這個展示網站或元件預設值皆然。無障礙修正被視為錯誤修復，而非功能增強。',
    conformanceTitle: '符合性狀態',
    conformance:
      '自我評估為部分符合 WCAG 2.2 Level AA。最近一次評估：2026-08-11。方法：在三語、亮色、暗色與高對比模式下，以 axe-core 進行自動化稽核並涵蓋開啟對話框的情境；針對系統所有 token 配對手動計算對比矩陣（WCAG 相對亮度）；逐一以鍵盤操作每個互動元件（皆建構於 Radix 基元之上）。',
    jisNote: null,
    doesTitle: '系統具備的功能',
    doesItems: [
      '每個互動元素都有可見的焦點環。',
      '指標目標至少為 24 CSS 像素（WCAG 2.5.8）。',
      '全面的減少動態閘門：prefers-reduced-motion 會停用環境光漂移與所有進場動畫（WCAG 2.3.3）。',
      '高對比層：透過 prefers-contrast: more 自動啟用，或手動在根元素加上 .contrast-more class。',
      '所有控制項在三種語言下皆有無障礙名稱。',
      '混合中文、日文與英文文字時標記語言片段（WCAG 3.1.2）。',
    ],
    exceptionsTitle: '已知例外',
    exceptions: [
      '裝飾性微標籤：淡色 0.75rem 的輔助文字（區段眉標、樣本說明）低於 4.5:1 文字對比度標準，這是設計上的決定。該文字為裝飾性用途；相同資訊總是可在鄰近的合規文字中取得。',
      '控件邊界：預設紗質美學的 1px 邊框低於 3:1 非文字對比度標準（WCAG 1.4.11），大多數毛玻璃風格皆如此。高對比層將所有控件邊界提升至 3:1 以上——對需要此功能的使用者而言，該層才是正式支援的方式。',
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
      'washiveil は WCAG 2.2 Level AA を目標としています——このデモサイトでも、出荷されるコンポーネントの初期値でも同様です。アクセシビリティの修正はバグとして扱い、機能追加としては扱いません。',
    conformanceTitle: '適合性の状況',
    conformance:
      'WCAG 2.2 Level AA に部分的に適合しています（自己評価）。最終評価日：2026-08-11。方法：3言語・ライト・ダーク・ハイコントラストの各モードで axe-core による自動監査（ダイアログを開いた状態を含む）、システムが出荷するすべてのトークンの組み合わせに対する手動コントラスト計算（WCAG 相対輝度）、すべてのインタラクティブコンポーネント（Radix プリミティブ上に構築）のキーボード操作確認。',
    jisNote:
      'JIS X 8341-3:2016 は WCAG 2.0（ISO/IEC 40500:2012）と一致しているため、本評価は JIS X 8341-3 の達成基準にもそのまま対応します。',
    doesTitle: 'システムが提供するもの',
    doesItems: [
      'すべてのインタラクティブ要素に可視のフォーカスリングを表示します。',
      'ポインターターゲットは 24 CSS ピクセル以上です（WCAG 2.5.8）。',
      '包括的な動作抑制ゲート：prefers-reduced-motion により、アンビエントフィールドのドリフトとすべての入場アニメーションを無効化します（WCAG 2.3.3）。',
      'ハイコントラストレイヤー：prefers-contrast: more で自動的に有効化されるか、ルート要素に .contrast-more クラスを手動で追加して有効化できます。',
      'すべてのコントロールに3言語でアクセシブルネームを付与しています。',
      '中国語・日本語・英語が混在するテキストに言語パーツタグを付与しています（WCAG 3.1.2）。',
    ],
    exceptionsTitle: '既知の例外',
    exceptions: [
      '装飾的なマイクロラベル：淡い 0.75rem の補助テキスト（セクションのアイブロウ、見本キャプション）はテキスト比率 4.5:1 を意図的に下回っています。これは装飾目的であり、同じ情報は必ず近くの適合テキストで確認できます。',
      'コントロール境界：デフォルトのヴェール美学における 1px ボーダーは非テキスト比率 3:1（WCAG 1.4.11）を下回っており、ほぼすべてのグラスモーフィズムでも同様です。ハイコントラストレイヤーはすべてのコントロール境界を 3:1 以上に引き上げます——それが必要なユーザーにはこのレイヤーが正式にサポートされた手段です。',
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

import { AmbientField } from '@/registry/washiveil/ui/ambient-field';
import { ThemeToggle } from '@/registry/washiveil/ui/theme-toggle';
import { LOCALE_PATHS, LOCALE_TAGS, type Locale } from '@/components/copy';

interface PrivacyDict {
  title: string;
  back: string;
  intro: string;
  collectTitle: string;
  collectBody: string;
  offTitle: string;
  offBody: string;
  processingTitle: string;
  processingBody: string;
  storageTitle: string;
  storageItems: string[];
  storageOutro: string;
  notCollectedTitle: string;
  notCollectedBody: string;
  registryTitle: string;
  registryBody: string;
  declineTitle: string;
  declineParts: [string, string, string];
  questionsTitle: string;
  questionsParts: [string, string, string];
  lastUpdated: string;
}

const DICT: Record<Locale, PrivacyDict> = {
  en: {
    title: 'Privacy',
    back: 'Home',
    intro:
      'This site uses Google Analytics 4 to understand how people browse it. The tag sets two first-party cookies (_ga and _ga_BJKR77KRZ2) carrying a randomly generated client ID. No part of this identifier names you.',
    collectTitle: 'What is collected',
    collectBody:
      'Page URL and title, referrer, approximate location derived from your IP address (GA4 does not store the IP itself), device type, browser, language preference, and screen resolution.',
    offTitle: 'What is deliberately off',
    offBody:
      'Google signals, ads personalization, user-provided data collection, and User-ID are all disabled on this property. No Google Ads account is linked. Account-level data sharing with Google products and services is off. Nothing collected here is used for advertising.',
    processingTitle: 'Data processing and retention',
    processingBody:
      'Google LLC processes and stores the data. Its servers are outside Taiwan and Japan. Event data is retained for 14 months, then deleted.',
    storageTitle: 'Local storage',
    storageItems: [
      'theme: set when you toggle dark mode away from the system default. Removed when your choice matches the system again. On load, the stored value overrides the system preference; if nothing is stored, the site follows the system.',
      'locale: set when you explicitly pick a language from the switcher. If nothing is stored and you land on /, the site detects your browser language and redirects to the matching locale without persisting that detection.',
    ],
    storageOutro: 'These values never leave the browser.',
    notCollectedTitle: 'What is not collected',
    notCollectedBody:
      'There are no accounts, no logins, and no forms that submit data. The form controls on the demo page are non-submitting specimens; they carry no action and no handler.',
    registryTitle: 'The component registry',
    registryBody:
      '/r/*.json files are fetched by npx shadcn add running on your machine. That request is a script fetching a JSON file; it does not execute the page’s JavaScript, so GA4 does not see it.',
    declineTitle: 'How to decline',
    declineParts: [
      'Any content blocker or privacy-focused browser prevents the Google Analytics tag from loading. Google also publishes an ',
      'opt-out browser add-on',
      '. These are client-side measures. This site does not offer its own opt-out control.',
    ],
    questionsTitle: 'Questions',
    questionsParts: [
      'Something this statement should cover? Open an issue at ',
      ' or reach me via ',
      '.',
    ],
    lastUpdated: 'Last updated: 2026-08-13.',
  },
  'zh-tw': {
    title: '隱私聲明',
    back: '首頁',
    intro:
      '本站使用 Google Analytics 4 瞭解訪客的瀏覽情形。代碼會設定兩個第一方 cookie——_ga 與 _ga_BJKR77KRZ2——攜帶一組隨機產生的用戶端 ID。這個識別碼不包含任何可識別個人身分的資訊。',
    collectTitle: '收集的資料',
    collectBody:
      '頁面網址與標題、來源頁面、根據 IP 位址推算的概略地理位置（GA4 不會儲存 IP 位址本身）、裝置類型、瀏覽器、語言偏好及螢幕解析度。',
    offTitle: '刻意關閉的功能',
    offBody:
      '本資源已停用 Google 信號、廣告個人化、使用者提供的資料收集及 User-ID。未連結任何 Google Ads 帳戶。帳戶層級的「Google 產品與服務」資料分享已關閉。收集的資料不會用於任何廣告用途。',
    processingTitle: '資料處理與保留期間',
    processingBody:
      '資料由 Google LLC 處理與儲存，伺服器位於台灣及日本以外的地區。事件資料保留 14 個月後刪除。',
    storageTitle: '本機儲存',
    storageItems: [
      'theme——當你將深色模式切換為與系統預設不同的設定時寫入；回到與系統一致時移除。載入頁面時，已儲存的值優先於系統偏好；若無儲存值，則跟隨系統。',
      'locale——當你透過語言切換器手動選擇語言時寫入。若無儲存值且你造訪根路徑 /，本站會偵測瀏覽器語言並重新導向至對應語系，但不會保存偵測結果。',
    ],
    storageOutro: '以上數值不會離開你的瀏覽器。',
    notCollectedTitle: '未收集的項目',
    notCollectedBody:
      '本站沒有帳戶系統、沒有登入功能，也沒有任何會送出資料的表單。展示頁面上的表單控制項僅供外觀展示——既無 action 屬性，也無提交處理器。',
    registryTitle: '元件 Registry',
    registryBody:
      '/r/*.json 檔案是由你在本機執行 npx shadcn add 時取得的。該請求是一段腳本在取回 JSON 檔案，不會執行頁面的 JavaScript，因此 GA4 不會記錄到。',
    declineTitle: '如何拒絕',
    declineParts: [
      '任何內容封鎖工具或注重隱私的瀏覽器都可以阻止 Google Analytics 代碼載入。Google 也提供',
      '瀏覽器停用附加元件',
      '。這些都是用戶端的措施——本站不提供自有的退出選項。',
    ],
    questionsTitle: '問題或疑問',
    questionsParts: [
      '認為這份聲明應該涵蓋什麼內容？請在 ',
      ' 提出 issue，或透過 ',
      ' 聯繫我。',
    ],
    lastUpdated: '最後更新：2026-08-13。',
  },
  ja: {
    title: 'プライバシー',
    back: 'ホーム',
    intro:
      '本サイトは Google Analytics 4 を使用して、訪問者のブラウジング状況を把握しています。タグはファーストパーティ Cookie を 2 件設定します——_ga と _ga_BJKR77KRZ2——ランダムに生成されたクライアント ID を保持します。この識別子に個人を特定できる情報は含まれません。',
    collectTitle: '収集されるデータ',
    collectBody:
      'ページの URL とタイトル、リファラー、IP アドレスから推定されるおおよその位置情報（GA4 は IP アドレス自体を保存しません）、デバイスの種類、ブラウザ、言語設定、画面解像度。',
    offTitle: '意図的に無効化している機能',
    offBody:
      '本プロパティでは Google シグナル、広告のパーソナライズ、ユーザー提供データの収集、User-ID をすべて無効化しています。Google 広告アカウントとの連携はなく、アカウントレベルの「Google プロダクトとサービス」へのデータ共有もオフです。収集されたデータは広告には一切使用されません。',
    processingTitle: 'データの処理と保持期間',
    processingBody:
      'Google LLC がデータを処理・保存します。サーバーは台湾および日本国外にあります。イベントデータは 14 か月間保持され、その後削除されます。',
    storageTitle: 'ローカルストレージ',
    storageItems: [
      'theme——ダークモードをシステムの初期設定と異なる状態に切り替えた時に書き込まれ、システムと一致する状態に戻すと削除されます。ページ読み込み時は保存された値がシステム設定より優先され、保存値がなければシステムに従います。',
      'locale——言語スイッチャーから手動で言語を選択した時に書き込まれます。保存値がなく / にアクセスした場合、サイトはブラウザの言語を検出して該当するロケールにリダイレクトしますが、検出結果は保存しません。',
    ],
    storageOutro: 'これらの値がブラウザの外に出ることはありません。',
    notCollectedTitle: '収集していないもの',
    notCollectedBody:
      'アカウント、ログイン、データを送信するフォームはありません。デモページ上のフォームコントロールは表示用の見本であり、action 属性もハンドラもありません。',
    registryTitle: 'コンポーネントレジストリ',
    registryBody:
      '/r/*.json ファイルは、ローカルマシン上で npx shadcn add を実行した際に取得されます。そのリクエストはスクリプトが JSON ファイルを取得するものであり、ページの JavaScript は実行されないため、GA4 はそのリクエストを記録しません。',
    declineTitle: '拒否する方法',
    declineParts: [
      'コンテンツブロッカーやプライバシー重視のブラウザを使えば、Google Analytics タグの読み込みを防げます。Google は',
      'ブラウザ用オプトアウトアドオン',
      'も提供しています。これらはクライアントサイドの手段です——本サイト自体はオプトアウトの仕組みを提供していません。',
    ],
    questionsTitle: 'ご質問',
    questionsParts: [
      'この声明が取り上げるべき内容はありますか？',
      ' で issue を作成するか、',
      ' からご連絡ください。',
    ],
    lastUpdated: '最終更新日：2026-08-13。',
  },
};

export function PrivacyStatement({ locale }: { locale: 'en' | 'zh-tw' | 'ja' }) {
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
          <h2 className="font-display text-xl font-medium">{d.collectTitle}</h2>
          <p className="mt-3 text-sm text-body">{d.collectBody}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">{d.offTitle}</h2>
          <p className="mt-3 text-sm text-body">{d.offBody}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">{d.processingTitle}</h2>
          <p className="mt-3 text-sm text-body">{d.processingBody}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">{d.storageTitle}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-body">
            {d.storageItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-body">{d.storageOutro}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">{d.notCollectedTitle}</h2>
          <p className="mt-3 text-sm text-body">{d.notCollectedBody}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">{d.registryTitle}</h2>
          <p className="mt-3 text-sm text-body">{d.registryBody}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">{d.declineTitle}</h2>
          <p className="mt-3 text-sm text-body">
            {d.declineParts[0]}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-ruri underline decoration-1 underline-offset-4 hover:text-deep dark:text-ruri-soft dark:hover:text-ruri-pale"
            >
              {d.declineParts[1]}
            </a>
            {d.declineParts[2]}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">{d.questionsTitle}</h2>
          <p className="mt-3 text-sm text-body">
            {d.questionsParts[0]}
            <a
              href="https://github.com/tochny/washiveil"
              className="text-ruri underline decoration-1 underline-offset-4 hover:text-deep dark:text-ruri-soft dark:hover:text-ruri-pale"
            >
              github.com/tochny/washiveil
            </a>
            {d.questionsParts[1]}
            <a
              href="https://alexchih.com"
              className="text-ruri underline decoration-1 underline-offset-4 hover:text-deep dark:text-ruri-soft dark:hover:text-ruri-pale"
            >
              alexchih.com
            </a>
            {d.questionsParts[2]}
          </p>
        </section>

        <p className="mt-12 text-sm text-muted-foreground">{d.lastUpdated}</p>
      </div>
    </>
  );
}

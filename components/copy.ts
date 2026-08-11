export type Locale = 'en' | 'zh-tw' | 'ja';

export const LOCALE_PATHS: Record<Locale, string> = { en: '/', 'zh-tw': '/zh-tw', ja: '/ja' };
export const LOCALE_LABELS: Record<Locale, string> = { en: 'EN', 'zh-tw': '繁', ja: '日' };
/** BCP 47 tags for the lang attribute — zh-tw routes render Traditional Chinese. */
export const LOCALE_TAGS: Record<Locale, string> = { en: 'en', 'zh-tw': 'zh-Hant', ja: 'ja' };

export interface Copy {
  nav: { surfaces: string; controls: string; overlays: string; structure: string; install: string };
  hero: {
    badge: string;
    title: string;
    lede: string;
    install: string;
    browse: string;
    statItems: string;
    statLights: string;
    statLicense: string;
  };
  surfaces: {
    title: string;
    lede: string;
    cardTag: string;
    cardBody: string;
    buttonsTag: string;
    primary: string;
    secondary: string;
    tinted: string;
    live: string;
    shareTag: string;
  };
  controls: {
    title: string;
    lede: string;
    name: string;
    namePh: string;
    topic: string;
    topicPh: string;
    topicPaper: string;
    topicVeil: string;
    topicLight: string;
    message: string;
    messagePh: string;
    send: string;
    ambient: string;
    grain: string;
    sliderLabel: string;
    progressLabel: string;
  };
  overlays: {
    title: string;
    lede: string;
    dialog: string;
    dialogTitle: string;
    dialogBody: string;
    continue: string;
    sheet: string;
    sheetTitle: string;
    sheetBody: string;
    alertDialog: string;
    alertTitle: string;
    alertBody: string;
    keep: string;
    tear: string;
    menu: string;
    menuLabel: string;
    menuNew: string;
    menuFold: string;
    menuHold: string;
    tooltip: string;
    tooltipBody: string;
    toast: string;
    toastTitle: string;
    toastBody: string;
  };
  structure: {
    title: string;
    lede: string;
    tabPaper: string;
    tabVeil: string;
    tabLight: string;
    tabPaperBody: string;
    tabVeilBody: string;
    tabLightBody: string;
    accWhyGlass: string;
    accWhyGlassBody: string;
    accWhyThree: string;
    accWhyThreeBody: string;
    alertTitle: string;
    alertBody: string;
    thToken: string;
    thNamed: string;
    ruriNamed: string;
    korozenNamed: string;
    sumireNamed: string;
  };
  indicators: { title: string; lede: string; breadPaper: string; breadVeil: string; breadLight: string };
  pickers: {
    title: string;
    lede: string;
    comboboxPh: string;
    comboboxEmpty: string;
    datePh: string;
    togglePaper: string;
    toggleVeil: string;
    toggleLight: string;
    drawer: string;
    drawerTitle: string;
    drawerBody: string;
    loading: string;
    emptyTitle: string;
    emptyBody: string;
    otpLabel: string;
  };
  veil: { title: string; lede: string };
  typography: { title: string; lede: string };
  prose: { title: string; lede: string; h1: string; h2: string; h3: string };
  install: { title: string; lede: string };
  installCmd: { copy: string; copied: string };
  footer: { tagline: string };
}

const en: Copy = {
  nav: { surfaces: 'Surfaces', controls: 'Controls', overlays: 'Overlays', structure: 'Structure', install: 'Install' },
  hero: {
    badge: '57 registry items',
    title: 'Warm paper. Translucent veils.',
    lede: 'A shadcn registry that is not glassmorphism: the ground is washi, every layer above it is a veil, and three lights move beneath everything. Chinese & Japanese typography is first-class, not an afterthought.',
    install: 'Install',
    browse: 'Browse components',
    statItems: 'registry items',
    statLights: 'lights on paper',
    statLicense: 'licensed',
  },
  surfaces: {
    title: 'Surfaces & marks',
    lede: 'Cards, pills, and badges on the glass registers — semantic tokens switch themes with a single class.',
    cardTag: 'glass-card',
    cardBody: 'The base veil. White over washi in light; a lifted warm dark — never a white haze — in dark.',
    buttonsTag: 'buttons & badges',
    primary: 'Primary',
    secondary: 'Secondary',
    tinted: 'Tinted',
    live: 'live',
    shareTag: 'share-row',
  },
  controls: {
    title: 'Forms & controls',
    lede: 'The full control set on the glass field register — every focus is a ruri ring.',
    name: 'Name',
    namePh: 'Kaguya',
    topic: 'Topic',
    topicPh: 'Choose a topic',
    topicPaper: 'Paper',
    topicVeil: 'Veil',
    topicLight: 'Three lights',
    message: 'Message',
    messagePh: 'Say something…',
    send: 'Send',
    ambient: 'Ambient motion',
    grain: 'Ship with grain',
    sliderLabel: 'Value',
    progressLabel: 'Progress',
  },
  overlays: {
    title: 'Overlays',
    lede: 'Radix underneath, veils on top — panels float on strong glass over a soft deep scrim.',
    dialog: 'Dialog',
    dialogTitle: 'A veil, not a wall',
    dialogBody: 'The ambient field stays visible through the scrim — the dialog belongs to the same room.',
    continue: 'Continue',
    sheet: 'Sheet',
    sheetTitle: 'A floating veil',
    sheetBody: 'Inset from the edge, rounded like every other surface.',
    alertDialog: 'Alert dialog',
    alertTitle: 'Tear this page?',
    alertBody: 'Washi does not mend. This cannot be undone.',
    keep: 'Keep it',
    tear: 'Tear',
    menu: 'Menu',
    menuLabel: 'Paper',
    menuNew: 'New sheet',
    menuFold: 'Fold',
    menuHold: 'Hold to light',
    tooltip: 'Tooltip',
    tooltipBody: 'Strong glass, small words',
    toast: 'Show toast',
    toastTitle: 'A small veil',
    toastBody: 'It fades like paper in the light.',
  },
  structure: {
    title: 'Structure',
    lede: 'Tabs, accordion, and tables in the washi editorial register.',
    tabPaper: 'Paper',
    tabVeil: 'Veil',
    tabLight: 'Light',
    tabPaperBody: 'The ground is warm and grained — never pure white.',
    tabVeilBody: 'Layers are translucent and soft, letting the ground through.',
    tabLightBody: 'Three lights hold fixed positions beneath everything.',
    accWhyGlass: 'Why not glassmorphism?',
    accWhyGlassBody: 'Glass is hard and cold. A veil is soft — it belongs on paper.',
    accWhyThree: 'Why three lights?',
    accWhyThreeBody: "That story lives on the author's site — go read it.",
    alertTitle: 'Semantic tokens switch alone',
    alertBody: 'One class covers both themes; only the tri-color opts in.',
    thToken: 'Token',
    thNamed: 'Named after',
    ruriNamed: '瑠璃 — lapis blue',
    korozenNamed: '黄櫨染 — imperial amber',
    sumireNamed: '菫 — violet',
  },
  indicators: {
    title: 'Indicators & wayfinding',
    lede: 'Quiet states and quiet navigation.',
    breadPaper: 'Paper',
    breadVeil: 'Veil',
    breadLight: 'Light',
  },
  pickers: {
    title: 'Pickers & input',
    lede: 'cmdk, day-picker, vaul, and OTP — all wearing the same veil.',
    comboboxPh: 'Pick a material…',
    comboboxEmpty: 'Nothing woven yet.',
    datePh: 'Pick a date',
    togglePaper: 'Washi',
    toggleVeil: 'Veil',
    toggleLight: 'Light',
    drawer: 'Drawer',
    drawerTitle: 'A rising veil',
    drawerBody: 'Drag the handle. It floats, inset like the sheet.',
    loading: 'Loading with',
    emptyTitle: 'Nothing here yet',
    emptyBody: 'The empty state is a dashed washi ground — quiet, not apologetic.',
    otpLabel: 'One-time code',
  },
  veil: {
    title: 'The veil at work',
    lede: 'Ruled paper and the Tale of the Bamboo Cutter beneath the veil — a glowing stalk among the bamboo.',
  },
  typography: {
    title: 'Chinese & Japanese, first-class',
    lede: 'Noto CJK unifies zh/ja glyph forms; display text balances; Japanese headings break at phrase boundaries.',
  },
  prose: {
    title: 'Prose — the ink layer',
    lede: 'Article typography with a stance: ruri marks what responds, korozen marks what the editor meant.',
    h1: 'Ink on Washi',
    h2: 'H2 — Section heading',
    h3: 'H3 — Subsection heading',
  },
  install: { title: 'Install', lede: 'Every component pulls the theme token layer automatically.' },
  installCmd: { copy: 'Copy install command', copied: 'Copied' },
  footer: { tagline: 'washiveil — paper · veil · three lights' },
};

const zhTw: Copy = {
  nav: { surfaces: '表面', controls: '控制項', overlays: '浮層', structure: '結構', install: '安裝' },
  hero: {
    badge: '57 個 registry 項目',
    title: '暖紙為底，透紗為層。',
    lede: '這不是 glassmorphism：底是和紙，其上每一層都是紗，三色光在最底下流動。中日文排版是一等公民，不是事後補丁。',
    install: '安裝',
    browse: '瀏覽元件',
    statItems: 'Registry 項目',
    statLights: '紙上三色光',
    statLicense: '授權',
  },
  surfaces: {
    title: '表面與標記',
    lede: '玻璃層上的卡片、膠囊與徽章——語意 token 一個 class 就完成主題切換。',
    cardTag: 'glass-card',
    cardBody: '基礎的紗。亮色是暖紙上的白紗；深色是提亮的暖黑——絕不是白霧。',
    buttonsTag: '按鈕與徽章',
    primary: '主要',
    secondary: '次要',
    tinted: '淡染',
    live: '運作中',
    shareTag: 'share-row',
  },
  controls: {
    title: '表單與控制項',
    lede: '完整控制項組，落在玻璃欄位層上——每個焦點都是瑠璃色的環。',
    name: '姓名',
    namePh: 'かぐや',
    topic: '主題',
    topicPh: '選擇主題',
    topicPaper: '紙',
    topicVeil: '紗',
    topicLight: '三色光',
    message: '訊息',
    messagePh: '說點什麼……',
    send: '送出',
    ambient: '環境光動態',
    grain: '保留紙紋',
    sliderLabel: '數值',
    progressLabel: '進度',
  },
  overlays: {
    title: '浮層',
    lede: '底層是 Radix，表層是紗——面板浮在強玻璃上，其下是柔和的深色紗幕。',
    dialog: '對話框',
    dialogTitle: '是紗，不是牆',
    dialogBody: '環境光透過紗幕仍然可見——對話框與頁面同處一室。',
    continue: '繼續',
    sheet: '側欄',
    sheetTitle: '懸浮的紗',
    sheetBody: '離邊緣一段距離，圓角與其他表面一致。',
    alertDialog: '警示對話框',
    alertTitle: '要撕掉這頁嗎？',
    alertBody: '和紙無法復原，此動作不可撤銷。',
    keep: '保留',
    tear: '撕掉',
    menu: '選單',
    menuLabel: '紙',
    menuNew: '新的一張',
    menuFold: '摺疊',
    menuHold: '對光而視',
    tooltip: '提示',
    tooltipBody: '強玻璃，小字句',
    toast: '顯示通知',
    toastTitle: '一小片紗',
    toastBody: '像紙上的光一樣淡去。',
  },
  structure: {
    title: '結構',
    lede: '和紙編輯層上的分頁、手風琴與表格。',
    tabPaper: '紙',
    tabVeil: '紗',
    tabLight: '光',
    tabPaperBody: '底色溫暖帶紋——從來不是純白。',
    tabVeilBody: '每一層都半透明而柔軟，讓底色透上來。',
    tabLightBody: '三色光在最底層各據其位。',
    accWhyGlass: '為什麼不是 glassmorphism？',
    accWhyGlassBody: '玻璃又硬又冷；紗是軟的——它屬於紙。',
    accWhyThree: '為什麼是三色光？',
    accWhyThreeBody: '這個故事在作者的網站上——去讀吧。',
    alertTitle: '語意 token 自行切換',
    alertBody: '一個 class 同時涵蓋兩種主題；只有三色需要顯式指定。',
    thToken: 'Token',
    thNamed: '取名自',
    ruriNamed: '瑠璃——青金石藍',
    korozenNamed: '黄櫨染——天皇御袍色',
    sumireNamed: '菫——菫花紫',
  },
  indicators: {
    title: '指示與導航',
    lede: '安靜的狀態，安靜的路標。',
    breadPaper: '紙',
    breadVeil: '紗',
    breadLight: '光',
  },
  pickers: {
    title: '選擇器與輸入',
    lede: 'cmdk、day-picker、vaul 與 OTP——披著同一層紗。',
    comboboxPh: '選擇材質……',
    comboboxEmpty: '還沒織出東西。',
    datePh: '選擇日期',
    togglePaper: '和紙',
    toggleVeil: '紗',
    toggleLight: '光',
    drawer: '抽屜',
    drawerTitle: '升起的紗',
    drawerBody: '拖動把手。它懸浮著，與側欄一樣離邊縮排。',
    loading: '載入中，旁邊是',
    emptyTitle: '這裡還沒有東西',
    emptyBody: '空狀態是一片虛線的和紙底——安靜，不致歉。',
    otpLabel: '一次性驗證碼',
  },
  veil: {
    title: '紗的證明',
    lede: '紗下是罫線與《竹取物語》——竹中那一筋光。',
  },
  typography: {
    title: '中日文排版，一等公民',
    lede: 'Noto CJK 統一中日字形；標題自動平衡斷行；日文標題按語節換行。',
  },
  prose: {
    title: '散文——墨的一層',
    lede: '有主張的文章排版：瑠璃標記可互動，黄櫨染標記編輯的意圖。',
    h1: '紙上之墨',
    h2: 'H2 章節標題',
    h3: 'H3 小節標題',
  },
  install: { title: '安裝', lede: '每個元件都會自動帶入 theme token 層。' },
  installCmd: { copy: '複製安裝指令', copied: '已複製' },
  footer: { tagline: 'washiveil — 紙 · 紗 · 三色光' },
};

const ja: Copy = {
  nav: { surfaces: '表層', controls: '操作', overlays: '重ね', structure: '構造', install: '導入' },
  hero: {
    badge: 'レジストリ項目 57 点',
    title: '温かい紙、透ける紗。',
    lede: 'これは glassmorphism ではありません。地は和紙、その上の各層は紗、そして最下層では三つの灯りが揺れています。中国語・日本語の組版を最初から第一級として設計しました。',
    install: 'インストール',
    browse: 'コンポーネント一覧',
    statItems: 'レジストリ項目',
    statLights: '紙上の灯り',
    statLicense: 'ライセンス',
  },
  surfaces: {
    title: 'サーフェスとマーク',
    lede: 'ガラス層のカード・ピル・バッジ——セマンティックトークンはクラス一つでテーマを切り替えます。',
    cardTag: 'glass-card',
    cardBody: '基礎となる紗。ライトでは和紙の上の白い紗、ダークでは持ち上げた温かい闇——決して白い霞ではありません。',
    buttonsTag: 'ボタンとバッジ',
    primary: 'プライマリ',
    secondary: 'セカンダリ',
    tinted: '淡彩',
    live: '稼働中',
    shareTag: 'share-row',
  },
  controls: {
    title: 'フォームとコントロール',
    lede: 'ガラスのフィールド層に載る全コントロール——フォーカスはすべて瑠璃のリング。',
    name: '名前',
    namePh: 'かぐや',
    topic: 'トピック',
    topicPh: 'トピックを選択',
    topicPaper: '紙',
    topicVeil: '紗',
    topicLight: '三つの灯り',
    message: 'メッセージ',
    messagePh: '何か書いてください……',
    send: '送信',
    ambient: 'アンビエントモーション',
    grain: '紙の質感を残す',
    sliderLabel: '値',
    progressLabel: '進捗',
  },
  overlays: {
    title: 'オーバーレイ',
    lede: '下は Radix、上は紗——パネルは深色の幕の上、強いガラスに浮かびます。',
    dialog: 'ダイアログ',
    dialogTitle: '壁ではなく、紗',
    dialogBody: '幕越しにも灯りは見えたまま——ダイアログは同じ部屋にいます。',
    continue: '続ける',
    sheet: 'シート',
    sheetTitle: '浮かぶ紗',
    sheetBody: '端から少し離れ、角丸は他のサーフェスと同じ。',
    alertDialog: '確認ダイアログ',
    alertTitle: 'このページを破りますか？',
    alertBody: '和紙は元に戻りません。この操作は取り消せません。',
    keep: '残す',
    tear: '破る',
    menu: 'メニュー',
    menuLabel: '紙',
    menuNew: '新しい一枚',
    menuFold: '折る',
    menuHold: '光にかざす',
    tooltip: 'ツールチップ',
    tooltipBody: '強いガラスに、小さな言葉',
    toast: 'トーストを表示',
    toastTitle: '小さな紗',
    toastBody: '紙の上の光のように消えていきます。',
  },
  structure: {
    title: '構造',
    lede: '和紙のエディトリアル層に載るタブ・アコーディオン・テーブル。',
    tabPaper: '紙',
    tabVeil: '紗',
    tabLight: '灯り',
    tabPaperBody: '地は温かく、質感がある——純白ではありません。',
    tabVeilBody: '各層は半透明で柔らかく、地を透かします。',
    tabLightBody: '三つの灯りは最下層で定位置を守ります。',
    accWhyGlass: 'なぜ glassmorphism ではないのか？',
    accWhyGlassBody: 'ガラスは硬く冷たい。紗は柔らかく——紙の上に似合います。',
    accWhyThree: 'なぜ三つの灯り？',
    accWhyThreeBody: 'その物語は作者のサイトに——ぜひ読んでください。',
    alertTitle: 'セマンティックトークンは自動で切り替わる',
    alertBody: 'クラス一つで両テーマに対応。明示指定が要るのは三色だけ。',
    thToken: 'トークン',
    thNamed: '由来',
    ruriNamed: '瑠璃——ラピスの青',
    korozenNamed: '黄櫨染——天皇の御袍の色',
    sumireNamed: '菫——すみれの紫',
  },
  indicators: {
    title: 'インジケータとナビゲーション',
    lede: '静かな状態、静かな道しるべ。',
    breadPaper: '紙',
    breadVeil: '紗',
    breadLight: '灯り',
  },
  pickers: {
    title: 'ピッカーと入力',
    lede: 'cmdk・day-picker・vaul・OTP——同じ紗をまとって。',
    comboboxPh: '素材を選択……',
    comboboxEmpty: 'まだ何も織られていません。',
    datePh: '日付を選択',
    togglePaper: '和紙',
    toggleVeil: '紗',
    toggleLight: '灯り',
    drawer: 'ドロワー',
    drawerTitle: '立ちのぼる紗',
    drawerBody: 'ハンドルをドラッグ。シートと同じく端から浮いています。',
    loading: '読み込み中、そばには',
    emptyTitle: 'まだ何もありません',
    emptyBody: '空の状態は破線の和紙の地——静かに、詫びずに。',
    otpLabel: 'ワンタイムコード',
  },
  veil: {
    title: '紗の証明',
    lede: '紗の下には罫線と『竹取物語』——竹の中の一筋の光。',
  },
  typography: {
    title: '中国語と日本語、第一級の組版',
    lede: 'Noto CJK が中日の字形を統一。見出しはバランス改行、日本語は文節単位で折り返します。',
  },
  prose: {
    title: '散文——墨のレイヤー',
    lede: '主張のある本文組版：瑠璃は応えるもの、黄櫨染は編集の意図を示します。',
    h1: '和紙の上の墨',
    h2: 'H2 章タイトル',
    h3: 'H3 節タイトル',
  },
  install: { title: 'インストール', lede: 'どのコンポーネントも theme トークン層を自動で取り込みます。' },
  installCmd: { copy: 'インストールコマンドをコピー', copied: 'コピーしました' },
  footer: { tagline: 'washiveil — 紙 · 紗 · 三つの灯り' },
};

export const COPY: Record<Locale, Copy> = { en, 'zh-tw': zhTw, ja };

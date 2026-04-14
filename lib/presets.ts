// プリセットレイアウトの型定義とデータ

export type PresetItem = {
  readonly label: string;
  readonly startCol: number;
  readonly endCol: number;
  readonly startRow: number;
  readonly endRow: number;
  readonly color?: string;
};

export type Preset = {
  readonly slug: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly category: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly columns: number;
  readonly rows: number;
  readonly gap: number;
  readonly height: number;
  readonly items: readonly PresetItem[];
  readonly useCase: string;
  readonly explanation: string;
};

export const presets: readonly Preset[] = [
  {
    slug: "holy-grail",
    title: "ホーリーグレイルレイアウトのCSS Grid実装",
    shortTitle: "ホーリーグレイル",
    category: "ページ全体",
    description:
      "header・nav・main・aside・footerで構成される定番のホーリーグレイルレイアウト。CSS Gridのgrid-template-areasでシンプルに実装できます。",
    keywords: [
      "ホーリーグレイル CSS",
      "holy grail layout",
      "ホーリーグレイル grid",
      "header main footer レイアウト",
      "3カラム レイアウト CSS",
    ],
    columns: 5,
    rows: 5,
    gap: 8,
    height: 500,
    items: [
      { label: "header", startCol: 1, endCol: 6, startRow: 1, endRow: 2 },
      { label: "nav", startCol: 1, endCol: 2, startRow: 2, endRow: 5 },
      { label: "main", startCol: 2, endCol: 5, startRow: 2, endRow: 5 },
      { label: "aside", startCol: 5, endCol: 6, startRow: 2, endRow: 5 },
      { label: "footer", startCol: 1, endCol: 6, startRow: 5, endRow: 6 },
    ],
    useCase:
      "コーポレートサイト、ブログ、ダッシュボードなど、ヘッダー・ナビ・メイン・サイドバー・フッターを持つページの基本構造として最適です。",
    explanation:
      "ホーリーグレイル（Holy Grail）レイアウトは、ヘッダーとフッターが画面幅いっぱいに広がり、中央に3カラム（ナビ・メイン・サイドバー）を配置する定番レイアウトです。かつてはfloatやtableで実装されていましたが、CSS Gridを使えば数行で実現できます。grid-template-columnsで比率を指定し、grid-columnとgrid-rowで各エリアの開始・終了位置を決めるだけです。",
  },
  {
    slug: "12-column",
    title: "12カラムグリッドレイアウトのCSS実装",
    shortTitle: "12カラムグリッド",
    category: "グリッドシステム",
    description:
      "Bootstrap風の12カラムグリッドシステムをCSS Gridで実装。repeat(12, 1fr)でレスポンシブな基盤が作れます。",
    keywords: [
      "12カラム CSS Grid",
      "12 column layout",
      "Bootstrap グリッド CSS",
      "グリッドシステム 12分割",
      "repeat 12 1fr",
    ],
    columns: 12,
    rows: 3,
    gap: 8,
    height: 400,
    items: [
      { label: ".col-12", startCol: 1, endCol: 13, startRow: 1, endRow: 2 },
      { label: ".col-8", startCol: 1, endCol: 9, startRow: 2, endRow: 3 },
      { label: ".col-4", startCol: 9, endCol: 13, startRow: 2, endRow: 3 },
      { label: ".col-4", startCol: 1, endCol: 5, startRow: 3, endRow: 4 },
      { label: ".col-4", startCol: 5, endCol: 9, startRow: 3, endRow: 4 },
      { label: ".col-4", startCol: 9, endCol: 13, startRow: 3, endRow: 4 },
    ],
    useCase:
      "Bootstrap・Tailwindなどのフレームワークを使わずに、柔軟なカラム幅の組み合わせを実現したい場合に最適です。",
    explanation:
      "12カラムグリッドは、Web制作の現場で最も使われているグリッドシステムのひとつです。12は2・3・4・6で割り切れるため、1/2・1/3・1/4・1/6といった比率を自由に組み合わせられます。CSS Gridならrepeat(12, 1fr)の1行で土台を作り、各要素にgrid-column: span Nを指定するだけで、Bootstrap同等のレイアウトが手書きで書けます。",
  },
  {
    slug: "card-gallery",
    title: "カードギャラリーレイアウトのCSS Grid実装",
    shortTitle: "カードギャラリー",
    category: "カードUI",
    description:
      "3列×複数行のカードギャラリーをCSS Gridで実装。商品一覧やブログ記事一覧に最適なレスポンシブカード配置です。",
    keywords: [
      "カード レイアウト CSS",
      "card grid CSS",
      "記事一覧 CSS Grid",
      "商品一覧 グリッド",
      "ギャラリー レイアウト",
    ],
    columns: 3,
    rows: 3,
    gap: 16,
    height: 500,
    items: [
      { label: "card-1", startCol: 1, endCol: 2, startRow: 1, endRow: 2 },
      { label: "card-2", startCol: 2, endCol: 3, startRow: 1, endRow: 2 },
      { label: "card-3", startCol: 3, endCol: 4, startRow: 1, endRow: 2 },
      { label: "card-4", startCol: 1, endCol: 2, startRow: 2, endRow: 3 },
      { label: "card-5", startCol: 2, endCol: 3, startRow: 2, endRow: 3 },
      { label: "card-6", startCol: 3, endCol: 4, startRow: 2, endRow: 3 },
      { label: "card-7", startCol: 1, endCol: 2, startRow: 3, endRow: 4 },
      { label: "card-8", startCol: 2, endCol: 3, startRow: 3, endRow: 4 },
      { label: "card-9", startCol: 3, endCol: 4, startRow: 3, endRow: 4 },
    ],
    useCase:
      "ECサイトの商品一覧、ブログの記事一覧、ポートフォリオの作品一覧など、同サイズのカードを均等に並べたい場面で使います。",
    explanation:
      "カードギャラリーは、grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))のようにauto-fillとminmaxを組み合わせることで、カラム数を画面幅に応じて自動調整できます。固定列数ではなく流動的に折り返すため、レスポンシブ対応が非常にシンプルになります。本プリセットでは3列固定で表示していますが、コード出力時にauto-fillへの変更も容易です。",
  },
  {
    slug: "dashboard",
    title: "ダッシュボードレイアウトのCSS Grid実装",
    shortTitle: "ダッシュボード",
    category: "管理画面",
    description:
      "サイドバー + メインエリア + KPIカード群を持つダッシュボード定番レイアウト。管理画面・分析画面に最適です。",
    keywords: [
      "ダッシュボード CSS Grid",
      "管理画面 レイアウト CSS",
      "dashboard layout",
      "admin panel CSS",
      "サイドバー + メイン レイアウト",
    ],
    columns: 6,
    rows: 4,
    gap: 12,
    height: 500,
    items: [
      { label: "sidebar", startCol: 1, endCol: 2, startRow: 1, endRow: 5 },
      { label: "header", startCol: 2, endCol: 7, startRow: 1, endRow: 2 },
      { label: "kpi-1", startCol: 2, endCol: 3, startRow: 2, endRow: 3 },
      { label: "kpi-2", startCol: 3, endCol: 4, startRow: 2, endRow: 3 },
      { label: "kpi-3", startCol: 4, endCol: 5, startRow: 2, endRow: 3 },
      { label: "kpi-4", startCol: 5, endCol: 7, startRow: 2, endRow: 3 },
      { label: "chart-main", startCol: 2, endCol: 5, startRow: 3, endRow: 5 },
      { label: "chart-side", startCol: 5, endCol: 7, startRow: 3, endRow: 5 },
    ],
    useCase:
      "SaaSの管理画面、分析ダッシュボード、社内ツールなど、情報密度の高い画面構成に向いています。",
    explanation:
      "ダッシュボード型のレイアウトは、左サイドバー・上部ヘッダー・KPIカード群・メインチャート・サイドチャートといった複数の領域を同時に表示するため、CSS Gridの得意分野です。grid-template-columnsとgrid-template-rowsで土台を作り、各ウィジェットにgrid-columnとgrid-rowで範囲を指定するだけで整理できます。固定の列/行で配置するためコンテンツ量が変わっても崩れにくいのが特徴です。",
  },
  {
    slug: "magazine",
    title: "マガジンレイアウトのCSS Grid実装",
    shortTitle: "マガジンレイアウト",
    category: "メディア",
    description:
      "メイン記事 + サブ記事複数を組み合わせたマガジン風レイアウト。ニュースサイトやメディアサイトに最適です。",
    keywords: [
      "マガジンレイアウト CSS",
      "magazine layout grid",
      "ニュースサイト レイアウト",
      "メディアサイト CSS",
      "記事配置 グリッド",
    ],
    columns: 4,
    rows: 4,
    gap: 12,
    height: 500,
    items: [
      { label: "feature", startCol: 1, endCol: 3, startRow: 1, endRow: 3 },
      { label: "sub-1", startCol: 3, endCol: 4, startRow: 1, endRow: 2 },
      { label: "sub-2", startCol: 4, endCol: 5, startRow: 1, endRow: 2 },
      { label: "sub-3", startCol: 3, endCol: 4, startRow: 2, endRow: 3 },
      { label: "sub-4", startCol: 4, endCol: 5, startRow: 2, endRow: 3 },
      { label: "article-1", startCol: 1, endCol: 2, startRow: 3, endRow: 5 },
      { label: "article-2", startCol: 2, endCol: 3, startRow: 3, endRow: 5 },
      { label: "article-3", startCol: 3, endCol: 4, startRow: 3, endRow: 5 },
      { label: "article-4", startCol: 4, endCol: 5, startRow: 3, endRow: 5 },
    ],
    useCase:
      "ニュースサイトのトップページ、ブログのアーカイブ、キュレーションメディアなど、複数の記事に視覚的な優先度をつけたい場合に有効です。",
    explanation:
      "マガジンレイアウトの本質は「情報の優先度を面積で表現する」ことです。CSS Gridのgrid-column / grid-rowで自由に範囲を指定できるため、従来は実装が難しかった非対称なレイアウトも、数行のCSSで実現できます。本プリセットではトップの特集記事を2×2の範囲に大きく配置し、その横と下に小さめのサブ記事を並べた典型的な構成です。",
  },
  {
    slug: "photo-gallery",
    title: "写真ギャラリー（マサリー風）のCSS Grid実装",
    shortTitle: "写真ギャラリー",
    category: "ギャラリー",
    description:
      "サイズの異なる写真を敷き詰める非対称ギャラリー。CSS Gridのgrid-row / grid-column spanで実装します。",
    keywords: [
      "写真ギャラリー CSS",
      "photo gallery grid",
      "masonry CSS Grid",
      "非対称 レイアウト CSS",
      "画像一覧 グリッド",
    ],
    columns: 4,
    rows: 4,
    gap: 8,
    height: 500,
    items: [
      { label: "photo-1", startCol: 1, endCol: 3, startRow: 1, endRow: 3 },
      { label: "photo-2", startCol: 3, endCol: 4, startRow: 1, endRow: 2 },
      { label: "photo-3", startCol: 4, endCol: 5, startRow: 1, endRow: 2 },
      { label: "photo-4", startCol: 3, endCol: 5, startRow: 2, endRow: 3 },
      { label: "photo-5", startCol: 1, endCol: 2, startRow: 3, endRow: 5 },
      { label: "photo-6", startCol: 2, endCol: 4, startRow: 3, endRow: 5 },
      { label: "photo-7", startCol: 4, endCol: 5, startRow: 3, endRow: 4 },
      { label: "photo-8", startCol: 4, endCol: 5, startRow: 4, endRow: 5 },
    ],
    useCase:
      "ポートフォリオサイト、フォトブログ、ECの商品ビジュアル訴求など、大小の画像を動きのあるレイアウトで見せたい場合に使います。",
    explanation:
      "CSS Gridは本来masonry（レンガ積み）を完全に再現するものではありませんが、grid-row / grid-column spanを明示的に指定することで、非対称で動きのあるギャラリーを実現できます。本プリセットのように大きい画像を2×2の範囲に、小さい画像を1×1で配置する組み合わせは、視覚的にリズムが生まれる定番パターンです。",
  },
  {
    slug: "pricing-table",
    title: "料金表（3プラン）のCSS Grid実装",
    shortTitle: "料金表",
    category: "料金・LP",
    description:
      "3プラン横並びの料金表をCSS Gridで実装。SaaS・サービスサイトの料金ページで使われる定番レイアウトです。",
    keywords: [
      "料金表 CSS",
      "pricing table CSS Grid",
      "プラン比較 レイアウト",
      "SaaS 料金ページ",
      "3カラム 料金",
    ],
    columns: 3,
    rows: 1,
    gap: 24,
    height: 400,
    items: [
      { label: "Free", startCol: 1, endCol: 2, startRow: 1, endRow: 2 },
      { label: "Pro", startCol: 2, endCol: 3, startRow: 1, endRow: 2 },
      { label: "Enterprise", startCol: 3, endCol: 4, startRow: 1, endRow: 2 },
    ],
    useCase:
      "SaaSの料金ページ、コースプラン、サブスクリプションサービスなど、複数プランの比較表示に最適です。",
    explanation:
      "料金表はCSS Gridで最もシンプルに書ける構造のひとつで、grid-template-columns: repeat(3, 1fr)だけで均等な3カラムが作れます。中央のPUSHしたいプランだけgrid-row: span 2などで高さを変えたり、背景色を変えたりすることで、コンバージョン率を上げる工夫も加えやすいレイアウトです。",
  },
  {
    slug: "hero-features",
    title: "ヒーロー + 3つの特徴セクションのCSS Grid実装",
    shortTitle: "ヒーロー+特徴",
    category: "LP",
    description:
      "ランディングページ定番の、ヒーローエリア + 3つの特徴紹介セクションをCSS Gridで実装します。",
    keywords: [
      "ランディングページ CSS Grid",
      "LP レイアウト CSS",
      "hero section grid",
      "特徴紹介 レイアウト",
      "3カラム 特徴",
    ],
    columns: 3,
    rows: 3,
    gap: 16,
    height: 500,
    items: [
      { label: "hero", startCol: 1, endCol: 4, startRow: 1, endRow: 3 },
      { label: "feature-1", startCol: 1, endCol: 2, startRow: 3, endRow: 4 },
      { label: "feature-2", startCol: 2, endCol: 3, startRow: 3, endRow: 4 },
      { label: "feature-3", startCol: 3, endCol: 4, startRow: 3, endRow: 4 },
    ],
    useCase:
      "SaaS・アプリ・コーポレートサイトのファーストビュー設計に最適な、定番のLP構成です。",
    explanation:
      "LPの王道パターンは「ヒーローで引きつけ → 特徴3つで説得 → CTAで行動」という流れです。CSS Gridならヒーロー部分を全幅に広げ、その下に3つの特徴カードを均等配置する構造を、grid-columnのspan指定だけで実現できます。モバイル対応は@media (max-width: 768px)でgrid-template-columns: 1frに切り替えるだけで縦積みになります。",
  },
  {
    slug: "blog-layout",
    title: "ブログ（記事一覧 + サイドバー）のCSS Grid実装",
    shortTitle: "ブログレイアウト",
    category: "メディア",
    description:
      "メインコンテンツ + サイドバー構成のブログレイアウト。2カラム構成の基本をCSS Gridで実装します。",
    keywords: [
      "ブログ レイアウト CSS",
      "2カラム レイアウト CSS",
      "サイドバー 右 CSS",
      "記事 + サイドバー",
      "blog layout grid",
    ],
    columns: 4,
    rows: 3,
    gap: 16,
    height: 500,
    items: [
      { label: "header", startCol: 1, endCol: 5, startRow: 1, endRow: 2 },
      { label: "main", startCol: 1, endCol: 4, startRow: 2, endRow: 3 },
      { label: "sidebar", startCol: 4, endCol: 5, startRow: 2, endRow: 3 },
      { label: "footer", startCol: 1, endCol: 5, startRow: 3, endRow: 4 },
    ],
    useCase:
      "個人ブログ、コーポレートブログ、ニュースサイトの記事ページなど、メインコンテンツにサイドバーを添える定番レイアウトです。",
    explanation:
      "ブログレイアウトは「メイン3：サイドバー1」のような比率で2カラムを構成するのが一般的です。grid-template-columnsを3fr 1frや4fr 1frに指定するだけで自然な比率が作れます。サイドバーには目次・プロフィール・関連記事などを配置し、モバイルではgrid-template-columns: 1frに切り替えて縦積みにします。",
  },
  {
    slug: "product-grid",
    title: "商品一覧（4列グリッド）のCSS実装",
    shortTitle: "商品一覧4列",
    category: "EC",
    description:
      "ECサイトの商品一覧で使われる4列グリッドレイアウト。整然と商品カードを並べる構成をCSS Gridで実装します。",
    keywords: [
      "商品一覧 CSS",
      "EC レイアウト CSS Grid",
      "4カラム グリッド",
      "product grid CSS",
      "商品カード レイアウト",
    ],
    columns: 4,
    rows: 2,
    gap: 16,
    height: 500,
    items: [
      { label: "product-1", startCol: 1, endCol: 2, startRow: 1, endRow: 2 },
      { label: "product-2", startCol: 2, endCol: 3, startRow: 1, endRow: 2 },
      { label: "product-3", startCol: 3, endCol: 4, startRow: 1, endRow: 2 },
      { label: "product-4", startCol: 4, endCol: 5, startRow: 1, endRow: 2 },
      { label: "product-5", startCol: 1, endCol: 2, startRow: 2, endRow: 3 },
      { label: "product-6", startCol: 2, endCol: 3, startRow: 2, endRow: 3 },
      { label: "product-7", startCol: 3, endCol: 4, startRow: 2, endRow: 3 },
      { label: "product-8", startCol: 4, endCol: 5, startRow: 2, endRow: 3 },
    ],
    useCase:
      "ECサイトの商品一覧ページ、検索結果ページ、ギャラリーページなど、均等なサイズで多数のアイテムを表示したい場面で使います。",
    explanation:
      "ECサイトの商品一覧は4列が最も視認性とクリック率のバランスが良いとされています。grid-template-columns: repeat(4, 1fr)で均等4列を作り、各商品カードに画像・タイトル・価格・CTAボタンを配置します。レスポンシブ対応ではrepeat(auto-fill, minmax(240px, 1fr))に変えることで、タブレットでは3列、スマホでは2列へと自動で折り返すように設計できます。",
  },
];

export function getPresetBySlug(slug: string): Preset | undefined {
  return presets.find((p) => p.slug === slug);
}

export function generateHtmlCode(preset: Preset): string {
  const items = preset.items
    .map((item, i) => `  <div class="item-${i + 1}">${item.label}</div>`)
    .join("\n");
  return `<div class="grid-container">\n${items}\n</div>`;
}

export function generateCssCode(preset: Preset): string {
  const itemRules = preset.items
    .map(
      (item, i) =>
        `.item-${i + 1} { grid-area: ${item.startRow} / ${item.startCol} / ${item.endRow} / ${item.endCol}; }`
    )
    .join("\n");
  return `.grid-container {
  display: grid;
  grid-template-columns: repeat(${preset.columns}, 1fr);
  grid-template-rows: repeat(${preset.rows}, 1fr);
  gap: ${preset.gap}px;
  width: 100%;
  height: ${preset.height}px;
}

${itemRules}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
  }
  .grid-container > * {
    grid-area: auto;
  }
}`;
}

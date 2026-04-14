// メインページ用の構造化データ
export const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CSS Grid Generator（グリッドジェネレーター）",
  alternateName: [
    "Grid Generator",
    "グリッドジェネレーター",
    "CSSグリッドジェネレーター",
    "CSSジェネレーター",
    "CSS生成ツール",
  ],
  description:
    "CSS Grid Generator（グリッドジェネレーター）は、CSSグリッドレイアウトを視覚的に作成できる無料のCSSジェネレーター。ドラッグ操作でグリッドを配置し、HTML/CSSコードを自動生成します。",
  url: "https://codequest.work/generator/grid/",
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "WebDesignTool",
  operatingSystem: "Any (Web Browser)",
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  softwareVersion: "1.0",
  inLanguage: "ja",
  isAccessibleForFree: true,
  image: "https://codequest.work/generator/grid/og-image.png",
  screenshot: "https://codequest.work/generator/grid/og-image.png",
  featureList: [
    "ドラッグ操作によるCSSグリッドの視覚的レイアウト作成",
    "HTML/CSSコードの自動生成とワンクリックコピー",
    "grid-template-columns / rows / gap のカスタマイズ",
    "px / % / vw / vh / em / rem の単位対応",
    "レスポンシブ対応コードの自動出力",
    "アイテムの結合・複数セルにまたがる配置",
    "ブラウザ完結の処理（登録不要・無料）",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
  author: {
    "@type": "Person",
    name: "今井政和",
    alternateName: "Masakazu Imai",
    url: "https://codequest.work/author/masakazu_imai/",
    jobTitle: "エグゼクティブディレクター / フロントエンドエンジニア",
    description:
      "20年以上の経験を持つWeb制作者。フロントエンド開発からSEO、チームマネジメントまで対応。",
    sameAs: [
      "https://x.com/imai_director",
      "https://github.com/masakazuimai",
    ],
    worksFor: {
      "@type": "Organization",
      name: "CodeQuest.work",
      url: "https://codequest.work/",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "CodeQuest.work",
    url: "https://codequest.work/",
  },
};

// メインページ用パンくず
export const mainBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "CodeQuest.work",
      item: "https://codequest.work/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "CSS Grid Generator",
      item: "https://codequest.work/generator/grid/",
    },
  ],
};

// 共通FAQ（メインページ・ガイドページ両方で使用）
export const faqItems = [
  {
    question: "CSS Grid Generatorとは何ですか？",
    answer:
      "CSS Grid Generator（グリッドジェネレーター）は、CSSグリッドレイアウトを視覚的に作成できる無料のオンラインツールです。ドラッグ操作でグリッドアイテムを配置し、対応するHTML/CSSコードを自動生成します。",
  },
  {
    question: "CSS Gridとは何ですか？",
    answer:
      "CSS Grid（CSSグリッド）は、Webページのレイアウトを2次元（行と列）で制御できるCSSの仕組みです。grid-template-columns、grid-template-rows、gapなどのプロパティを使って、複雑なレイアウトを簡単に作成できます。",
  },
  {
    question: "グリッドジェネレーターの使い方は？",
    answer:
      "1. 列数（Columns）と行数（Rows）を設定します。2. グリッド上でドラッグしてアイテムを配置します。3. 生成されたHTML/CSSコードをコピーして、プロジェクトに貼り付けます。Gap、幅、高さなどもカスタマイズ可能です。",
  },
  {
    question: "CSS GridとFlexboxの違いは？",
    answer:
      "CSS Gridは2次元レイアウト（行と列の同時制御）に適しており、Flexboxは1次元レイアウト（行または列のどちらか）に適しています。ページ全体のレイアウトにはGrid、コンポーネント内の配置にはFlexboxを使うのが一般的です。",
  },
  {
    question: "このツールは無料で使えますか？",
    answer:
      "はい、CSS Grid Generator（グリッドジェネレーター）は完全無料でご利用いただけます。アカウント登録も不要で、ブラウザ上ですぐにグリッドレイアウトの作成を始められます。",
  },
];

// FAQ構造化データを生成
export function buildFaqJsonLd(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ガイドページ用の追加FAQ
export const guideFaqItems = [
  ...faqItems,
  {
    question: "grid-template-columnsとgrid-template-rowsの違いは？",
    answer:
      "grid-template-columnsはグリッドの列（横方向）のサイズを定義し、grid-template-rowsは行（縦方向）のサイズを定義します。例えば、grid-template-columns: repeat(3, 1fr)は均等な3列のグリッドを作成します。",
  },
  {
    question: "レスポンシブ対応はどうすればいいですか？",
    answer:
      "CSS Grid Generatorで生成されるコードにはレスポンシブ対応のメディアクエリが含まれています。768px以下の画面では自動的に1カラムレイアウトに切り替わります。",
  },
  {
    question: "CSSジェネレーターとは何ですか？",
    answer:
      "CSSジェネレーターとは、複雑なCSSコードを手書きせずに視覚的な操作で自動生成できるWebツールの総称です。グリッドレイアウト・フレックスボックス・グラデーション・シャドウ・アニメーションなど、CSSのプロパティごとに専用のジェネレーターが存在します。CSS Grid Generatorはその中でもCSS Gridレイアウトに特化した無料ツールです。",
  },
  {
    question: "おすすめの無料CSSジェネレーターはありますか？",
    answer:
      "用途に応じて使い分けるのがおすすめです。ページ全体のレイアウトにはCSS Grid Generator、コンポーネント内の整列にはFlexbox Generator、装飾にはグラデーションジェネレーターやシャドウジェネレーターを組み合わせると効率的です。本サイトのCSS Grid Generatorは登録不要・完全無料で、初心者から上級者まで使えます。",
  },
  {
    question: "CSSジェネレーターで生成したコードはそのまま使えますか？",
    answer:
      "はい、CSS Grid Generatorが出力するHTML/CSSコードはそのままWebサイトに貼り付けて使用できます。レスポンシブ対応のメディアクエリも含まれているため、追加の修正はほとんど必要ありません。商用サイト・個人サイトを問わずご利用いただけます。",
  },
  {
    question: "CSSジェネレーターは安全に使えますか？",
    answer:
      "本ツールはすべての処理がブラウザ上で完結するため、入力データが外部サーバーに送信されることはありません。社内プロジェクトの構造を試したい場合でも、情報漏洩の心配なく安心してご利用いただけます。",
  },
];

// ガイドページ用Article構造化データ
export const guideArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CSS Grid Generator（グリッドジェネレーター）の使い方ガイド",
  description:
    "CSS Grid Generatorの使い方を3ステップで解説。CSS GridとFlexboxの違いなど、よくある質問にもお答えします。",
  url: "https://codequest.work/generator/grid/guide/",
  author: {
    "@type": "Person",
    name: "今井政和",
    alternateName: "Masakazu Imai",
    url: "https://codequest.work/author/masakazu_imai/",
    jobTitle: "エグゼクティブディレクター / フロントエンドエンジニア",
    description:
      "20年以上の経験を持つWeb制作者。フロントエンド開発からSEO、チームマネジメントまで対応。",
    sameAs: [
      "https://x.com/imai_director",
      "https://github.com/masakazuimai",
    ],
    worksFor: {
      "@type": "Organization",
      name: "CodeQuest.work",
      url: "https://codequest.work/",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "CodeQuest.work",
    url: "https://codequest.work/",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://codequest.work/generator/grid/guide/",
  },
};

// ガイドページ用HowTo構造化データ
export const guideHowToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "CSS Grid Generator（グリッドジェネレーター）でグリッドレイアウトを作成する方法",
  description:
    "CSS Grid Generatorを使って、視覚的にCSSグリッドレイアウトを作成し、HTML/CSSコードを自動生成する手順を解説します。",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "グリッドの設定",
      text: "列数（Columns）と行数（Rows）を指定して、CSSグリッドの基本構造を決めます。Gap（余白）やコンテナのサイズもカスタマイズできます。",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "アイテムの配置",
      text: "グリッド上でマウスをドラッグして、アイテムを配置します。複数セルにまたがるアイテムも簡単に作成でき、grid-columnやgrid-rowの値が自動で計算されます。",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "コードをコピー",
      text: "生成されたHTML/CSSコードをワンクリックでコピーして、プロジェクトに貼り付けます。レスポンシブ対応のメディアクエリも含まれています。",
    },
  ],
  tool: {
    "@type": "HowToTool",
    name: "CSS Grid Generator",
  },
  totalTime: "PT2M",
};

// ガイドページ用パンくず
export const guideBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "CodeQuest.work",
      item: "https://codequest.work/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "CSS Grid Generator",
      item: "https://codequest.work/generator/grid/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "使い方ガイド",
      item: "https://codequest.work/generator/grid/guide/",
    },
  ],
};

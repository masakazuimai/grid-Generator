import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import {
  guideArticleJsonLd,
  guideHowToJsonLd,
  guideBreadcrumbJsonLd,
  guideFaqItems,
  buildFaqJsonLd,
} from "@/lib/jsonld";
import "@/styles/guide.css";

export const metadata: Metadata = {
  title: "CSS Grid Generator の使い方 | グリッドジェネレーター ガイド",
  description:
    "CSS Grid Generator（グリッドジェネレーター）の使い方ガイド。ドラッグ操作でCSSグリッドレイアウトを作成する方法を3ステップで解説。CSS GridとFlexboxの違いなど、よくある質問にもお答えします。",
  keywords: [
    "CSS Grid Generator 使い方",
    "グリッドジェネレーター 使い方",
    "CSS Grid 使い方",
    "CSSグリッド 入門",
    "grid generator how to use",
    "CSS Grid チュートリアル",
    "グリッドレイアウト 作り方",
  ],
  openGraph: {
    title: "CSS Grid Generator（グリッドジェネレーター）の使い方ガイド",
    description:
      "CSS Grid Generatorの使い方を3ステップで解説。CSS GridとFlexboxの違いなど、よくある質問にもお答えします。",
    images: ["/generator/grid/og-image.png"],
    url: "https://codequest.work/generator/grid/guide/",
    type: "article",
  },
  twitter: {
    title: "CSS Grid Generator（グリッドジェネレーター）の使い方ガイド",
    description:
      "CSS Grid Generatorの使い方を3ステップで解説。CSS GridとFlexboxの違いなど、よくある質問にもお答えします。",
    images: ["/generator/grid/og-image.png"],
  },
  alternates: {
    canonical: "https://codequest.work/generator/grid/guide/",
  },
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <JsonLd data={guideArticleJsonLd} />
      <JsonLd data={guideHowToJsonLd} />
      <JsonLd data={guideBreadcrumbJsonLd} />
      <JsonLd data={buildFaqJsonLd(guideFaqItems)} />

      <header>
        <h1>
          CSS Grid Generator の使い方
          <span className="header-sub">グリッドジェネレーター ガイド</span>
        </h1>
        <p>CSSグリッドレイアウトを視覚的に作成する方法を解説</p>
      </header>

      <nav className="breadcrumb" aria-label="パンくずリスト">
        <a href="https://codequest.work/">CodeQuest</a> &gt;{" "}
        <Link href="/">CSS Grid Generator</Link> &gt; 使い方ガイド
      </nav>

      {/* 使い方セクション */}
      <section className="how-to-use">
        <h2>CSS Grid Generator（グリッドジェネレーター）の使い方</h2>
        <div className="steps">
          <div className="step">
            <h3>1. グリッドの設定</h3>
            <p>
              列数（Columns）と行数（Rows）を指定して、CSSグリッドの基本構造を決めます。
              Gap（余白）やコンテナの幅・高さもカスタマイズできます。
              単位はpx、%、vw、vh、em、remから選べます。
            </p>
          </div>
          <div className="step">
            <h3>2. アイテムの配置</h3>
            <p>
              グリッド上でマウスをドラッグして、アイテムを配置します。
              複数セルにまたがるアイテムも簡単に作成でき、
              <code>grid-column</code>や<code>grid-row</code>
              の値が自動で計算されます。ダブルクリックでアイテムを削除できます。
            </p>
          </div>
          <div className="step">
            <h3>3. コードをコピー</h3>
            <p>
              生成されたHTML/CSSコードを「Copy」ボタンでワンクリックコピー。
              そのままプロジェクトに貼り付けて使えます。
              レスポンシブ対応のメディアクエリも含まれています。
            </p>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <p>今すぐCSSグリッドレイアウトを作成してみましょう</p>
        <Link href="/" className="cta-button">
          Grid Generator を使う
        </Link>
      </div>

      {/* CSS Gridの基礎知識 */}
      <section className="detail-section">
        <h2>CSS Gridとは</h2>
        <p>
          CSS Grid（CSSグリッド）は、Webページのレイアウトを
          <strong>2次元（行と列）</strong>
          で制御できるCSSの仕組みです。従来のfloatやFlexboxでは難しかった複雑なレイアウトも、
          CSS Gridを使えば直感的に実現できます。
        </p>
        <p>
          CSS Grid
          Generatorを使えば、これらのプロパティを視覚的に設定でき、コードを手書きする手間を省けます。
        </p>

        <h3>主要なCSS Gridプロパティ</h3>
        <ul className="property-list">
          <li>
            <strong>
              <code>display: grid</code>
            </strong>{" "}
            - 要素をグリッドコンテナとして定義
          </li>
          <li>
            <strong>
              <code>grid-template-columns</code>
            </strong>{" "}
            - グリッドの列数とサイズを指定（例:{" "}
            <code>repeat(3, 1fr)</code>で均等3列）
          </li>
          <li>
            <strong>
              <code>grid-template-rows</code>
            </strong>{" "}
            - グリッドの行数とサイズを指定
          </li>
          <li>
            <strong>
              <code>gap</code>
            </strong>{" "}
            - グリッドアイテム間の余白を指定
          </li>
          <li>
            <strong>
              <code>grid-column</code>
            </strong>{" "}
            - アイテムが占める列の範囲を指定
          </li>
          <li>
            <strong>
              <code>grid-row</code>
            </strong>{" "}
            - アイテムが占める行の範囲を指定
          </li>
        </ul>

        <h3>CSS Gridのコード例</h3>
        <pre>
          {`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
}

.item-1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
}`}
        </pre>
      </section>

      {/* CSS Grid vs Flexbox */}
      <section className="detail-section">
        <h2>CSS GridとFlexboxの違い・使い分け</h2>
        <p>
          CSS
          GridとFlexboxはどちらもモダンなCSSレイアウト手法ですが、得意な場面が異なります。
        </p>

        <h3>CSS Grid が適している場面</h3>
        <ul className="property-list">
          <li>
            ページ全体のレイアウト（ヘッダー・サイドバー・メインコンテンツ・フッター）
          </li>
          <li>カードやギャラリーなどのグリッド状の配置</li>
          <li>行と列を同時に制御する必要があるレイアウト</li>
        </ul>

        <h3>Flexbox が適している場面</h3>
        <ul className="property-list">
          <li>ナビゲーションバーのアイテム配置</li>
          <li>ボタンやアイコンの横並び</li>
          <li>1方向（横または縦）のみの整列</li>
        </ul>

        <p>
          両方を組み合わせるのがベストプラクティスです。CSS Grid
          Generatorでページのグリッドレイアウトを作成し、
          各アイテム内部のレイアウトにはFlexboxを使用すると効率的です。
          <a href="https://codequest.work/generator/flex/">Flex Generator</a>
          も併せてご活用ください。
        </p>
      </section>

      {/* FAQ セクション */}
      <section className="faq-section">
        <h2>よくある質問（FAQ）</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>CSS Grid Generatorとは何ですか？</summary>
            <p>
              CSS Grid
              Generator（グリッドジェネレーター）は、CSSグリッドレイアウトを視覚的に作成できる無料のオンラインツールです。
              ドラッグ操作でグリッドアイテムを配置し、対応するHTML/CSSコードを自動生成します。
              コーディングの知識が少ない初心者の方にも最適です。
            </p>
          </details>
          <details className="faq-item">
            <summary>CSS Gridとは何ですか？</summary>
            <p>
              CSS
              Grid（CSSグリッド）は、Webページのレイアウトを2次元（行と列）で制御できるCSSの仕組みです。
              grid-template-columns、grid-template-rows、gapなどのプロパティを使って、
              複雑なレイアウトを簡単に作成できます。主要なブラウザすべてでサポートされています。
            </p>
          </details>
          <details className="faq-item">
            <summary>CSS GridとFlexboxの違いは？</summary>
            <p>
              CSS
              Gridは2次元レイアウト（行と列の同時制御）に適しており、Flexboxは1次元レイアウト（行または列のどちらか）に適しています。
              ページ全体のレイアウトにはGrid、コンポーネント内の配置にはFlexboxを使うのが一般的です。
            </p>
          </details>
          <details className="faq-item">
            <summary>このツールは無料で使えますか？</summary>
            <p>
              はい、CSS Grid
              Generator（グリッドジェネレーター）は完全無料でご利用いただけます。
              アカウント登録も不要で、ブラウザ上ですぐにグリッドレイアウトの作成を始められます。
            </p>
          </details>
          <details className="faq-item">
            <summary>アイテムを削除するには？</summary>
            <p>
              配置したグリッドアイテムをダブルクリックすると削除できます。
              「Reset
              Grid」ボタンですべてのアイテムを一括リセットすることも可能です。
            </p>
          </details>
          <details className="faq-item">
            <summary>
              grid-template-columnsとgrid-template-rowsの違いは？
            </summary>
            <p>
              grid-template-columnsはグリッドの列（横方向）のサイズを定義し、grid-template-rowsは行（縦方向）のサイズを定義します。
              例えば、<code>grid-template-columns: repeat(3, 1fr)</code>
              は均等な3列のグリッドを作成します。
              このジェネレーターでは、Columns・Rowsの数値を変更するだけでこれらの値が自動設定されます。
            </p>
          </details>
          <details className="faq-item">
            <summary>レスポンシブ対応のグリッドは作れますか？</summary>
            <p>
              はい。CSS Grid
              Generatorが生成するコードにはメディアクエリによるレスポンシブ対応が含まれています。
              768px以下の画面幅では、自動的に1カラムレイアウトに切り替わります。
            </p>
          </details>
        </div>
      </section>

      <div className="cta-banner">
        <p>CSS Gridレイアウトを今すぐ作成</p>
        <Link href="/" className="cta-button">
          Grid Generator を開く
        </Link>
      </div>

      <Footer />
    </div>
  );
}

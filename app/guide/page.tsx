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
  title: {
    absolute:
      "CSSジェネレーターの使い方ガイド | CSS Grid Generator - CodeQuest.work",
  },
  description:
    "無料CSSジェネレーターの使い方ガイド。CSS Grid Generatorでドラッグ操作によるグリッドレイアウト作成、CSS GridとFlexboxの違い、他のCSSジェネレーターとの比較、よくある質問まで初心者向けに解説します。",
  keywords: [
    "CSSジェネレーター 使い方",
    "CSSジェネレーター おすすめ",
    "CSSジェネレーター 無料",
    "CSS Grid Generator 使い方",
    "グリッドジェネレーター 使い方",
    "CSS Grid 使い方",
    "CSSグリッド 入門",
    "grid generator how to use",
    "CSS Grid チュートリアル",
    "グリッドレイアウト 作り方",
    "CSS生成ツール",
  ],
  openGraph: {
    title:
      "CSSジェネレーターの使い方ガイド | CSS Grid Generator 完全マニュアル",
    description:
      "CSSジェネレーター無料ツールの使い方を3ステップで解説。CSS GridとFlexboxの違い、他ツールとの比較、よくある質問まで網羅。",
    images: ["/generator/grid/og-image.png"],
    url: "https://codequest.work/generator/grid/guide/",
    type: "article",
  },
  twitter: {
    title:
      "CSSジェネレーターの使い方ガイド | CSS Grid Generator 完全マニュアル",
    description:
      "CSSジェネレーター無料ツールの使い方を3ステップで解説。CSS GridとFlexboxの違い、他ツールとの比較、よくある質問まで網羅。",
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
        <a href="https://codequest.work/">CodeQuest.work</a> &gt;{" "}
        <Link href="/">CSS Grid Generator</Link> &gt; 使い方ガイド
      </nav>

      {/* CSSジェネレーターとは */}
      <section className="detail-section">
        <h2>CSSジェネレーターとは</h2>
        <p>
          <strong>CSSジェネレーター</strong>とは、複雑なCSSコードを手書きせずに、
          視覚的な操作で自動生成できるWebツールの総称です。グリッドレイアウト・
          フレックスボックス・グラデーション・シャドウ・アニメーションなど、
          CSSのプロパティごとに専用のCSSジェネレーターが存在します。
        </p>
        <p>
          本サイト「<strong>CSS Grid Generator</strong>
          」は、CSSジェネレーターの中でも特に
          <strong>CSS Gridレイアウト</strong>
          の作成に特化した無料ツールです。ドラッグ操作だけで
          <code>grid-template-columns</code>・<code>grid-template-rows</code>・
          <code>gap</code>などのプロパティ値を自動計算し、
          そのまま使えるHTML/CSSコードを出力します。
        </p>

        <h3>CSSジェネレーターを使うメリット</h3>
        <ul className="property-list">
          <li>
            <strong>学習コストの削減</strong> —
            CSS Gridのプロパティ名や値の書き方を覚えなくても、視覚操作で結果を確認できます
          </li>
          <li>
            <strong>試行錯誤の高速化</strong> —
            コードを書き換えてブラウザでリロードする手間がなく、リアルタイムにレイアウトを確認できます
          </li>
          <li>
            <strong>正確なコード出力</strong> —
            人間が書くと発生しがちなタイポやプロパティ名のミスがありません
          </li>
          <li>
            <strong>初心者でも安心</strong> —
            CSSの構文を知らなくても、ドラッグ操作だけでプロ品質のレイアウトが完成します
          </li>
        </ul>

        <h3>無料CSSジェネレーターは安全？</h3>
        <p>
          CSSジェネレーターを選ぶ際は、
          <strong>「処理がブラウザ内で完結するか」</strong>
          を確認しましょう。本ツール「CSS Grid Generator」は、
          すべての処理がお使いのブラウザ上で実行され、入力データが外部サーバーに送信されることはありません。
          完全無料・登録不要で、安心してご利用いただけます。
        </p>
      </section>

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

      {/* 他のCSSジェネレーター */}
      <section className="detail-section">
        <h2>他のCSSジェネレーターとの違い・比較</h2>
        <p>
          世の中には様々な<strong>CSSジェネレーター</strong>
          が存在しますが、それぞれ得意分野が異なります。
          ここではCSS Grid Generatorと、よく使われる他ジャンルのCSSジェネレーターを比較します。
        </p>
        <ul className="property-list">
          <li>
            <strong>CSS Grid Generator（本ツール）</strong> —
            CSSグリッドレイアウトに特化。ドラッグ操作で2次元レイアウトを作成し、
            <code>grid-template-columns</code>などのコードを自動生成します。
            ページ全体や複雑なカード配置に最適。
          </li>
          <li>
            <strong>Flexbox Generator</strong> —
            1次元レイアウト（横並び・縦並び）の作成に特化したCSSジェネレーター。
            ナビゲーションバーやボタングループなど、コンポーネント内の整列に使います。
            CSS Gridと組み合わせて使うのが推奨です。
          </li>
          <li>
            <strong>グラデーションジェネレーター</strong> —
            <code>linear-gradient</code>や<code>radial-gradient</code>
            のコードを生成。背景色のグラデーションをカラーピッカーで指定できます。
          </li>
          <li>
            <strong>シャドウジェネレーター</strong> —
            <code>box-shadow</code>や<code>text-shadow</code>のパラメータを
            視覚的に調整してコードを取得できるCSSジェネレーターです。
          </li>
          <li>
            <strong>アニメーションジェネレーター</strong> —
            <code>@keyframes</code>とアニメーションプロパティを生成する専用ツール。
          </li>
        </ul>
        <p>
          <strong>ページレイアウトを組むなら、まずCSS Grid Generatorで全体構造を作る</strong>
          のが効率的です。Webサイトのワイヤーフレーム段階でグリッドを決めておくと、
          後の実装がスムーズに進みます。
        </p>
      </section>

      {/* ユースケース */}
      <section className="detail-section">
        <h2>CSS Grid Generatorのユースケース</h2>
        <p>
          CSSジェネレーターをどんな場面で使うのか、CSS Grid Generatorの典型的なユースケースを紹介します。
        </p>

        <h3>1. Webサイト全体のレイアウト構築</h3>
        <p>
          ヘッダー・サイドバー・メインコンテンツ・フッターからなるWebサイトの基本構造を、
          CSS Grid Generatorで視覚的に組み立てられます。
          <code>grid-template-areas</code>を意識せずに、
          ドラッグするだけで2次元レイアウトが完成します。
        </p>

        <h3>2. カードギャラリー・ポートフォリオサイト</h3>
        <p>
          画像カードを格子状に並べるレイアウトは、CSS Gridの最も得意な分野です。
          均等3列・4列のカード配置や、特定のカードだけを2列分の幅に広げるといった
          複雑な配置も、Generatorで直感的に作成できます。
        </p>

        <h3>3. ダッシュボード・管理画面</h3>
        <p>
          数値カード・グラフ・テーブルを組み合わせるダッシュボード画面では、
          要素のサイズが不揃いになりがちです。CSS Gridを使えば、
          幅広グラフ・小さいKPIカード・テーブル領域を1つのグリッドで配置できます。
        </p>

        <h3>4. ECサイトの商品一覧ページ</h3>
        <p>
          ECサイトの商品リストは、レスポンシブ対応が必須です。
          CSS Grid Generatorが出力するコードにはメディアクエリが含まれているため、
          PC・タブレット・スマートフォンで自動的に列数が切り替わります。
        </p>

        <h3>5. ブログ記事の関連記事ブロック</h3>
        <p>
          ブログ記事の下部に表示する関連記事カードのレイアウトも、
          CSS Gridなら数行のコードで実現できます。
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
          <details className="faq-item">
            <summary>CSSジェネレーターとは何ですか？</summary>
            <p>
              <strong>CSSジェネレーター</strong>
              とは、複雑なCSSコードを手書きせずに視覚的な操作で自動生成できるWebツールの総称です。
              グリッドレイアウト・フレックスボックス・グラデーション・シャドウ・アニメーションなど、
              CSSのプロパティごとに専用のジェネレーターが存在します。CSS
              Grid Generatorはその中でもCSS
              Gridレイアウトに特化した無料CSSジェネレーターです。
            </p>
          </details>
          <details className="faq-item">
            <summary>おすすめの無料CSSジェネレーターはありますか？</summary>
            <p>
              用途に応じて使い分けるのがおすすめです。ページ全体のレイアウトには
              <strong>CSS Grid Generator</strong>、コンポーネント内の整列には
              <strong>Flexbox Generator</strong>
              、装飾にはグラデーションジェネレーターやシャドウジェネレーターを組み合わせると効率的です。
              本サイトのCSS
              Grid Generatorは登録不要・完全無料で、初心者から上級者まで使えます。
            </p>
          </details>
          <details className="faq-item">
            <summary>
              CSSジェネレーターで生成したコードはそのまま使えますか？
            </summary>
            <p>
              はい、CSS Grid
              Generatorが出力するHTML/CSSコードはそのままWebサイトに貼り付けて使用できます。
              レスポンシブ対応のメディアクエリも含まれているため、追加の修正はほとんど必要ありません。
              商用サイト・個人サイトを問わずご利用いただけます。
            </p>
          </details>
          <details className="faq-item">
            <summary>CSSジェネレーターは安全に使えますか？</summary>
            <p>
              本ツールはすべての処理がブラウザ上で完結するため、入力データが外部サーバーに送信されることはありません。
              社内プロジェクトの構造を試したい場合でも、情報漏洩の心配なく安心してご利用いただけます。
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

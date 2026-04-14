import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { CodeBlock } from "@/components/CodeBlock";
import {
  presets,
  getPresetBySlug,
  generateHtmlCode,
  generateCssCode,
} from "@/lib/presets";
import "@/styles/preset.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return presets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const preset = getPresetBySlug(slug);
  if (!preset) return {};

  const url = `https://codequest.work/generator/grid/preset/${preset.slug}/`;
  return {
    title: {
      absolute: `${preset.title} | コピペで使えるCSS Gridサンプル - CodeQuest.work`,
    },
    description: preset.description,
    keywords: [...preset.keywords],
    alternates: { canonical: url },
    openGraph: {
      title: `${preset.title} | コピペで使えるCSS Gridサンプル`,
      description: preset.description,
      images: ["/generator/grid/og-image.png"],
      url,
      type: "article",
    },
    twitter: {
      title: `${preset.title}`,
      description: preset.description,
      images: ["/generator/grid/og-image.png"],
    },
  };
}

export default async function PresetDetailPage({ params }: Props) {
  const { slug } = await params;
  const preset = getPresetBySlug(slug);
  if (!preset) notFound();

  const htmlCode = generateHtmlCode(preset);
  const cssCode = generateCssCode(preset);

  const related = presets.filter((p) => p.slug !== preset.slug).slice(0, 4);

  const url = `https://codequest.work/generator/grid/preset/${preset.slug}/`;

  const breadcrumbJsonLd = {
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
        name: "レイアウトプリセット",
        item: "https://codequest.work/generator/grid/preset/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: preset.shortTitle,
        item: url,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: preset.title,
    description: preset.description,
    url,
    author: {
      "@type": "Person",
      name: "今井政和",
      alternateName: "Masakazu Imai",
      url: "https://codequest.work/author/masakazu_imai/",
    },
    publisher: {
      "@type": "Organization",
      name: "CodeQuest.work",
      url: "https://codequest.work/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `${preset.title}をコピペで使う方法`,
    description: `${preset.shortTitle}のCSS Gridレイアウトを自分のプロジェクトに組み込む3ステップ。`,
    totalTime: "PT1M",
    tool: {
      "@type": "HowToTool",
      name: "CSS Grid Generator",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "HTMLをコピー",
        text: "プリセットページの「HTML」ブロックのコピーアイコンをクリックし、HTMLコードをクリップボードに取得します。",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "CSSをコピーして貼り付け",
        text: "「CSS」ブロックのコピーアイコンをクリックし、プロジェクトのスタイルシートに貼り付けます。@media (max-width: 768px) のレスポンシブ対応もそのまま含まれます。",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "内容をカスタマイズ",
        text: "各 .item-N の中身を実際のコンテンツに置き換え、必要に応じて grid-template-columns / grid-template-rows / gap を調整します。自由度の高い編集は CSS Grid Generator 本体でドラッグ操作によって行えます。",
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={howToJsonLd} />
      <div className="preset-page">
        <nav className="preset-breadcrumb">
        <Link href="/">CSS Grid Generator</Link> ／{" "}
        <Link href="/preset/">レイアウトプリセット</Link> ／ {preset.shortTitle}
      </nav>

      <h1>{preset.title}</h1>
      <p className="preset-lead">{preset.description}</p>

      <h2>プレビュー</h2>
      <div className="preset-preview">
        <div
          className="preset-preview-grid"
          style={{
            gridTemplateColumns: `repeat(${preset.columns}, 1fr)`,
            gridTemplateRows: `repeat(${preset.rows}, 1fr)`,
            gap: `${preset.gap}px`,
            height: `${preset.height}px`,
          }}
        >
          {preset.items.map((item, i) => (
            <div
              key={i}
              className="preset-preview-item"
              style={{
                gridColumn: `${item.startCol} / ${item.endCol}`,
                gridRow: `${item.startRow} / ${item.endRow}`,
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="preset-output-container">
        <div className="preset-output-col">
          <h2>HTML</h2>
          <CodeBlock code={htmlCode} label="HTML" />
        </div>
        <div className="preset-output-col">
          <h2>CSS</h2>
          <CodeBlock code={cssCode} label="CSS" />
        </div>
      </div>

      <h2>このレイアウトの解説</h2>
      <p>{preset.explanation}</p>

      <h2>どんな場面で使う？</h2>
      <p>{preset.useCase}</p>

      <h2>自分でカスタマイズしたい方へ</h2>
      <p>
        列数・行数・Gap・セルの範囲を自由に変更したい場合は、
        <Link href="/">CSS Grid Generator</Link>
        でドラッグ操作によりオリジナルのグリッドを作成できます。詳しい使い方は
        <Link href="/guide/">使い方ガイド</Link>をご覧ください。
      </p>
      <Link href="/" className="preset-cta">
        ジェネレーターで自分のグリッドを作る →
      </Link>

      <h2>他のレイアウトプリセット</h2>
      <div className="preset-related">
        {related.map((p) => (
          <Link
            key={p.slug}
            href={`/preset/${p.slug}/`}
            className="preset-related-card"
          >
            <div className="preset-related-card-title">{p.shortTitle}</div>
            <div className="preset-related-card-desc">{p.description}</div>
          </Link>
        ))}
      </div>

      </div>
      <Footer />
    </>
  );
}

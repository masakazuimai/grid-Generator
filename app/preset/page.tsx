import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { presets } from "@/lib/presets";
import "@/styles/preset.css";

export const metadata: Metadata = {
  title: {
    absolute:
      "CSS Gridレイアウト集 | 定番プリセット10種をコピペで使える - CodeQuest.work",
  },
  description:
    "CSS Gridで作る定番レイアウト10種をプリセットとして公開。ホーリーグレイル・12カラム・カードギャラリー・ダッシュボード・マガジン・料金表など、HTML/CSSコードをコピペで使えます。",
  keywords: [
    "CSS Grid レイアウト集",
    "CSS Grid サンプル",
    "CSS Grid テンプレート",
    "グリッドレイアウト 例",
    "CSS Grid 実例",
    "ホーリーグレイル",
    "12カラム グリッド",
    "カードギャラリー CSS",
    "CSS レイアウト コピペ",
  ],
  alternates: {
    canonical: "https://codequest.work/generator/grid/preset/",
  },
  openGraph: {
    title:
      "CSS Gridレイアウト集 | 定番プリセット10種をコピペで使える",
    description:
      "CSS Gridで作る定番レイアウト10種をプリセット公開。ホーリーグレイル・12カラム・カードギャラリー他、HTML/CSSコードをコピペで使えます。",
    images: ["/generator/grid/og-image.png"],
    url: "https://codequest.work/generator/grid/preset/",
    type: "website",
  },
  twitter: {
    title:
      "CSS Gridレイアウト集 | 定番プリセット10種",
    description:
      "CSS Gridの定番レイアウト10種をコピペで使えるプリセット集。",
    images: ["/generator/grid/og-image.png"],
  },
};

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
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "CSS Gridレイアウトプリセット集",
  description:
    "CSS Gridで作る定番レイアウト10種のプリセット集。HTML/CSSコードをコピペで使えます。",
  url: "https://codequest.work/generator/grid/preset/",
  hasPart: presets.map((p) => ({
    "@type": "WebPage",
    name: p.title,
    url: `https://codequest.work/generator/grid/preset/${p.slug}/`,
    description: p.description,
  })),
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CSS Gridレイアウトプリセット一覧",
  description:
    "ホーリーグレイル・12カラム・カードギャラリー・ダッシュボードなど、CSS Gridで作る定番レイアウト10種の一覧。",
  numberOfItems: presets.length,
  itemListElement: presets.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.shortTitle,
    url: `https://codequest.work/generator/grid/preset/${p.slug}/`,
    description: p.description,
  })),
};

export default function PresetIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={collectionJsonLd} />
      <JsonLd data={itemListJsonLd} />
      <div className="preset-page">
        <nav className="preset-breadcrumb">
        <Link href="/">CSS Grid Generator</Link> ／ レイアウトプリセット
      </nav>

      <h1>CSS Gridレイアウトプリセット集</h1>
      <p className="preset-lead">
        CSS Gridで作る定番レイアウト{presets.length}
        種をプリセットとして公開しています。ホーリーグレイル・12カラム・カードギャラリー・ダッシュボードなど、HTML/CSSコードをコピペでそのまま使えます。
      </p>

      <h2>レイアウト一覧</h2>
      <div className="preset-index-grid">
        {presets.map((preset) => (
          <Link
            key={preset.slug}
            href={`/preset/${preset.slug}/`}
            className="preset-index-card"
          >
            <span className="preset-index-category">{preset.category}</span>
            <div className="preset-index-title">{preset.shortTitle}</div>
            <p className="preset-index-desc">{preset.description}</p>
          </Link>
        ))}
      </div>

      <h2>自由にレイアウトを作りたい方へ</h2>
      <p>
        プリセットに合うレイアウトがない場合は、
        <Link href="/">CSS Grid Generator</Link>
        でドラッグ操作によりオリジナルのグリッドを作成できます。
        <Link href="/guide/">使い方ガイド</Link>も合わせてご覧ください。
      </p>

      </div>
      <Footer />
    </>
  );
}

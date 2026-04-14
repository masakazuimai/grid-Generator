import type { Metadata } from "next";
import Link from "next/link";
import { GridGenerator } from "@/components/GridGenerator";
import { Footer } from "@/components/Footer";
import { presets } from "@/lib/presets";
import "@/styles/preset.css";
import { JsonLd } from "@/components/JsonLd";
import {
  webApplicationJsonLd,
  mainBreadcrumbJsonLd,
  faqItems,
  buildFaqJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title:
    "CSSジェネレーター | CSS Grid Generator - グリッドレイアウトを無料作成",
  description:
    "CSSジェネレーター無料ツール。ドラッグ操作でCSSグリッドレイアウトを視覚的に作成し、HTML/CSSコードを自動生成します。登録不要・初心者OK。",
  openGraph: {
    title:
      "CSSジェネレーター | CSS Grid Generator - グリッドレイアウトを無料作成",
    description:
      "ドラッグ操作でCSSグリッドレイアウトを視覚的に作成し、HTML/CSSコードを自動生成する無料のCSSジェネレーター。",
    images: ["/generator/grid/og-image.png"],
    url: "https://codequest.work/generator/grid/",
  },
  twitter: {
    title:
      "CSSジェネレーター | CSS Grid Generator - グリッドレイアウトを無料作成",
    description:
      "ドラッグ操作でCSSグリッドレイアウトを視覚的に作成し、HTML/CSSコードを自動生成する無料のCSSジェネレーター。",
    images: ["/generator/grid/og-image.png"],
  },
  alternates: {
    canonical: "https://codequest.work/generator/grid/",
  },
};

export default function HomePage() {
  return (
    <div className="app-container">
      <JsonLd data={webApplicationJsonLd} />
      <JsonLd data={mainBreadcrumbJsonLd} />
      <JsonLd data={buildFaqJsonLd(faqItems)} />

      <header>
        <h1>
          CSS Grid Generator
          <span className="header-sub">グリッドジェネレーター</span>
        </h1>
        <p>
          ドラッグ操作で<strong>CSSグリッドレイアウト</strong>
          を視覚的に作成し、HTML/CSSコードを自動生成する無料ツール
        </p>
      </header>

      <GridGenerator />

      <section className="preset-page">
        <h2>定番レイアウトプリセット</h2>
        <p className="preset-lead">
          ホーリーグレイル・12カラム・カードギャラリー・ダッシュボードなど、CSS
          Gridで作る定番レイアウト{presets.length}
          種をコピペで使えるプリセットとして公開しています。
        </p>
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
          <Link href="/guide/" className="preset-index-card">
            <span className="preset-index-category">ガイド</span>
            <div className="preset-index-title">使い方・FAQ</div>
            <p className="preset-index-desc">
              CSS Grid
              Generatorの基本操作、よくある質問、CSS
              GridとFlexboxの使い分けなどを初心者向けに解説しています。
            </p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

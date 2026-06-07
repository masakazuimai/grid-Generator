import type { Metadata } from "next";
import Link from "next/link";
import { GridGenerator } from "@/components/GridGenerator";
import { Footer } from "@/components/Footer";
import { presets } from "@/lib/presets";
import "@/styles/preset.css";
import { JsonLd } from "@/components/JsonLd";
import { AdUnit } from "@/components/AdUnit";
import {
  webApplicationJsonLd,
  mainBreadcrumbJsonLd,
  faqItems,
  buildFaqJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title:
    "Gridジェネレーター【無料】グリッドレイアウト作成ツール｜CodeQuest.work",
  description:
    "無料のGridジェネレーター。ドラッグ操作でCSSグリッドレイアウトを視覚的に作成し、AIにもそのまま渡せるHTML/CSSコードを自動生成。登録不要でブラウザですぐ使えます。",
  openGraph: {
    title:
      "Gridジェネレーター【無料】グリッドレイアウト作成ツール｜CodeQuest.work",
    description:
      "無料のGridジェネレーター。ドラッグ操作でCSSグリッドレイアウトを視覚的に作成し、AIにもそのまま渡せるHTML/CSSコードを自動生成。",
    images: ["/generator/grid/og-image.png"],
    url: "https://codequest.work/generator/grid/",
  },
  twitter: {
    title:
      "Gridジェネレーター【無料】グリッドレイアウト作成ツール｜CodeQuest.work",
    description:
      "無料のGridジェネレーター。ドラッグ操作でCSSグリッドレイアウトを視覚的に作成し、AIにもそのまま渡せるHTML/CSSコードを自動生成。",
    images: ["/generator/grid/og-image.png"],
  },
  alternates: {
    canonical: "https://codequest.work/generator/grid/",
    languages: {
      ja: "https://codequest.work/generator/grid/",
      en: "https://codequest.work/generator/grid/en/",
      "x-default": "https://codequest.work/generator/grid/",
    },
  },
};

export default function HomePage() {
  return (
    <div className="app-container">
      <JsonLd data={webApplicationJsonLd} />
      <JsonLd data={mainBreadcrumbJsonLd} />
      <JsonLd data={buildFaqJsonLd(faqItems)} />

      <header>
        <p className="lang-switch">
          <span aria-current="true">日本語</span>
          <span aria-hidden="true"> / </span>
          <Link href="/en/" hrefLang="en">English</Link>
        </p>
        <h1>
          CSS Grid Generator
          <span className="header-sub">CSSグリッドジェネレーター</span>
        </h1>
        <p>
          ドラッグ操作で<strong>CSSグリッドレイアウト</strong>
          を視覚的に作成し、HTML/CSSコードを自動生成する無料のGridジェネレーター
        </p>
      </header>

      <GridGenerator />

      <section className="preset-page">
        <div className="preset-index-grid">
          <Link href="/preset/" className="preset-index-card">
            <span className="preset-index-category">プリセット</span>
            <div className="preset-index-title">定番レイアウトプリセット</div>
            <p className="preset-index-desc">
              ホーリーグレイル・12カラム・カードギャラリー・ダッシュボードなど、CSS
              Gridで作る定番レイアウト{presets.length}
              種をコピペで使える形で公開しています。
            </p>
            <span className="preset-index-arrow">プリセット一覧を見る →</span>
          </Link>
          <Link href="/guide/" className="preset-index-card">
            <span className="preset-index-category">ガイド</span>
            <div className="preset-index-title">使い方ガイド・FAQ</div>
            <p className="preset-index-desc">
              CSS Grid
              Generatorの基本操作、よくある質問、CSS
              GridとFlexboxの使い分けなどを初心者向けに解説しています。
            </p>
            <span className="preset-index-arrow">ガイドを読む →</span>
          </Link>
        </div>
      </section>

      <AdUnit />
      <Footer />
    </div>
  );
}

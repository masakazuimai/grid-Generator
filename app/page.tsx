import type { Metadata } from "next";
import { GridGenerator } from "@/components/GridGenerator";
import { Footer } from "@/components/Footer";
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
      <Footer />
    </div>
  );
}

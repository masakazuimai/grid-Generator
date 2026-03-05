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
    "CSS Grid Generator | グリッドジェネレーター - 無料でCSSグリッドレイアウトを作成 - CodeQuest",
  openGraph: {
    title:
      "CSS Grid Generator（グリッドジェネレーター）- 視覚的にCSSグリッドレイアウトを作成",
    description:
      "ドラッグ操作でCSS Gridレイアウトを作成し、HTML/CSSコードを自動生成。初心者から上級者まで使える無料ツール。",
    images: ["/generator/grid/og-image.png"],
    url: "https://codequest.work/generator/grid/",
  },
  twitter: {
    title:
      "CSS Grid Generator（グリッドジェネレーター）- 視覚的にCSSグリッドレイアウトを作成",
    description:
      "ドラッグ操作でCSS Gridレイアウトを作成し、HTML/CSSコードを自動生成。初心者から上級者まで使える無料ツール。",
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

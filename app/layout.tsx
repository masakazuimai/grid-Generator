import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://codequest.work"),
  title: {
    default:
      "CSSジェネレーター | CSS Grid Generator - グリッドレイアウトを無料作成",
    template: "%s | CSSジェネレーター - CodeQuest.work",
  },
  description:
    "無料のCSSジェネレーター。CSS Grid Generator（グリッドジェネレーター）はドラッグ操作でCSSグリッドレイアウトを視覚的に作成し、HTML/CSSコードを自動生成します。初心者でも簡単にレスポンシブなグリッドレイアウトが作れます。",
  keywords: [
    "CSSジェネレーター",
    "css ジェネレーター",
    "CSS生成ツール",
    "CSS Grid Generator",
    "grid generator",
    "grid ジェネレーター",
    "グリッドジェネレーター",
    "CSS Grid",
    "CSSグリッド",
    "グリッドレイアウト",
    "レイアウト作成",
    "Webデザイン",
    "grid-template",
    "グリッドコード生成",
    "無料CSSツール",
  ],
  authors: [{ name: "CodeQuest.work", url: "https://codequest.work/" }],
  alternates: {
    canonical: "https://codequest.work/grid-generator/",
  },
  robots: "index, follow",
  openGraph: {
    siteName: "CodeQuest.work",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/generator/grid/favicon.ico",
    apple: "/generator/grid/logo192.png",
  },
  manifest: "/generator/grid/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7Z6M3CJEV3"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7Z6M3CJEV3');
          `}
        </Script>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4871781946658288"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

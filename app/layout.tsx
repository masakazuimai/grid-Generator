import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://codequest.work"),
  title: {
    default:
      "CSS Grid Generator | グリッドジェネレーター - 無料でCSSグリッドレイアウトを作成 - CodeQuest",
    template: "%s - CodeQuest",
  },
  description:
    "CSS Grid Generator（グリッドジェネレーター）は、CSSグリッドレイアウトを視覚的に作成できる無料ツール。ドラッグ操作でグリッドを配置し、HTML/CSSコードを自動生成。初心者でも簡単にレスポンシブなグリッドレイアウトが作れます。",
  keywords: [
    "CSS Grid Generator",
    "grid generator",
    "grid ジェネレーター",
    "グリッドジェネレーター",
    "CSS Grid",
    "CSSグリッド",
    "グリッドレイアウト",
    "CSSジェネレーター",
    "レイアウト作成",
    "Webデザイン",
    "CSS生成ツール",
    "grid-template",
    "グリッドコード生成",
    "無料ツール",
  ],
  authors: [{ name: "CodeQuest", url: "https://codequest.work/" }],
  robots: "index, follow",
  openGraph: {
    siteName: "CodeQuest",
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

import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://codequest.work"),
  title: {
    default: "CSS Grid Generator – Free Visual Grid Layout Tool",
    template: "%s | CSS Grid Generator - CodeQuest.work",
  },
  description:
    "Free CSS Grid Generator. Visually build CSS grid layouts by dragging, and auto-generate HTML/CSS code you can hand straight to AI. No signup — runs in your browser.",
  keywords: [
    "css grid generator",
    "grid generator",
    "css grid layout generator",
    "grid layout generator",
    "display grid generator",
    "css grid",
    "grid maker css",
    "free css tool",
  ],
  authors: [{ name: "CodeQuest.work", url: "https://codequest.work/" }],
  robots: "index, follow",
  openGraph: {
    siteName: "CodeQuest.work",
    locale: "en_US",
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

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
        {/* Google AdSense（共有ローダーが adsbygoogle.js 読み込み・幅確定後の push を担当） */}
        <Script
          src="https://codequest.work/generator/_shared/adsense.js"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

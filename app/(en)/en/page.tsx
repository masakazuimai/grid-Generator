import type { Metadata } from "next";
import Link from "next/link";
import { GridGenerator } from "@/components/GridGenerator";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { AdUnit } from "@/components/AdUnit";
import "@/styles/preset.css";
import {
  webApplicationJsonLdEn,
  mainBreadcrumbJsonLdEn,
  faqItemsEn,
  buildFaqJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: "CSS Grid Generator – Free Visual Grid Layout Tool" },
  description:
    "Free CSS Grid Generator. Visually build CSS grid layouts by dragging, and auto-generate HTML/CSS code you can hand straight to AI. No signup — runs in your browser.",
  openGraph: {
    title: "CSS Grid Generator – Free Visual Grid Layout Tool",
    description:
      "Free CSS Grid Generator. Visually build CSS grid layouts by dragging and auto-generate HTML/CSS code.",
    images: ["/generator/grid/og-image.png"],
    url: "https://codequest.work/generator/grid/en/",
  },
  twitter: {
    title: "CSS Grid Generator – Free Visual Grid Layout Tool",
    description:
      "Free CSS Grid Generator. Visually build CSS grid layouts by dragging and auto-generate HTML/CSS code.",
    images: ["/generator/grid/og-image.png"],
  },
  alternates: {
    canonical: "https://codequest.work/generator/grid/en/",
    languages: {
      ja: "https://codequest.work/generator/grid/",
      en: "https://codequest.work/generator/grid/en/",
      "x-default": "https://codequest.work/generator/grid/",
    },
  },
};

export default function EnHomePage() {
  return (
    <div className="app-container">
      <JsonLd data={webApplicationJsonLdEn} />
      <JsonLd data={mainBreadcrumbJsonLdEn} />
      <JsonLd data={buildFaqJsonLd(faqItemsEn)} />

      <header>
        <p className="lang-switch">
          <Link href="/" hrefLang="ja">日本語</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="true">English</span>
        </p>
        <h1>
          CSS Grid Generator
          <span className="header-sub">Free visual grid layout tool</span>
        </h1>
        <p>
          Build <strong>CSS grid layouts</strong> visually by dragging, and
          auto-generate HTML/CSS code — a free CSS Grid Generator that runs in
          your browser.
        </p>
      </header>

      <GridGenerator lang="en" />

      <AdUnit />
      <Footer lang="en" />
    </div>
  );
}

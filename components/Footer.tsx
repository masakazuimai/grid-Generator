const FOOTER_STRINGS = {
  ja: {
    seoHref: "https://seo.codequest.work/ja",
    seo: "| CodeQuest.work SEOはこちら →",
    more: "| その他のジェネレーター →",
  },
  en: {
    seoHref: "https://seo.codequest.work/",
    seo: "| CodeQuest.work SEO →",
    more: "| More generators →",
  },
} as const;

export function Footer({ lang = "ja" }: { lang?: "ja" | "en" }) {
  const t = FOOTER_STRINGS[lang];
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} CSS Grid Generator | Created by{" "}
        <a
          href="https://codequest.work/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodeQuest.work
        </a>
        <a href={t.seoHref} target="_blank" rel="noopener noreferrer">
          {" "}
          {t.seo}
        </a>
        <a
          href="https://codequest.work/category/generator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          {t.more}
        </a>
      </p>
    </footer>
  );
}

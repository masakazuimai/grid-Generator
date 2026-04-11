export function Footer() {
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
        <a
          href="https://seo.codequest.work/ja"
          target="_blank"
          rel="noopener noreferrer"
        >
          | SEO CHECKはこちら →
        </a>
        <a
          href="https://codequest.work/tag/generator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          | その他のジェネレーター →
        </a>
      </p>
    </footer>
  );
}

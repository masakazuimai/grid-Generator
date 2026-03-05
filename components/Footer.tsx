export function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} CSS Grid Generator |{" "}
        <a
          href="https://codequest.work/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by CodeQuest
        </a>
        <a
          href="https://codequest.work/generator/flex/"
          target="_blank"
          rel="noopener noreferrer"
        >
          | Flex Generator
        </a>
      </p>
    </footer>
  );
}

"use client";

import { useState } from "react";

type Props = {
  readonly code: string;
  readonly label?: string;
};

export function CodeBlock({ code, label = "コード" }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("クリップボードへのコピーに失敗しました:", error);
    }
  };

  return (
    <div className="preset-code-wrapper">
      <button
        type="button"
        className="preset-copy-button"
        onClick={handleCopy}
        aria-label={`${label}をコピー`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        <span
          className="preset-copy-tooltip"
          data-visible={copied ? "true" : "false"}
          role="status"
          aria-live="polite"
        >
          copy!
        </span>
      </button>
      <pre className="preset-code-block">{code}</pre>
    </div>
  );
}

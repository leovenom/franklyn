"use client";

import Link from "next/link";
import type { Market } from "@/lib/copy";

export function MarketSwitcher({ current }: { current: Market }) {
  return (
    <div className="flex rounded-full border border-franklyn-border p-0.5 text-xs font-medium">
      <Link
        href="/"
        className={`rounded-full px-3 py-1.5 transition-colors ${current === "br" ? "bg-franklyn-dark text-white" : "text-franklyn-muted hover:text-franklyn-ink"}`}
        hrefLang="pt-BR"
      >
        BR
      </Link>
      <Link
        href="/pt"
        className={`rounded-full px-3 py-1.5 transition-colors ${current === "pt" ? "bg-franklyn-dark text-white" : "text-franklyn-muted hover:text-franklyn-ink"}`}
        hrefLang="pt-PT"
      >
        PT
      </Link>
    </div>
  );
}

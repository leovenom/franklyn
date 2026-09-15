import Link from "next/link";
import { CODEKIDS } from "@/lib/codekids";

export function CodeKidsNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6" aria-label="CodeKids">
        <Link href="/cases/codekids/franquia" className="flex items-center gap-2 text-lg font-bold text-indigo-700">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
            {"</>"}
          </span>
          {CODEKIDS.name}
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#trilhas" className="hidden text-sm text-slate-600 hover:text-indigo-700 sm:inline">
            Trilhas
          </Link>
          <Link href="#investimento" className="hidden text-sm text-slate-600 hover:text-indigo-700 sm:inline">
            Investimento
          </Link>
          <Link
            href="#contato"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Seja franqueado
          </Link>
        </div>
      </nav>
    </header>
  );
}

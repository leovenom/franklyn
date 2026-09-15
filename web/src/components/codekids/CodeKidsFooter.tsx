import Link from "next/link";
import { CODEKIDS } from "@/lib/codekids";

export function CodeKidsFooter() {
  return (
    <footer className="border-t border-indigo-100 bg-slate-50 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © 2026 {CODEKIDS.name}. Case fictício — portfolio{" "}
          <Link href="/" className="font-medium text-indigo-600 hover:underline">
            Franklyn
          </Link>
        </p>
        <Link href="/cases/codekids" className="text-sm text-slate-500 hover:text-indigo-700">
          Ver case completo →
        </Link>
      </div>
    </footer>
  );
}

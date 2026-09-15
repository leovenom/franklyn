import Link from "next/link";
import { GRAO_E_CIA } from "@/lib/grao-ecia";

export function GraoNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-100 bg-[#faf7f2]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6" aria-label="Grão & Cia">
        <Link href="/cases/grao-e-cia/franquia" className="flex items-center gap-2 text-lg font-bold text-amber-950">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-800 text-sm text-amber-50">
            ☕
          </span>
          {GRAO_E_CIA.name}
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#marca" className="hidden text-sm text-amber-900/70 hover:text-amber-950 sm:inline">
            Marca
          </Link>
          <Link href="#formatos" className="hidden text-sm text-amber-900/70 hover:text-amber-950 sm:inline">
            Formatos
          </Link>
          <Link href="#investimento" className="hidden text-sm text-amber-900/70 hover:text-amber-950 sm:inline">
            Investimento
          </Link>
          <Link
            href="#contato"
            className="rounded-lg bg-amber-900 px-4 py-2 text-sm font-semibold text-amber-50 hover:bg-amber-950"
          >
            Seja franqueado
          </Link>
        </div>
      </nav>
    </header>
  );
}

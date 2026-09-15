import Link from "next/link";
import { GRAO_E_CIA } from "@/lib/grao-ecia";

export function GraoFooter() {
  return (
    <footer className="border-t border-amber-100 bg-[#f5f0e8] px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-amber-900/60">
          © 2026 {GRAO_E_CIA.name}. Case fictício — portfolio{" "}
          <Link href="/" className="font-medium text-amber-900 hover:underline">
            Franklyn
          </Link>
        </p>
        <Link href="/cases/grao-e-cia" className="text-sm text-amber-900/60 hover:text-amber-950">
          Ver case completo →
        </Link>
      </div>
    </footer>
  );
}

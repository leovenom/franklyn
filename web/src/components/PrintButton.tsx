"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded bg-franklyn-accent px-5 py-2 text-sm font-semibold text-white hover:bg-franklyn-accent-dark"
    >
      Salvar como PDF
    </button>
  );
}

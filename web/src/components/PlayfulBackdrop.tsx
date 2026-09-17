"use client";

export function PlayfulBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div className="confetti-shape right-[8%] top-[12%] h-16 w-16 rotate-12 rounded-full bg-franklyn-secondary/30" />
      <div className="confetti-shape bottom-[18%] left-[6%] h-12 w-12 -rotate-6 bg-franklyn-tertiary/40" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
      <div className="confetti-shape right-[22%] top-[42%] h-10 w-10 rotate-45 bg-franklyn-quaternary/30" />
      <div className="confetti-shape left-[18%] top-[28%] h-20 w-20 rounded-full bg-franklyn-accent/15" />
      <div className="confetti-shape bottom-[32%] right-[12%] h-14 w-14 rounded-md bg-franklyn-secondary/20" />
    </div>
  );
}

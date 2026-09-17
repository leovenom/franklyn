import { PlayfulBackdrop } from "./PlayfulBackdrop";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PlayfulBackdrop />
      <div className="relative">{children}</div>
    </>
  );
}

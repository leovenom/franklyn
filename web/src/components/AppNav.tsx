"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { Nav } from "./Nav";

export function AppNav() {
  const pathname = usePathname();

  if (pathname === "/proposta" || pathname.endsWith("/franquia")) {
    return null;
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <Nav />
    </LazyMotion>
  );
}

"use client";

import { m } from "framer-motion";
import { popIn } from "@/lib/motion";
import { Badge } from "./ui/Badge";

export function SectionHeader({
  label,
  title,
  desc,
  centered = false,
}: {
  label: string;
  title: string;
  desc: string;
  centered?: boolean;
}) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={popIn}
      className={centered ? "mx-auto max-w-prose text-center" : "max-w-prose"}
    >
      <Badge>{label}</Badge>
      <h2 className="font-display mt-5 text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.12] text-franklyn-ink">
        {title}
      </h2>
      <p className="mt-4 text-lg text-franklyn-muted">{desc}</p>
    </m.div>
  );
}

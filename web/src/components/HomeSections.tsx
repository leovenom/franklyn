"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { getCopy, type Market } from "@/lib/copy";
import { marketHref } from "@/lib/copy/paths";
import { JsonLd } from "./JsonLd";
import { faqJsonLd } from "@/lib/metadata";
import { Hero } from "./Hero";
import { TrustBar } from "./TrustBar";
import { Steps } from "./Steps";
import { Honesty } from "./Honesty";
import { Agents } from "./Agents";
import { BrandProcess } from "./BrandProcess";
import { Pricing } from "./Pricing";
import { FAQ } from "./FAQ";
import { CTA } from "./CTA";

export function HomeSections({ market = "br" }: { market?: Market }) {
  const copyBundle = getCopy(market);
  const { home, homePath, plansBR, plansEU, defaultPricingMarket } = copyBundle;
  const plans = defaultPricingMarket === "br" ? plansBR : plansEU;

  return (
    <LazyMotion features={domAnimation} strict>
      <JsonLd data={faqJsonLd(home.faq.items)} />
      <Hero copy={home.hero} homePath={homePath} />
      <TrustBar items={home.trust} />
      <Steps copy={home.steps} />
      <Honesty copy={home.honesty} casesPath={marketHref(market, "/cases")} />
      <Agents copy={home.agents} />
      <BrandProcess copy={home.brandProcess} />
      <Pricing copy={home.pricing} plans={plans} homePath={homePath} />
      <FAQ copy={home.faq} />
      <CTA copy={home.cta} market={market} />
    </LazyMotion>
  );
}

"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { useCopy } from "@/components/LocaleProvider";
import { JsonLd } from "./JsonLd";
import { faqJsonLd } from "@/lib/metadata";
import { Hero } from "./Hero";
import { TrustBar } from "./TrustBar";
import { FeatureHighlights } from "./FeatureHighlights";
import { SocialProof } from "./SocialProof";
import { DiagnosisProcess } from "./DiagnosisProcess";
import { Steps } from "./Steps";
import { Honesty } from "./Honesty";
import { Agents } from "./Agents";
import { BrandProcess } from "./BrandProcess";
import { Pricing } from "./Pricing";
import { FAQ } from "./FAQ";
import { CTA } from "./CTA";

export function HomeSections() {
  const { home, homePath, plansEU } = useCopy();

  return (
    <LazyMotion features={domAnimation} strict>
      <JsonLd data={faqJsonLd(home.faq.items)} />
      <Hero copy={home.hero} cta={home.cta} />
      <TrustBar items={home.trust} />
      <FeatureHighlights />
      <SocialProof />
      <DiagnosisProcess copy={home.diagnosis} />
      <Steps copy={home.steps} />
      <Honesty copy={home.honesty} casesPath="/cases" />
      <Agents copy={home.agents} />
      <BrandProcess copy={home.brandProcess} />
      <Pricing copy={home.pricing} plans={plansEU} homePath={homePath} />
      <FAQ copy={home.faq} />
      <CTA copy={home.cta} />
    </LazyMotion>
  );
}

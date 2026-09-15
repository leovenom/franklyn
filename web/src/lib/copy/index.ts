import { copyBR } from "./br";
import { copyPT } from "./pt";
import type { Market, MarketCopy } from "./types";

export type { Market, HomeCopy, MarketCopy } from "./types";

export function getCopy(market: Market): MarketCopy {
  return market === "pt" ? copyPT : copyBR;
}

export function alternateMarket(market: Market): Market {
  return market === "pt" ? "br" : "pt";
}

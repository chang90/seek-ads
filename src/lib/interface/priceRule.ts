import { DiscountRule } from "./discountRule";
import { FreeAds } from "./freeAds";

export interface PriceRule {
  name: string,
  description: string,
  retailPrice: number,
  discountRule?: DiscountRule,
  freeAds?: FreeAds
}
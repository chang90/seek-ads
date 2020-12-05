import { FreeAds } from "./freeAds";

export interface PriceRule {
  name: string,
  description: string,
  retailPrice: number,
  discountPrice?: number,
  freeAds?: FreeAds
}
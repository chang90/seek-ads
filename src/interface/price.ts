import { FreeAds } from "./freeAds";


export interface Price {
  name: string,
  description: string,
  retailPrice: number,
  discountPrice?: number,
  freeAds?: FreeAds
}
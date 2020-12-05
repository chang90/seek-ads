import { FreeAds } from "./freeAds";

export class FreeAdsRule {

  public totalAdsPerPackage: number;
  public chargedAdsPerPackage: number;
  public retailPrice: number;
  public discountPrice?: number;

  constructor(freeAds: FreeAds, retailPrice: number, discountPrice?: number) {
    this.totalAdsPerPackage = freeAds?.totalAdsPerPackage || 0;
    this.chargedAdsPerPackage = freeAds?.chargedAdsPerPackage || 0;
    this.retailPrice = retailPrice;
    if(discountPrice) {
      this.discountPrice = discountPrice;
    }
  }
}
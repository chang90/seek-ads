import { FreeAdsRuleMap } from "../interface/freeAdsRuleMap";
import { ProductMap } from "../interface/productMap";

export const getFreeAdsSaving = (productMap: ProductMap, freeAdsRuleMap: FreeAdsRuleMap) => {
  let totalSaving = 0;
  for (const freeAdsRule in freeAdsRuleMap) {
    // If user have this product, check if able to have free ads
    if(productMap[freeAdsRule]) {
      const freeAdsNumber = Math.floor(productMap[freeAdsRule] / freeAdsRuleMap[freeAdsRule].totalAdsPerPackage) * (freeAdsRuleMap[freeAdsRule].totalAdsPerPackage - freeAdsRuleMap[freeAdsRule].chargedAdsPerPackage);
      if (freeAdsNumber > 0 && freeAdsRuleMap[freeAdsRule]?.discountPrice) {
        totalSaving = totalSaving + freeAdsNumber * (freeAdsRuleMap[freeAdsRule].discountPrice as number);
      } else if ( freeAdsNumber > 0 ) {
        totalSaving = totalSaving + freeAdsNumber * (freeAdsRuleMap[freeAdsRule].retailPrice as number);
      }
    }
  }
  return totalSaving;
}
import { FreeAdsRuleMap } from "../interface/freeAdsRuleMap";
import { ShoppingCartMap } from "../interface/shoppingCartMap";

export const getFreeAdsSaving = (shoppingCartMap: ShoppingCartMap, freeAdsRuleMap: FreeAdsRuleMap) => {
  let totalSaving = 0;
  for (const freeAdsRule in freeAdsRuleMap) {
    // If user have this product, check if able to have free ads
    if(shoppingCartMap[freeAdsRule]) {
      const freeAdsNumber = Math.floor(shoppingCartMap[freeAdsRule] / freeAdsRuleMap[freeAdsRule].totalAdsPerPackage) * (freeAdsRuleMap[freeAdsRule].totalAdsPerPackage - freeAdsRuleMap[freeAdsRule].chargedAdsPerPackage);
      if (freeAdsNumber > 0 && freeAdsRuleMap[freeAdsRule]?.discountPrice) {
        totalSaving = totalSaving + freeAdsNumber * (freeAdsRuleMap[freeAdsRule].discountPrice as number);
      } else if ( freeAdsNumber > 0 ) {
        totalSaving = totalSaving + freeAdsNumber * (freeAdsRuleMap[freeAdsRule].retailPrice as number);
      }
    }
  }
  return totalSaving;
}
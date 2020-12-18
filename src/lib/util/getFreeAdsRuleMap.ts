import { FreeAds } from "../interface/freeAds";
import { FreeAdsRule } from "../interface/freeAdsRule";
import { FreeAdsRuleMap } from "../interface/freeAdsRuleMap";
import { PriceRule } from "../interface/priceRule";


export const getFreeAdsRuleMap = (priceRuleArr: Array<PriceRule>) => {
  return priceRuleArr.filter((priceRule: PriceRule) => priceRule?.freeAds?.totalAdsPerPackage && priceRule?.freeAds?.chargedAdsPerPackage)
    .reduce((map: FreeAdsRuleMap, priceRule: PriceRule) => {
      map[priceRule.name] = priceRule?.discountRule?.discountPrice ?
        new FreeAdsRule(priceRule.freeAds as FreeAds, priceRule.retailPrice, priceRule.discountRule.discountPrice) :
        new FreeAdsRule(priceRule.freeAds as FreeAds, priceRule.retailPrice)
      return map;
    }, {});
}
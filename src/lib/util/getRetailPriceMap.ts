import { PriceRule } from "../interface/priceRule";
import { RetailPriceRuleMap } from "../interface/retailPriceRuleMap";

export const getRetailPriceMap = (priceRuleArr: Array<PriceRule>) => {
  return priceRuleArr.reduce((map: RetailPriceRuleMap, priceRule: PriceRule) => {
    map[priceRule.name] = priceRule.retailPrice;
    return map;
  }, {});
}
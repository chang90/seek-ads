import { DiscountRuleMap } from "../interface/discountRuleMap";
import { PriceRule } from "../interface/priceRule";

export const getDiscountSavingMap = (priceRuleArr: Array<PriceRule>) => {
  
  return priceRuleArr.filter((priceRule: PriceRule) => { return priceRule?.retailPrice && priceRule?.discountPrice; })
  .reduce((map: DiscountRuleMap, priceRule: PriceRule) => {
    map[priceRule.name] = priceRule?.retailPrice - (priceRule?.discountPrice as number);
    return map;
  }, {});
}
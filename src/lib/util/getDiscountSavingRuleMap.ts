import { DiscountSavingRuleMap } from "../interface/discountSavingRuleMap";
import { PriceRule } from "../interface/priceRule";


export const getDiscountSavingRuleMap = (priceRuleArr: Array<PriceRule>) => {

  return priceRuleArr.filter((priceRule: PriceRule) => priceRule?.retailPrice && priceRule?.discountRule?.discountPrice)
    .reduce((map: DiscountSavingRuleMap, priceRule: PriceRule) => {
      map[priceRule.name] = {
        savingPerAds: priceRule?.retailPrice - (priceRule.discountRule?.discountPrice as number)
      }
      if(priceRule?.discountRule?.bulkDiscountItemNumber) {
        map[priceRule.name].bulkDiscountItemNumber = priceRule.discountRule.bulkDiscountItemNumber;
      }
      return map as DiscountSavingRuleMap;
    }, {});
}
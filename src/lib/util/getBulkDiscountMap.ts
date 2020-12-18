import { BulkDiscount } from "../interface/bulkDiscount";
import { BulkDiscountRuleMap } from "../interface/BulkDiscountRuleMap";
import { PriceRule } from "../interface/priceRule";

export const getBulkDiscountMap = (priceRuleArr: Array<PriceRule>) => {
  return priceRuleArr.filter((priceRule: PriceRule) => priceRule?.bulkDiscount?.appliedAdsMinumNumber && priceRule?.bulkDiscount?.discountPrice)
  .reduce((map: BulkDiscountRuleMap, priceRule: PriceRule) => {
    map[priceRule.name] = priceRule.bulkDiscount as BulkDiscount;
    
    return map;
  }, {});
}
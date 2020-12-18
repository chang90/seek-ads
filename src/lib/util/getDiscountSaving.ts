import { DiscountSavingRuleMap } from "../interface/discountSavingRuleMap";
import { ShoppingCartMap } from "../interface/shoppingCartMap";

export const getDiscountSaving = (shoppingCartMap: ShoppingCartMap, discountSavingRuleMap: DiscountSavingRuleMap) => {
  let totalSaving = 0;
  for (const productTyle in shoppingCartMap) {
    if (discountSavingRuleMap[productTyle]?.savingPerAds && 
      shoppingCartMap[productTyle] >= (discountSavingRuleMap[productTyle]?.bulkDiscountItemNumber || 0)) {
      totalSaving = totalSaving + discountSavingRuleMap[productTyle].savingPerAds * shoppingCartMap[productTyle];
    }
  }
  return totalSaving;
}

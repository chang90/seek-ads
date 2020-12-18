import { BulkDiscountRuleMap } from "../interface/BulkDiscountRuleMap";
import { ShoppingCartMap } from "../interface/shoppingCartMap";
import { RetailPriceRuleMap } from "../interface/retailPriceRuleMap";

export const getBulkDiscountSaving = (shoppingCartMap: ShoppingCartMap, bulkDiscountMap: BulkDiscountRuleMap, retailPriceRuleMap: RetailPriceRuleMap) => {
  let totalSaving = 0;
  for (const bulkDiscount in bulkDiscountMap) {
    // If user have this product, check if able to have free ads
    if(shoppingCartMap[bulkDiscount]) {
       if(shoppingCartMap[bulkDiscount] >= bulkDiscountMap[bulkDiscount].appliedAdsMinumNumber) {
          totalSaving = shoppingCartMap[bulkDiscount] * (retailPriceRuleMap[bulkDiscount] - bulkDiscountMap[bulkDiscount].discountPrice);
       }
    }
  }
  return totalSaving;
}
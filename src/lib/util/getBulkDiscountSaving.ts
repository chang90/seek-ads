import { BulkDiscountRuleMap } from "../interface/BulkDiscountRuleMap";
import { ProductMap } from "../interface/productMap";
import { RetailPriceRuleMap } from "../interface/retailPriceRuleMap";

export const getBulkDiscountSaving = (productMap: ProductMap, bulkDiscountMap: BulkDiscountRuleMap, retailPriceRuleMap: RetailPriceRuleMap) => {
  let totalSaving = 0;
  for (const bulkDiscount in bulkDiscountMap) {
    // If user have this product, check if able to have free ads
    if(productMap[bulkDiscount]) {
       if(productMap[bulkDiscount] >= bulkDiscountMap[bulkDiscount].appliedAdsMinumNumber) {
          totalSaving = productMap[bulkDiscount] * (retailPriceRuleMap[bulkDiscount] - bulkDiscountMap[bulkDiscount].discountPrice);
       }
    }
  }
  return totalSaving;
}
import { PriceRule } from "../interface/priceRule";
import { ProductItem } from "../interface/productItem";
import { getBulkDiscountMap } from "./getBulkDiscountMap";
import { getBulkDiscountSaving } from "./getBulkDiscountSaving";
import { getDiscountSaving } from "./getDiscountSaving";
import { getDiscountSavingMap } from "./getDiscountSavingMap";
import { getFreeAdsRuleMap } from "./getFreeAdsRuleMap";
import { getFreeAdsSaving } from "./getFreeAdsSaving";
import { getNormalPrice } from "./getNormalPrice";
import { getShoppingCartMap } from "./getShoppingCartMap";
import { getRetailPriceMap } from "./getRetailPriceMap";

export const totalPriceCalculator = (itemArr: Array<ProductItem>, priceRules: Array<PriceRule>): number => {
  let totalPrice = 0;

  const retailPriceMap = getRetailPriceMap(priceRules);

  const productMap = getShoppingCartMap(itemArr);

  const discountSavingMap = getDiscountSavingMap(priceRules);

  const freeAdsRuleMap = getFreeAdsRuleMap(priceRules);

  const bulkDiscountRuleMap = getBulkDiscountMap(priceRules);

  console.log(bulkDiscountRuleMap)

  totalPrice = getNormalPrice(productMap, retailPriceMap) - getDiscountSaving(productMap, discountSavingMap) - getFreeAdsSaving(productMap, freeAdsRuleMap) - getBulkDiscountSaving(productMap, bulkDiscountRuleMap, retailPriceMap);

  totalPrice = Number(totalPrice.toFixed(2));
  
  return totalPrice;
}

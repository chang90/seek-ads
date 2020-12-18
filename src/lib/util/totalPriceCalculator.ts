import { PriceRule } from "../interface/priceRule";
import { ProductItem } from "../interface/productItem";
import { getDiscountSaving } from "./getDiscountSaving";
import { getDiscountSavingRuleMap } from "./getDiscountSavingRuleMap";
import { getFreeAdsRuleMap } from "./getFreeAdsRuleMap";
import { getFreeAdsSaving } from "./getFreeAdsSaving";
import { getNormalPrice } from "./getNormalPrice";
import { getShoppingCartMap } from "./getShoppingCartMap";
import { getRetailPriceMap } from "./getRetailPriceMap";

export const totalPriceCalculator = (itemArr: Array<ProductItem>, priceRules: Array<PriceRule>): number => {
  let totalPrice = 0;

  const retailPriceMap = getRetailPriceMap(priceRules);

  const productMap = getShoppingCartMap(itemArr);

  const discountSavingRuleMap = getDiscountSavingRuleMap(priceRules);

  const freeAdsRuleMap = getFreeAdsRuleMap(priceRules);

  totalPrice = getNormalPrice(productMap, retailPriceMap) - getDiscountSaving(productMap, discountSavingRuleMap) - getFreeAdsSaving(productMap, freeAdsRuleMap, discountSavingRuleMap);

  totalPrice = Number(totalPrice.toFixed(2));
  
  return totalPrice;
}

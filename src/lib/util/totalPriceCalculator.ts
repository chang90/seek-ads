import { PriceRule } from "../interface/priceRule";
import { ProductItem } from "../interface/productItem";
import { getDiscountSaving } from "./getDiscountSaving";
import { getDiscountSavingMap } from "./getDiscountSavingMap";
import { getFreeAdsRuleMap } from "./getFreeAdsRuleMap";
import { getFreeAdsSaving } from "./getFreeAdsSaving";
import { getNormalPrice } from "./getNormalPrice";
import { getProductMap } from "./getProductMap";
import { getRetailPriceMap } from "./getRetailPriceMap";

export const totalPriceCalculator = (itemArr: Array<ProductItem>, priceRuleArr: Array<PriceRule>): number => {
  let totalPrice = 0;

  const retailPriceMap = getRetailPriceMap(priceRuleArr);

  const productMap = getProductMap(itemArr);

  const discountSavingMap = getDiscountSavingMap(priceRuleArr);

  const freeAdsRulMap = getFreeAdsRuleMap(priceRuleArr);

  totalPrice = getNormalPrice(productMap, retailPriceMap) - getDiscountSaving(productMap, discountSavingMap) - getFreeAdsSaving(productMap, freeAdsRulMap);

  totalPrice = Number(totalPrice.toFixed(2));
  
  return totalPrice;
}

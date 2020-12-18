import { ShoppingCartMap } from "../interface/shoppingCartMap";
import { RetailPriceRuleMap } from "../interface/retailPriceRuleMap";

export const getNormalPrice = (shoppingCartMap: ShoppingCartMap, retailPriceMap: RetailPriceRuleMap): number => {
  let resultPrice = 0;
  for (const productItem in shoppingCartMap) {
    resultPrice = resultPrice + shoppingCartMap[productItem] * retailPriceMap[productItem];
  }
  return resultPrice;
}
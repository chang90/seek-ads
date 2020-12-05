import { ProductMap } from "../interface/productMap";
import { RetailPriceRuleMap } from "../interface/retailPriceRuleMap";

export const getNormalPrice = (productMap: ProductMap, retailPriceMap: RetailPriceRuleMap): number => {
  let resultPrice = 0;
  for (const productItem in productMap) {
    resultPrice = resultPrice + productMap[productItem] * retailPriceMap[productItem];
  }
  return resultPrice;
}
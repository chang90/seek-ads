import { DiscountSavingMap } from "../interface/discountSavingMap";
import { ShoppingCartMap } from "../interface/shoppingCartMap";

export const getDiscountSaving = (shoppingCartMap: ShoppingCartMap, discountSavingMap: DiscountSavingMap) => {
  let totalSaving = 0;
  for (const shoppingCart in shoppingCartMap) {
    if(discountSavingMap[shoppingCart]) {
      totalSaving = totalSaving + discountSavingMap[shoppingCart] * shoppingCartMap[shoppingCart];
    }
  }
  return totalSaving;
}

import { DiscountSavingMap } from "../interface/discountSavingMap";
import { ProductMap } from "../interface/productMap";

export const getDiscountSaving = (productMap: ProductMap, discountSavingMap: DiscountSavingMap) => {
  let totalSaving = 0;
  for (const product in productMap) {
    if(discountSavingMap[product]) {
      totalSaving = totalSaving + discountSavingMap[product] * productMap[product];
    }
  }
  return totalSaving;
}
import { ProductItem } from "../interface/productItem";
import { ProductMap } from "../interface/productMap";

export const getProductMap = (itemArr: Array<ProductItem>): ProductMap => {
  return itemArr.reduce((map: ProductMap, item: ProductItem) => {
    map[item.type] = (map[item.type] || 0) + 1;
    return map;
  }, {});
}
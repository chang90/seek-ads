import { ProductItem } from "../interface/productItem";
import { ShoppingCartMap } from "../interface/shoppingCartMap";

export const getShoppingCartMap= (itemArr: Array<ProductItem>): ShoppingCartMap => {
  return itemArr.reduce((map: ShoppingCartMap, item: ProductItem) => {
    map[item.type] = (map[item.type] || 0) + 1;
    return map;
  }, {});
}
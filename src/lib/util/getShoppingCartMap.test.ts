import { ProductType } from "../enum/productType";
import { getShoppingCartMap} from "./getShoppingCartMap";

describe('getShoppingCartMapfunction', () => {
  test('getShoppingCartMapfunction should return productMap', () => {
    const input = [{ type: ProductType.StandoutAd }, { type: ProductType.StandoutAd }, { type: ProductType.StandoutAd }, { type: ProductType.PremiumAd }];
    const output = { 'Stand out Ad': 3, 'Premium Ad': 1 };

    expect(getShoppingCartMap(input)).toEqual(output);
  });
});
import { ProductType } from "../enum/productType";
import { getProductMap } from "./getProductMap";

describe('getProductMap function', () => {
  test('getProductMap function should return productMap', () => {
    const input = [{ type: ProductType.StandoutAd }, { type: ProductType.StandoutAd }, { type: ProductType.StandoutAd }, { type: ProductType.PremiumAd }];
    const output = { 'Stand out Ad': 3, 'Premium Ad': 1 };

    expect(getProductMap(input)).toEqual(output);
  });
});
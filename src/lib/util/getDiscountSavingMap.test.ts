import { ProductType } from "../enum/productType";
import { getDiscountSavingMap } from "./getDiscountSavingMap";

describe('getDiscountSavingMap function', () => {
  test('getDiscountSavingMap function should return discountSavingMap', () => {
    const input = [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99
    },
    {
      name: ProductType.StandoutAd,
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99,
      discountPrice: 299.99
    },
    {
      name: ProductType.PremiumAd,
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99
    }];
    const output = { 'Stand out Ad': 23 };

    expect(getDiscountSavingMap(input)).toEqual(output);
  });
});
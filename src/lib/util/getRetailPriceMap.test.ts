import { ProductType } from "../enum/productType";
import { getRetailPriceMap } from "./getRetailPriceMap";

describe('getRetailPriceMap function', () => {
  test('getRetailPriceMap function should return retailPriceMap', () => {
    const input = [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99
    },
    {
      name: ProductType.StandoutAd,
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99
    },
    {
      name: ProductType.PremiumAd,
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99
    }];
    const output = { 'Classic Ad': 269.99, 'Stand out Ad': 322.99, 'Premium Ad': 394.99 };

    expect(getRetailPriceMap(input)).toEqual(output);
  });
});
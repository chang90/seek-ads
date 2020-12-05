import { ProductType } from "../enum/productType";
import { getFreeAdsRuleMap } from "./getFreeAdsRuleMap";

describe('getFreeAdsRuleMap function', () => {
  test('getFreeAdsRuleMap function should return freeAdsRuleMap', () => {
    const input = [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99
    },
    {
      name: ProductType.StandoutAd,
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99,

    },
    {
      name: ProductType.PremiumAd,
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99,
      freeAds: {
        totalAdsPerPackage: 5,
        chargedAdsPerPackage: 4
      }
    }];
    const output = {
      'Premium Ad': {
        totalAdsPerPackage: 5,
        chargedAdsPerPackage: 4,
        retailPrice: 394.99
      }
    };

    expect(getFreeAdsRuleMap(input)).toEqual(output);
  });
});

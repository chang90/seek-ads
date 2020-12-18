import { ProductType } from "../enum/productType";
import { getDiscountSavingRuleMap } from "./getDiscountSavingRuleMap";

describe('getDiscountSavingMap function', () => {
  test('getDiscountSavingMap function should return discountSavingMap with savingPerAds', () => {
    const input = [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99
    },
    {
      name: ProductType.StandoutAd,
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99,
      discountRule: {
        discountPrice: 299.99
      }
    },
    {
      name: ProductType.PremiumAd,
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99
    }];
    const output = {
      'Stand out Ad': {
        savingPerAds: 23
      }
    };

    expect(getDiscountSavingRuleMap(input)).toEqual(output);
  });

  test('getDiscountSavingMap function should return discountSavingMap with bulkDiscountItemNumber if bulkDiscountItemNumber exist', () => {
    const input = [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99
    },
    {
      name: ProductType.StandoutAd,
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99,
      discountRule: {
        bulkDiscountItemNumber: 3,
        discountPrice: 299.99
        
      }
    },
    {
      name: ProductType.PremiumAd,
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99
    }];
    const output = {
      'Stand out Ad': {
        savingPerAds: 23,
        bulkDiscountItemNumber: 3
      }
    };

    expect(getDiscountSavingRuleMap(input)).toEqual(output);
  });
});
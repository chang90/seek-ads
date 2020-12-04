import 'jest-styled-components';

import { totalPriceCalculator, getProductMap, getRetailPriceMap, getNormalPrice, getDiscountSavingMap, getDiscountSaving, getFreeAdsRuleMap, getFreeAdsSaving } from './totalPriceCalculator';
import { ProductType } from '../enum/productType';
import { PriceRule } from '../interface/priceRule';

describe('getProductMap function', () => {
  test('getProductMap function should return productMap', () => {
    const input = [{ type: ProductType.StandoutAd }, { type: ProductType.StandoutAd }, { type: ProductType.StandoutAd }, { type: ProductType.PremiumAd }];
    const output = { 'Stand out Ad': 3, 'Premium Ad': 1 };

    expect(getProductMap(input)).toEqual(output);
  });
});

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

describe('getNormalPrice function', () => {
  test('getNormalPrice function should return total price 987.97', () => {
    const productMap = { 'Classic Ad': 1, 'Stand out Ad': 1, 'Premium Ad': 1 };
    const retailPriceMap = { 'Classic Ad': 269.99, 'Stand out Ad': 322.99, 'Premium Ad': 394.99 };

    expect(getNormalPrice(productMap, retailPriceMap)).toEqual(987.97);
  });
});

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

describe('getDiscountSaving function', () => {
  test('getDiscountSaving function should return total price 69', () => {
    const productMap = { 'Stand out Ad': 3, 'Premium Ad': 1 };
    const discountSavingMap = { 'Stand out Ad': 23 };

    expect(getDiscountSaving(productMap, discountSavingMap)).toEqual(69);
  });
});

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

describe('getFreeAdsSaving function', () => {
  test('getFreeAdsSaving function should return total price 322.99', () => {
    const productMap = { 'Stand out Ad': 6, 'Premium Ad': 1 }
    const freeAdsRuleMap = {
      'Stand out Ad': {
        totalAdsPerPackage: 5,
        chargedAdsPerPackage: 4,
        retailPrice: 322.99
      }
    };
    expect(getFreeAdsSaving(productMap, freeAdsRuleMap)).toEqual(322.99);
  });
});

describe('totalPriceCalculator function', () => {
  test('default customer with items: `classic`, `standout`, `premium` should get result 987.97', () => {
    const mockItemArr = [{ type: ProductType.ClassicAd }, { type: ProductType.StandoutAd }, { type: ProductType.PremiumAd }];
    const mockPriceArr: Array<PriceRule> = [{
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
    }];;
    const result = totalPriceCalculator(mockItemArr, mockPriceArr);

    expect(result).toEqual(987.97);
  });

  test('SecondBite with items: `classic`, `classic`, `classic`, `premium` should get result 934.97', () => {
    const mockItemArr = [{ type: ProductType.ClassicAd }, { type: ProductType.ClassicAd }, { type: ProductType.ClassicAd }, { type: ProductType.PremiumAd }];
    const mockPriceArr: Array<PriceRule> = [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99,
      freeAds: {
        totalAdsPerPackage: 3,
        chargedAdsPerPackage: 2
      }
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
    }];;
    const result = totalPriceCalculator(mockItemArr, mockPriceArr);

    expect(result).toEqual(934.97);
  });

  test('Axil Coffee Roasters with items: `standout`, `standout`, `standout`,`premium` should get result 1294.96', () => {
    const mockItemArr = [
      { type: ProductType.StandoutAd },
      { type: ProductType.StandoutAd },
      { type: ProductType.StandoutAd },
      { type: ProductType.PremiumAd }];
    const mockPriceArr: Array<PriceRule> = [{
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
    const result = totalPriceCalculator(mockItemArr, mockPriceArr);

    expect(result).toEqual(1294.96);
  });

  test('MYER with items: `standout`, `standout`, `standout`, `standout`, `standout`, `premium` should get result 2004.94', () => {
    const mockItemArr = [
      { type: ProductType.StandoutAd },
      { type: ProductType.StandoutAd },
      { type: ProductType.StandoutAd },
      { type: ProductType.StandoutAd },
      { type: ProductType.StandoutAd },
      { type: ProductType.PremiumAd }];
    const mockPriceArr: Array<PriceRule> = [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99
    },
    {
      name: ProductType.StandoutAd,
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99,
      freeAds: {
        totalAdsPerPackage: 5,
        chargedAdsPerPackage: 4
      }
    },
    {
      name: ProductType.PremiumAd,
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99,
      discountPrice: 389.99
    }];
    const result = totalPriceCalculator(mockItemArr, mockPriceArr);

    expect(result).toEqual(1681.95);
  });
});

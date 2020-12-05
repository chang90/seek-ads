import { totalPriceCalculator } from './totalPriceCalculator';
import { ProductType } from '../enum/productType';
import { PriceRule } from '../interface/priceRule';

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
    }];
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
    }];
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

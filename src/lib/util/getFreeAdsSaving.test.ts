import { getFreeAdsSaving } from "./getFreeAdsSaving";

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
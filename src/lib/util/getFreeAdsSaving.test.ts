import { getFreeAdsSaving } from "./getFreeAdsSaving";

describe('getFreeAdsSaving function', () => {
  test('getFreeAdsSaving function should return correct total price', () => {
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
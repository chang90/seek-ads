import { getDiscountSaving } from "./getDiscountSaving";

describe('getDiscountSaving function', () => {
  test('getDiscountSaving function should return correct total price', () => {
    const productMap = { 'Stand out Ad': 3, 'Premium Ad': 1 };
    const discountSavingMap = { 'Stand out Ad': 23 };

    expect(getDiscountSaving(productMap, discountSavingMap)).toEqual(69);
  });
});
import { getNormalPrice } from "./getNormalPrice";

describe('getNormalPrice function', () => {
  test('getNormalPrice function should return correct total price', () => {
    const productMap = { 'Classic Ad': 1, 'Stand out Ad': 1, 'Premium Ad': 1 };
    const retailPriceMap = { 'Classic Ad': 269.99, 'Stand out Ad': 322.99, 'Premium Ad': 394.99 };

    expect(getNormalPrice(productMap, retailPriceMap)).toEqual(987.97);
  });
});
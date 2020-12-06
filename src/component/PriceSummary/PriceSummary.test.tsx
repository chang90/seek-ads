import React from 'react';
import { render, cleanup } from '@testing-library/react';

import 'jest-styled-components';
import PriceSummary from './PriceSummary';
import { ProductType } from '../../lib/enum/productType';
import { CompanyName } from '../../lib/enum/companyName';

afterEach(cleanup);

describe('price summery component', () => {
  test('able to render title', () => {
    const { getByTestId } = render(<PriceSummary items={[]} />);
    expect(getByTestId("summary-title").innerHTML).toContain('Summary');
  });

  test('contains correct item list', () => {
    const { getByTestId } = render(<PriceSummary items={[
      { type: ProductType.ClassicAd },
      { type: ProductType.PremiumAd },
      { type: ProductType.StandoutAd },
    ]} />);
    expect(getByTestId("item-list").children.length).toEqual(3);
  })

  test('show total price 0 if there is no item', () => {
    const { getByTestId } = render(<PriceSummary items={[]} />);
    expect(getByTestId("total").innerHTML).toEqual('Total: 0');
  })

  test('show total price 0 if there is no company rules', () => {
    const { getByTestId } = render(<PriceSummary items={[{ type: ProductType.ClassicAd }]} />);
    expect(getByTestId("total").innerHTML).toEqual('Total: 0');
  })

  test('show correct total price', () => {
    const { getByTestId } = render(
      <PriceSummary
        items={[{ type: ProductType.ClassicAd }]}
        company={{
          companyName: CompanyName.Default,
          priceRules: [{
            name: ProductType.ClassicAd,
            description: 'Offers the most basic level of advertisement',
            retailPrice: 269.99
          }]
        }} />
    );
    expect(getByTestId("total").innerHTML).toEqual('Total: 269.99');
  })
});
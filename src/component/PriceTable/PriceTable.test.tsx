import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PriceTable from './PriceTable';
import 'jest-styled-components';
import { Price } from '../../interface/price';

const mockPriceArr: Array<Price> = [{
  name: 'Classic Ad',
  description: 'Offers the most basic level of advertisement',
  retailPrice: 269.99
},
{
  name: 'Stand out Ad',
  description: 'Allows advertisers to use a company logo and use a longer presentation text',
  retailPrice: 322.99
},
{
  name: 'Premium Ad',
  description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
  retailPrice: 394.99
}];

afterEach(cleanup);

describe('price table component', () => {
  test('able to render table title', () => {
    const { getByTestId } = render(<PriceTable priceArrData={[]} />);
    expect(getByTestId("price-table-header").innerHTML).toContain('Price Table');
  });

  test('able to display price name', () => {
    const { getByTestId } = render(<PriceTable priceArrData={mockPriceArr} />);
    expect(getByTestId("price-name-0").innerHTML).toContain('Classic Ad');
  });

  test('able to display price description', () => {
    const { getByTestId } = render(<PriceTable priceArrData={mockPriceArr} />);
    expect(getByTestId("price-description-0").innerHTML).toContain('Offers the most basic level of advertisement');
  });

  test('able to display retail price', () => {
    const { getByTestId } = render(<PriceTable priceArrData={mockPriceArr} />);
    expect(getByTestId("price-retail-0").innerHTML).toContain('269.99');
  });

  test('price table should contain 3 rows', () => {
    const { getByTestId } = render(<PriceTable priceArrData={mockPriceArr} />);
    expect(getByTestId("price-table-body").children.length).toEqual(3);
  });
});
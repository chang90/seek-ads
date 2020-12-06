import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PriceTable from './PriceTable';
import 'jest-styled-components';
import { PriceRule } from '../../lib/interface/priceRule';
import { ProductType } from '../../lib/enum/productType';

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
  retailPrice: 394.99,
  freeAds: {
    totalAdsPerPackage: 5,
    chargedAdsPerPackage: 4
  }
}];

afterEach(cleanup);

describe('price table component', () => {
  test('able to render table title', () => {
    const { getByTestId } = render(<PriceTable priceRules={[]} addNewItem={()=>{}} />);
    expect(getByTestId("price-table-header").innerHTML).toContain('Price Table');
  });

  test('able to display price name', () => {
    const { getByTestId } = render(<PriceTable priceRules={mockPriceArr} addNewItem={()=>{}} />);
    expect(getByTestId("price-name-0").innerHTML).toContain('Classic Ad');
  });

  test('able to display price description', () => {
    const { getByTestId } = render(<PriceTable priceRules={mockPriceArr} addNewItem={()=>{}} />);
    expect(getByTestId("price-description-0").innerHTML).toContain('Offers the most basic level of advertisement');
  });

  test('able to display retail price', () => {
    const { getByTestId } = render(<PriceTable priceRules={mockPriceArr} addNewItem={()=>{}} />);
    expect(getByTestId("price-retail-0").innerHTML).toContain('269.99');
  });

  test('able to display discount price', () => {
    const { getByTestId } = render(<PriceTable priceRules={mockPriceArr} addNewItem={()=>{}} />);
    expect(getByTestId("price-discount-1").innerHTML).toContain('299.99');
  });

  test('able to display special deals', () => {
    const { getByTestId } = render(<PriceTable priceRules={mockPriceArr} addNewItem={()=>{}} />);
    expect(getByTestId("price-discount-1").innerHTML).toContain('299.99');
  });

  test('price table should contain 3 rows', () => {
    const { getByTestId } = render(<PriceTable priceRules={mockPriceArr} addNewItem={()=>{}} />);
    expect(getByTestId("price-table-body").children.length).toEqual(3);
  });
});
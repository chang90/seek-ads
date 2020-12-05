import React from 'react';
import { render, cleanup } from '@testing-library/react';

import 'jest-styled-components';
import PriceSummary from './PriceSummary';

afterEach(cleanup);

describe('price summery component', () => {
  test('able to render title', () => {
    const { getByTestId } = render(<PriceSummary itemArr={[]} priceArr={[]}/>);
    expect(getByTestId("greating-header").innerHTML).toContain('Hello, please select your company');
  });
});
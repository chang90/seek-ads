import React from 'react';
import { render, cleanup } from '@testing-library/react';

import 'jest-styled-components';
import CompanySelector from './CompanySelector';

afterEach(cleanup);

describe('company selector component', () => {
  test('able to render greating words', () => {
    const { getByTestId } = render(<CompanySelector companyNames={[]} changeCompany={()=>{}} />);
    expect(getByTestId("greating-header").innerHTML).toContain('Hello, please select your company');
  });
});
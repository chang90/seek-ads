import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders header', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Seek Ads/i)).toBeInTheDocument();
  });
});
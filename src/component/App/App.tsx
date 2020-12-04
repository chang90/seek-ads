import React from 'react';
import PriceTable from '../PriceTable';
import styled from 'styled-components';
import { Price } from '../../interface/price';

const Title = styled.h1`
padding: 1em;
text-align:center;
`;

function App() {

    const priceArrData: Array<Price> = [{
      name: 'Classic Ad',
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99
    },
    {
      name: 'Stand out Ad',
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99,
      discountPrice: 299.99
    },
    {
      name: 'Premium Ad',
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99,
      freeAds: {
        totalAdsPerPackage: 5,
        chargedAdsPerPackage: 4
      }
    }];

  return (
    <div className="App">
      <Title>Seek Ads</Title>
      <PriceTable priceArrData={priceArrData}></PriceTable>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import PriceTable from '../PriceTable';
import styled from 'styled-components';
import { PriceRule } from '../../interface/priceRule';
import { ProductType } from '../../enum/productType';
import { totalPriceCalculator } from '../../function/totalPriceCalculator';

const Title = styled.h1`
padding: 1em;
text-align:center;
`;

const App = () => {

  const mockItemArr = [{type: ProductType.StandoutAd},{type: ProductType.StandoutAd},{type: ProductType.StandoutAd}, {type: ProductType.PremiumAd}];
  const priceArrData: Array<PriceRule> = [{
    name: ProductType.ClassicAd,
    description: 'Offers the most basic level of advertisement',
    retailPrice: 269.99
  },
  {
    name: ProductType.StandoutAd,
    description: 'Allows advertisers to use a company logo and use a longer presentation text',
    retailPrice: 322.99,
    freeAds: {
      totalAdsPerPackage: 5,
      chargedAdsPerPackage: 4
    }
  },
  {
    name: ProductType.PremiumAd,
    description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
    retailPrice: 394.99,
    discountPrice: 389.99
  }];

  useEffect(() => {
    console.log(totalPriceCalculator(mockItemArr, priceArrData))
  });

  return (
    <div className="App">
      <Title>Seek Ads</Title>
      <PriceTable priceArrData={priceArrData}></PriceTable>
    </div>
  );
}

export default App;

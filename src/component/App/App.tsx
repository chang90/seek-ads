import React, {  useState } from 'react';
import PriceTable from '../PriceTable';
import styled from 'styled-components';
import { PriceRule } from '../../lib/interface/priceRule';
import { ProductType } from '../../lib/enum/productType';
import CompanySelector from '../CompanySelector';
import { CompanyName } from '../../lib/enum/companyName';
import { CompanyInfo } from '../../lib/interface/companyInfo';
import { ProductItem } from '../../lib/interface/productItem';
import PriceSummary from '../PriceSummary';

const Title = styled.h1`
padding: 1em;
text-align:center;
`;

const companyInfoGroup: { [key in CompanyName]?: CompanyInfo } = {
  [CompanyName.Default]: {
    companyName: CompanyName.Default,
    priceRule: [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99
    },
    {
      name: ProductType.StandoutAd,
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99
    },
    {
      name: ProductType.PremiumAd,
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99
    }]
  },
  [CompanyName.SecondBite]: {
    companyName: CompanyName.SecondBite,
    priceRule: [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99,
      freeAds: {
        totalAdsPerPackage: 3,
        chargedAdsPerPackage: 2
      }
    },
    {
      name: ProductType.StandoutAd,
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99
    },
    {
      name: ProductType.PremiumAd,
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99
    }]
  },
  [CompanyName.AxilCoffeeRoasters]: {
    companyName: CompanyName.AxilCoffeeRoasters,
    priceRule: [{
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
      retailPrice: 394.99
    }]
  },
  [CompanyName.Myer]: {
    companyName: CompanyName.Myer,
    priceRule: [{
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
    }]
  }
}

const App = () => {
  const [selectedCompanyPriceRule, setSelectedCompanyPriceRule] =
   useState<Array<PriceRule> | []>(Object.values(companyInfoGroup)[0]?.priceRule as Array<PriceRule>);
  const [selectedCompanyName, setSelectedCompanyName] =
   useState<CompanyName | undefined>(Object.keys(companyInfoGroup)[0] as CompanyName);
  const [itemArr, setItemArr] = useState<Array<ProductItem>>([]);

  const changeSelectedCompany = (companyName: CompanyName): void => {
    if (companyInfoGroup[companyName]) {
      console.log('changeSelectedCompany', companyName)
      setSelectedCompanyPriceRule(
        (companyInfoGroup && companyInfoGroup[companyName]?.priceRule) ? (companyInfoGroup[companyName] as CompanyInfo).priceRule : []);
      setSelectedCompanyName(companyName);

      // Clean up old itemArr
      setItemArr([]);
    }
  }

  const addNewItem = (itemType: ProductType) => {
    const newItem: ProductItem = {
      type: itemType
    } 
    setItemArr([...itemArr, newItem]);
  }

  return (
    <div className="App">
      <Title>Seek Ads</Title>
      <CompanySelector
        selectCompanyName={selectedCompanyName}
        companyNameArr={Object.keys(companyInfoGroup) as Array<CompanyName>}
        changeSelectedCompany={changeSelectedCompany} />
      <PriceTable priceArrData={selectedCompanyPriceRule} addNewItem={addNewItem} />
      <PriceSummary itemArr={itemArr} priceArr={selectedCompanyPriceRule} companyName={selectedCompanyName}></PriceSummary>
    </div>
  );
}

export default App;

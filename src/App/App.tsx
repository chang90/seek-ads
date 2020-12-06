import React, { useState } from 'react';
import PriceTable from '../component/PriceTable';
import styled from 'styled-components';
import { ProductType } from '../lib/enum/productType';
import { CompanyName } from '../lib/enum/companyName';
import { CompanyInfo } from '../lib/interface/companyInfo';
import { ProductItem } from '../lib/interface/productItem';
import PriceSummary from '../component/PriceSummary';
import CompanySelector from '../component/CompanySelector';
import { pricingRules } from '../pricingRules';

const Title = styled.h1`
  padding: 1em;
  text-align:center;
`;

const App = () => {

  const [selectedCompany, setSelectedCompany] =
    useState<CompanyInfo | undefined>(Object.values(pricingRules)[0] as CompanyInfo);
  const [items, setItems] = useState<Array<ProductItem>>([]);

  const changeCompany = (companyName: CompanyName): void => {
    if (pricingRules[companyName]) {
      setSelectedCompany(pricingRules[companyName]);

      // Clean up old items
      setItems([]);
    }
  }

  const addNewItem = (itemType: ProductType) => {
    const newItem: ProductItem = {
      type: itemType
    }
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <Title>Seek Ads</Title>
      <CompanySelector
        selectedCompanyName={selectedCompany?.companyName}
        companyNames={Object.keys(pricingRules) as Array<CompanyName>}
        changeCompany={changeCompany} />
      <PriceTable priceRules={selectedCompany?.priceRules} addNewItem={addNewItem} />
      <PriceSummary items={items} company={selectedCompany} />
    </div>
  );
}

export default App;

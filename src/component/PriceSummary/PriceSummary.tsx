import React, { useCallback } from 'react';
import styled from 'styled-components';
import { totalPriceCalculator } from '../../lib/util/totalPriceCalculator';
import { ProductItem } from '../../lib/interface/productItem';
import { CompanyInfo } from '../../lib/interface/companyInfo';

interface PriceSummaryProps {
  items?: Array<ProductItem>;
  company?: CompanyInfo;
}

const PriceSummeryContainer = styled.div`
  font-size: 1em;
  padding: 0.25em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PriceSummary = (props: PriceSummaryProps) => {

  const getTotalPrice = useCallback(() => {
    if (props.items && props.company?.priceRules) {
      return totalPriceCalculator(props.items, props.company.priceRules)
    } else {
      return 0;
    }
  }, [props.items, props.company])

  return (
    <PriceSummeryContainer>
      <h3 data-testid={'summary-title'}>Summary</h3>
      <div data-testid={'name'}>Customer: {props.company?.companyName}</div>
      <div data-testid={'item-list'}>Items:
      {
        props?.items && props.items.map((item: ProductItem, index: number) => (
          <span key={index}>{item.type} </span>
        ))
      }
      </div>
      <div data-testid={'total'}>Total: {getTotalPrice()}</div>
    </PriceSummeryContainer>
  );
}

export default PriceSummary;


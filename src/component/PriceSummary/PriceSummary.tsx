import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CompanyName } from '../../enum/companyName';
import { totalPriceCalculator } from '../../function/totalPriceCalculator';
import { PriceRule } from '../../interface/priceRule';
import { ProductItem } from '../../interface/productItem';

interface PriceSummaryProps {
  itemArr?: Array<ProductItem>;
  priceArr?: Array<PriceRule>;
  companyName?: CompanyName;
}

const PriceSummeryContainer = styled.div`
font-size: 1em;
padding: 0.25em 1em;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
`;

const PriceSummary = (props: PriceSummaryProps) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (props?.itemArr && props?.priceArr) {
      const result = totalPriceCalculator(props.itemArr, props.priceArr)
      setTotalPrice(result);
    } else {
      setTotalPrice(0);
    }
  }, [props])

  return (
    <PriceSummeryContainer>
      <h3 data-testid={'summary-title'}>Summery</h3>
      <div data-testid={'name'}>Customer: {props?.companyName}</div>
  <div data-testid={'item-list'}>Items: 
  {
   props?.itemArr && props.itemArr.map((item:ProductItem, index:number) => (
    <span key={index}>{item.type}. </span>
   ))}
  </div>
      <div data-testid={'total'}>Total: {totalPrice}</div>
    </PriceSummeryContainer>
  );
}

export default PriceSummary;


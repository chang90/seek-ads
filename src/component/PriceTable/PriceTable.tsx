import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PriceRule } from '../../lib/interface/priceRule';
interface PriceProps {
  priceArrData: Array<PriceRule> | null;
  addNewItem: Function;
}

const Table = styled.table`
background: #fbfbfb;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #ccc;
border-radius: 3px;
`;

const TableContainer = styled.div`
width: 100%;
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
`;

const TableCell = styled.td`
padding: 2rem;
`;

const RetailPrice = styled.div<{isActive: boolean}>`
  text-decoration: ${ props => props?.isActive? 'none': 'line-through' };
`;

const DiscountPrice = styled.div`
  color: #5ac0e2;
`;

const FreeAds = styled.div`
  color: #5ac0e2;
`;

const PriceTable = (props: PriceProps) => {

  const [priceRuleArr, SetPriceRuleArr] = useState(props.priceArrData);

  useEffect(() => {
    SetPriceRuleArr(props.priceArrData);
}, [props.priceArrData])

  return (
    <TableContainer>
      <h3  data-testid={'price-table-header'}>Price Table</h3>
      <Table id='students'>
        <tbody data-testid={'price-table-body'}>
          {priceRuleArr && priceRuleArr.map((priceObj:PriceRule, index:number) => (
            <tr key={index}>
              <TableCell data-testid={`price-name-${index}`}>{priceObj?.name}</TableCell>
              <TableCell data-testid={`price-description-${index}`}>
                <div>{priceObj?.description}</div>
                {
                  priceObj?.freeAds?.chargedAdsPerPackage && priceObj?.freeAds?.totalAdsPerPackage &&
                  <FreeAds>* {priceObj.freeAds.totalAdsPerPackage} for {priceObj.freeAds.chargedAdsPerPackage} deal</FreeAds>
                }
                </TableCell>
              <TableCell data-testid={`price-retail-${index}`}>
                <RetailPrice isActive={!priceObj?.discountPrice}>{priceObj.retailPrice ? `$ ${priceObj.retailPrice}`: '-'}</RetailPrice>
                {
                  priceObj?.discountPrice &&
                  <DiscountPrice data-testid={`price-discount-${index}`}>$ {priceObj.discountPrice}</DiscountPrice>
                }
              </TableCell>
              <TableCell data-testid={`price-add-item-${index}`}>
                <button onClick={()=>{props.addNewItem(priceObj.name)}}>Add</button>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default PriceTable;


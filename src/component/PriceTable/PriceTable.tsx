import React from 'react';
import styled from 'styled-components';
import { PriceRule } from '../../lib/interface/priceRule';

interface PriceProps {
  priceRules: Array<PriceRule> | undefined;
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

const RetailPrice = styled.div<{ isActive: boolean }>`
  text-decoration: ${props => props?.isActive ? 'none' : 'line-through'};
`;

const DiscountPrice = styled.div`
  color: #5ac0e2;
`;

const FreeAds = styled.div`
  color: #5ac0e2;
`;

const PriceTable = (props: PriceProps) => {
  return (
    <TableContainer>
      <h3 data-testid={'price-table-header'}>Price Table</h3>
      <Table>
        <tbody data-testid={'price-table-body'}>
          {props.priceRules && props.priceRules.map((priceRule: PriceRule, index: number) => (
            <tr key={index}>
              <TableCell data-testid={`price-name-${index}`}>{priceRule?.name}</TableCell>
              <TableCell data-testid={`price-description-${index}`}>
                <div>{priceRule?.description}</div>
                {
                  priceRule?.freeAds?.chargedAdsPerPackage && priceRule?.freeAds?.totalAdsPerPackage &&
                  <FreeAds>* {priceRule.freeAds.totalAdsPerPackage} for {priceRule.freeAds.chargedAdsPerPackage} deal</FreeAds>
                }
                {
                  priceRule?.discountRule?.discountPrice && priceRule?.discountRule?.bulkDiscountItemNumber &&
                  <DiscountPrice data-testid={`price-discount-${index}`}>* Gets a discount on Premium Ads where {priceRule.discountRule.bulkDiscountItemNumber} or more are purchased.</DiscountPrice>
                }
              </TableCell>
              <TableCell data-testid={`price-retail-${index}`}>
                <RetailPrice isActive={!priceRule?.discountRule?.discountPrice}>{priceRule.retailPrice ? `$ ${priceRule.retailPrice}` : '-'}</RetailPrice>
                {
                  priceRule?.discountRule?.discountPrice &&
                  <DiscountPrice data-testid={`price-discount-${index}`}>$ {priceRule.discountRule.discountPrice}</DiscountPrice>
                }
              </TableCell>
              <TableCell data-testid={`price-add-item-${index}`}>
                <button onClick={() => props.addNewItem(priceRule.name)}>Add</button>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default PriceTable;


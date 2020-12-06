import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { CompanyName } from '../../lib/enum/companyName';

interface CompanyProps {
  selectedCompanyName?: CompanyName;
  companyNames: Array<CompanyName>;
  changeCompany: Function;
}

const Greeting = styled.div`
  font-size: 1em;
  padding: 0.25em 1em;
  display: flex;
  align-items:center;
  justify-content: center;
`;

const CompanySelector = (props: CompanyProps) => {

  const changeCompany = (event: ChangeEvent<HTMLSelectElement>) => {
    props.changeCompany(event.target.value as CompanyName);
  }

  return (
    <Greeting>
      <p data-testid={'greating-header'}>Hello, please select your company</p>
      <select name="company" onChange={changeCompany} value={props.selectedCompanyName}>
        {props.companyNames && props.companyNames.map((company: CompanyName, index: number) => (
          <option value={company} key={index}>{company}</option>
        ))}
      </select>
    </Greeting>
  );
}

export default CompanySelector;


import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { CompanyName } from '../../lib/enum/companyName';

interface CompanyProps {
  selectCompanyName?: CompanyName;
  companyNameArr: Array<CompanyName>;
  changeSelectedCompany: Function;
}

const Greeting = styled.div`
font-size: 1em;
padding: 0.25em 1em;
display: flex;
align-items:center;
justify-content: center;
`;

const CompanySelector = (props: CompanyProps) => {
  const [companyNameArr] = useState(props.companyNameArr);

  const change = (event: ChangeEvent<HTMLSelectElement>) => {
    props.changeSelectedCompany(event.target.value as CompanyName);
  }

  return (
    <Greeting>
      <p data-testid={'greating-header'}>Hello, please select your company</p>
      <select name="company" onChange={change} value={props.selectCompanyName}>
        {companyNameArr.map((company: CompanyName, index: number) => (
          <option value={company} key={index}>{company}</option>
        ))}
      </select>
    </Greeting>
  );
}

export default CompanySelector;


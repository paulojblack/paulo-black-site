import React from 'react';
import styled from 'styled-components';

import { Row, Column } from 'hedron';
import Header from 'components/Header';
import H3 from 'components/H3';

const MenuRow = styled(Row)`
  padding-top: 50px;
`;

const TextColumn = styled(Column)`
  padding: 0px;
`;


export function MenuSection() {
    return (
      <MenuRow>
        <TextColumn sm={8} smShift={2} lg={6} lgShift={3}>
          <H3> Take a look around!</H3>
        </TextColumn>

        <Header />
      </MenuRow>
    );
}

export default MenuSection;

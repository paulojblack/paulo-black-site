import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import H3 from 'components/H3';
import Section from './Section';

const MenuSectionWrapper = styled(Section)`
  display: block;
  padding-top: 100px;
  padding-left: 300px;
  padding-right: 300px;
`;

export function MenuSection() {
    return (
      <MenuSectionWrapper>
        <section>
          <H3>
            Take a look around!
          </H3>
          <Header />
        </section>
      </MenuSectionWrapper>
    );
}

export default MenuSection;

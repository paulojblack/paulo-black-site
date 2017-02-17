import React from 'react';
import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';

import Header from 'components/Header';
// import messages from './messages';
import Section from './Section';

const MenuSectionWrapper = styled(Section)`
  display: block;
  padding-top: 150px;
  padding-left: 300px;
  padding-right: 300px;
`;


export function MenuSection() {
    return (
      <MenuSectionWrapper>
        <section>
          <p>
            Take a look around!
          </p>
          <Header />
        </section>
      </MenuSectionWrapper>
    );
}

export default MenuSection;

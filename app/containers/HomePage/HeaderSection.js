import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Header from 'components/Header';
import H1 from 'components/H1';

import { TextWrapper, ExampleWrapper } from './Wrappers';
import messages from './messages';
import Section from './Section';

const HeaderWrapper = styled(Section)`
  justify-content: space-between;
  background: rgb(252,234,187); /* Old browsers */
  background: -moz-linear-gradient(45deg, rgba(252,234,187,1) 0%, rgba(207,224,56,1) 37%, rgba(242,173,0,1) 88%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, rgba(252,234,187,1) 0%,rgba(207,224,56,1) 37%,rgba(242,173,0,1) 88%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, rgba(252,234,187,1) 0%,rgba(207,224,56,1) 37%,rgba(242,173,0,1) 88%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f2ad00',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;

export function HeaderSection() {
    return (
      <HeaderWrapper>
        <TextWrapper>
          <H1>
            <FormattedMessage {...messages.headerHeader} />
          </H1>
          <p>
            <FormattedMessage {...messages.headerBody} />
          </p>
        </TextWrapper>

        <ExampleWrapper>
          <Header />
        </ExampleWrapper>
      </HeaderWrapper>
    );
}

export default HeaderSection;

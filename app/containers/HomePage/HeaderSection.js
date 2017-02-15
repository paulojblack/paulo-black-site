import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Header from 'components/Header';
import H1 from 'components/H1';
import messages from './messages';


const HeaderWrapper = styled.section`
  margin: 3em auto;
  background: rgb(252,234,187); /* Old browsers */
  background: -moz-linear-gradient(45deg, rgba(252,234,187,1) 0%, rgba(252,205,77,1) 50%, rgba(248,181,0,1) 51%, rgba(251,223,147,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, rgba(252,234,187,1) 0%,rgba(252,205,77,1) 50%,rgba(248,181,0,1) 51%,rgba(251,223,147,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, rgba(252,234,187,1) 0%,rgba(252,205,77,1) 50%,rgba(248,181,0,1) 51%,rgba(251,223,147,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#fbdf93',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  &:first-child {
    margin-top: 0;
  }
  min-height: 500px
  display: flex;
  justify-content: space-between;
`;

const TextWrapper = styled.section`
  width: 65%;
  padding-top: 10em;
  padding-right: 5em;
  padding-left: 5em;
  text-align: left;
`;

const ExampleWrapper = styled.section`
  width: 100%
  padding-top: 10em;
  padding-right: 2em;
  padding-left: 2em;
  text-align: left;
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

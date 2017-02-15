import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import Section from './Section';

const IntroSectionWrapper = styled(Section)`
  text-align: center;
  padding-top: 300px;
  background: rgb(22,44,142); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(22,44,142,1) 21%, rgba(22,44,142,1) 21%, rgba(59,103,158,1) 62%, rgba(43,136,217,1) 89%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(22,44,142,1) 21%,rgba(22,44,142,1) 21%,rgba(59,103,158,1) 62%,rgba(43,136,217,1) 89%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(22,44,142,1) 21%,rgba(22,44,142,1) 21%,rgba(59,103,158,1) 62%,rgba(43,136,217,1) 89%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#162c8e', endColorstr='#2b88d9',GradientType=0 ); /* IE6-9 */
  copy
`;

export function IntroSection() {
    return (
      <IntroSectionWrapper>
        <section>
          <H1>
            <FormattedMessage {...messages.introHeader} />
          </H1>
          <p>
            <FormattedMessage {...messages.introBody} />
          </p>
        </section>
      </IntroSectionWrapper>
    );
}

export default IntroSection;

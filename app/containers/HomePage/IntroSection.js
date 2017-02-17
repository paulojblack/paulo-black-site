import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import SocialIcons from 'components/SocialIcons';
import messages from './messages';
import Section from './Section';

const IntroSectionWrapper = styled(Section)`
  display: block;
  padding-top: 150px;
  padding-left: 300px;
  padding-right: 300px;
`;

const H1 = styled.h1`
  font-size: 3em;
  text-transform: uppercase;
  margin-bottom: 0.25em;
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
        <section>
          <SocialIcons />
        </section>
      </IntroSectionWrapper>
    );
}

export default IntroSection;

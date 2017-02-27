import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Row, Column } from 'hedron';
import SocialIcons from 'components/SocialIcons';
import messages from './messages';

const H1 = styled.h1`
  font-size: 3em;
  text-transform: uppercase;
  margin-bottom: 0.25em;
`;

// const Circle = styled.div`
//   width: 100px;
//   height: 100px;
//   background: rgba(76, 175, 80, 0.3)
//   -moz-border-radius: 50px;
//   -webkit-border-radius: 50px;
//   border-radius: 50px;
// `;

const TextRow = styled(Row)`
  text-align: center;
  padding-top: 100px;
`;

export function IntroSection() {
    return (
      <TextRow >
        <Column >
          <H1>
            <FormattedMessage {...messages.introHeader} />
          </H1>
          <p>
            <FormattedMessage {...messages.introFirst} />
          </p>
          <p>
            <FormattedMessage {...messages.introSecond} />
          </p>
          <p>
            <FormattedMessage {...messages.introThird} />
          </p>
        </Column>

        <SocialIcons />
      </TextRow>
    );
}

export default IntroSection;

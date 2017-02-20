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

const TextRow = styled(Row)`
  text-align: center;
  padding-top: 100px;
`;

export function IntroSection() {
    return (
      <TextRow >
        <Row>
          <Column >
            <H1>
              <FormattedMessage {...messages.introHeader} />
            </H1>
            <p>
              <FormattedMessage {...messages.introBody} />
            </p>
          </Column>
        </Row>

        <SocialIcons />
      </TextRow>
    );
}

export default IntroSection;

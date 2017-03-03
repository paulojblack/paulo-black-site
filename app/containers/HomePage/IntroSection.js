import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import SocialIcons from 'components/SocialIconsFixed';
import messages from './messages';

const H1 = styled.h1`
  font-size: 3em;
  text-transform: uppercase;
  margin-bottom: 0.25em;
`;

const Circle = styled.div`
  animation: fadeIn 1s, circleToDiv 1s 0.8s;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  height: 500px;
  bottom: 100%
  width: 100%;
  background: rgba(85, 140, 137, 1);
`;

const SubCircle = styled.div`
  position: relative;
  top: 25%;
`;

const MyWrapper = styled.div`
  padding-top: 100px;
`;

export function IntroSection() {
    return (
      <MyWrapper>
        <Circle>
          <SubCircle>
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
          </SubCircle>
          <SocialIcons />
        </Circle>

      </MyWrapper>
    );
}

export default IntroSection;

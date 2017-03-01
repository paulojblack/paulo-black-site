import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Row, Column } from 'hedron';
// import SocialIcons from 'components/SocialIcons';
import messages from './messages';

const H1 = styled.h1`
  font-size: 3em;
  text-transform: uppercase;
  margin-bottom: 0.25em;
`;

const Circle = styled.div`
  animation: fadeIn 5s;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  border-radius: 250px;
  height: 500px;
  width: 500px;
  background: rgba(74, 150, 173, 1.0)
`;

const SubCircle = styled.div`
  position: relative;
  top: 25%;
`;

const MyWrapper = styled.div`
  padding-top: 50px;
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
        </Circle>

      </MyWrapper>
    );
}

export default IntroSection;

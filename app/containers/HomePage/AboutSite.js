import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import FaArrowCircleDown from 'react-icons/lib/fa/arrow-circle-o-down';
import { Row, Column } from 'hedron';

import H3 from 'components/H3';
import messages from './about_messages';

const AboutRow = styled(Row)`
  padding-top: 50px;
`;

const UnpaddedCol = styled(Column)`
  padding-top: 0px;
  padding-bottom: 0px;
`;

export function AboutSite() {
    return (
      <AboutRow >

        <UnpaddedCol >
          <H3>
            <FormattedMessage {...messages.aboutHeader} />
          </H3>
          <FaArrowCircleDown size={100} />
        </UnpaddedCol>


        <Column >
          <p>
            <FormattedMessage {...messages.aboutBody} />
          </p>
        </Column>
      </AboutRow>
    );
}

export default AboutSite;

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import SocialIcons from 'components/SocialIcons';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

const Section = styled.section`
  max-width: 300px
`;

const LinkSection = styled.section`
  padding-right: 11em;
`;

function Footer() {
    return (
      <Wrapper>
        <Section>
          <FormattedMessage {...messages.descriptionMessage} />
        </Section>
        <LinkSection>
          <FormattedMessage
            {...messages.authorMessage}
            values={{
                author: <A href="https://github.com/paulojblack">Paulo Black</A>,
            }}
          />
          <SocialIcons />
        </LinkSection>
        <Section>
          <LocaleToggle />
        </Section>
      </Wrapper>
    );
}

export default Footer;

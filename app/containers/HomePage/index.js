/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import H1 from 'components/H1';
import CenteredSection from './CenteredSection';
import HeaderSection from './HeaderSection';
import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
          <article>
            <Helmet
              title="Home Page"
              meta={[
                { name: 'description', content: 'A React.js Boilerplate application homepage' },
              ]}
            />
            <div>
              <CenteredSection>
                <H1>
                  <FormattedMessage {...messages.introHeader} />
                </H1>
                <p>
                  <FormattedMessage {...messages.introBody} />
                </p>
              </CenteredSection>
              <HeaderSection />
            </div>
          </article>
    );
  }
}

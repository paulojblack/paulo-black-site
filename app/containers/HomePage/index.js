/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';

import IntroSection from './IntroSection';
import MenuSection from './MenuSection';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
          <article>
            <Helmet
              title="PauloPlace"
              meta={[
                { name: 'description', content: 'Paulo Home' },
              ]}
            />
            <IntroSection />
            <MenuSection />

          </article>
        );
    }
}

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';

import IntroSection from './IntroSection';
import HeaderSection from './HeaderSection';
import ListSection from './ListSection';

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
            <IntroSection />
            <HeaderSection />
            <ListSection />

          </article>
        );
    }
}

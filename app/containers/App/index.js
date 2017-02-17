/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import withProgressBar from 'components/ProgressBar';

// old   max-width: calc(1100px + 16px * 2);
// padding: 0 16px;
const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export function App(props) {
    const pathname = props.location.pathname;
  // let showHeader = true;
  //
  // if (pathname === '/') {
  //   showHeader = false;
  // }

    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - PauloPlate"
          defaultTitle="PauloPlate React"
          meta={[
            { name: 'description', content: 'Paulo\'s boilerplate' },
          ]}
        />
        {/* Hacky, fixit */}
        {React.Children.toArray(props.children)}
      </AppWrapper>
    );
}

App.propTypes = {
    children: React.PropTypes.node,
    location: React.PropTypes.object,
};

export default withProgressBar(App);

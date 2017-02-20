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

import { Page } from 'hedron';
import withProgressBar from 'components/ProgressBar';


// const AppWrapper = styled.div`
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   flex-direction: column;
// `;

export function App(props) {
    return (
      <Page>
        <Helmet
          titleTemplate="%s - PauloPlate"
          defaultTitle="PauloPlate React"
          meta={[
            { name: 'description', content: 'Paulo\'s boilerplate' },
          ]}
        />
        {React.Children.toArray(props.children)}
      </Page>
    );
}

App.propTypes = {
    children: React.PropTypes.node,
};

export default withProgressBar(App);

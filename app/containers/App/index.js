/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

import { Page } from 'hedron';
import withProgressBar from 'components/ProgressBar';


export function App(props) {
    return (
      <div>
        <Helmet
          titleTemplate="%s - Homepage"
          defaultTitle="Paulo Black"
          meta={[
            { name: 'description', content: 'PauloPlace' },
          ]}
        />
        {React.Children.toArray(props.children)}
      </div>
    );
}

App.propTypes = {
    children: React.PropTypes.node,
};

export default withProgressBar(App);

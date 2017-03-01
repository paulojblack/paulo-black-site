import React from 'react';
import Helmet from 'react-helmet';

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

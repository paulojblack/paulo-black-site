import React from 'react';
import Helmet from 'react-helmet';

import IntroSection from './IntroSection';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
          <div>
            <Helmet
              title="Paulo Black"
              meta={[
                { name: 'description', content: 'Paulo Home' },
              ]}
            />
            <IntroSection />
          </div>
        );
    }
}

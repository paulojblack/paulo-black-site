/*
 *
 * Papers
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import ListStatic from './ListStatic';
import ListScroll from './ListScroll';
import Wrapper from './Wrapper';

export class Papers extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    // Since state and props are static,
    // there's no need to re-render this component
    shouldComponentUpdate() {
      return false;
    }

    render() {
      return (
        <Wrapper>
          <Helmet
            title="Papers"
            meta={[
              { name: 'description', content: 'Papers Showcase' },
            ]}
          />
          <ListStatic />
          <ListScroll />
        </Wrapper>
      );
    }
}

Papers.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Papers);

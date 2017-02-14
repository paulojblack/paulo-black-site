/*
 *
 * Inputs
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectInputs from './selectors';
import messages from './messages';

export class Inputs extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Inputs"
          meta={[
            { name: 'description', content: 'Description of Inputs' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Inputs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Inputs: makeSelectInputs(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);

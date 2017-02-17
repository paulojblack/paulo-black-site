/**
*
* List
*
*/

import React from 'react';

import ListScroll from './ListScroll';
import ListStatic from './ListStatic';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function List() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

List.propTypes = {

};

module.exports = {
    ListScroll,
    ListStatic,
};

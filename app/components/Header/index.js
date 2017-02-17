/**
*
* Header
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
          <div>
            <NavBar>
              <HeaderLink href="https://www.pauloblack.com">
                <FormattedMessage {...messages.home} />
              </HeaderLink>
              <HeaderLink href="https://boils.pauloblack.com">
                <FormattedMessage {...messages.boilerplate} />
              </HeaderLink>
              <HeaderLink to="/inputs">
                <FormattedMessage {...messages.template} />
              </HeaderLink>
              <HeaderLink to="/default">
                <FormattedMessage {...messages.default} />
              </HeaderLink>
              <HeaderLink to="/other">
                <FormattedMessage {...messages.other} />
              </HeaderLink>
            </NavBar>
          </div>
        );
    }
}

export default Header;

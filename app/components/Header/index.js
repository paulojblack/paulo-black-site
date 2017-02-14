/**
*
* Header
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './mockbanner.png';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <a href="https://github.com/paulojblack">
          <Img src={Banner} alt="logo banner" />
        </a>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/template">
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

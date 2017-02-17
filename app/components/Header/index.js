/**
*
* Header
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './mockbanner.png';
import messages from './messages';

// rm export
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // Used for dynamic display
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <A href="https://github.com/paulojblack">
          <Img src={Banner} alt="logo banner" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/papers">
            <FormattedMessage {...messages.features} />
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

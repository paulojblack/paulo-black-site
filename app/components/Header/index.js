import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { Column } from 'hedron';
import { Tooltip } from 'reactstrap';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

const HeaderColumn = styled(Column)`
  padding-top: 0px;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false,
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen,
        });
    }
    render() {
        return (
          <HeaderColumn>
            <NavBar>
              <HeaderLink id="tooltip" href="https://www.pauloblack.com">
                <FormattedMessage {...messages.home} />
                <Tooltip placement="left" isOpen={this.state.tooltipOpen} target="tooltip" toggle={this.toggle}>
                Blep
                </Tooltip>
              </HeaderLink>
              <HeaderLink href="https://boils.pauloblack.com">
                <FormattedMessage {...messages.boilerplate} />
              </HeaderLink>
              <HeaderLink href="https://tutorials.pauloblack.com">
                <FormattedMessage {...messages.tutorials} />
              </HeaderLink>
              <HeaderLink href="https://blog.pauloblack.com">
                <FormattedMessage {...messages.blog} />
              </HeaderLink>
              <HeaderLink href="https://aboutme.pauloblack.com">
                <FormattedMessage {...messages.aboutme} />
              </HeaderLink>
            </NavBar>
          </HeaderColumn>
        );
    }
}

export default Header;

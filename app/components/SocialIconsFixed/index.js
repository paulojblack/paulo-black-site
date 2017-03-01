import React from 'react';

import { FaGithub, FaLinkedinSquare } from 'react-icons/lib/fa';
import MdMail from 'react-icons/lib/md/mail-outline';

import styled from 'styled-components';

const Icon = styled.a`
  margin: 10px 10px 10px 10px;
`;

const IconDiv = styled.div`
  padding-top: 40px;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #DFE2DB;
`;

class SocialIcons extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
          <IconDiv >

            <Icon href="https://github.com/paulojblack" >
              <FaGithub color="#333" size={45} />
            </Icon>
            <Icon href="https://www.linkedin.com/in/paulo-black-0a131794/" >
              <FaLinkedinSquare color="#0077B5" size={45} />
            </Icon>
            <Icon href="mailto:pjblack@email.wm.edu" >
              <MdMail color="#C63D2D" size={45} />
            </Icon>

          </IconDiv >
        );
    }
}

SocialIcons.propTypes = {

};

export default SocialIcons;

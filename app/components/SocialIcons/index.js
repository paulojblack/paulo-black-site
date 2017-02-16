import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/lib/fa';
import MdMail from 'react-icons/lib/md/mail-outline';

import Wrapper from './Wrapper';
// import styled from 'styled-components';

class SocialIcons extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
          <Wrapper>

            <a href="https://github.com/paulojblack" >
              <FaGithub color="#333" size={30} />
            </a>
            <a href="https://www.linkedin.com/in/paulo-black-0a131794/" >
              <FaLinkedin color="#4875B4" size={30} />
            </a>
            <a href="mailto:pjblack@email.wm.edu" >
              <MdMail color="#C63D2D" size={30} />
            </a>

          </Wrapper>
        );
    }
}

SocialIcons.propTypes = {

};

export default SocialIcons;

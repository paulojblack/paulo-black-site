import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Page, Row, Column } from 'hedron';

import H1 from 'components/H1';
import PauloRockPic from 'assets/paulorockpic.jpg';
import DeepThought from 'assets/deepthought.jpg';

import BackButton from './BackButton';
import Img from './Img';
import messages from './messages';

const SpecialColumn = styled(Column)`
  padding: 0px;
`;

export class AboutMe extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
          <Page>
            <Helmet
              title="About Me"
              meta={[
                { name: 'description', content: 'About' },
              ]}
            />
            <Row>
              <SpecialColumn>
                <H1>
                  <FormattedMessage {...messages.header} />
                </H1>
              </SpecialColumn>
              <SpecialColumn>
                <BackButton id="No" to="/">
                  {'No I\'m not, get me out of here'}
                </BackButton>
              </SpecialColumn>
              <Column>
                <p>
                  <FormattedMessage {...messages.firstbody} />
                </p>
              </Column>
              <Row divisions={2}>
                <Column lg={1}>
                  <p>
                    <FormattedMessage {...messages.secondbody} />
                  </p>
                </Column>
                <Column lg={1}>
                  {'Sneezing in nature'}
                  <Img src={PauloRockPic} alt="paulorockpic" />
                </Column>
              </Row>
              <Column>
                <p>
                  <FormattedMessage {...messages.thirdbody} />
                </p>
              </Column>
              <Column>
                <h2>
                  <FormattedMessage {...messages.fourthheader} />
                </h2>
              </Column>
              <Column>
                <p>
                  <FormattedMessage {...messages.fourthbody} />
                </p>
              </Column>
              <Row divisions={2}>
                <Column lg={1}>
                  {'Me and Julia reflecting on life'}
                  <Img src={DeepThought} alt="deepthough" />
                </Column>
                <Column lg={1}>
                  <p>
                    <FormattedMessage {...messages.fifthbody} />
                  </p>
                </Column>
              </Row>
              <Column>
                <p>
                  <FormattedMessage {...messages.sixthbody} />
                </p>
              </Column>
            </Row>
          </Page>
        );
    }
}

AboutMe.propTypes = {
    dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(null, mapDispatchToProps)(AboutMe);

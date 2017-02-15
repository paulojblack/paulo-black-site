import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import messages from './messages';

const ListWrapper = styled.ul`
  font-family: Georgia, Times, 'Times New Roman', serif;

`;

export function ListStatic() {
    return (
      <section>

        <H1>
          <FormattedMessage {...messages.staticHeader} />
        </H1>

        <ListWrapper>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.pointHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.staticPointMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.pointHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.staticPointMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.pointHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.staticPointMessage} />
            </p>
          </ListItem>

        </ListWrapper>
      </section>
    );
}


export default ListStatic;

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import messages from './messages';

const ListWrapper = styled.ul`
  font-family: Georgia, Times, 'Times New Roman', serif;
  padding-left: 1em;
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
              <FormattedMessage {...messages.pointMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.enumerateHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.enumerateMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.furthermoreHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.furthermoreMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.matterOfFactHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.matterOfFactMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.extravaganceHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.extravaganceMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.conclusionsHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.conclusionsMessage} />
            </p>
          </ListItem>
        </ListWrapper>
      </section>
    );
}


export default ListStatic;

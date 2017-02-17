import React from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import { ListScroll, ListStatic } from 'components/List';

import { TextWrapper, ExampleWrapper } from './Wrappers';
import messages from './messages';
import Section from './Section';

const ListWrapper = styled(Section)`
  background: rgb(203,96,179); /* Old browsers */
  background: -moz-linear-gradient(-45deg, rgba(203,96,179,1) 0%, rgba(193,70,161,1) 23%, rgba(193,70,161,1) 23%, rgba(219,54,164,1) 51%, rgba(114,0,112,1) 94%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgba(203,96,179,1) 0%,rgba(193,70,161,1) 23%,rgba(193,70,161,1) 23%,rgba(219,54,164,1) 51%,rgba(114,0,112,1) 94%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, rgba(203,96,179,1) 0%,rgba(193,70,161,1) 23%,rgba(193,70,161,1) 23%,rgba(219,54,164,1) 51%,rgba(114,0,112,1) 94%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cb60b3', endColorstr='#720070',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;

const ListExampleWrapper = styled(ExampleWrapper)`
  padding-top: 2em;
  width: 50%;
`;

const CarouselSettings = {
    autoplay: true,
    autoplayInterval: 5000,
    wrapAround: true,
};

export function ListSection() {
    return (
      <ListWrapper>
        <TextWrapper>
          <H1>
            <FormattedMessage {...messages.listHeader} />
          </H1>
          <p>
            <FormattedMessage {...messages.listBody} />
          </p>
        </TextWrapper>

        <ListExampleWrapper>
          <Carousel {...CarouselSettings}>
            <ListScroll />
            <ListStatic />
          </Carousel>
        </ListExampleWrapper>
      </ListWrapper>
    );
}

export default ListSection;

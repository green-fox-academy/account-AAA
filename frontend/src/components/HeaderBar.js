import React from 'react';
import {
  Header, Left, Body, Right, Button, Icon, Title,
} from 'native-base';

import PropTypes from 'prop-types';

export default function HeaderBar({ pageTitle }) {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>{ pageTitle }</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Right>
    </Header>
  );
}

HeaderBar.defaultProps = {
  pageTitle: 'Peridot Bank',
};

HeaderBar.propTypes = {
  pageTitle: PropTypes.string,
};

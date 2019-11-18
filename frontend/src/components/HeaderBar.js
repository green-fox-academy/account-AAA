import React from 'react';
import {
  Header, Left, Body, Right, Button, Icon, Title,
} from 'native-base';

import PropTypes from 'prop-types';

export default function HeaderBar({ pageTitle, navi }) {
  const handleGoBack = (event) => {
    event.preventDefault();
    if (pageTitle === 'New Account') {
      navi.goBack();
    } else {
      navi.goBack();
    }
  };

  const renderRightHeader = () => {
    if (pageTitle === 'New Account') {
      return null;
    }
    return (
      <Button
        transparent
        onPress={() => navi.navigate('NewAccount')}
      >
        <Icon name="menu" />
      </Button>
    );
  };

  return (
    <Header>
      <Left>
        <Button
          transparent
          onPress={handleGoBack}
        >
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>{ pageTitle }</Title>
      </Body>
      <Right>
        {renderRightHeader()}
      </Right>
    </Header>
  );
}

HeaderBar.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  navi: PropTypes.objectOf(PropTypes.object).isRequired,
};

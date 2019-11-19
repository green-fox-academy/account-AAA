import React from 'react';
import {
  Header, Left, Body, Right, Button, Icon, Title,
} from 'native-base';
import PropTypes from 'prop-types';
import navigationPropTypes from '../helpers/navigationPropTypes';


export default function HeaderBar({ pageTitle, navigation }) {
  const handleGoBack = (event) => {
    event.preventDefault();
    if (pageTitle === 'New Account') {
      navigation.goBack();
    } else {
      navigation.goBack();
    }
  };

  const renderRightHeader = () => {
    if (pageTitle === 'New Account') {
      return null;
    }
    return (
      <Button
        transparent
        onPress={() => navigation.navigate('NewAccount')}
      >
        <Icon name="add" />
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
  navigation: navigationPropTypes.isRequired,
};

import React, { useState } from 'react';
import {
  Header, Left, Body, Right, Button, Icon, Title, Input,
} from 'native-base';
import PropTypes from 'prop-types';
import navigationPropTypes from '../helpers/navigationPropTypes';
import styles from '../styles/HeaderBarStyle';


const initSearchState = {
  status: false,
  content: '',
};

function HeaderBar({
  updateDisplay, pageTitle, navigation, createNewAccount,
}) {
  const [searchState, setSearchState] = useState(initSearchState);
  const toggleSearchInput = () => {
    setSearchState({
      ...searchState,
      status: !searchState.status,
    });
  };

  const updateSearchContent = (inputText) => {
    updateDisplay(inputText);
    setSearchState({
      ...searchState,
      content: inputText,
    });
  };


  const navToCreatePage = () => {
    setSearchState(initSearchState);
    createNewAccount();
    navigation.navigate('NewAccount');
  };

  const handleGoBack = (event) => {
    event.preventDefault();
    navigation.goBack();
  };

  const renderRightHeader = () => {
    if (pageTitle === 'New Account' || pageTitle === 'Receive transfer') {
      return null;
    }
    return (
      <>
        {pageTitle === 'Accounts'
          ? (
            <Button
              transparent
              onPress={toggleSearchInput}
            >
              <Icon name="search" style={styles.searchIcon} />
            </Button>
          )
          : <></>}
        <Button
          transparent
          onPress={navToCreatePage}
        >
          <Icon name="add" style={styles.createIcon} />
        </Button>
      </>
    );
  };

  return (
    <Header style={styles.headerBar}>
      <Left style={styles.headerLeft}>
        <Button
          transparent
          onPress={handleGoBack}
        >
          <Icon name="arrow-back" style={styles.backIcon} />
        </Button>
      </Left>
      <Body style={styles.headerBody}>
        {searchState.status && pageTitle === 'Accounts'
          ? (
            <Input
              placeholder="Search"
              style={styles.searchField}
              value={searchState.content}
              onChangeText={updateSearchContent}
            />
          )
          : <Title>{ pageTitle }</Title>}
      </Body>
      <Right style={styles.headerRight}>
        {renderRightHeader()}
      </Right>
    </Header>
  );
}


HeaderBar.propTypes = {
  updateDisplay: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
  navigation: navigationPropTypes.isRequired,
  createNewAccount: PropTypes.func.isRequired,
};

export default HeaderBar;

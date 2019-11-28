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

// test accounts data, repalce it with stored value when store is ready
const accounts = [
  {
    id: 1,
    depositName: 'Main account',
    userID: 1,
    depositAmount: 3400,
    interestRate: '0.25%',
  },
  {
    id: 2,
    depositName: 'Savings account',
    userID: 1,
    depositAmount: 0,
    interestRate: '2.5%',
  },
  {
    id: 3,
    depositName: 'Investment account',
    userID: 1,
    depositAmount: 0,
    interestRate: '4%',
  },

];

export default function HeaderBar({ pageTitle, navigation }) {
  const [searchState, setSearchState] = useState(initSearchState);
  const toggleSearchInput = () => {
    setSearchState({
      ...searchState,
      status: !searchState.status,
    });
  };

  const updateSearchContent = (event) => {
    setSearchState({
      ...searchState,
      content: event.target.value,
    });
    if (searchState.content !== '') {
      accounts.filter((account) => account.depositName.includes(searchState.content));
    }
  };

  const navToCreatePage = () => {
    setSearchState(initSearchState);
    navigation.navigate('NewAccount');
  };

  const handleGoBack = (event) => {
    event.preventDefault();
    navigation.goBack();
  };

  const renderRightHeader = () => {
    if (pageTitle === 'New Account') {
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
        {searchState.status
          ? (
            <Input
              placeholder="Search"
              style={styles.searchField}
              value={searchState.content}
              onChange={updateSearchContent}
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
  pageTitle: PropTypes.string.isRequired,
  navigation: navigationPropTypes.isRequired,
};

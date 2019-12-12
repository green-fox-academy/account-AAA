import React from 'react';
import {
  Card, CardItem, Button, Text,
} from 'native-base';
import { withNavigation } from 'react-navigation';
import accountPropTypes from '../helpers/accountPropTypes';
import styles from '../styles/AccountCardStyle';
import navigationPropTypes from '../helpers/navigationPropTypes';

function AccountCard({ account, navigation }) {
  const {
    depositName, interestRate, depositAmount,
  } = account;

  const navToNextPage = (screenName) => {
    navigation.navigate(screenName, { account });
  };

  return (
    <Card style={styles.accountCard}>
      <CardItem style={styles.accountInfo} transparent button onPress={() => navToNextPage('AccountDetail')}>
        <Text numberOfLines={1} style={styles.depositName}>{`${depositName}`}</Text>
        <Text style={styles.depositAmount}>{`$ ${depositAmount}`}</Text>
        <Text style={styles.interestRate}>{`current interest rate: ${interestRate} %`}</Text>
      </CardItem>

      <CardItem style={styles.accountActions}>
        <Button
          transparent
          rounded
          style={styles.buttonAction}
          disabled={account.depositAmount <= 0}
          onPress={() => navToNextPage('Transfer')}
        >
          <Text style={styles.buttonText}>SEND</Text>
        </Button>

        <Button
          transparent
          rounded
          style={styles.buttonAction}
          onPress={() => navToNextPage('ReceiveTransfer')}
        >
          <Text style={styles.buttonText}>REQUEST</Text>
        </Button>

      </CardItem>
    </Card>

  );
}

AccountCard.propTypes = {
  account: accountPropTypes.isRequired,
  navigation: navigationPropTypes.isRequired,
};

export default withNavigation(AccountCard);

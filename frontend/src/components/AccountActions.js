import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  CardItem, Text, Right, Left, Button,
} from 'native-base';
import { withNavigation } from 'react-navigation';
import accountPropTypes from '../helpers/accountPropTypes';
import navigationPropTypes from '../helpers/navigationPropTypes';
import styles from '../styles/AccountActionsStyle';

// test data, should get data from store in the future
const testTransfers = [
  {
    transferId: 1,
    transferAmount: 1500,
    fromUserId: 123,
    fromAccount: 1,
    toUserId: 456,
    toAccount: 3,
    status: 'done',
    timeOfTransfer: 100,
  },
  {
    transferId: 2,
    transferAmount: 500,
    fromUserId: 123,
    fromAccount: 3,
    toUserId: 456,
    toAccount: 2,
    status: 'done',
    timeOfTransfer: 100,
  },
  {
    transferId: 3,
    transferAmount: 300,
    fromUserId: 123,
    fromAccount: 3,
    toUserId: 123,
    toAccount: 1,
    status: 'done',
    timeOfTransfer: 100,
  },
];

function AccountActions({ account, navigation }) {
  const navToDetail = (event) => {
    event.preventDefault();
    navigation.navigate('AccountDetail', { account, testTransfers });
  };

  return (
    <CardItem style={styles.accountActions}>
      <Left>
        <Button footer onPress={navToDetail} transparent>
          <Text>DETAILS</Text>
        </Button>
      </Left>
      <Right>
        <Button footer onPress={() => { alert('transfer'); }} button transparent>
          <FontAwesome
            name="dollar"
            size={20}
          />
          <Text>TRANSFER</Text>
        </Button>
      </Right>
    </CardItem>
  );
}

AccountActions.propTypes = {
  account: accountPropTypes.isRequired,
  navigation: navigationPropTypes.isRequired,
};

export default withNavigation(AccountActions);

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { CardItem, Text, Button } from 'native-base';
import { withNavigation } from 'react-navigation';
import accountPropTypes from '../helpers/accountPropTypes';
import navigationPropTypes from '../helpers/navigationPropTypes';
import styles from '../styles/AccountActionsStyle';

function AccountActions({ account, navigation }) {
  const navToDetail = (event) => {
    event.preventDefault();
    navigation.navigate('AccountDetail', { account });
  };

  const navToReceive = (event) => {
    event.preventDefault();
    navigation.navigate('ReceiveTransfer', { depositId: account.id, depositName: account.depositName });
  };

  return (
    <CardItem style={styles.accountActions}>
      <Button footer onPress={navToDetail} transparent>
        <FontAwesome name="history" size={18} />
        <Text style={styles.buttonText}>DETAILS</Text>
      </Button>

      <Button footer onPress={navToReceive} transparent>
        <FontAwesome name="get-pocket" size={18} />
        <Text style={styles.buttonText}>RECEIVE</Text>
      </Button>

      <Button footer onPress={() => { alert('transfer'); }} button transparent>
        <FontAwesome name="dollar" size={18} />
        <Text style={styles.buttonText}>TRANSFER</Text>
      </Button>
    </CardItem>
  );
}

AccountActions.propTypes = {
  account: accountPropTypes.isRequired,
  navigation: navigationPropTypes.isRequired,
};

export default withNavigation(AccountActions);

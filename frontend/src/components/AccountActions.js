import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  CardItem, Text, Right, Left, Button,
} from 'native-base';
import { withNavigation } from 'react-navigation';
import accountPropTypes from '../helpers/accountPropTypes';
import navigationPropTypes from '../helpers/navigationPropTypes';
import styles from '../styles/AccountActionsStyle';

function AccountActions({ account, navigation }) {
  const navToDetail = (event) => {
    event.preventDefault();
    navigation.navigate('AccountDetail', { account });
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

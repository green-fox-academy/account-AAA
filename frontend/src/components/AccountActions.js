import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import {
  CardItem, Text, Right, Left, Button,
} from 'native-base';
import styles from '../styles/AccountCardStyle';

function AccountActions({ accountId }) {
  return (
    <CardItem style={styles.buttonCardItem}>
      <Left>
        <Button footer onPress={() => { alert(`details ${accountId}`); }} transparent>
          <Text>DETAILS</Text>
        </Button>
      </Left>
      <Right style={styles.right}>
        <FontAwesome
          name="dollar"
          size={20}
          style={styles.dollarIcon}
        />
        <Button footer onPress={() => { alert('transfer'); }} button transparent>
          <Text>TRANSFER</Text>
        </Button>
      </Right>
    </CardItem>
  );
}

AccountActions.propTypes = {
  accountId: PropTypes.number.isRequired,
};
export default AccountActions;

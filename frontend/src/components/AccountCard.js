import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import {
  Card,
  CardItem,
  Text,
  Right,
  Left,
  Button,
} from 'native-base';
import styles from '../styles/AccountCardStyle';


function AccountCard({ account }) {
  const {
    id,
    depositName,
    interestRate,
    depositAmount,
  } = account;
  return (
    <Card style={styles.oneCard}>
      <CardItem style={styles.cardItem}>
        <Text style={styles.idText}>
          {`ID ${id}`}
        </Text>
        <Text style={styles.nameText}>{`${depositName}`}</Text>
        <Text style={styles.interestRate}>{`current interest rate: ${interestRate}`}</Text>
      </CardItem>

      <CardItem style={styles.middleCardItem}>
        <Text style={styles.depositAmount}>{`$${depositAmount}`}</Text>
      </CardItem>

      <CardItem style={styles.buttonCardItem}>
        <Left>
          <Button footer transparent>
            <Text>DETAILS</Text>
          </Button>
        </Left>
        <Right style={styles.right}>
          <FontAwesome
            name="dollar"
            size={20}
            style={styles.dollarIcon}
          />
          <Button footer button transparent>
            <Text>TRANSFER</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
}
AccountCard.propTypes = {
  account: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
};
export default AccountCard;

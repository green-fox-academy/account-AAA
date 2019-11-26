import React from 'react';
import { CardItem, Text, View } from 'native-base';
import accountPropTypes from '../helpers/accountPropTypes';
import styles from '../styles/AccountCardStyle';

export default function AccountInfo({ account }) {
  const {
    id, depositName, interestRate, depositAmount,
  } = account;
  return (
    <>
      <CardItem style={styles.cardItem}>
        <Text style={styles.idText}>
          {' '}
          {`ID ${id}`}
          {' '}
        </Text>
        <View style={styles.views}>
          <Text numberOfLines={1} style={styles.nameText}>{`${depositName}`}</Text>
        </View>
        <Text style={styles.interestRate}>{`current interest rate: ${interestRate}`}</Text>
      </CardItem>

      <CardItem style={styles.middleCardItem}>
        <Text style={styles.depositAmount}>{`$${depositAmount}`}</Text>
      </CardItem>
    </>
  );
}

AccountInfo.propTypes = {
  account: accountPropTypes.isRequired,
};

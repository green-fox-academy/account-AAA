import React from 'react';
import { CardItem, Text } from 'native-base';
import accountPropTypes from '../helpers/accountPropTypes';
import styles from '../styles/AccountInfoStyle';

export default function AccountInfo({ account }) {
  const {
    id, depositName, interestRate, depositAmount,
  } = account;
  return (
    <>
      <CardItem style={styles.accountInfo}>
        <Text style={styles.depositId}>{`ID ${id}`}</Text>
        <Text numberOfLines={1} style={styles.depositName}>{`${depositName}`}</Text>
        <Text style={styles.interestRate}>{`current interest rate: ${interestRate}`}</Text>
      </CardItem>

      <CardItem style={styles.balance}>
        <Text style={styles.depositAmount}>{`$ ${depositAmount}`}</Text>
      </CardItem>
    </>
  );
}

AccountInfo.propTypes = {
  account: accountPropTypes.isRequired,
};

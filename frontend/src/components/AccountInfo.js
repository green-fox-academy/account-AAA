import React from 'react';
import PropTypes from 'prop-types';
import { CardItem, Text, View } from 'native-base';
import styles from '../styles/AccountCardStyle';

function AccountInfo({ account }) {
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
  account: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
};
export default AccountInfo;

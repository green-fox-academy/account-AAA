import React from 'react';
import { Card } from 'native-base';
import accountPropTypes from '../helpers/accountPropTypes';
import styles from '../styles/AccountCardStyle';
import AccountInfo from './AccountInfo';
import AccountActions from './AccountActions';

export default function AccountCard({ account }) {
  return (
    <Card style={styles.accountCard}>
      <AccountInfo account={account} />
      <AccountActions account={account} />
    </Card>
  );
}
AccountCard.propTypes = {
  account: accountPropTypes.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'native-base';
import styles from '../styles/AccountCardStyle';
import AccountInfo from './AccountInfo';
import AccountActions from './AccountActions';

function AccountCard({ account }) {
  return (
    <Card style={styles.oneCard}>
      <AccountInfo account={account} />
      <AccountActions accountId={account.id} />
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

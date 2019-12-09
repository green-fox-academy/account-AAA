import React from 'react';
import { View } from 'native-base';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import TransferScreenLargeButton from '../components/TransferScreenComponents/TransferScreenLargeButton';
import styles from '../styles/TransferScreenStyle';
import navigationPropTypes from '../helpers/navigationPropTypes';

function TransferScreen({ setSender, navigation }) {
  const account = navigation.getParam('account');
  React.useEffect(() => setSender(account.id, account.userId), []);

  return (
    <View style={styles.layout}>
      <TransferScreenLargeButton screenName="InternalTransaction" buttonName="BETWEEN YOUR ACCOUNTS" />
      <TransferScreenLargeButton screenName="ExternalTransaction" buttonName="TO ANOTHER PERSON" />
    </View>
  );
}

TransferScreen.propTypes = {
  setSender: PropTypes.func.isRequired,
  navigation: navigationPropTypes.isRequired,
};


export default withNavigation(TransferScreen);

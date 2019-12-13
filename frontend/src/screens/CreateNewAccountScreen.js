import React from 'react';
import { KeyboardAvoidingView, Alert } from 'react-native';
import {
  Item, Input, Text, Button, Icon, View,
} from 'native-base';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import styles from '../styles/CreateNewDepositStyle';
import navigationPropTypes from '../helpers/navigationPropTypes';

function CreateNewAccountScreen({
  postNewAccount, token, accountsList, navigation,
}) {
  const [accountName, setAccountName] = React.useState('');

  const actionOnSure = () => {
    postNewAccount(accountName, token);
    setAccountName('');
    Alert.alert(
      `Account ${accountName} Created!`,
      '',
      [
        { text: 'Create Another', onPress: () => {} },
        { text: 'Done', onPress: () => { navigation.navigate('Accounts'); } },
      ],
    );
  };
  const handlePress = () => {
    Alert.alert(
      'Sure to create Account: ',
      `\n${accountName} ?`,
      [
        { text: 'Sure', onPress: actionOnSure },
        { text: 'Cancel', onPress: () => {} },
      ],
    );
  };


  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.inputView}>
      <View style={styles.inputAccount}>
        <Item>
          <Input
            name="accountName"
            value={accountName}
            placeholder="Deposit account name"
            onChangeText={(text) => setAccountName(text)}
          />
        </Item>
        {accountsList.includes(accountName) && accountName !== ''
          ? <Text style={{ color: 'red', fontSize: 15 }}>* Name already taken!</Text>
          : <></>}
      </View>

      <View style={styles.actionView}>
        <Button
          iconLeft
          rounded
          success
          style={styles.createButton}
          onPress={handlePress}
          disabled={accountsList.includes(accountName) || accountName === ''}
        >
          <Icon name="add" />
          <Text style={{ color: 'white' }}>Create</Text>
        </Button>
      </View>

    </KeyboardAvoidingView>
  );
}

CreateNewAccountScreen.propTypes = {
  token: PropTypes.string.isRequired,
  postNewAccount: PropTypes.func.isRequired,
  accountsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  navigation: navigationPropTypes.isRequired,
};

export default withNavigation(CreateNewAccountScreen);

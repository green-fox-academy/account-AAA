import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import {
  Button, Item, Text, Icon, Input,
} from 'native-base';
import PropTypes from 'prop-types';
import styles from '../styles/CreateNewDepositStyle';
import buttonStyle from '../styles/BottomButtonStyle';
import navigationPropTypes from '../helpers/navigationPropTypes';


export default function CreateNewAccountScreen({
  navigation, token, postNewAccount, status,
}) {
  const [accountName, onChangeText] = React.useState('');
  const handleChange = (value) => {
    onChangeText(value);
  };


  const handlePress = () => {
    postNewAccount(accountName, token);
  };

  function renderGoBackButton() {
    return (
      <View style={buttonStyle.view}>
        <Text style={buttonStyle.message}>Success!</Text>
        <Button
          style={buttonStyle.button}
          onPress={() => {
            navigation.navigate('Accounts');
          }}
          iconLeft
          rounded
          warning
        >
          <Icon name="add" />
          <Text style={{ color: 'white' }}>Go Back</Text>
        </Button>
      </View>
    );
  }

  function renderCreateButton() {
    if (status === '') {
      return (
        <View style={buttonStyle.view}>
          <Text style={buttonStyle.message} />
          <Button
            style={buttonStyle.button}
            onPress={handlePress}
            iconLeft
            rounded
            warning
          >
            <Icon name="add" />
            <Text style={{ color: 'white' }}>Create</Text>
          </Button>
        </View>

      );
    } if (status === 'error') {
      return (
        <View style={buttonStyle.view}>
          <Text style={buttonStyle.message}>Duplicated name, please change one.</Text>
          <Button
            style={buttonStyle.button}
            onPress={handlePress}
            iconLeft
            rounded
            warning
          >
            <Icon name="add" />
            <Text style={{ color: 'white' }}>Create</Text>
          </Button>
        </View>
      );
    }
    return true;
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>

      <View style={{ flex: 0.5 }} />
      <View style={{ flex: 0.5, alignItems: 'center' }}>
        <Item style={{ margin: 10, width: '85%' }}>
          <Input
            style={styles.inputAccount}
            placeholder="Enter deposit account"
            name="accountName"
            onChangeText={handleChange}
            value={accountName}
          />
        </Item>
      </View>
      <View style={{
        flex: 6, marginTop: 30, flexDirection: 'column', alignItems: 'flex-end',
      }}
      >
        {status === 'done' ? renderGoBackButton() : renderCreateButton() }
      </View>

    </KeyboardAvoidingView>
  );
}

CreateNewAccountScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
  token: PropTypes.string.isRequired,
  postNewAccount: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

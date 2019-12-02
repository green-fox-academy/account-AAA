import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import {
  Button, Item, Text, Icon, Input,
} from 'native-base';
import PropTypes from 'prop-types';
import styles from '../styles/CreateNewDepositStyle';
import buttonStyle from '../styles/BottomButtonStyle';
import navigationPropTypes from '../helpers/navigationPropTypes';


export default function CreateNewAccountScreen({ navigation, token, postNewAccount }) {
  const [accountName, onChangeText] = React.useState('');

  const handleChange = ({ nativeEvent }) => {
    onChangeText(nativeEvent.text);
  };

  const handlePress = () => {
    postNewAccount(accountName, token);
    navigation.navigate('Accounts');
  };

  return (

    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <View style={{ flex: 0.5 }}>
        <Text style={styles.text}>Name of deposit account</Text>
      </View>
      <View style={{ flex: 0.5 }}>
        <Item style={{ margin: 10 }}>
          <Input
            name="accountName"
            onChange={handleChange}
            value={accountName}
          />
        </Item>
      </View>
      <View style={{ flex: 6, flexDirection: 'column-reverse', alignItems: 'flex-end' }}>
        <Button
          style={buttonStyle.button}
          onPress={handlePress}
          iconLeft
          rounded
          warning
        >
          <Icon name="add" />
          <Text>Create</Text>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

CreateNewAccountScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
  token: PropTypes.string.isRequired,
  postNewAccount: PropTypes.func.isRequired,
};

import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import {
  Item, Input,
} from 'native-base';
import PropTypes from 'prop-types';
import styles from '../styles/CreateNewDepositStyle';
import RenderGoBackButton from '../components/renderGoBackButton';
import CreateButton from '../components/CreateButton';

export default function CreateNewAccountScreen({ postNewAccount, token, status }) {
  const [accountName, setAccountName] = React.useState('');
  const handleChange = (value) => {
    setAccountName(value);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>

      <View style={{ flex: 0.5 }} />
      <View style={{ flex: 0.5, alignItems: 'center' }}>
        <Item style={{ margin: 10, width: '85%' }}>
          <Input
            style={styles.inputAccount}
            placeholder="Deposit account name"
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
        {status === 'done' ? <RenderGoBackButton /> : <CreateButton status={status} postNewAccount={postNewAccount} token={token} accountName={accountName} />}
      </View>

    </KeyboardAvoidingView>
  );
}

CreateNewAccountScreen.propTypes = {
  token: PropTypes.string.isRequired,
  postNewAccount: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

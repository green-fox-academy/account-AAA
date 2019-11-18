import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import {
  Button, Item, Input, Text, Icon,
} from 'native-base';
import styles from '../styles/CreateNewDepositStyle';
import buttonStyle from '../styles/BottomButtonStyle';


function CreateNewDeposit() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <View style={{ flex: 0.5 }}>
        <Text style={styles.text}>Name of deposit account</Text>
      </View>
      <View style={{ flex: 0.5 }}>
        <Item style={{ margin: 10 }}>
          <Input placeholder="Account name" />
        </Item>
      </View>
      <View style={{ flex: 6, flexDirection: 'column-reverse', alignItems: 'flex-end' }}>
        <Button style={buttonStyle.button} iconLeft rounded warning>
          <Icon name="add" />
          <Text>Create</Text>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

export default CreateNewDeposit;

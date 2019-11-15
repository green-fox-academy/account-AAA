import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import {
  Button, Item, Input, Text, Icon,
} from 'native-base';


const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  inputText: {
    margin: 20,
  },
  button: {
    marginBottom: 50,
    marginRight: 30,
    width: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

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
        <Button style={styles.button} iconLeft rounded warning>
          <Icon name="add" />
          <Text>Create</Text>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

export default CreateNewDeposit;

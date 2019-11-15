import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import {
  Button, Item, Input, Text, Icon,
} from 'native-base';

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    marginTop: 50,
  },
  text: {
    fontSize: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  underlineInput: {
    flex: 2,
    height: 80,
    width: 400,
  },
  button: {
    width: 120,
    marginBottom: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

function CreateNewDeposit() {
  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <View style={styles.containerMain}>
        <View>
          <Text style={styles.text}>Name of deposit account</Text>
        </View>
        <View>
          <Item>
            <Input style={styles.underlineInput} placeholder="Account name" />
          </Item>
        </View>
        <View style={{ flex: 3, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Button style={styles.button} iconLeft rounded warning>
            <Icon name="add" />
            <Text>Create</Text>
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default CreateNewDeposit;

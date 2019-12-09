import React from 'react';
import { Button, Text, View } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import buttonStyle from '../styles/BottomButtonStyle';

export default function TransferButton() {
  return (
    <View style={{ alignItems: 'flex-end' }}>
      <Button style={buttonStyle.button} iconLeft rounded warning>
        <FontAwesome
          name="dollar"
          style={buttonStyle.iconFont}
          size={20}
        />
        <Text>Transfer</Text>
      </Button>
    </View>
  );
}

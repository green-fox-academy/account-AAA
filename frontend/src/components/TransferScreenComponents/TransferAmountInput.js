import React from 'react';
import {
  Item, View, Input, Text, Icon,
} from 'native-base';
import PropTypes from 'prop-types';

export default function TransferAmountInput({ transferAccountAmount }) {
  return (
    <View style={{ margin: 10 }}>
      <Text>How much to transfer:</Text>
      <Item style={{ margin: 10 }}>
        <Icon name="dollar" type="FontAwesome" />
        <Input
          onChangeText={(text) => transferAccountAmount(parseFloat(text))}
          keyboardType="numeric"
        />
      </Item>
    </View>
  );
}

TransferAmountInput.propTypes = {
  transferAccountAmount: PropTypes.func.isRequired,
};

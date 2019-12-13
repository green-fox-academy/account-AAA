import React from 'react';
import {
  Item, View, Input, Text, Icon,
} from 'native-base';
import PropTypes from 'prop-types';

export default function TransferAmountInput({ transferAccountAmount, depositAmount }) {
  const [transferAmountInput, setAmount] = React.useState('');
  const handleInputChange = (text) => {
    setAmount(parseFloat(text));
    transferAccountAmount(parseFloat(text));
  };

  return (
    <View style={{ margin: 10 }}>
      <Text>How much to transfer:</Text>
      <Item style={{ margin: 10 }}>
        <Icon name="dollar" type="FontAwesome" />
        <Input
          onChangeText={(text) => handleInputChange(text)}
          keyboardType="numeric"
        />
      </Item>
      {(transferAmountInput > depositAmount)
        ? <Text style={{ color: 'red', fontSize: 15 }}>{`* Maximum transfer amount: $ ${depositAmount}`}</Text>
        : <></>}
    </View>
  );
}

TransferAmountInput.propTypes = {
  transferAccountAmount: PropTypes.func.isRequired,
  depositAmount: PropTypes.number.isRequired,
};

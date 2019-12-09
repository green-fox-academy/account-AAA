import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, Icon, Picker, Card, CardItem,
} from 'native-base';

export default function DropDownAccountsList({ accounts, transferAccountSelection }) {
  const [selected, setSelected] = React.useState(undefined);

  const onValueChange = (value) => {
    setSelected(value);
    transferAccountSelection(value);
  };

  return (
    <Card>
      <CardItem>
        <Text>To: </Text>
        <Picker
          mode="dropdown"
          iosIcon={(
            <Icon
              name="arrow-dropdown-circle"
              style={{ color: '#007aff', fontSize: 25 }}
            />
          )}
          placeholder="Select Your Account"
          placeholderStyle={{ color: '#bfc6ea' }}
          placeholderIconColor="#007aff"
          style={{ width: undefined }}
          selectedValue={selected}
          onValueChange={(value) => onValueChange(value)}
        >
          {accounts.map((account) => (
            <Picker.Item
              key={account.id}
              label={account.depositName}
              value={account.depositName}
            />
          ))}
        </Picker>
      </CardItem>
    </Card>

  );
}

DropDownAccountsList.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  transferAccountSelection: PropTypes.func.isRequired,
};

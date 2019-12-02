import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import {
  Button, Item, Text, Icon, Input,
} from 'native-base';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../styles/CreateNewDepositStyle';
import buttonStyle from '../styles/BottomButtonStyle';
import postNewAccountAction from '../actions/postNewAccountAction';
import navigationPropTypes from '../helpers/navigationPropTypes';


function CreateNewDeposit({ navigation, token, postNewAccount }) {
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
CreateNewDeposit.propTypes = {
  navigation: navigationPropTypes.isRequired,
  token: PropTypes.string.isRequired,
  postNewAccount: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  token: state.userReducer.user.token,
});
const mapDispatchToProps = (dispatch) => ({
  postNewAccount: (accountName, token) => { dispatch(postNewAccountAction(accountName, token)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(CreateNewDeposit));

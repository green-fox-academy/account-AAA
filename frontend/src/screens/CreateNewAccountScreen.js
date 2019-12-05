import React from 'react';
import { View, KeyboardAvoidingView, connect } from 'react-native';
import {
  Button, Item, Text, Icon, Input,Card,
} from 'native-base';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from '../styles/CreateNewDepositStyle';
import buttonStyle from '../styles/BottomButtonStyle';
import navigationPropTypes from '../helpers/navigationPropTypes';
import postNewAccountAction from '../actions/postNewAccountAction';


function CreateNewDeposit({ navigation, token, postNewAccount, status }) {
  const [accountName, onChangeText] = React.useState('');
  const handleChange = (value) => {
    onChangeText(value);

  };


  const handlePress = () => {
    postNewAccount(accountName, token);
  };


  const renderGoBackButton = () =>{
    console.log('out',status)
    if(status === 'error'){
      console.log(status)
      alert('Duplicate account name')
    }else if(status === 'done'){
       return(
        <View style={buttonStyle.view}>   
        <Text style={buttonStyle.message}>Success!</Text>
        <Button
        style={buttonStyle.button}
        onPress={()=> { navigation.navigate('Accounts');
      }}
        iconLeft
        rounded
        warning
      > 
        <Icon name="add" />
        <Text>Go Back</Text>
      </Button>
    </View>
      )
    }
  }
const renderCreateButton = () =>{
  if (status === ''){
    return (
      <View style={buttonStyle.view}>  
      <Text style={buttonStyle.message}></Text>      
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

    )
  }else if(status==='error'){
    return (
      <View style={buttonStyle.view}>
      <Text style={buttonStyle.message}>Duplicated name, please change one.</Text>
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
    )
  }


}

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
    
      <View style={{ flex: 0.5 }}>
        
      </View>
      <View style={{ flex: 0.5, alignItems:'center' }}>
        <Item style={{ margin: 10,  width:'85%' }}>
          <Input
            style={styles.inputAccount}
            placeholder="Enter deposit account"
            name="accountName"
            onChangeText={handleChange}
            value={accountName}
          />
        </Item>
      </View>
      <View style={{ flex: 6, marginTop: 30, flexDirection: 'column', alignItems: 'flex-end' }}>        
        {status ==='done'? renderGoBackButton():renderCreateButton() }
      </View>

    </KeyboardAvoidingView>
  );
}

CreateNewAccountScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
  token: PropTypes.string.isRequired,
  postNewAccount: PropTypes.func.isRequired,
};
const mapStateToProps = ({ userReducer, accountsReducer }) => ({
  token: userReducer.user.token,
  status: accountsReducer.status,

});

const mapDispatchToProps = (dispatch) => ({
  postNewAccount: (accountName, token) => { dispatch(postNewAccountAction(accountName, token)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(CreateNewDeposit));

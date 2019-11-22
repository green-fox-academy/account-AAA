import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../screens/AccountsScreen';
import CreateNewAccountScreen from '../screens/CreateNewAccountScreen';
import HeaderBar from '../components/HeaderBar';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    Accounts: {
      screen: AccountsScreen,
      navigationOptions: ({ navigation }) => ({
        header: <HeaderBar pageTitle="Accounts" navigation={navigation} />,
      }),
    },
    NewAccount: {
      screen: CreateNewAccountScreen,
      navigationOptions: ({ navigation }) => ({
        header: <HeaderBar pageTitle="New Account" navigation={navigation} />,
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RootStack);

import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../containers/AccountsScreenContainer';
import CreateNewAccountScreen from '../containers/CreateNewAccountScreenContainer';
import AccountDetailScreen from '../containers/AccountDetailScreenContainer';
import ReceiveTransferScreen from '../containers/ReceiveTransferScreenContainer';
import HeaderBar from '../containers/HeaderBarContainer';

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
    AccountDetail: {
      screen: AccountDetailScreen,
      navigationOptions: ({ navigation }) => ({
        header: <HeaderBar pageTitle="Details" navigation={navigation} />,
      }),
    },
    ReceiveTransfer: {
      screen: ReceiveTransferScreen,
      navigationOptions: ({ navigation }) => ({
        header: <HeaderBar pageTitle="Receive transfer" navigation={navigation} />,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
  },
);

export default createAppContainer(RootStack);

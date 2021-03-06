import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../containers/AccountsScreenContainer';
import CreateNewAccountScreen from '../containers/CreateNewAccountScreenContainer';
import AccountDetailScreen from '../screens/AccountDetailScreen';
import ReceiveTransferScreen from '../containers/ReceiveTransferScreenContainer';
import HeaderBar from '../containers/HeaderBarContainer';
import TransferScreen from '../screens/TransferScreen';
import InternalTransactionScreen from '../containers/TransferScreenContainers/InternalTransactionScreenContainer';
import ExternalTransactionScreen from '../screens/ExternalTransactionScreen';
import QRCodeScannerScreen from '../containers/TransferScreenContainers/QRCodeScannerContainer';

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
    Transfer: {
      screen: TransferScreen,
      navigationOptions: ({ navigation }) => ({
        header: <HeaderBar pageTitle="Transfer Screen" navigation={navigation} />,
      }),
    },
    InternalTransaction: {
      screen: InternalTransactionScreen,
      navigationOptions: ({ navigation }) => ({
        header: <HeaderBar pageTitle="Internal Transaction" navigation={navigation} />,
      }),
    },
    ExternalTransaction: {
      screen: ExternalTransactionScreen,
      navigationOptions: ({ navigation }) => ({
        header: <HeaderBar pageTitle="External Transaction" navigation={navigation} />,
      }),
    },
    QRCodeScanner: {
      screen: QRCodeScannerScreen,
      navigationOptions: ({ navigation }) => ({
        header: <HeaderBar pageTitle="Scanner" navigation={navigation} />,
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

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../screens/AccountsScreen';
import CreateNewAccountScreen from '../screens/CreateNewAccountScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Accounts: AccountsScreen,
    NewAccount: CreateNewAccountScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);

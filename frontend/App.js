import React, { useState } from 'react';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import AccountsScreen from './src/screens/AccountsScreen';
import CreateNewAccountScreen from './src/screens/CreateNewAccountScreen';

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

const AppContainer = createAppContainer(RootStack);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  async function fontSet() {
    /* eslint-disable global-require */
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    /* eslint-enable global-require */
    setIsReady(true);
  }

  React.useEffect(() => { fontSet(); }, []);

  return !isReady ? <AppLoading /> : (
    <Container>
      <AppContainer />
    </Container>
  );
}

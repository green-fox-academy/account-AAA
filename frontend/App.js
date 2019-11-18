import React from 'react';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import CreateNewDeposit from './src/components/CreateNewDeposit';
import HeaderBar from './src/components/HeaderBar';

function App() {
  const [isReady, setIsReady] = React.useState(false);

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
      <HeaderBar pageTitle="New Account" />
      <CreateNewDeposit />
    </Container>
  );
}

export default App;

import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import AppContainer from './src/navigations/navigation';
import store from './src/store/configureStore';

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
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

import React, { useState } from 'react';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppContainer from './src/navigations/navigation';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const rootReducer = combineReducers({
    // put each reducer inside there
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));

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
      <Container>
        <AppContainer />
      </Container>
    </Provider>
  );
}

import React from 'react';
import { Container } from 'native-base';
import CreateNewDeposit from './src/components/CreateNewDeposit';
import HeaderBar from './src/components/HeaderBar';

function App() {
  return (
    <Container>
      <HeaderBar pageTitle="New Account" />
      <CreateNewDeposit />
    </Container>
  );
}

export default App;

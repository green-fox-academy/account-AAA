import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CreateNewDeposit } from './components/CreateNewDeposit';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <CreateNewDeposit />
    </View>
  );
}

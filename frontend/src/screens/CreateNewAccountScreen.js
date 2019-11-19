import React from 'react';
import navigationPropTypes from '../helpers/navigationPropTypes';
import CreateNewDeposit from '../components/CreateNewDeposit';
import HeaderBar from '../components/HeaderBar';

export default function CreateNewAccountScreen({ navigation }) {
  return (
    <>
      <HeaderBar pageTitle="New Account" navigation={navigation} />
      <CreateNewDeposit />
    </>
  );
}

CreateNewAccountScreen.propTypes = {
  navigation: navigationPropTypes.isRequired,
};

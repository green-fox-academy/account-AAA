import React from 'react';
import PropTypes from 'prop-types';
import CreateNewDeposit from '../components/CreateNewDeposit';
import HeaderBar from '../components/HeaderBar';

export default function CreateNewAccountScreen({ navigation }) {
  return (
    <>
      <HeaderBar pageTitle="New Account" navi={navigation} />
      <CreateNewDeposit />
    </>
  );
}

CreateNewAccountScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

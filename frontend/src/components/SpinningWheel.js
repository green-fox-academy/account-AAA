import React from 'react';
import { View, Text, Spinner } from 'native-base';
import PropTypes from 'prop-types';
import styles from '../styles/SpinningWheelStyle';

export default function SpinningWheel({ content }) {
  return (
    <View style={styles.spinnerView}>
      <Spinner color="gray" />
      <Text style={styles.spinnerText}>
        {`Loading ${content} for you...`}
      </Text>
    </View>
  );
}

SpinningWheel.propTypes = {
  content: PropTypes.string.isRequired,
};

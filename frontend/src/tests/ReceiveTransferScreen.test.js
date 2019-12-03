import React from 'react';
import renderer from 'react-test-renderer';
import ReceiveTransferScreen from '../screens/ReceiveTransferScreen';

describe('<ReceiveTransferScreen />', () => {
  it('render correctly', () => {
    const data = {
      depositId: 1,
      depositName: 'Main Account',
    };
    const navigation = {
      getParam: (id) => data[id],
    };
    const tree = renderer
      .create(<ReceiveTransferScreen navigation={navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

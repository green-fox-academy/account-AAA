import React from 'react';
import renderer from 'react-test-renderer';
import ReceiveTransferScreen from '../screens/ReceiveTransferScreen';

describe('<ReceiveTransferScreen />', () => {
  it('render correctly', () => {
    const data = {
      account: {
        id: 1,
        depositName: 'Main Account',
      },
    };
    const navigation = {
      getParam: (key) => data[key],
    };
    const tree = renderer
      .create(
        <ReceiveTransferScreen navigation={navigation} userId={123} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

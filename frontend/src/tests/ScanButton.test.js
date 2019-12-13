import React from 'react';
import renderer from 'react-test-renderer';
import ScanButton from '../components/TransferScreenComponents/ScanButton';

describe('<ScanButton />', () => {
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
        <ScanButton navigation={navigation} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

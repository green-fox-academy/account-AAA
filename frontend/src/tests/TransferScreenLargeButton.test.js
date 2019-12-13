import React from 'react';
import renderer from 'react-test-renderer';
import TransferScreenLargeButton from '../components/TransferScreenComponents/TransferScreenLargeButton';

describe('<TransferScreenLargeButton />', () => {
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
    const screenName = 'test';
    const buttonName = 'test';
    const setSender = () => null;
    const tree = renderer
      .create(
        <TransferScreenLargeButton
          navigation={navigation}
          screenName={screenName}
          buttonName={buttonName}
          setSender={setSender}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import TransferAmountInput from '../components/TransferScreenComponents/TransferAmountInput';

describe('<TransferAmountInput />', () => {
  it('render correctly', () => {
    const testForThisTest = () => null;
    const tree = renderer
      .create(
        <TransferAmountInput transferAccountAmount={testForThisTest} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

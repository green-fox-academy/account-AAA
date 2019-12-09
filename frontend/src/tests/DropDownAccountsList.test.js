import React from 'react';
import renderer from 'react-test-renderer';
import DropDownAccountsList from '../components/TransferScreenComponents/DropDownAccountsList';

describe('<DropDownAccountsList />', () => {
  it('render correctly', () => {
    const accounts = [{ id: 1, depositName: 'Main Account' }, { id: 2, depositName: 'Saving Account' }];
    const transferAccountSelection = () => null;
    const tree = renderer
      .create(
        <DropDownAccountsList
          accounts={accounts}
          transferAccountSelection={transferAccountSelection}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

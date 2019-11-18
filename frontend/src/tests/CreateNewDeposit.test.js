import React from 'react';
import renderer from 'react-test-renderer';

import CreateNewDeposit from '../components/CreateNewDeposit';

describe('<CreateNewDeposit />', () => {
  it('has 3 child', () => {
    const tree = renderer.create(<CreateNewDeposit />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});

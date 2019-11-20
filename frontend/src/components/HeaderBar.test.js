import React from 'react';
import renderer from 'react-test-renderer';

import HeaderBar from './HeaderBar';

describe('<HeaderBar />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<HeaderBar />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

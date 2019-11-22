import React from 'react';
import renderer from 'react-test-renderer';

import AccountCard from './AccountCard';

describe('<AccountCard />', () => {
  it('has 3 child', () => {
    const tree = renderer.create(<AccountCard />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});

import React from 'react';
import renderer from 'react-test-renderer';

import HeaderBar from '../components/HeaderBar';

describe('<HeaderBar />', () => {
  it('has 1 child', () => {
    const navigation = { navigate: jest.fn() };
    const tree = renderer.create(<HeaderBar pageTitle="Accounts" navigation={navigation} />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

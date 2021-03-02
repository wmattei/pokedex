import * as React from 'react';
import { create } from 'react-test-renderer';
import StatCard from '.';

describe('StatCard', () => {
  it('Renders correctly', () => {
    const tree = create(<StatCard label="HP" value={4} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

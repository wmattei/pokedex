import * as React from 'react';
import { create } from 'react-test-renderer';
import Chips from '.';

describe('Chips', () => {
  it('Renders correctly', () => {
    const chips = [
      { id: 'chip1', label: 'Chip1' },
      { id: 'chip2', label: 'Chip2' },
    ];
    const tree = create(<Chips chips={chips} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

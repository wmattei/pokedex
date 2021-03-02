import * as React from 'react';
import { create } from 'react-test-renderer';
import PokemonTypes from '.';

describe('PokemonTypes', () => {
  it('Renders correctly', () => {
    const types = ['Poison'];
    const tree = create(<PokemonTypes pokemonTypes={types} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

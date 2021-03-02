import * as React from 'react';
import { create } from 'react-test-renderer';
import PokemonCard from '.';
import { IPokemon } from '../../../types/pokemon';

describe('PokemonCard', () => {
  it('Renders correctly', () => {
    const pokemon: IPokemon = {
      id: 1,
      name: 'Bulbasaur',
    };
    const tree = create(<PokemonCard pokemon={pokemon} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

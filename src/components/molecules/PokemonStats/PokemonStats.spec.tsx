import * as React from 'react';
import { create } from 'react-test-renderer';
import PokemonStats from '.';

describe('PokemonsStats', () => {
  it('Renders correctly', () => {
    const stats = {
      attack: 1,
      defense: 1,
      hp: 1,
      specialAttack: 1,
      specialDefense: 1,
      speed: 1,
    };
    const tree = create(<PokemonStats stats={stats} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import * as React from 'react';
import { create } from 'react-test-renderer';
import PokemonsHeroHeader from '.';

describe('PokemonsHeroHeader', () => {
  it('Renders correctly', () => {
    const tree = create(
      <PokemonsHeroHeader
        imageUrl={'https://pokeres.bastionbot.org/images/pokemon/1.png'}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
